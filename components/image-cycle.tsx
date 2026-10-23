"use client";

import { useEffect, useState } from "react";

/**
 * Crossfades between two photos of the same assignment every 15 seconds
 * with a smooth 15s ease-in-out transition. With prefers-reduced-motion
 * the primary image stays static.
 */
export default function ImageCycle({
  src,
  altSrc,
  alt,
  width,
  height,
  className = "",
  wrapClassName = "",
  loading = "lazy",
}: {
  src: string;
  altSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  wrapClassName?: string;
  loading?: "lazy" | "eager";
}) {
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    if (!altSrc) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setShowAlt((v) => !v), 15000);
    return () => window.clearInterval(id);
  }, [altSrc]);

  const layer = (visible: boolean) =>
    `absolute inset-0 transition-opacity duration-[15000ms] ease-in-out ${
      visible ? "opacity-100" : "opacity-0"
    }`;

  return (
    <div className={`relative overflow-hidden ${wrapClassName}`}>
      <div className={layer(!showAlt)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          className={`h-full w-full object-cover ${className}`}
        />
      </div>
      {altSrc && (
        <div className={layer(showAlt)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={altSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            className={`h-full w-full object-cover ${className}`}
          />
        </div>
      )}
    </div>
  );
}
