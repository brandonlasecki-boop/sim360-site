type EmbedFrameProps = {
  title: string;
  src: string;
  height?: number;
};

export default function EmbedFrame({ title, src, height = 720 }: EmbedFrameProps) {
  return (
    <div className="embedFrame">
      <iframe
        title={title}
        src={src}
        width="100%"
        height={height}
        style={{ border: "none" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="clipboard-write; fullscreen"
      />
    </div>
  );
}
