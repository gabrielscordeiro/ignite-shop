import Image from 'next/image'

import logoImg from '@/assets/logo.svg'
export function Header() {

    return (
        <header className="m-auto w-full max-w-6xl p-0.5">
            <Image src={logoImg} alt={'Ignite Shop logo'} />
        </header>
    )
}