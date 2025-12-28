import {House,Heart} from 'lucide-react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/90'>
        <div className='container max-auto flex h-16 items-center justify-between px-4'>
            <Link to={"/"}>
                <House/>
            </Link>
            <Link to={"/favorites"}>
                <Heart/>
            </Link>
        </div>
    </header>
  )
}

export default Header