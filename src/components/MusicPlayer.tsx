import music from "../assets/musica.mp3";
import { useRef } from "react";

function MusicPlayer() {
  let audioRef = useRef<HTMLAudioElement>(null);

  function handleMusic() {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }
  return (
    <>
      <button className="MusicPlayer" onClick={handleMusic}>
        M
      </button>
      <audio ref={audioRef} loop>
        <source src={music} />
        Hola
      </audio>
    </>
  );
}

export default MusicPlayer;
