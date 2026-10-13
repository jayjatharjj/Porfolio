import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Jay Jathar — Full Stack Engineer",
  description:
    "Jay Jathar — Full Stack Java engineer building cloud-native microservices and agentic AI workflows.",
};

export const viewport: Viewport = { themeColor: "#0b0b0f", colorScheme: "dark" };

// Marks the page as JS-enabled before first paint so scroll-reveal styles only
// apply when the reveal script can actually run (content stays visible otherwise).
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
