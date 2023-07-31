import './globals.css'
import { Open_Sans } from 'next/font/google'
import CustomNavbar from 'components/CustomNavbar'
import CustomFooter from 'components/CustomFooter'

export const metadata = {
  title: 'Michael Zhan',
  description: 'My personal website',
}

const openSans = Open_Sans({
  weight: '300',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className} id='main-body'>
        <div style={{maxWidth: '650px', margin: 'auto'}}>
          <CustomNavbar />
          {children}
        </div>
        <CustomFooter />
      </body>
    </html>
  )
}
