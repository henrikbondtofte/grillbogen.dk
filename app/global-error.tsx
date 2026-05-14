"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="da">
      <body>
        <div style={{ padding: "4rem 2rem", textAlign: "center", fontFamily: "Georgia, serif" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Noget gik galt</h1>
          <p style={{ marginBottom: "2rem" }}>Der opstod en uventet fejl. Prøv at genindlæse siden.</p>
          <button
            onClick={reset}
            style={{
              padding: "0.75rem 1.5rem",
              background: "#7a1f1f",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Prøv igen
          </button>
        </div>
      </body>
    </html>
  );
}
