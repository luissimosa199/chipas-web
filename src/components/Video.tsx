"use client";

import useTrackUserAgent from "@/hooks/useTrackUserAgent";
import React, { useState } from "react";

const Video = ({
  userAgentCookie,
}: {
  userAgentCookie: string | undefined;
}) => {
  const [muted, toggleMuted] = useState<boolean>(true);

  useTrackUserAgent(userAgentCookie);

  return (
    <video
      loop
      autoPlay
      muted={muted}
      onClick={() => {
        toggleMuted(!muted);
      }}
    >
      <source
        src="/assets/vid-main.mp4"
        type="video/mp4"
      />
      Tu dispositivo no soporta videos.
    </video>
  );
};

export default Video;
