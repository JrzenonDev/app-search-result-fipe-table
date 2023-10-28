import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../libs/theme";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Tabela Fipe",
  description: "Consulte o valor de um veículo de forma gratuita",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
