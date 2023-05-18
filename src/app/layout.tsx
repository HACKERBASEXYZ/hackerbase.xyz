import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
