"use client";
import Script from "next/script";

export default function AppBubbleChat() {
  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2025/06/24/15/20250624155603-BZFQPBVH.js"
        strategy="afterInteractive"
      />
    </>
  );
}
