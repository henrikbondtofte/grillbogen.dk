import Link from "next/link";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>404 - Siden findes ikke</h1>
      <p style={{ marginBottom: "2rem" }}>
        Den side du leder efter er flyttet eller eksisterer ikke længere.
      </p>
      <Link href="/" style={{ color: "var(--wine)", fontWeight: 600 }}>
        ← Tilbage til forsiden
      </Link>
    </div>
  );
}
