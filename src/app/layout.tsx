import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J & Son Paving LLC — Professional Asphalt & Paving | Anne Arundel County, MD',
  description:
    'J & Son Paving LLC delivers premium asphalt driveway paving, commercial parking lots, sealcoating, and custom paving solutions throughout Anne Arundel County, Maryland.',
  keywords: 'asphalt paving, driveway paving, sealcoating, commercial parking lot, Anne Arundel County, Maryland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
