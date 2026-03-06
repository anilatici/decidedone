import React from 'react';

const Logo = ({ className = '', iconOnly = false, size = 32 }) => {
    return (
        <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logo-icon"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="44"
                    stroke="var(--accent)"
                    strokeWidth="8"
                />
                <path
                    d="M55 20L32 55H50L45 80L68 45H50L55 20Z"
                    fill="var(--accent)"
                />
            </svg>
            {!iconOnly && (
                <span className="brand-text" style={{
                    fontSize: `${size * 0.875}px`,
                    fontWeight: '600',
                    letterSpacing: '-0.03em',
                    color: 'var(--text-primary)',
                    fontFamily: "'DM Sans', sans-serif"
                }}>
                    decided<span style={{ color: 'var(--accent)' }}>.</span>
                </span>
            )}
        </div>
    );
};

export default Logo;
