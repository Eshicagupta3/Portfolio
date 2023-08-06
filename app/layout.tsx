import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Provider from "./Provider";
import { inter, roboto_mono } from "@/lib/style/font";

export const metadata: Metadata = {
  title: "Ishika Gupta",
  description: "Crafting Code and Dreams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=REM:wght@400..700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css"
        rel="stylesheet"
      />
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
