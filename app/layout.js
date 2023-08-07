import '@/styles/global.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Ritchie's Portfolio",
  description: 'Made with Next.js and Tailwind',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        {children}
        <Footer />
    </body>
    </html>
  )
}
