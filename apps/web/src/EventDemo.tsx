import { useEffect, useState } from 'react';

export default function EventDemo() {
  const [transcript, setTranscript] = useState<string[]>([]);

  useEffect(() => {
    // symulacja transkrypcji w demie
    const mockLines = [
      '👤 Jan: Witam wszystkich na dzisiejszym wydarzeniu!',
      '👤 Anna: Cześć Jan, dzięki za zaproszenie!',
      '👤 Jan: Dziś porozmawiamy o FastMic i transkrypcji w czasie rzeczywistym.',
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < mockLines.length) {
        setTranscript(prev => [...prev, mockLines[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎤 FastMic Demo — Live Transkrypcja</h1>
      <section className="bg-gray-100 p-4 rounded-lg shadow-md min-h-[200px]">
        {transcript.map((line, idx) => (
          <p key={idx} className="mb-2 text-gray-800">
            {line}
          </p>
        ))}
        {transcript.length === 0 && <p>Oczekiwanie na rozpoczęcie wydarzenia...</p>}
      </section>
    </main>
  );
}
