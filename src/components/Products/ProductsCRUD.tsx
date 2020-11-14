import React, { useEffect } from 'react';
import { useState } from 'react';
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';
import {
    createSingleProduct,
    deleteSingleProduct,
    updateSingleProduct
} from '../../services/Products.service';
import Swal from 'sweetalert2';
import {connect} from 'react-redux';

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true }
]

declare interface ProductsCRUDProps {
    products: Product[]
}


const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {

    //const [products, setProducts] = useState<Product[]>([])
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

    async function fetchData() {
        // const _products = await getAllProducts()
        // setProducts(_products);
    }

    useEffect(() => {
        //fetchData()
    }, [])

    const handleProductSubmit = async (product: ProductCreator) => {
        try {
            await createSingleProduct(product)
            fetchData()
        } catch (err) {
            Swal.fire('Oops!', err.message, 'error')
        }
    }

    const handleProductUpdate = async (newProduct: Product) => {
        try {
            await updateSingleProduct(newProduct)
            fetchData()
            setUpdatingProduct(undefined)
        } catch (err) {
            Swal.fire('Oops!', err.message, 'error')
        }

    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product Details',
            `${product.name} const $ ${product.price} and we have ${product.stock} available in stock`,
            'info'
        )
    }

    const deleteProduct = async (id: string) => {
        try {
            await deleteSingleProduct(id)
            Swal.fire('Uhu!', 'Product successfully delete', 'success')
            fetchData()
        } catch (err) {
            Swal.fire('Oops!', err.message, 'error')
        }
    }

    const handleProductDelete = (product: Product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, delete ${product.name}!`
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(product._id)
            }
        })
    }

    const handleProductEdit = (product: Product) => {
        setUpdatingProduct(product)
    }

    return <>
        <Table
            headers={headers}
            data={props.products}
            enableActions
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={handleProductEdit}
        />
        <ProductForm
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate} />
    </>
}

const mapStateToProps = (state: any) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)