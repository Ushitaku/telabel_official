import Link from 'next/link'

function Login() {
    return (
      <div>
        <form>
        <input type='mail' name='email' />
        <input type='password' name='password' />
        <input type='submit' name='submit' />
        </form>
        <Link href='../'>
          <a>TOPへ戻る</a>
        </Link>
      </div>
    )
  }
  
  export default Login;