import EmbedFrame from "../../../components/EmbedFrame";

const MEETING_SPACE_FORM_URL =
  "https://41g0pl.share-na2.hsforms.com/2NG_AWrGHSFyje8AkhMIGXA";

const LAB_REQUEST_FORM_URL =
  "https://41g0pl.share-na2.hsforms.com/2YR_MdSzfTzWybbNFPHzbag";

const CALENDAR_EMBED_URL =
  process.env.NEXT_PUBLIC_SIM360_CALENDAR_EMBED_URL || "";

export default function Sim360BookingPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <section className="cardStrong">
        <h1 className="h1" style={{ fontSize: 34 }}>
          Book / Request
        </h1>
        <p className="p" style={{ maxWidth: 760 }}>
          Start with availability. Then submit the request that matches your use case. We’ll review
          and confirm details before anything is finalized.
        </p>
        <div className="small">
          Please do not submit patient-identifying information through public forms.
        </div>
      </section>

      <section className="card">
        <h2 className="h2">Availability</h2>
        <p className="p">
          Embed your calendar booking tool here (Calendly, HubSpot Meetings, Google appointment
          schedules, etc.). Set the URL via{" "}
          <code style={{ color: "rgba(255,255,255,0.85)" }}>
            NEXT_PUBLIC_SIM360_CALENDAR_EMBED_URL
          </code>
          .
        </p>

        {CALENDAR_EMBED_URL ? (
          <EmbedFrame title="Sim360 Calendar Booking" src={CALENDAR_EMBED_URL} height={760} />
        ) : (
          <div className="card" style={{ padding: 16 }}>
            <div className="sectionTitle">Calendar embed not configured</div>
            <div className="small">
              Add <strong>NEXT_PUBLIC_SIM360_CALENDAR_EMBED_URL</strong> to your environment and reload.
              <br />
              Example: a Calendly embed URL or HubSpot meetings embed URL.
            </div>
          </div>
        )}
      </section>

      <section className="grid2">
        <div className="card">
          <h2 className="h2">Request meeting / event space</h2>
          <p className="p">
            Use this for classrooms, workshops, planning meetings, and non-lab events.
          </p>
          <EmbedFrame title="Meeting Space Request Form" src={MEETING_SPACE_FORM_URL} height={820} />
        </div>

        <div className="card">
          <h2 className="h2">Request simulation lab</h2>
          <p className="p">
            Use this for simulation sessions, skills labs, scenarios, and sessions requiring
            specialized setups.
          </p>
          <EmbedFrame title="Sim360 Lab Request Form" src={LAB_REQUEST_FORM_URL} height={820} />
        </div>
      </section>
    </div>
  );
}
