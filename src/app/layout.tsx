import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../libs/theme";
import { ReduxProvider } from "@/redux/provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
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
        <ThemeProvider theme={theme}>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
