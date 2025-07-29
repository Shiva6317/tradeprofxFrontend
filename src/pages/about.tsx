import Navigation from "@/components/navigation";
import TickerTape from "@/components/ticker-tape";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Globe, TrendingUp, Zap } from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Most Awarded Broker",
      description: "Recognized globally for excellence in trading services"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "10.3M+ Trades Executed",
      description: "Millions of successful trades executed on our platform"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Zero Rejections",
      description: "No trade rejections or requotes - guaranteed execution"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Global Presence",
      description: "Serving traders worldwide with 24/7 support"
    }
  ];

  const values = [
    {
      title: "Transparency",
      description: "We believe in clear, honest communication with all our clients",
      icon: "🔍"
    },
    {
      title: "Innovation",
      description: "Continuously improving our technology and services",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "Striving for the highest standards in everything we do",
      icon: "⭐"
    },
    {
      title: "Trust",
      description: "Building long-term relationships based on reliability",
      icon: "🤝"
    }
  ];

  const team = [
    {
      name: "John Smith",
      position: "Chief Executive Officer",
      experience: "15+ years in financial markets",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      experience: "12+ years in fintech development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Michael Chen",
      position: "Head of Trading",
      experience: "20+ years trading experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <TickerTape />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Premium Pro FX</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We are a leading online trading platform committed to providing superior trading conditions 
              and exceptional service to traders worldwide.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Professional trading office" 
              className="mx-auto rounded-xl shadow-2xl opacity-90" 
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, Premium Pro FX emerged from a vision to democratize financial markets 
                and provide traders with the tools, technology, and support they need to succeed. 
                Our founders, experienced professionals from the financial industry, recognized the 
                need for a broker that truly puts clients first.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we serve thousands of traders globally, offering access to over 1,400 trading 
                instruments across multiple asset classes. Our commitment to transparency, innovation, 
                and excellence has earned us recognition as one of the most awarded brokers in the industry.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800">Regulated</Badge>
                <Badge className="bg-green-100 text-green-800">Award-Winning</Badge>
                <Badge className="bg-purple-100 text-purple-800">Global</Badge>
                <Badge className="bg-yellow-100 text-yellow-800">Innovative</Badge>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Trading team collaboration" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600">Recognition and milestones that define our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600">Meet the experts leading Premium Pro FX</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To empower traders worldwide by providing superior trading conditions, cutting-edge 
                technology, and exceptional support. We strive to make financial markets accessible 
                to everyone, regardless of their experience level or account size.
              </p>
              <p className="text-gray-600">
                Every client receives the same excellent trading conditions and personalized attention 
                that has made us a trusted partner for thousands of traders globally.
              </p>
            </Card>
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To be the world's leading online trading platform, recognized for innovation, 
                reliability, and client satisfaction. We envision a future where advanced trading 
                technology is accessible to all, enabling financial freedom and success.
              </p>
              <p className="text-gray-600">
                Through continuous innovation and unwavering commitment to our clients, we aim to 
                set new standards in the online trading industry.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regulatory & Compliance</h2>
            <p className="text-gray-600">Your security and trust are our top priorities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Licensed & Regulated</h3>
              <p className="text-gray-600 mb-4">
                Premium Pro FX operates under strict regulatory oversight, ensuring the highest 
                standards of financial conduct and client protection.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Segregated client funds</li>
                <li>• Investor compensation schemes</li>
                <li>• Regular audits and compliance checks</li>
                <li>• Transparent pricing and execution</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Measures</h3>
              <p className="text-gray-600 mb-4">
                We employ bank-level security measures to protect your funds and personal information.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 256-bit SSL encryption</li>
                <li>• Multi-factor authentication</li>
                <li>• Regular security assessments</li>
                <li>• 24/7 monitoring systems</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Premium Pro FX Family</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference that award-winning service and superior trading conditions can make
          </p>
          <Button className="bg-white text-blue-800 px-8 py-4 text-lg font-semibold hover:bg-gray-100">
            Start Trading Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
