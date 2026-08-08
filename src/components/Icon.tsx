type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, string> = {
  fb: "M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6a22 22 0 0 0-2.4-.12c-2.4 0-4 1.45-4 4.12v2.3H7.6V14h2.7v8z",
  tw: "M18.9 3H21.6l-5.9 6.75L22.6 21h-5.4l-4.24-5.55L8.1 21H5.4l6.3-7.2L5 3h5.55l3.83 5.06zm-.95 16.4h1.5L9.6 4.5H8z",
  ig: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  in: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V9.96H5.73v8.38zM7.04 8.81a1.51 1.51 0 1 0 0-3.02 1.51 1.51 0 0 0 0 3.02m11.3 9.53v-4.6c0-2.43-1.3-3.56-3.03-3.56a2.6 2.6 0 0 0-2.36 1.3V9.96H10.3v8.38h2.62v-4.63c0-1.23.23-2.42 1.75-2.42 1.5 0 1.52 1.4 1.52 2.5v4.55z",
  yt: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8M10 15.02V8.98L15.2 12z",
  clock:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16m-.5 2v6l5 3 .8-1.3-4.3-2.5V6z",
  shieldOutline:
    "M12 2 4 5v6.1c0 5 3.4 9.7 8 10.9 4.6-1.2 8-5.9 8-10.9V5zm0 2.2 6 2.25v4.65c0 4-2.6 7.75-6 8.85-3.4-1.1-6-4.85-6-8.85V6.45z",
  phoneFill:
    "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1z",
  chevron: "m7.4 9.2 4.6 4.6 4.6-4.6L18 10.6l-6 6-6-6z",
  check: "M9.3 16.2 5.1 12l-1.4 1.4 5.6 5.6L20.3 7.6l-1.4-1.4z",
  arrowLeft: "M10.8 18.6 12.2 17.2 8 13h12v-2H8l4.2-4.2-1.4-1.4L4 12z",
  arrowRight: "M13.2 5.4 11.8 6.8l4.2 4.2H4v2h12l-4.2 4.2 1.4 1.4L20 12z",
  menu: "M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z",
  close:
    "m19 6.4-1.4-1.4-5.6 5.6L6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z",
  shield: "M12 2 4 5.2v6.3c0 5 3.4 9.6 8 10.5 4.6-.9 8-5.5 8-10.5V5.2z",
  headset:
    "M12 2a9 9 0 0 0-9 9v5.5A2.5 2.5 0 0 0 5.5 19H8v-8H5v-1a7 7 0 0 1 14 0v1h-3v8h2.6a1.6 1.6 0 0 1-1.6 1.4h-3.2v2H17a3.6 3.6 0 0 0 3.6-3.1A2.5 2.5 0 0 0 21 16.5V11a9 9 0 0 0-9-9",
  clipboard: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 1-2.4 1.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
  wrench: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.5 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",
  pipe: "M20 4H4v6h4v10h8V10h4V4zm-6 14h-4v-8H6V6h12v4h-4v8z",
  thumb: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
};

export function Icon({ name, className = "h-[1em] w-[1em]" }: IconProps) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`inline-block shrink-0 fill-current align-[-0.125em] ${className}`}
    >
      <path d={d} />
    </svg>
  );
}

/** Scalloped award rosette with a star — used by the "Quality" card. */
export function BadgeIcon({ className = "" }: { className?: string }) {
  const points = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    return `${(12 + Math.cos(a) * 7.6).toFixed(2)} ${(10.4 + Math.sin(a) * 7.6).toFixed(2)}`;
  });

  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`fill-current ${className}`}>
      <path d="m8.6 15.3-2.4 6.9 3.5-1.4 2 2.2 1.9-5.4zm6.8 0-5 2.3 1.9 5.4 2-2.2 3.5 1.4z" />
      <circle cx="12" cy="10.4" r="8.6" />
      {points.map((p, i) => (
        <circle key={i} cx={p.split(" ")[0]} cy={p.split(" ")[1]} r="1.5" />
      ))}
      <circle cx="12" cy="10.4" r="5.4" fill="#fff" />
      <path
        d="m12 6.4 1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Shield with an inset check, matching the verified feature badge. */
export function VerifiedIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M12 2.2 4.3 5.1v5.8c0 4.9 3.2 9.3 7.7 10.9 4.5-1.6 7.7-6 7.7-10.9V5.1L12 2.2Z"
      />
      <path
        fill="#fff"
        d="m10.7 15.8-3.2-3.2 1.4-1.4 1.8 1.8 4.5-4.5 1.4 1.4-5.9 5.9Z"
      />
    </svg>
  );
}

/** Plumbio logo mark — open swirl ring, inner droplet and a lower bowl arc. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* outer ring, left open at the top right */}
        <path d="M40.6 12.4A18.4 18.4 0 1 0 50 29.6" />
        {/* tail curling up and back off the ring */}
        <path d="M40.6 12.4c6.4 1.1 9.9 6.6 7.5 10.7-1.9 3.2-6.6 2.8-7.4-.7" />
        {/* inner droplet */}
        <path d="M38 21.9c4.4 3.9 4.6 10.3-.1 13.3-4.5 2.9-10.9 1.3-13.2-3.3-2.3-4.5.2-9.7 5-11.1 3.3-1 6.2-.3 8.3 1.1Z" />
        {/* lower bowl */}
        <path d="M20.8 40.6a11.4 11.4 0 0 0 22.4 0" />
      </g>
    </svg>
  );
}
