export default function SiteFooterComponent() {
  return (
    <footer
      style={{
        marginTop: 28,
        borderTop: "2px solid rgba(167, 139, 250, 0.50)",
        background: "rgba(0, 0, 0, 0.50)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "18px 20px",
        }}
      >
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
          © {new Date().getFullYear()} Sim360.
        </div>
        <div style={{ fontSize: 13, marginTop: 6, color: "rgba(255,255,255,0.65)" }}>
          Please do not submit patient-identifying information through public forms.
        </div>
      </div>
    </footer>
  );
}
