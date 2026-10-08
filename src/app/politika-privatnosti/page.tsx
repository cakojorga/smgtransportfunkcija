import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { BASE_OPEN_GRAPH, OG_IMAGE, PRIVACY_PATH } from "@/lib/site";

const title = "Politika privatnosti | SMG Transport";
const description =
  "Politika privatnosti SMG Transport - kako prikupljamo, koristimo i štitimo vaše lične podatke.";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description,
  alternates: { canonical: PRIVACY_PATH },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: PRIVACY_PATH,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
