import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <AppRouterCacheProvider>
      <body className={inter.className}>{children}</body>
      </AppRouterCacheProvider>
    </html>
  );
};

export default RootLayout;
