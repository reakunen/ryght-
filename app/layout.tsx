import { Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type FC, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { flowbiteTheme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RyghtAI",
  description: "Ryght Stuff",
};

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={twMerge(
          "bg-gray-50 text-black dark:bg-gray-900 dark:text-white",
          inter.className,
        )}
      >
        <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
};

export default RootLayout;
