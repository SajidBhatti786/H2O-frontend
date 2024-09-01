import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "./context/AuthContext";
const inter = Inter({ subsets: ["latin"] });
import Header from "./componets/header/Header";

export const metadata = {
  title: "H2O - Web Page ",
  description: "H2O - Web Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
