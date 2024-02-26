'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function ProductPage() {
    const params = useParams<{ productId: string }>()

    return (
        <main className="product-container mx-auto grid max-w-6xl grid-cols-2 items-stretch gap-16">
            <div className="image-container flex h-[41rem] w-full max-w-xl place-items-center rounded-md bg-[linear-gradient(180deg,_#1ea483_0%,_#7465d4_100%)] p-1">

            </div>

            <div className="product-details flex flex-col">
                <h1 className="text-2xl text-gray300">
                    Shirt x
                </h1>
                <span className="mt-[1rem] block text-2xl text-green300">79,90</span>

                <p className="mt-[2.5rem] text-lg leading-relaxed text-gray300">
                    lorem
                </p>

                <button className="mt-auto cursor-pointer rounded-md border-0 bg-green500 p-[1.25rem] text-lg font-semibold text-white hover:bg-green300">
                    Buy now
                </button>
            </div>
        </main>
    )
}