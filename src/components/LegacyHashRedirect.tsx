"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PRIVACY_PATH } from "@/lib/site";

// Stari linkovi (smgtransport.ba/#privacy-policy) vode na novu stranicu.
export default function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const redirectIfLegacy = () => {
      if (window.location.hash === "#privacy-policy") {
        router.replace(PRIVACY_PATH);
      }
    };

    redirectIfLegacy();
    window.addEventListener("hashchange", redirectIfLegacy);
    return () => window.removeEventListener("hashchange", redirectIfLegacy);
  }, [router]);

  return null;
}
