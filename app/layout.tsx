import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Script from 'next/script';
import Header from './components/Header';
import ScrollBar from './components/ScrollBar';
import BackToTop from './components/BackToTop';
import ScrollHeader from './components/ScrollHeader';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
const playfair = Playfair_Display({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://polebarndirectory.com'),
  title: 'Pole Barn Directory — Find Builders, Compare Costs, Browse Plans',
  description: 'Your starting point for pole barn and barndominium projects. Compare 2,100+ builders, get 2026 cost estimates, browse floor plans, and explore financing options.',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Pole Barn Directory',
    title: 'Pole Barn Directory — Find Builders, Compare Costs, Browse Plans',
    description: 'Your starting point for pole barn and barndominium projects. Compare 2,100+ builders, get 2026 cost estimates, browse floor plans, and explore financing options.',
    url: 'https://polebarndirectory.com',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C1917',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} textured-bg`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6Z7FMGQNCV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6Z7FMGQNCV');
          `}
        </Script>
        <ScrollHeader />
        <ScrollBar />
        <Header />
        
        <main>
          {children}
        </main>

        <BackToTop />

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand-col">
                <div className="footer-brand">
                  <span style={{color: 'var(--copper)'}}>Pole Barn</span> Directory
                </div>
                <div className="footer-tagline">Your trusted launchpad for pole barn and barndominium projects since 2014.</div>
                <a href="https://polebarnfinder.com" target="_blank" rel="noopener" className="powered-by">
                  Powered by PoleBarnFinder.com
                </a>
              </div>
              
              <div className="footer-links-col">
                <h4 className="footer-heading">Resources</h4>
                <nav className="footer-links" aria-label="Footer Navigation">
                  <Link href="/cost-guide">Cost Guide 2026</Link>
                  <Link href="/floor-plans">Floor Plans</Link>
                  <Link href="/financing">Financing Options</Link>
                  <Link href="/checklist">Builder Checklist</Link>
                </nav>
              </div>

              <div className="footer-links-col">
                <h4 className="footer-heading">Company</h4>
                <nav className="footer-links" aria-label="Company Navigation">
                  <Link href="/">Home</Link>
                  <a href="mailto:info@polebarndirectory.com">Contact Us</a>
                </nav>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="footer-disclaimer">
                <p id="disclosure">
                  <Link href="/#disclosure" className="disclosure-link">Affiliate Disclosure</Link>: We may earn a commission if you purchase through our links at no extra cost to you. Every recommendation on this site is researched and independently verified.
                </p>
              </div>
              <div className="footer-copyright">
                &copy; {new Date().getFullYear()} PoleBarnDirectory.com. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
