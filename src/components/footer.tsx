import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/logo.svg" 
              alt="TradePro FX" 
              className="h-8 w-auto mb-4 filter brightness-0 invert" 
            />
            <p className="text-gray-400 mb-4">
              Every client, regardless of account size, gets access to the same excellent trading conditions
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/markets" className="text-gray-400 hover:text-white transition-colors">Markets</Link></li>
              <li><Link href="/platform" className="text-gray-400 hover:text-white transition-colors">Trading Platform</Link></li>
              <li><Link href="/account-types" className="text-gray-400 hover:text-white transition-colors">Account Types</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Markets</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Forex</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Indices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commodities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Stocks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cryptocurrency</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <div className="text-gray-400 space-y-2">
              <p><strong>Head Office:</strong> 742 Great Horton Road, Bradford, England, BD74EE</p>
              <p><strong>Branch office:</strong> Office Number 3524, 35th floor Addax Tower, Al Reem Island, Abu Dhabi, UAE</p>
              <p>info@tradeprofx.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 — TradePro FX. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
