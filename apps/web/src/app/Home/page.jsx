export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">🎤 FastMic</h1>
      <p className="mt-2 text-gray-700">Zamień swój telefon w mikrofon. Transkrypcja na żywo. Demo poniżej.</p>
      <a
        href="/FastMic_user_demo/event"
        className="inline-block mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Zobacz Demo
      </a>
    </main>
  );
}
