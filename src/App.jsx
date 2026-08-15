import React, { useState } from 'react';

// Practical 9: Temperature Converter Using Controlled Components
function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    
    if (value === '' || isNaN(value)) {
      setFahrenheit('');
    } else {
      const fVal = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(fVal.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    
    if (value === '' || isNaN(value)) {
      setCelsius('');
    } else {
      const cVal = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(cVal.toFixed(2));
    }
  };

  const handleReset = () => {
    setCelsius('');
    setFahrenheit('');
  };

  return (
    <div className="min-h-screen bg-[#faf7f5] flex flex-col items-center justify-center p-4 text-[#2c1d11] font-sans selection:bg-[#e8dfd5]">
      <div className="w-full max-w-md bg-white rounded-3xl border border-[#e8dfd5] shadow-xl shadow-[#4a3525]/5 p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-[#4a3525]/10">
        
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efe8] text-[#6e5340] border border-[#e2d7c9] text-xs font-semibold uppercase tracking-wider mb-4">
          Practical 9 • Controlled Components
        </div>

        <h1 className="text-3xl font-extrabold text-[#2c1d11] tracking-tight mb-1">
          Temperature Converter
        </h1>
        <p className="text-sm text-[#6e5c4e] font-medium mb-8">
          Celsius ↔ Fahrenheit conversion using <code className="text-[#5c402c] bg-[#f4efe8] px-1.5 py-0.5 rounded font-mono text-xs">useState</code>
        </p>

        {/* Temperature Converter Input Card */}
        <div className="space-y-5 text-left mb-6">
          {/* Celsius Controlled Input */}
          <div className="bg-[#faf7f5] p-4 rounded-2xl border border-[#eae1d5]">
            <label htmlFor="celsiusInput" className="block text-xs font-semibold text-[#3b2a1d] uppercase tracking-wider mb-2">
              Celsius (°C)
            </label>
            <div className="relative">
              <input
                id="celsiusInput"
                type="number"
                value={celsius}
                onChange={handleCelsiusChange}
                placeholder="Enter temperature in °C"
                className="w-full py-3 px-4 rounded-xl bg-white border border-[#e2d7c9] text-[#2c1d11] placeholder-[#a39081] font-mono text-base focus:outline-none focus:border-[#7a5c43] focus:ring-1 focus:ring-[#7a5c43] transition-all"
              />
              <span className="absolute right-4 top-3.5 text-xs font-bold text-[#8c7361] font-mono">°C</span>
            </div>
          </div>

          {/* Conversion Symbol Icon */}
          <div className="flex justify-center -my-2 text-[#8c6d53] text-lg font-bold">
            ⇄
          </div>

          {/* Fahrenheit Controlled Input */}
          <div className="bg-[#faf7f5] p-4 rounded-2xl border border-[#eae1d5]">
            <label htmlFor="fahrenheitInput" className="block text-xs font-semibold text-[#8c6d53] uppercase tracking-wider mb-2">
              Fahrenheit (°F)
            </label>
            <div className="relative">
              <input
                id="fahrenheitInput"
                type="number"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                placeholder="Enter temperature in °F"
                className="w-full py-3 px-4 rounded-xl bg-white border border-[#e2d7c9] text-[#2c1d11] placeholder-[#a39081] font-mono text-base focus:outline-none focus:border-[#7a5c43] focus:ring-1 focus:ring-[#7a5c43] transition-all"
              />
              <span className="absolute right-4 top-3.5 text-xs font-bold text-[#8c7361] font-mono">°F</span>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="w-full py-2.5 px-4 rounded-xl bg-[#f4efe8] hover:bg-[#eae1d5] text-[#3b2a1d] text-xs font-semibold border border-[#e2d7c9] mb-6 cursor-pointer"
        >
          Reset Inputs
        </button>

        {/* Conversion Formulas Card */}
        <div className="bg-[#faf7f5] p-4 rounded-xl border border-[#eae1d5] text-left text-xs space-y-1 text-[#7a6859]">
          <p className="font-semibold text-[#3b2a1d] uppercase tracking-wider text-[10px] mb-1">Conversion Formulas:</p>
          <p>• °F = (°C × 9/5) + 32</p>
          <p>• °C = (°F - 32) × 5/9</p>
        </div>

        {/* Viva Concept Explanation Box */}
        <div className="mt-8 pt-6 border-t border-[#eee7de] text-left bg-[#fcfaf7] -mx-8 -mb-8 p-6 rounded-b-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[#8c7361] mb-2">
            React Concepts Used:
          </p>
          <ul className="text-xs text-[#6e5c4e] space-y-1.5 list-disc list-inside">
            <li><strong className="text-[#3b2a1d]">Controlled Components:</strong> Input <code className="text-[#5c402c] font-mono bg-[#f4efe8] px-1.5 py-0.5 rounded">value</code> bound directly to React state</li>
            <li><strong className="text-[#3b2a1d]">Event Handling:</strong> <code className="text-[#5c402c] font-mono bg-[#f4efe8] px-1.5 py-0.5 rounded">onChange</code> updates state on user keystrokes</li>
            <li><strong className="text-[#3b2a1d]">Bidirectional Sync:</strong> Synchronized state calculation</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
