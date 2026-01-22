import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"] });

export const metadata = {
  title: "AccuraCore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={outfit.className}>
        {/* sora = for headings */}
        <div className={sora.className}>{children}</div>
      </body>
    </html>
  );
}
