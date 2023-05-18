import "../styles/globals.css";

export const metadata = {
  title: "HACKERBASE",
  description: "Web3 decentralised event platform",
};

const rootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default rootLayout;
