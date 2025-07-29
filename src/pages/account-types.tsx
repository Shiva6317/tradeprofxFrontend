import Navigation from "@/components/navigation";
import TickerTape from "@/components/ticker-tape";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { CheckCircle, DollarSign, Shield, Users, Zap, Star } from "lucide-react";

export default function AccountTypes() {
  const accountTypes = [
    {
      name: "Demo Account",
      price: "Free",
      description: "Perfect for beginners to practice trading without risk",
      features: [
        "Virtual $10,000 trading capital",
        "All trading instruments available",
        "Real-time market data",
        "Full platform functionality",
        "Risk-free environment",
        "Educational resources included",
        "No time limit",
        "Reset balance anytime"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-600",
      recommended: false,
      ctaText: "Start Demo Trading",
      ctaLink: "/signup"
    },
    {
      name: "Standard Live Account",
      price: "$100 minimum",
      description: "Best for retail traders with competitive spreads",
      features: [
        "Spreads from 0.8 pips",
        "No commission fees",
        "Leverage up to 1:500",
        "24/7 customer support",
        "Instant withdrawals",
        "Educational webinars",
        "Market analysis tools",
        "Risk management tools"
      ],
      icon: <DollarSign className="w-8 h-8" />,
      color: "bg-green-600",
      recommended: true,
      ctaText: "Open Live Account",
      ctaLink: "/signup"
    },
    {
      name: "Islamic Account",
      price: "$250 minimum",
      description: "Sharia-compliant trading with no swap fees",
      features: [
        "No overnight swap charges",
        "Halal trading conditions",
        "Same tight spreads",
        "All major instruments",
        "Dedicated Islamic support",
        "Sharia-compliant execution",
        "Instant account opening",
        "24/7 multilingual support"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "bg-purple-600",
      recommended: false,
      ctaText: "Open Islamic Account",
      ctaLink: "/signup"
    },
    {
      name: "VIP Account",
      price: "$10,000 minimum",
      description: "Premium account with exclusive benefits and lower spreads",
      features: [
        "Spreads from 0.2 pips",
        "Dedicated account manager",
        "Priority customer support",
        "Exclusive market insights",
        "Advanced trading tools",
        "Custom leverage options",
        "Quarterly performance reviews",
        "Exclusive trading signals"
      ],
      icon: <Star className="w-8 h-8" />,
      color: "bg-yellow-600",
      recommended: false,
      ctaText: "Apply for VIP",
      ctaLink: "/contact"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Lightning Fast Execution",
      description: "Execute trades in milliseconds with our advanced order management system and direct market access."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Regulated & Secure",
      description: "Your funds are protected with segregated accounts and we're fully regulated by top-tier authorities."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-600" />,
      title: "Competitive Pricing",
      description: "Enjoy tight spreads, low commissions, and transparent pricing with no hidden fees."
    }
  ];

  const tradingConditions = [
    { feature: "Minimum Deposit", demo: "Free", standard: "$100", islamic: "$250", vip: "$10,000" },
    { feature: "Spreads From", demo: "Market", standard: "0.8 pips", islamic: "0.8 pips", vip: "0.2 pips" },
    { feature: "Leverage", demo: "1:500", standard: "1:500", islamic: "1:400", vip: "Custom" },
    { feature: "Commission", demo: "None", standard: "None", islamic: "None", vip: "Negotiable" },
    { feature: "Swap Fees", demo: "Yes", standard: "Yes", islamic: "None", vip: "Yes" },
    { feature: "Account Manager", demo: "No", standard: "No", islamic: "No", vip: "Yes" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <TickerTape />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Choose Your Trading Account</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Find the perfect account type that matches your trading style and experience level. 
              All accounts come with the same professional platform and superior execution.
            </p>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Types</h2>
            <p className="text-gray-600">Choose the account that best fits your trading needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accountTypes.map((account, index) => (
              <Card key={index} className={`relative ${account.recommended ? 'ring-2 ring-blue-500' : ''} hover:shadow-lg transition-shadow`}>
                {account.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${account.color} rounded-full flex items-center justify-center text-white`}>
                    {account.icon}
                  </div>
                  <CardTitle className="text-xl">{account.name}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">{account.price}</div>
                  <p className="text-gray-600 text-sm">{account.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {account.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={account.ctaLink}>
                    <Button 
                      className={`w-full ${account.recommended ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'} text-white`}
                    >
                      {account.ctaText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Conditions Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trading Conditions Comparison</h2>
            <p className="text-gray-600">Compare features across all account types</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Demo</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Standard</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Islamic</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">VIP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tradingConditions.map((condition, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{condition.feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{condition.demo}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{condition.standard}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{condition.islamic}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{condition.vip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TradePro FX</h2>
            <p className="text-gray-600">Superior trading conditions across all account types</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can I switch between account types?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, you can upgrade your account type at any time. Contact our support team for assistance with account upgrades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How long does account opening take?</h3>
                <p className="text-gray-600 text-sm">
                  Demo accounts are opened instantly. Live accounts typically take 24-48 hours after document verification.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What documents do I need?</h3>
                <p className="text-gray-600 text-sm">
                  For live accounts, you'll need a valid ID (passport/driver's license) and proof of address (utility bill/bank statement).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Are there any hidden fees?</h3>
                <p className="text-gray-600 text-sm">
                  No hidden fees. Our pricing is transparent with clearly stated spreads and no commission on most account types.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of traders who trust TradePro FX for their trading success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button className="bg-white text-blue-800 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                Open Trading Account
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg font-semibold">
                Contact Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}