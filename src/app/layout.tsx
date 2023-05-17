import "../styles/globals.css";

export const metadata = {
  title: "HACKERBASE",
  description: "Web3 decentralised event platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
