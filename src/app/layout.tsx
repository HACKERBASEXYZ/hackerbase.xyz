import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "HACKERBASE",
  description: "Web3 decentralised event platform",
};

const rootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Navbar />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
};

export default rootLayout;
