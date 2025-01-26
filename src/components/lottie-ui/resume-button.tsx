"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import EyeAnimation from "../../lottie/eye/Eye.json";
import EyeLightAnimation from "../../lottie/eye/EyeLight.json";

const ResumeButton = () => {
  const { resolvedTheme } = useTheme();
  const isLightMode = resolvedTheme === "light";
  const sendIconContainer = useRef<HTMLDivElement | null>(null);

  async function getLottie() {
    const lot = await import("lottie-web");

    if (!sendIconContainer.current) return;
    lot.default.loadAnimation({
      name: "ResumeButton",
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isLightMode ? EyeLightAnimation : EyeAnimation,
      container: sendIconContainer.current,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }

  async function destroyLottie() {
    const lot = await import("lottie-web");
    lot.default.destroy("ResumeButton");
  }

  useEffect(() => {
    getLottie();

    return () => {
      destroyLottie();
    };
  }, [isLightMode, resolvedTheme]);

  const lottieHover = async () => {
    const lot = await import("lottie-web");
    lot.default.play("ResumeButton");
  };

  const lottieLeave = async () => {
    const lot = await import("lottie-web");
    lot.default.stop("ResumeButton");
  };

  return (
    <button
      onClick={() => window.open("/Krishnadev-Resume.pdf", "_blank")}
      className={`px-4 py-2 text-sm sm:text-base font-medium border border-gray-300 dark:border-gray-700 rounded-full transition-all duration-300 ease-in-out relative overflow-hidden group ${
        isLightMode
          ? "bg-gray-200 text-gray-900"
          : "dark:bg-zinc-800 dark:text-white"
      }`}
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
    >
      <div
        ref={sendIconContainer}
        className="absolute inset-0 h-full w-full opacity-50 group-hover:opacity-100 transition-opacity"
      />
      <span className="relative z-10">Resume</span>
    </button>
  );
};

export default ResumeButton;
