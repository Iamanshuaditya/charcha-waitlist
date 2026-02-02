import React from 'react';

export default function GeometricBackground() {
    return (
        <div className="geometric-background">
            <svg
                className="geometric-pattern"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <pattern
                        id="geoPattern"
                        width="120"
                        height="240"
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Background */}
                        <rect width="120" height="240" fill="#0f2f2f" />

                        {/* Geometry */}
                        <g
                            stroke="#d8c3a5"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {/* Diamond */}
                            <path d="M60 40 L90 80 L60 120 L30 80 Z" />

                            {/* Vertical connectors */}
                            <path d="M60 0 L60 40" />
                            <path d="M60 120 L60 160" />

                            {/* Chevron shapes */}
                            <path d="M30 160 L60 200 L90 160" />
                            <path d="M30 200 L60 240 L90 200" />
                        </g>
                    </pattern>
                </defs>

                <rect width="100%" height="100%" fill="url(#geoPattern)" />
            </svg>
            {/* Gradient Overlay */}
            <div className="geometric-overlay" />
        </div>
    );
}
