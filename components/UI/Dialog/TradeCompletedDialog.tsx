"use client";

import { Check, X } from "lucide-react";

interface TradeCompletedDialogProps {
  onClose: () => void;
  isOpen: boolean;
}

export function TradeCompletedDialog({
  onClose,
  isOpen,
}: TradeCompletedDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl max-w-xs w-full relative shadow-lg p-8 mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
          <span className="sr-only">Close</span>
        </button>

        {/* Content */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <Check className="w-10 h-10 text-green-500" />
          </div>

          <h2 className="text-gray-700 text-2xl font-medium">
            Trade Completed
          </h2>
        </div>
      </div>
    </div>
  );
}
