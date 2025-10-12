'use client'

import { useState, useEffect } from "react";
import { AudioCard } from "@/components/AudioCard";
import { AudioPlayer } from "@/components/AudioPlayer";
import { audioFiles } from "@/data/audioFiles";

export default function Home() {
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);

  const handleAudioSelect = (audioId: string) => {
    setSelectedAudio(audioId);
  };

  const selectedAudioFile = audioFiles.find(a => a.id === selectedAudio);

  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center sm:items-start">
        <div>
          <h2 className="text-xl font-semibold mb-4">Training Library</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {audioFiles.map((audio) => (
              <AudioCard
                key={audio.id}
                id={audio.id}
                title={audio.title}
                duration={audio.duration}
                category={audio.category}
                isActive={selectedAudio === audio.id}
                onClick={() => handleAudioSelect(audio.id)}
              />
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
      {selectedAudioFile && (
          <AudioPlayer
            src={selectedAudioFile.src}
            title={selectedAudioFile.title}
          />
      )}
    </div>
  );
}
