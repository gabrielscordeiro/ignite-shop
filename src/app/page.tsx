import Product from '@/app/components/product'

export default function Home() {
    return (
        <main className="container mt-10 flex cursor-pointer place-items-center gap-12 rounded-lg p-1">
            <Product />
            <Product />
            <Product />
        </main>
    )
}
