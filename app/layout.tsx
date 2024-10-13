import type { Metadata } from "next"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/page";
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "PYLHR",
  description: "Digital Sanctum Of Priyanshu Lohar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      
      <title>Priyanshu Lohar | Software Engineer & Researcher</title>
      <meta name="description" content="Explore the journey of Priyanshu Lohar, a passionate software engineer and tech entrepreneur, through his personal website. Discover insights into his innovative projects in AI, fintech, and software development, along with his commitment to continuous learning and professional growth. Join him as he shares knowledge, experiences, and inspirations that shape his career in technology." />
      <meta property="og:title" content="Priyanshu Lohar | Software Engineer & Researcher" />
      <meta property="og:description" content="Welcome to the official website of Priyanshu Lohar, showcasing a portfolio of cutting-edge projects, including AI automation solutions and fintech applications. Dive into a collection of articles, tutorials, and insights that reflect a dedication to technology and innovation. Stay updated with the latest developments in machine learning, software engineering, and personal achievements in the tech industry." />
      <meta property="og:image" content="/public/logo.png" />
      <link rel="canonical" href="https://pylhr.vercel.app" />
    
      </head>
      <body
        className={`${cormorantGaramond.variable} ${poppins.variable} bg-neutral-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
