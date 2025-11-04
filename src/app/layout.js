// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pravin Mathew | DevOps Engineer | Cloud & Automation Specialist",
  description:
    "Hi, I'm Pravin Mathew — a DevOps Engineer specializing in AWS, CI/CD, Docker, Kubernetes, Terraform, and Cloud Automation. Explore my portfolio, projects, and open-source work.",
  keywords: [
    "Pravin Mathew",
    "Pravin DevOps",
    "Mathew DevOps",
    "Pravin Mathew DevOps",
    "Pravin DevOps Engineer India",
    "Pravin AWS DevOps Engineer",
    "Pravin Cloud Engineer",
    "Pravin Infrastructure as Code",
    "Pravin Pravin Jenkins pipelines",
    "Pravin Terraform AWS",
    "Pravin Docker Kubernetes Engineer",
    "PravinDevOps Portfolio"
  ],
  authors: [{ name: "Pravin Mathew", url: "https://pravinmathew.netlify.app" }],
  creator: "Pravin Mathew",
  publisher: "Pravin Mathew",
  openGraph: {
    title: "Pravin Mathew | DevOps Engineer | AWS, Terraform, Kubernetes",
    description:
      "Explore Pravin Mathew's DevOps portfolio — CI/CD pipelines, Kubernetes, Docker, Terraform, AWS Cloud, and automation frameworks.",
    url: "https://pravinmathew.netlify.app",
    siteName: "Pravin Mathew DevOps Portfolio",
    images: [
      {
        url: "https://pravinmathew.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pravin Mathew DevOps Portfolio"
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravin Mathew | DevOps Engineer | Cloud Automation Expert",
    description:
      "Portfolio of Pravin Mathew — AWS, Docker, Terraform, Jenkins, Kubernetes, and CI/CD pipelines.",
    images: ["https://pravinmathew.netlify.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pravinmathew.netlify.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9MFJS30727"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9MFJS30727');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}