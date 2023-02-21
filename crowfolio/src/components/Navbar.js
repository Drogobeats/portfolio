import React from 'react'
import { Link } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" color='blue.400' _hover={{ color: 'blue.500' }} >Home</Link>
          </li>
          <li>
            <Link href="/about" color='blue.400' _hover={{ color: 'blue.500' }}>About</Link>
          </li>
          <li>
            <Link href="/contact" color='blue.400' _hover={{ color: 'blue.500' }} >Contact</Link>
          </li>
          <li>
            <Link href="/musics" color='blue.400' _hover={{ color: 'blue.500' }} >Musics</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
