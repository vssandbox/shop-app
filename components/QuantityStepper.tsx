"use client";

import { Unit } from "@/types";

interface QuantityStepperProps {
  value: number;
  unit: Unit;
  onChange: (value: number) => void;
}

export default function QuantityStepper({ value, unit, onChange }: QuantityStepperProps) {
  const step = unit === "lb" ? 0.5 : 1;
  const min = unit === "lb" ? 0.5 : 1;

  const displayValue = unit === "lb" ? `${value} lb` : value;

  const handleDecrement = () => {
    const newValue = value - step;
    if (newValue < min) {
      onChange(0); // Signal removal
    } else {
      onChange(newValue);
    }
  };

  const handleIncrement = () => {
    onChange(value + step);
  };

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full">
      <button
        onClick={handleDecrement}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-600 hover:bg-gray-50 active:bg-gray-100 font-bold"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-[3rem] text-center text-sm font-medium">
        {displayValue}
      </span>
      <button
        onClick={handleIncrement}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-600 hover:bg-gray-50 active:bg-gray-100 font-bold"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
