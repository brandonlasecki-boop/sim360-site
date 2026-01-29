import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sim360",
  description:
    "Tech-enabled healthcare simulation space and operational support for training, education, and hosted programs.",
};

function InlineHeader() {
  return (
    <header
      style={{
        background: "transparent",
        paddingTop: 14, // keeps the “floating card” feel without sticking
      }}
    >
      <div className="container">
        <div
          className="headerCard"
          style={{
            padding: "22px 26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <Link href="/sim360" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/brand/Sim360-Logo.png"
              alt="Sim360 Clinical Advancement Center"
              className="logoMark"
              style={{
                height: "clamp(72px, 6vw, 96px)",
                width: "auto",
                display: "block",
                objectFit: "contain",
                borderRadius: 16,
              }}
            />
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/sim360" className="navLink">
              Overview
            </Link>

            {/* BOOK / REQUEST — COMING SOON */}
            <button
              type="button"
              className="btn btnPrimary"
              disabled
              aria-disabled="true"
              title="Coming soon"
              style={{ opacity: 0.55, cursor: "not-allowed" }}
            >
              Book / Request (Coming soon)
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function InlineFooter() {
  return (
    <footer
      style={{
        marginTop: 40,
        borderTop: "1px solid rgba(167, 139, 250, 0.35)",
        background: "rgba(0, 0, 0, 0.45)",
      }}
    >
      <div className="container" style={{ padding: "22px 20px" }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
          © {new Date().getFullYear()} Sim360 Clinical Advancement Center.
        </div>
        <div style={{ fontSize: 13, marginTop: 6, color: "rgba(255,255,255,0.65)" }}>
          Please do not submit patient-identifying information through public forms.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="appShell">
          <InlineHeader />
          <main className="main">{children}</main>
          <InlineFooter />
        </div>
      </body>
    </html>
  );
}
