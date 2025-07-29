import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, DollarSign, Shield, CheckCircle } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  accountType: string;
  userId?: string;
}

const accountTypeInfo = {
  demo: { minDeposit: 0, name: "Demo Account", description: "Practice trading with virtual money" },
  standard: { minDeposit: 100, name: "Standard Account", description: "Live trading with competitive spreads" },
  islamic: { minDeposit: 250, name: "Islamic Account", description: "Sharia-compliant trading" },
  vip: { minDeposit: 10000, name: "VIP Account", description: "Premium account with exclusive benefits" }
};

export default function PaymentModal({ isOpen, onClose, accountType, userId }: PaymentModalProps) {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const { data: currencyData } = useQuery({
    queryKey: ["/api/payments/supported-currencies"],
    enabled: isOpen
  });

  const createOrderMutation = useMutation({
    mutationFn: (data: any) => apiRequest("/api/payments/create-order", "POST", data),
    onSuccess: (orderData: any) => {
      handleRazorpayPayment(orderData);
    },
    onError: (error: any) => {
      toast({
        title: "Payment Failed",
        description: error.message || "Failed to create payment order",
        variant: "destructive",
      });
      setIsProcessing(false);
    },
  });

  const verifyPaymentMutation = useMutation({
    mutationFn: (data: any) => apiRequest("/api/payments/verify", "POST", data),
    onSuccess: () => {
      toast({
        title: "Payment Successful",
        description: "Your payment has been processed successfully!",
      });
      setIsProcessing(false);
      onClose();
    },
    onError: (error: any) => {
      toast({
        title: "Payment Verification Failed",
        description: error.message || "Payment verification failed",
        variant: "destructive",
      });
      setIsProcessing(false);
    },
  });

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRazorpayPayment = (orderData: any) => {
    const options = {
      key: orderData.key,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "TradePro FX",
      description: `${accountTypeInfo[accountType as keyof typeof accountTypeInfo]?.name} Account Deposit`,
      order_id: orderData.orderId,
      handler: function (response: any) {
        verifyPaymentMutation.mutate({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          userId: userId
        });
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      notes: {
        account_type: accountType
      },
      theme: {
        color: "#1e40af"
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = () => {
    if (!amount || !currency || !userId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const minAmount = currencyData?.minimumAmounts[currency] || 1;
    const accountMinDeposit = accountTypeInfo[accountType as keyof typeof accountTypeInfo]?.minDeposit || 0;
    
    if (accountType !== 'demo' && Number(amount) < Math.max(minAmount, accountMinDeposit)) {
      toast({
        title: "Invalid Amount",
        description: `Minimum deposit for ${accountTypeInfo[accountType as keyof typeof accountTypeInfo]?.name} is ${Math.max(minAmount, accountMinDeposit)} ${currency}`,
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    createOrderMutation.mutate({
      amount: Number(amount),
      currency,
      accountType,
      userId
    });
  };

  const accountInfo = accountTypeInfo[accountType as keyof typeof accountTypeInfo];
  const minAmount = currencyData?.minimumAmounts[currency] || 1;
  const requiredMinimum = Math.max(minAmount, accountInfo?.minDeposit || 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Fund Your Account
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Account Type Info */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{accountInfo?.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">{accountInfo?.description}</p>
              {accountType !== 'demo' && (
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span>Minimum deposit: {requiredMinimum} {currency}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {accountType === 'demo' ? (
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-blue-600 mx-auto" />
                  <h3 className="font-semibold text-blue-900">Demo Account Ready</h3>
                  <p className="text-sm text-blue-700">
                    Your demo account comes with $10,000 virtual funds to practice trading risk-free.
                  </p>
                  <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
                    Start Demo Trading
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Payment Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder={requiredMinimum.toString()}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min={requiredMinimum}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currencyData?.currencies?.map((curr: string) => (
                          <SelectItem key={curr} value={curr}>
                            {curr}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span>Secured by Razorpay • Supports 100+ countries</span>
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <Button
                onClick={handleSubmit}
                disabled={isProcessing || createOrderMutation.isPending}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isProcessing ? "Processing..." : `Pay ${amount ? `${amount} ${currency}` : "Now"}`}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By proceeding, you agree to our terms and conditions. 
                Your payment is secured with bank-level encryption.
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}