import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'AquaVision | Marinova',
  description: 'Mobile-first marine data platform demo',
  manifest: '/manifest.json'
}

export const viewport = {
  themeColor: '#007BFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {children}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {});
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
