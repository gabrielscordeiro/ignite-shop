'use client'

import { useParams } from 'next/navigation'

export default function Product() {
    const params = useParams<{ productId: string }>()

    return (
        <div>
            Product {params.productId}
        </div>
    )
}