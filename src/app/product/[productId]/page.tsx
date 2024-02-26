'use client'

import { GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string
        description: string
    }
}

export default function ProductPage({ product }: ProductProps) {

    return (
        <main className="product-container mx-auto grid max-w-6xl grid-cols-2 items-stretch gap-16">
            <div className="image-container flex h-[41rem] w-full max-w-xl place-items-center rounded-md bg-[linear-gradient(180deg,_#1ea483_0%,_#7465d4_100%)] p-1">
                <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
            </div>

            <div className="product-details flex flex-col">
                <h1 className="text-2xl text-gray300">
                    {product.name}
                </h1>
                <span className="mt-[1rem] block text-2xl text-green300">{product.price}</span>

                <p className="mt-[2.5rem] text-lg leading-relaxed text-gray300">
                    {product.description}
                </p>

                <button className="mt-auto cursor-pointer rounded-md border-0 bg-green500 p-[1.25rem] text-lg font-semibold text-white hover:bg-green300">
                    Buy now
                </button>
            </div>
        </main>
    )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product:  {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(price.unit_amount / 100),
                description: product.description
            }
        },
        revalidate: 60 * 60 * 1
    }
}