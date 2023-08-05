import '@/styles/global.css'

export const metadata = {
  title: "Ritchie's Portfolio",
  description: 'Made with Next.js and Tailwind',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
