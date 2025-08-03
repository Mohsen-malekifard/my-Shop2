export const metadata = {
  title: "فروشگاه من",
  description: "فروشگاه ساده با Next.js و TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <main className="max-w-6xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}