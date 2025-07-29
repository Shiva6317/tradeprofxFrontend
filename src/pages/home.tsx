import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import TickerTape from "@/components/ticker-tape";
import TradingChart from "@/components/trading-chart";
import ForexCrossRates from "@/components/forex-cross-rates";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { MarketStats, TradingInstrument } from "@shared/schema";

export default function Home() {
  const { data: marketStats } = useQuery<MarketStats[]>({
    queryKey: ["/api/market-stats"],
  });

  const { data: instruments } = useQuery<TradingInstrument[]>({
    queryKey: ["/api/trading-instruments"],
  });

  const featuredAssets = instruments?.slice(0, 5) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <TickerTape />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">The Most Awarded Broker for a Reason</h1>
              <p className="text-xl mb-8 text-blue-100">
                We offer a superior trading environment that puts traders in the best position to profit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg font-semibold">
                  Get a 20% Bonus on 1st Deposit
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                  Start Trading Now
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4">*Limited-Time Offer</p>
            </div>
            <div className="lg:justify-self-end">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional trading environment" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Asset Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Easy Access to 1,400+ Global Assets</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredAssets.map((asset) => (
              <Card key={asset.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {asset.symbol.slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{asset.symbol}</h3>
                  <p className="text-sm text-gray-600">{asset.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Offer */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get a 20% Bonus on First Deposit</h2>
          <p className="text-xl text-yellow-100 mb-8">
            Start your trading journey with extra capital. Limited time offer for new traders.
          </p>
          <Button className="bg-white text-yellow-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
            Claim Your Bonus
          </Button>
        </div>
      </section>

      {/* Trading Chart */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TradingChart />
        </div>
      </section>

      {/* Trading Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Results Are Proven in Numbers</h2>
            <p className="text-xl text-gray-600">
              Nobody does more to provide you with what you need to maximise your trading potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats?.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tight Spreads</h3>
                <p className="text-gray-600">Trade with spreads as low as 0.08 pips.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No hidden costs</h3>
                <p className="text-gray-600">Pay no swap fees and zero commission.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Superior Execution</h3>
                <p className="text-gray-600">Enjoy fair prices with no requotes or rejections.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Withdrawals</h3>
                <p className="text-gray-600">Get your funds easily and pay no fees.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Start Trading Now
            </Button>
          </div>
        </div>
      </section>

      {/* Forex Cross Rates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Forex Cross Rates</h2>
            <p className="text-gray-600">Real-time currency exchange rates</p>
          </div>
          <ForexCrossRates />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Every Trader Can Succeed With us</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful traders who trust Premium Pro FX for their trading journey.
          </p>
          <Button className="bg-white text-blue-800 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
            Start With Confidence
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
