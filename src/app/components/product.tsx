import Image from 'next/image'

import { IProduct } from '@/app/page'

interface IProductProps {
    product: IProduct
}
export default function Product({ product }: IProductProps) {
    return (
        <div className="group relative min-h-[500px] overflow-hidden bg-[linear-gradient(180deg,_#1ea483_0%,_#7465d4_100%)]">
            <a href={`/product/${product.id}`}>

                <Image
                    src={product.imageUrl}
                    width={520}
                    height={480}
                    alt={product.name}
                    className="object-cover"
                />

                <footer className="absolute inset-x-1 bottom-1 flex translate-y-[110%] items-center justify-between rounded-md bg-[#00000099] p-4 opacity-0 transition delay-75 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-lg">{product.name}</span>
                    <strong className="text-xl font-bold text-green300">{product.price}</strong>
                </footer>
            </a>
        </div>
    )
}