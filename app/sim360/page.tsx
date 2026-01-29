import Link from "next/link";

export default function Sim360LandingPage() {
  return (
    <div className="container" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {/* HERO */}
      <section className="card heroWrap">
        <div className="heroGlow" />
        <div className="heroGlow2" />

        <div className="heroGrid">
          {/* LEFT: COPY */}
          <div style={{ maxWidth: 680 }}>
            <div className="kicker">
              <span
                aria-hidden
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "rgba(125,211,252,0.95)",
                  boxShadow: "0 0 0 4px rgba(125,211,252,0.12)",
                }}
              />
              Fixed location today • Expansion-ready
            </div>

            <h1 className="h1" style={{ marginTop: 14 }}>
              Tech-enabled clinical simulation space — built for repeatable training.
            </h1>

            <p className="p" style={{ maxWidth: 640 }}>
              Sim360 is a neutral, fully equipped environment for hospitals, academic programs, and
              industry partners to run skills labs, structured training, and hosted education
              sessions with operational consistency.
            </p>

            <div className="btnRow">
              <Link href="/sim360/book" className="btn btnPrimary">
                Book / Request
              </Link>
              <a href="#capabilities" className="btn">
                Explore capabilities
              </a>
            </div>

            <div style={{ marginTop: 16 }} className="small">
              Real facility • Real equipment • Operationally supported
            </div>
          </div>

          {/* RIGHT: VIDEO */}
          <div style={{ display: "flex", alignItems: "stretch" }}>
            <div className="heroMedia" style={{ width: "100%", aspectRatio: "16 / 10" }}>
              <video
                src="/video/sim360-hero.mp4"
                poster="/images/hero-poster.png"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "contain",
                  background: "rgba(0,0,0,0.28)",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <div className="heroMediaBadge">
                <span className="heroMediaBadgeDot" aria-hidden />
                Facility walkthrough
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="section">
        <div className="grid3">
          <div className="card sectionPad feature">
            <img
              src="/images/endoscopic-simulator.png"
              alt="Endoscopic simulation equipment"
              style={{ width: "100%", borderRadius: 12, marginBottom: 12 }}
            />
            <div className="featureTitle">Endoscopic simulation</div>
            <div className="featureText">
              High-fidelity endoscopic simulation equipment designed for skills training,
              repetition, and assessment in a controlled environment.
            </div>
          </div>

          <div className="card sectionPad feature">
            <img
              src="/images/debrief-control-room.png"
              alt="Debrief and observation control room"
              style={{ width: "100%", borderRadius: 12, marginBottom: 12 }}
            />
            <div className="featureTitle">Debrief & observation</div>
            <div className="featureText">
              Dedicated control and observation spaces supporting structured debrief, monitoring,
              and facilitated feedback.
            </div>
          </div>

          <div className="card sectionPad feature">
            <img
              src="/images/classroom-space.png"
              alt="Classroom and meeting space"
              style={{ width: "100%", borderRadius: 12, marginBottom: 12 }}
            />
            <div className="featureTitle">Classroom & meeting space</div>
            <div className="featureText">
              Flexible classroom configurations for teaching, planning sessions, and non-simulation
              training activities.
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="grid2">
          <div className="card sectionPad">
            <h2 className="h2">What you can run at Sim360</h2>
            <ul className="list">
              <li>Endoscopic and procedural skills training</li>
              <li>Scenario-based simulation sessions</li>
              <li>Academic cohort labs</li>
              <li>Vendor-hosted education programs</li>
            </ul>
            <div className="btnRow">
              <Link href="/sim360/book" className="btn btnPrimary">
                Check availability
              </Link>
            </div>
          </div>

          <div className="card sectionPad">
            <h2 className="h2">How booking works</h2>
            <ol className="list" style={{ paddingLeft: 18 }}>
              <li>Select availability on the calendar</li>
              <li>Submit a meeting or lab request</li>
              <li>We review and confirm logistics</li>
              <li>You run the session with Sim360 support</li>
            </ol>
            <div className="small" style={{ marginTop: 10 }}>
              Public requests are designed to avoid collecting patient-identifying information.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
