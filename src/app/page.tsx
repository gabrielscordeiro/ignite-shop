import Product from '@/app/components/product'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/app/components/ui/carousel'

export default function Home() {
    return (
        <main className="container mt-10 w-full">
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="w-full"
            >
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <Product />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <Product />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <Product />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <Product />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <Product />
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    )
}
