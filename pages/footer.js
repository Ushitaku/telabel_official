import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return(
        <>
        <div>
            <div>
            <h3>テラベル</h3>
            <p>お寺をラベリングするサイト</p>
            </div>
            <p>マイナーなお寺の魅力創出を目的としたサイトです。
                お寺って何となく敷居高そう・・・。
                そんなイメージを持たれている方は多いと思います。
                私どもは少しでも身近に感じていただけるような思いで
                このサイトを制作しました。動機は何でもいいから、
                お寺に行って、面白いね！と感じてもらう。
                そんなサイトを目指して参ります。
            </p>
        </div>
        <div>
        <p>© 2021 Telabel.  All Rights Reserved.</p>
        </div>
        <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/facebook_erc9dv.png'} alt='Facebook'
                  width={'96'}
                  height={'96'} />
        <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/youtube_efhoiw.png'} alt='Youtube'
                  width={'96'}
                  height={'96'} />
        <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/twitter_wzmz9k.png'} alt='Twitter'
                  width={'96'}
                  height={'96'} />
        <Image src={'https://res.cloudinary.com/telabel/image/upload/v1618401644/instergram_oug8df.png'} alt='Instagram'
                  width={'96'}
                  height={'96'} />
        <div>

        </div>
        <div>
            <Link href='./login'>
            <h3>ログイン</h3>
            </Link>
            <Link href=''>
            <h3>記事検索</h3>
            </Link>
            <Link href='./form'>
            <h3>お問い合わせ</h3>
            </Link>
        </div>
        </>
    )

}

export default Footer