import Navigation from "@/components/navigation";
import TickerTape from "@/components/ticker-tape";
import TradingChart from "@/components/trading-chart";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Tablet, Globe, Download, Zap, Shield, TrendingUp } from "lucide-react";

export default function Platform() {
  const platforms = [
    {
      name: "Windows Desktop",
      icon: <Monitor className="w-8 h-8" />,
      description: "Full-featured desktop application for Windows",
      features: ["Advanced charting", "Expert advisors", "One-click trading", "Real-time quotes"]
    },
    {
      name: "Web Platform",
      icon: <Globe className="w-8 h-8" />,
      description: "Trade directly from your browser - no download required",
      features: ["Cross-platform", "Real-time trading", "Advanced tools", "Instant access"]
    },
    {
      name: "Mobile Apps",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Trade on the go with our mobile applications",
      features: ["iOS & Android", "Push notifications", "Touch ID", "Mobile charts"]
    },
    {
      name: "Tablet Trading",
      icon: <Tablet className="w-8 h-8" />,
      description: "Optimized interface for tablet devices",
      features: ["Large screen UI", "Touch interface", "Split view", "Landscape mode"]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Lightning Fast Execution",
      description: "Execute trades in milliseconds with our advanced order management system"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Bank-Level Security",
      description: "Your funds and data are protected with military-grade encryption"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Make informed decisions with our comprehensive market analysis tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <TickerTape />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">High-performance Trading Platform</h1>
              <p className="text-xl mb-8 text-blue-100">
                Experience professional trading with our award-winning platform available on all devices
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
                  <Download className="w-5 h-5 mr-2" />
                  Download Platform
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                  Try Web Platform
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Trading platform interface" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available on All Devices</h2>
            <p className="text-gray-600">Trade anywhere, anytime with our multi-platform solution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-blue-600">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  <div className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-1 mb-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Trading Chart */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Charting Tools</h2>
            <p className="text-gray-600">Professional-grade charts powered by TradingView</p>
          </div>
          <TradingChart />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
            <p className="text-gray-600">Built for traders, by traders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3">Real-time Market Data</h3>
              <p className="text-gray-600">Live streaming quotes and market depth information</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3">Advanced Order Types</h3>
              <p className="text-gray-600">Market, limit, stop, and trailing stop orders</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3">Risk Management</h3>
              <p className="text-gray-600">Built-in tools to help manage your trading risk</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3">Technical Analysis</h3>
              <p className="text-gray-600">30+ technical indicators and drawing tools</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3">Market News</h3>
              <p className="text-gray-600">Real-time financial news and market updates</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3">Multi-Asset Trading</h3>
              <p className="text-gray-600">Forex, stocks, indices, commodities, and crypto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://premiumprofx.com/wp-content/uploads/2025/06/logo.png" 
                alt="Trading Platform" 
                className="w-24 h-auto mb-8 filter brightness-0 invert" 
              />
              <h2 className="text-3xl font-bold mb-6">Download Our Platform</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get started with professional trading tools designed for success
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Monitor className="text-2xl" />
                  <span className="font-medium">Windows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-2xl" />
                  <span className="font-medium">Web Browser</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="text-2xl" />
                  <span className="font-medium">Android</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="text-2xl" />
                  <span className="font-medium">iOS</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-white text-blue-800 px-6 py-3 font-semibold hover:bg-gray-100">
                  <Download className="w-4 h-4 mr-2" />
                  Download for Windows
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 font-semibold">
                  Open Web Platform
                </Button>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="inline-block">
                <img 
                  src="https://oscarmarkets.com/wp-content/uploads/2024/12/app-1.png" 
                  alt="Google Play" 
                  className="h-16 w-auto" 
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="https://oscarmarkets.com/wp-content/uploads/2024/12/app-2.png" 
                  alt="App Store" 
                  className="h-16 w-auto" 
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
