import Link from 'next/link'
import Image from 'next/image'
import {Box} from "@chakra-ui/react"
// import '../styles/header.scss'

const Header =() => {
    return(
        <>
        <Box size="sm" bg="#27214D">
         <Link href='./'>
         <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618286838/rogo_xsidtk.svg'} alt='ロゴ'
                  width={'52'}
                  height={'65'} />
         </Link>
         <Link href='./'>
          <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618286838/ham_y5ixyj.svg'} alt='メニュー'
                  width={'125'}
                  height={'31'} />
         </Link>
         </Box>
        </>
    )
}

export default Header