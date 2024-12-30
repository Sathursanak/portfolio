import "./globals.css";
import TransitionProvider from "../components/transitionProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sathursana-portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Correct type for children
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
