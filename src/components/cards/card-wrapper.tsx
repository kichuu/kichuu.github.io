import { ReactNode } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

const shineMaskImage = `
  radial-gradient(
    circle at 50% 150%,
    white,
    transparent
  )`;

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function CardWrapper({ children, className }: CardWrapperProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={clsx(
        "group w-full h-full relative overflow-hidden rounded-3xl p-px",
        resolvedTheme === "dark" ? "dark:bg-white/10" : "bg-white/60",
        className
      )}
    >
      {resolvedTheme === "dark" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 50% 150%,
                  #208de52b,
                  transparent
                )`,
            }}
          />
          <div
            className="shine absolute -inset-2 opacity-40 blur-md z-10"
            style={{
              maskImage: shineMaskImage,
              WebkitMaskImage: shineMaskImage,
              backgroundImage: `
                conic-gradient(
                  from -45deg at 50% 150%,
                  transparent 0deg,
                  #10071e 15deg,
                  transparent 30deg,
                  #10071e 45deg,
                  transparent 60deg,
                  #10071e 75deg,
                  transparent 90deg
                )`,
            }}
          />

          <div className="absolute inset-px rounded-3xl bg-zinc-950/70 transition-colors duration-300 group-hover:bg-black/75" />
        </>
      )}
      {resolvedTheme === "light" && (
        <>
          <div className="absolute inset-px rounded-3xl bg-white/5 transition-colors duration-300 group-hover:bg-white/70" />

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(
                  80% 6% at 50% 103%,
                  #6f38fc44,
                  transparent
                )
              `,
            }}
          />
        </>
      )}

      {/* Ensure child content is always on top */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
