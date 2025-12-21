import React, { useEffect, useState } from "react";

const GeometricLogoLoader = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStep((prev) => (prev + 1) % 120);
    }, 20);
    return () => clearTimeout(timer);
  }, [animationStep]);

  // Hexagon points for the main shape
  const hexPoints = [
    { x: 50, y: 15 },
    { x: 70, y: 25 },
    { x: 70, y: 45 },
    { x: 50, y: 55 },
    { x: 30, y: 45 },
    { x: 30, y: 25 },
  ];

  // Inner triangle points
  const trianglePoints = [
    { x: 50, y: 27 },
    { x: 60, y: 43 },
    { x: 40, y: 43 },
  ];

  // Connection lines from center to vertices
  const centerPoint = { x: 50, y: 35 };

  const getPathProgress = (startStep, duration = 8) => {
    if (animationStep < startStep) return 0;
    if (animationStep > startStep + duration) return 1;
    return (animationStep - startStep) / duration;
  };

  const interpolate = (start, end, progress) => {
    return start + (end - start) * progress;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#040D12] z-50">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-teal-400"
            style={{ top: `${(i + 1) * 12.5}%` }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-px bg-teal-400"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>

      {/* Main Logo Container */}
      <div className="relative w-64 h-64">
        <svg className="w-full h-full" viewBox="0 0 100 70">
          <defs>
            {/* Gradient for lines */}
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5eead4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Strong glow filter */}
            <filter id="strongGlow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Draw hexagon edges progressively */}
          {hexPoints.map((point, idx) => {
            const nextPoint = hexPoints[(idx + 1) % hexPoints.length];
            const progress = getPathProgress(idx * 8, 8);

            if (progress === 0) return null;

            const x2 = interpolate(point.x, nextPoint.x, progress);
            const y2 = interpolate(point.y, nextPoint.y, progress);

            return (
              <g key={`hex-${idx}`}>
                <line
                  x1={point.x}
                  y1={point.y}
                  x2={x2}
                  y2={y2}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  filter="url(#glow)"
                />
                {progress < 1 && (
                  <circle
                    cx={x2}
                    cy={y2}
                    r="1"
                    fill="#5eead4"
                    filter="url(#strongGlow)"
                  >
                    <animate
                      attributeName="r"
                      values="1;1.5;1"
                      dur="0.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Draw lines from center to hexagon vertices */}
          {animationStep >= 48 &&
            hexPoints.map((point, idx) => {
              const progress = getPathProgress(48 + idx * 4, 4);

              if (progress === 0) return null;

              const x2 = interpolate(centerPoint.x, point.x, progress);
              const y2 = interpolate(centerPoint.y, point.y, progress);

              return (
                <line
                  key={`spoke-${idx}`}
                  x1={centerPoint.x}
                  y1={centerPoint.y}
                  x2={x2}
                  y2={y2}
                  stroke="#5eead4"
                  strokeWidth="0.3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              );
            })}

          {/* Draw inner triangle */}
          {animationStep >= 72 &&
            trianglePoints.map((point, idx) => {
              const nextPoint =
                trianglePoints[(idx + 1) % trianglePoints.length];
              const progress = getPathProgress(72 + idx * 6, 6);

              if (progress === 0) return null;

              const x2 = interpolate(point.x, nextPoint.x, progress);
              const y2 = interpolate(point.y, nextPoint.y, progress);

              return (
                <g key={`tri-${idx}`}>
                  <line
                    x1={point.x}
                    y1={point.y}
                    x2={x2}
                    y2={y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  {progress < 1 && (
                    <circle
                      cx={x2}
                      cy={y2}
                      r="1.2"
                      fill="#34d399"
                      filter="url(#strongGlow)"
                    >
                      <animate
                        attributeName="r"
                        values="1.2;1.8;1.2"
                        dur="0.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}

          {/* Hexagon vertices */}
          {hexPoints.map((point, idx) => {
            const appearStep = idx * 8 + 8;
            if (animationStep < appearStep) return null;

            return (
              <g key={`vertex-${idx}`}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="2"
                  fill="none"
                  stroke="#5eead4"
                  strokeWidth="0.3"
                  opacity="0"
                >
                  <animate
                    attributeName="r"
                    values="1.5;4;6"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin={`${idx * 0.3}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0.2;0"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin={`${idx * 0.3}s`}
                  />
                </circle>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="1.2"
                  fill="#5eead4"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="r"
                    values="1.2;1.5;1.2"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${idx * 0.2}s`}
                  />
                </circle>
              </g>
            );
          })}

          {/* Center point */}
          {animationStep >= 48 && (
            <g>
              <circle
                cx={centerPoint.x}
                cy={centerPoint.y}
                r="2"
                fill="none"
                stroke="#34d399"
                strokeWidth="0.4"
                opacity="0"
              >
                <animate
                  attributeName="r"
                  values="1;3;5"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.8;0.3;0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={centerPoint.x}
                cy={centerPoint.y}
                r="1.5"
                fill="#34d399"
                filter="url(#strongGlow)"
              >
                <animate
                  attributeName="r"
                  values="1.5;2;1.5"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          )}

          {/* Triangle vertices */}
          {animationStep >= 90 &&
            trianglePoints.map((point, idx) => (
              <g key={`tri-vertex-${idx}`}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="1"
                  fill="#34d399"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="r"
                    values="1;1.3;1"
                    dur="1.8s"
                    repeatCount="indefinite"
                    begin={`${idx * 0.3}s`}
                  />
                </circle>
              </g>
            ))}
        </svg>

        {/* Rotating outer ring */}
        {animationStep >= 90 && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              animation: "rotate 20s linear infinite",
            }}
          >
            <div className="w-80 h-80 border border-teal-400/20 rounded-full" />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.1;
          }
          50% {
            transform: translate(30px, -40px);
            opacity: 0.4;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default GeometricLogoLoader;
