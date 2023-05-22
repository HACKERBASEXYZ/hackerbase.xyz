import "../styles/globals.css";
import { headers, cookies } from "next/headers";
import SupabaseProvider from "@/context/UserAuthenticationContext";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "HACKERBASE",
  description: "Web3 decentralised event platform",
};

const rootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <SupabaseProvider session={session}>
            <Navbar />
            {children}
            {/* <Footer /> */}
          </SupabaseProvider>
        </div>
      </body>
    </html>
  );
};

export default rootLayout;
