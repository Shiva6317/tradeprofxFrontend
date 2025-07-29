import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TradingChartProps {
  symbol?: string;
}

export default function TradingChart({ symbol = "XAUUSD" }: TradingChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSymbol, setCurrentSymbol] = useState(symbol);

  const symbols = [
    { symbol: "XAUUSD", name: "Gold" },
    { symbol: "EURUSD", name: "EUR/USD" },
    { symbol: "BTCUSD", name: "Bitcoin" },
    { symbol: "US500", name: "S&P 500" }
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: currentSymbol,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_chart"
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [currentSymbol]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Trading Chart</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {symbols.map((sym) => (
            <Button
              key={sym.symbol}
              variant={currentSymbol === sym.symbol ? "default" : "outline"}
              onClick={() => setCurrentSymbol(sym.symbol)}
              className={currentSymbol === sym.symbol ? "bg-blue-600 text-white" : ""}
            >
              {sym.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-96 rounded-lg overflow-hidden">
        <div className="tradingview-widget-container h-full" ref={containerRef}>
          <div id="tradingview_chart" className="h-full"></div>
        </div>
      </div>
    </div>
  );
}
