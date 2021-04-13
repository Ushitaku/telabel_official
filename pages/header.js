import Link from 'next/link'
import Image from 'next/image'

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
        <div>
         <Link href='./'>
         <Image src='/rogo.svg' alt='メニュー'
                  layout={"responsive"}
                  width={'50'}
                  height={'50'} />
         </Link>
         <Link href='./'>
          <Image src='/ham.svg' alt='メニュー'
                  layout={"responsive"}
                  width={'50'}
                  height={'50'} />
         </Link>
         </div>
        </>
    )
}

export default Header