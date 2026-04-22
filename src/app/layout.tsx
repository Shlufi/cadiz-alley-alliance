import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cadiz Alley Alliance | Revitalizing Venice's Historic Alley",
  description: "Join the movement to rehabilitate Cadiz Alley in Venice, Los Angeles. Support historic preservation and community revitalization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="nav container">
            <Link href="/" className="logo">
              Cadiz Alley Alliance
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/action">Take Action</Link>
              <Link href="/plan">Master Plan</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Cadiz Alley Alliance. All rights reserved.</p>
            <p>Venice, Los Angeles, California</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
