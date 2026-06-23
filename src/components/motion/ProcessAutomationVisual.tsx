"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const nodes = [
  { id: "trigger", angle: -90 },
  { id: "process", angle: -18 },
  { id: "integrate", angle: 54 },
  { id: "deliver", angle: 126 },
  { id: "scale", angle: 198 },
] as const;

const radius = 72;
const center = 100;

function polarToCartesian(angleDeg: number, r = radius) {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: center + r * Math.cos(angleRad),
    y: center + r * Math.sin(angleRad),
  };
}

type ProcessAutomationVisualProps = {
  className?: string;
};

export function ProcessAutomationVisual({ className }: ProcessAutomationVisualProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-64 rounded-full border border-border bg-glass backdrop-blur-sm",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-accent/5 via-transparent to-accent-violet/5" />

      <svg viewBox="0 0 200 200" className="relative h-full w-full" fill="none">
        <defs>
          <linearGradient id="flow-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="orbit-ring" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="hub-glow">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#orbit-ring)"
          strokeWidth="1"
          strokeDasharray="6 10"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${center}px ${center}px` }}
        />

        <motion.circle
          cx={center}
          cy={center}
          r={radius - 18}
          stroke="rgba(45, 212, 191, 0.08)"
          strokeWidth="0.5"
          strokeDasharray="2 8"
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${center}px ${center}px` }}
        />

        {nodes.map((node, index) => {
          const { x, y } = polarToCartesian(node.angle);
          return (
            <g key={node.id}>
              <motion.line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="url(#flow-line)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ pathLength: 1, opacity: [0.2, 0.55, 0.2] }}
                transition={{
                  pathLength: { duration: 1.2, delay: index * 0.15, ease: "easeOut" },
                  opacity: { duration: 2.4, delay: index * 0.2, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              <motion.circle
                r="3"
                fill="#2dd4bf"
                initial={{ cx: center, cy: center, opacity: 0 }}
                animate={{
                  cx: [center, x, center],
                  cy: [center, y, center],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.8,
                  delay: index * 0.45,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              />

              <motion.g
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.65, 1, 0.65] }}
                transition={{
                  duration: 2.2,
                  delay: index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              >
                <circle cx={x} cy={y} r="11" fill="rgba(12, 16, 25, 0.9)" stroke="rgba(45, 212, 191, 0.35)" />
                <circle cx={x} cy={y} r="3" fill="#5eead4" opacity="0.9" />
              </motion.g>
            </g>
          );
        })}

        <circle cx={center} cy={center} r="28" fill="url(#hub-glow)" />
        <motion.circle
          cx={center}
          cy={center}
          r="16"
          fill="rgba(12, 16, 25, 0.95)"
          stroke="rgba(45, 212, 191, 0.5)"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${center}px ${center}px` }}
        />
        <motion.circle
          cx={center}
          cy={center}
          r="5"
          fill="#2dd4bf"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
