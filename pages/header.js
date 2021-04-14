import Link from 'next/link'
import Image from 'next/image'
import {Box} from "@chakra-ui/react"

// const styles = {
//     rogo:{
//         height:'50%',
//         width:'50%',
//     },
//     ham:{
//         height:'50%',
//         width:'50%',
//     },

// };


const Header =() => {
    return(
        <>
        <Box bg="gray">
         <Link href='./'>
         <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618286838/rogo_xsidtk.svg'} alt='ロゴ'
                  width={'52'}
                  height={'65'} />
         </Link>
         <Link href='./'>
          <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618286838/ham_y5ixyj.svg'} alt='メニュー'
                  width={'51'}
                  height={'12'} />
         </Link>
         </Box>
        </>
    )
}

export default Header