export default function NotFound() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600">404</h1>
      <p className="text-gray-600 mt-2">Nie znaleziono strony.</p>
      <a href="/FastMic_user_demo" className="text-blue-500 underline mt-4 inline-block">
        Wróć na stronę główną
      </a>
    </main>
  );
}
