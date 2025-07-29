import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import TickerTape from "@/components/ticker-tape";
import ForexCrossRates from "@/components/forex-cross-rates";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import type { TradingInstrument } from "@shared/schema";

export default function Markets() {
  const { data: instruments, isLoading } = useQuery<TradingInstrument[]>({
    queryKey: ["/api/trading-instruments"],
  });

  const { data: forexInstruments } = useQuery<TradingInstrument[]>({
    queryKey: ["/api/trading-instruments", "forex"],
  });

  const { data: indicesInstruments } = useQuery<TradingInstrument[]>({
    queryKey: ["/api/trading-instruments", "indices"],
  });

  const { data: commoditiesInstruments } = useQuery<TradingInstrument[]>({
    queryKey: ["/api/trading-instruments", "commodities"],
  });

  const { data: stocksInstruments } = useQuery<TradingInstrument[]>({
    queryKey: ["/api/trading-instruments", "stocks"],
  });

  const { data: cryptoInstruments } = useQuery<TradingInstrument[]>({
    queryKey: ["/api/trading-instruments", "crypto"],
  });

  const categoryCounts = {
    forex: forexInstruments?.length || 0,
    indices: indicesInstruments?.length || 0,
    commodities: commoditiesInstruments?.length || 0,
    stocks: stocksInstruments?.length || 0,
    crypto: cryptoInstruments?.length || 0,
  };

  const renderInstrumentCard = (instrument: TradingInstrument) => {
    const changePercent = parseFloat(instrument.changePercent || "0");
    const change = parseFloat(instrument.change || "0");
    const isPositive = change >= 0;

    return (
      <Card key={instrument.id} className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-lg">{instrument.symbol}</h3>
              <p className="text-sm text-gray-600">{instrument.name}</p>
            </div>
            <Badge variant={instrument.category === "forex" ? "default" : "secondary"}>
              {instrument.category.toUpperCase()}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">{instrument.price}</span>
              <div className={`flex items-center space-x-1 ${isPositive ? "text-green-600" : "text-red-600"}`}>
                <span>{isPositive ? "+" : ""}{change}</span>
                <span>({isPositive ? "+" : ""}{changePercent}%)</span>
              </div>
            </div>
            {instrument.volume && (
              <div className="text-sm text-gray-500">
                Volume: {instrument.volume.toLocaleString()}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading market data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <TickerTape />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Global Markets</h1>
            <p className="text-xl text-blue-100 mb-8">
              Access over 1,400+ trading instruments across multiple asset classes
            </p>
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100" 
              alt="Global market currencies" 
              className="mx-auto mb-8 rounded-lg opacity-60" 
            />
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Overview</h2>
            <p className="text-gray-600">Explore global markets at your fingertips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Forex CFDs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600 mb-2">{categoryCounts.forex} products</p>
                <p className="text-gray-600">Major, minor and exotic currency pairs</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Index CFDs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600 mb-2">{categoryCounts.indices} products</p>
                <p className="text-gray-600">Global stock market indices</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Commodities CFDs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600 mb-2">{categoryCounts.commodities} products</p>
                <p className="text-gray-600">Precious metals, energy, agriculture</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Stocks CFDs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600 mb-2">{categoryCounts.stocks} products</p>
                <p className="text-gray-600">Global equities and shares</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Cryptocurrency CFDs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600 mb-2">{categoryCounts.crypto} products</p>
                <p className="text-gray-600">Bitcoin, Ethereum, and altcoins</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trading Instruments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trading Instruments</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All Markets</TabsTrigger>
              <TabsTrigger value="forex">Forex</TabsTrigger>
              <TabsTrigger value="indices">Indices</TabsTrigger>
              <TabsTrigger value="commodities">Commodities</TabsTrigger>
              <TabsTrigger value="stocks">Stocks</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instruments?.map(renderInstrumentCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="forex" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {forexInstruments?.map(renderInstrumentCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="indices" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {indicesInstruments?.map(renderInstrumentCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="commodities" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commoditiesInstruments?.map(renderInstrumentCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="stocks" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stocksInstruments?.map(renderInstrumentCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="crypto" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cryptoInstruments?.map(renderInstrumentCard)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Forex Cross Rates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Forex Cross Rates</h2>
            <p className="text-gray-600">Real-time currency exchange rates</p>
          </div>
          <ForexCrossRates />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Access global markets with competitive spreads and superior execution
          </p>
          <Button className="bg-white text-blue-800 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
            Open Trading Account
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
