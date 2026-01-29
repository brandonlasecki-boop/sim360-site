import Link from "next/link";

export default function SiteHeaderComponent() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.85)",
        borderBottom: "2px solid rgba(125, 211, 252, 0.55)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
        }}
      >
        <Link
          href="/sim360"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            minWidth: 0,
          }}
        >
          <img
            src="/brand/Sim360-Logo.jpg"
            alt="Sim360"
            style={{
              height: 34,
              width: "auto",
              display: "block",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.06)",
            }}
          />
          <span style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>Sim360</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/sim360" style={{ color: "rgba(255,255,255,0.86)" }}>
            Overview
          </Link>
          <Link
            href="/sim360/book"
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(125, 211, 252, 0.45)",
              background: "rgba(125, 211, 252, 0.14)",
              fontWeight: 700,
            }}
          >
            Book / Request
          </Link>
        </nav>
      </div>
    </header>
  );
}
