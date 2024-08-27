import { Metadata } from 'next';
import ClientOnlyLayout from "@/components/ClientOnlyLayout";
import './globals.css';
import MiniDrawer from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Số hóa sách',
  description: 'Hệ thống số hóa sách',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientOnlyLayout>
          {children}
        </ClientOnlyLayout>
      </body>
    </html>
  );
}
