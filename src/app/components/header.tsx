import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@/assets/logo.svg'
export function Header() {

    return (
        <header className="container m-auto w-full py-4">
            <Link href="/">
                <Image src={logoImg} alt={'Ignite Shop logo'} />
            </Link>
        </header>
    )
}