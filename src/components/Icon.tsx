import type { CSSProperties } from 'react';

const PATHS = {
  ig: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" /></>),
  yt: (<><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.5v5l4.5-2.5z" /></>),
  play: <path d="M8 5v14l11-7z" />,
  cal: (<><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  music: (<><path d="M9 18V6l10-2v12" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="16.5" cy="16" r="2.5" /></>),
  heart: <path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z" />,
  star: <path d="m12 3 2.7 5.6 6.1.8-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1L3.2 9.4l6.1-.8z" />,
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, style }: { name: IconName; style?: CSSProperties }) {
  return (
    <svg className="i" viewBox="0 0 24 24" style={style} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
