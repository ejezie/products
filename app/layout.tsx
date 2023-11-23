import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./_configs/provider";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product List App",
  description: "A next js assesment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
