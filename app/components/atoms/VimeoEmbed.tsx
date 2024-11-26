export default function VimeoEmbed(props: {
  videoId: string;
  title: string;
  className?: string;
}) {
  return (
    <>
      <div
        className={`${props.className ?? ""}`}
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <iframe
          suppressHydrationWarning
          src={`https://player.vimeo.com/video/${props.videoId}?transparent=0&muted=1&autoplay=1&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={props.title}
        />
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}
