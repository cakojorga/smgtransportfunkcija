import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stranica nije pronađena",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="page-container">
        <h1>Stranica nije pronađena</h1>
        <p>
          Stranica koju tražite ne postoji ili je premještena.
        </p>
        <Link href="/" className="not-found-button">
          Nazad na početnu
        </Link>
      </div>
    </main>
  );
}
