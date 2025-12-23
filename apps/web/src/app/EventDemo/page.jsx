import { useEffect, useState } from 'react';

export default function EventDemo() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const mock = [
      '👤 Jan: Cześć! Witam wszystkich na wydarzeniu FastMic.',
      '👤 Anna: Dzień dobry! Super być tutaj.',
      '👤 Jan: Już za chwilę zaczynamy prezentację naszej aplikacji.',
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < mock.length) {
        setLines(prev => [...prev, mock[i++]]);
      } else {
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">🧪 Live Transkrypcja (Demo)</h2>
      <div className="bg-gray-100 rounded p-4 space-y-2">
        {lines.map((line, i) => (
          <p key={i} className="text-gray-800">{line}</p>
        ))}
        {lines.length === 0 && <p>Oczekiwanie na rozpoczęcie transkrypcji…</p>}
      </div>
    </main>
  );
}
