import { GetServerSideProps } from 'next'
import Stripe from 'stripe'

import Product from '@/app/components/product'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/app/components/ui/carousel'
import { stripe } from '@/lib/stripe'

export interface IProduct {
    id: string
    name: string
    imageUrl: string
    price: number
}

export default async function Home() {
    const products: IProduct[] = await getProducts()

    return (
        <main className="container mt-10 w-full">
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="w-full"
            >
                <CarouselContent>
                    {products.map(product => (
                        <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                            <Product product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    )
}

async function getProducts() {

    const response = await stripe.products.list({
        expand: ['data.default_price']
    })

    const products = response.data.map(product => {

        const price = product.default_price as Stripe.Price

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: price.unit_amount,
        }
    })

    return products
}

