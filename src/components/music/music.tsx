import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import { PulsatingDot } from "./PulsatingDot";

export function Music() {
  const [muted, setMuted] = useState(true);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "6%",
        left: "8%",
      }}
      onClick={() => setMuted(!muted)}
    >
      {/* <ReactAudioPlayer
        style={{ visibility: "hidden" }}
        volume={1.0}
        src="ido.mp3"
        autoPlay={true}
        controls={false}
        loop={true}
        muted={muted}
        onCanPlay={() => {
          console.log("onCanPlay");
        }}
        onEnded={() => {
          console.log("onEnded");
        }}
        onError={(e) => {
          console.log("e", e);
        }}
        onLoadedMetadata={(e) => {
          console.log("onLoadedMetadata", e);
        }}
      /> */}
      <audio
        src="/main/ido.mp3"
        controls={false}
        autoPlay={true}
        playsInline
        loop={true}
        style={{ width: 0, height: 0 }}
      />
      <PulsatingDot muted={muted} />
    </div>
  );
}
