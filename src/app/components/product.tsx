import Image from 'next/image'

import shirt1 from '@/assets/shirts/01.png'

export default function Product() {
    return (
        <a className="group relative min-h-[500px] overflow-hidden bg-[linear-gradient(180deg,_#1ea483_0%,_#7465d4_100%)]">
            <Image
                src={shirt1}
                width={520}
                height={480}
                alt="Shirt 01"
                className="object-cover"
            />

            <footer className="absolute inset-x-1 bottom-1 flex translate-y-[110%] items-center justify-between rounded-md bg-[#00000099] p-4 opacity-0 transition delay-75 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-lg">Shirt X</span>
                <strong className="text-xl font-bold text-green300">US$ 79,90</strong>
            </footer>
        </a>
    )
}