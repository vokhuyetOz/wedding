import React, { useRef, useState } from "react";

import { PulsatingDot } from "./PulsatingDot";

export function Music() {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "6%",
        left: "8%",
      }}
      onClick={() => {
        setMuted(!muted);
        audioRef.current?.play?.();
      }}
    >
      <audio
        muted={muted}
        ref={audioRef}
        src="/main/ido.mp3"
        controls={true}
        autoPlay={true}
        playsInline
        loop={true}
        style={{ width: 0, height: 0 }}
      />
      {/* <iframe
        src="/main/ido.mp3"
        allow="autoplay"
        id="audio"
        style={{
          width: 0,
          height: 0,
        }}
      ></iframe> */}

      <PulsatingDot muted={muted} />
    </div>
  );
}
