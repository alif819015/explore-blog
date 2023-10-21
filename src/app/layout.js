import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/Components/Shared/Footer/Footer'
import NavBar from '@/Components/Shared/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | Explore Blogs',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <NavBar></NavBar>
        </nav>
        {children}
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout;