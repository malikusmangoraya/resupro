import React from 'react';
import { BRAND } from './BRAND';

/**
 * The ResuPro mark: a gradient tile carrying An ascent document with fold, scores, growth arrow and seal.
 * Vector only - no raster assets - so it stays crisp at any size and
 * inherits the surrounding layout.
 */
export function BrandMark({ size = 34, className = '', title, ...rest }) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const gid = `bm-{uid}`;
  const label = title || BRAND.name;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
      {...rest}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BRAND.primary} />
          <stop offset="100%" stopColor={BRAND.secondary} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.3" fill={`url(#${gid})`} />
      <g transform="translate(14.0 14.0) scale(0.5625)">
        <polygon points='18,6 38,6 46,15 46,58 18,58' fill='#ffffff'/><polygon points='38,6 46,15 38,15' fill='#3e1f47'/><line x1='24' y1='28' x2='38' y2='28' stroke='#3e1f47' stroke-width='3' stroke-linecap='round'/><line x1='24' y1='37' x2='38' y2='37' stroke='#3e1f47' stroke-width='3' stroke-linecap='round'/><polygon points='24,44 36,44 33,40 33,48 31,46' fill='#ffffff'/><polygon points='38,48 42,48 42,52 38,52' fill='#ffffff'/>
      </g>
    </svg>
  );
}

export default BrandMark;
