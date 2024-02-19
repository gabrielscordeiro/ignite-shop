import Image from 'next/image'

import logoImg from '@/assets/logo.svg'
export function Header() {

    return (
        <header className="container m-auto w-full py-4">
            <Image src={logoImg} alt={'Ignite Shop logo'} />
        </header>
    )
}