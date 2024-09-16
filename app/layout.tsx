import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/section/Footer";
import logo from "@/app/public/assets/logo.jpg"
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Tumbler Ku",
  description: "Temukan koleksi tumbler premium kami yang ramah lingkungan, dirancang untuk gaya hidup Anda yang dinamis. Belanja sekarang dan nikmati minuman Anda dengan gaya!"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href={logo.src} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <Script id="facebook-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1036336657769911');
            fbq('track', 'PageView');
         `
        }}>

          <noscript><img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1036336657769911&ev=PageView&noscript=1"
          /></noscript>


        </Script>
      </body>
    </html>
  );
}
