import './globals.css';

export const metadata = {
  title: 'UNLTD Academy',
  description: 'Training platform for coaches and athletes'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
