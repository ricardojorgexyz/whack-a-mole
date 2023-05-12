import React from 'react';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Layout } from '@/components/Layout';
import { SettingsProvider } from '@/hooks/useSettings';

export const metadata: Metadata = {
  title: 'Whack-a-mole',
  viewport: 'initial-scale=1, width=device-width',
};

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={roboto.className}>
          <SettingsProvider>
            <Layout>{children}</Layout>
          </SettingsProvider>
        </main>
      </body>
    </html>
  );
}
