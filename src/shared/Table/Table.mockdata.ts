export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookie',
        price: 1.25,
        stock: 23
    },
    {
        id: 2,
        name: 'Milk 1L',
        price: 0.99,
        stock: 10
    },
    {
        id: 3,
        name: 'Detergent',
        price: 0.75,
        stock: 65
    },
    {
        id: 4,
        name: 'Water 1L',
        price: 0.30,
        stock: 120
    }
]

export default Products