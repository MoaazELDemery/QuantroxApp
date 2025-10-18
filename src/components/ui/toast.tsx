import React, { useEffect, useState } from "react";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  onClose,
  duration = 4000,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation
    const showTimer = setTimeout(() => setIsVisible(true), 10);

    // Auto-close after duration
    const closeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once when component mounts

  const bgColors = {
    success: "#10b981",
    error: "#ef4444",
    info: "#3b82f6",
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-white" />,
    error: <AlertCircle className="w-5 h-5 text-white" />,
    info: <Info className="w-5 h-5 text-white" />,
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 flex items-center gap-3 text-white px-6 py-4 rounded-2xl shadow-2xl min-w-[320px] max-w-[500px] transition-all duration-300"
      style={{
        backgroundColor: bgColors[type],
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translate(-50%, -50%) scale(1)' 
          : 'translate(-50%, -50%) scale(0.9)',
        pointerEvents: 'auto',
        zIndex: 99999,
      }}
    >
      {icons[type]}
      <p className="flex-1 text-sm font-medium [font-family:'Satoshi-Medium',Helvetica]">
        {message}
      </p>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="hover:opacity-70 transition-opacity flex-shrink-0"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};
