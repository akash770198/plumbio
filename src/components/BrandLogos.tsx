/** Greyscale partner wordmarks for the "Trusted By" strip. */

export function BrandLogo({ type }: { type: string }) {
  switch (type) {
    case "homeadvisor":
      return (
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-[#4a4a4a]" aria-hidden>
            <path d="M12 3 2.5 11.2h2.6V21h5.1v-5.6h3.6V21h5.1v-9.8h2.6z" />
          </svg>
          <span className="text-[19px] font-bold tracking-tight text-[#3d3d3d]">
            Home<span className="font-normal text-[#6b6b6b]">Advisor</span>
          </span>
        </span>
      );

    case "yelp":
      return (
        <span className="flex items-end gap-[3px]">
          <span className="text-[26px] font-bold leading-none tracking-tight text-[#4a4a4a]">
            yelp
          </span>
          <svg viewBox="0 0 24 24" className="mb-[3px] h-[16px] w-[16px] fill-[#7c7c7c]" aria-hidden>
            <path d="M11 1.5 13.6 9 8.4 4.6zM4.2 8.9 11.4 11 4.6 13.7zm14.6 1.5 1.3 2.7-7.6.4zM10.8 14l-3.3 6.6-1-4.3zm2.1.4 5.7 4.2-3.9 2.1z" />
          </svg>
        </span>
      );

    case "google":
      return (
        <span className="text-[28px] font-normal leading-none tracking-[-0.01em] text-[#5f6368]">
          <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Google</span>
        </span>
      );

    case "angi":
      return (
        <span className="text-[26px] font-extrabold italic leading-none tracking-tight text-[#3d3d3d]">
          Angi
        </span>
      );

    case "thumbtack":
      return (
        <span className="text-[20px] font-semibold leading-none tracking-tight text-[#4a4a4a]">
          Thumbtack
        </span>
      );

    case "trustpilot":
      return (
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-[#3d3d3d]" aria-hidden>
            <path d="m12 2 2.9 6.5 7.1.7-5.3 4.7 1.5 6.9L12 17.3 5.8 20.8l1.5-6.9L2 9.2l7.1-.7z" />
          </svg>
          <span className="text-[20px] font-medium leading-none tracking-tight text-[#4a4a4a]">
            Trustpilot
          </span>
        </span>
      );

    default:
      return null;
  }
}
