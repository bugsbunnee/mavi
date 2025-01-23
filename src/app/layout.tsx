import React from "react";
import classNames from "classnames";
import type { Metadata } from "next";

import { cinzelDecorative, urbanist } from "@/utils/constants";
import { generateMetadata } from "@/utils/lib";

import PageWrapper from "@/components/ui/PageWrapper";
import ThemeProvider from "../components/providers/ThemeProvider";

import "@radix-ui/themes/styles.css";
import "./globals.css";
import "./theme-config.css";

export const metadata: Metadata = generateMetadata({
  title: "Victoria Anuri & Marcel (2025)",
  description: "Together forever",
});

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<Props>) => {
  return (
    <html lang="en" className={classNames([cinzelDecorative.variable, urbanist.variable])} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <PageWrapper>
            {children}
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
