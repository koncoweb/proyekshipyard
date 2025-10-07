'use client';
import React from 'react';

export type IconName =
  | 'home'
  | 'tools'
  | 'services'
  | 'compass'
  | 'phone'
  | 'folder'
  | 'note'
  | 'ship'
  | 'document'
  | 'wrench'
  | 'star';

type Props = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function Icon({ name, size = 20, strokeWidth = 1.8, className }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true
  };

  switch (name) {
    case 'home':
      return <svg {...common}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>;
    case 'tools':
      return <svg {...common}><path d="M21 20l-7-7"/><path d="M17 3a4 4 0 0 0-4 4c0 .7.17 1.35.47 1.93L5 17.4V21h3.6l8.47-8.47c.58.3 1.23.47 1.93.47a4 4 0 0 0 0-8Z"/></svg>;
    case 'services':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5"/>
          <rect x="14" y="14" width="7" height="7" rx="1.5"/>
        </svg>
      );
    case 'compass':
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2Z"/></svg>;
    case 'phone':
      return <svg {...common}><path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 5.18 2 2 0 0 1 4.11 3h2a20 20 0 0 0 .62 2.6 2 2 0 0 1-.45 2.11L7.1 10.9a16 16 0 0 0 6 6l1.46-1.17a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z"/></svg>;
    case 'folder':
      return <svg {...common}><path d="M3 6h5l2 2h11v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/></svg>;
    case 'note':
      return <svg {...common}><path d="M4 4h12a2 2 0 0 1 2 2v9l-5 5H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M14 14v6"/><path d="M14 14h6"/></svg>;
    case 'ship':
      return <svg {...common}><path d="M2 17l10-4 10 4"/><path d="M4 21h16"/><path d="M6 17v-7l6-3 6 3v7"/></svg>;
    case 'document':
      return <svg {...common}><path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v6h6"/></svg>;
    case 'wrench':
      return <svg {...common}><path d="M14.7 6.3a4 4 0 1 0-5.66 5.66l8.49 8.49a2 2 0 0 0 2.83-2.83l-8.49-8.49Z"/><path d="M8 8l-5 5"/></svg>;
    case 'star':
      return <svg {...common}><path d="M12 3l2.9 5.9 6.1.9-4.4 4.3 1 6-5.6-3-5.6 3 1-6L3 9.8l6.1-.9L12 3z"/></svg>;
  }
}

export default Icon;


