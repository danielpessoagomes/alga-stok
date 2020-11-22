import React, { useEffect } from 'react';
import { useState } from 'react';
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';
import Swal from 'sweetalert2';
import { connect, useDispatch } from 'react-redux';
import * as ProductAction from '../../redux/Products/Products.actions';
import { RootState, ThunkDispatch } from '../../redux';

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

    const dispatch: ThunkDispatch = useDispatch()

    const showErrorsAlert =
        (err: Error) => Swal.fire('Oops!', err.message, 'error')

    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        await dispatch(ProductAction.getProducts())
            .catch(showErrorsAlert)
    }


    const handleProductSubmit = async (product: ProductCreator) => {
        dispatch(ProductAction.insertNewProduct(product))
            .catch(showErrorsAlert)

    }

    const handleProductUpdate = async (newProduct: Product) => {
        dispatch(ProductAction.updateProduct(newProduct))
            .then(() => setUpdatingProduct(undefined))
            .catch(showErrorsAlert)
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product Details',
            `${product.name} const $ ${product.price} and we have ${product.stock} available in stock`,
            'info'
        )
    }

    const deleteProduct = async (id: string) => {
        dispatch(ProductAction.deleteProduct(id))
            .then(() => {
                Swal.fire('Uhu!', 'Product successfully delete', 'success')
            })
            .catch(showErrorsAlert)

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
        }).then(({ value }) => value && deleteProduct(product._id))
    }

    return <>
        <Table
            headers={headers}
            data={props.products}
            enableActions
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={setUpdatingProduct}
            itemPerPage={3}
        />
        <ProductForm
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate} />
    </>
}

const mapStateToProps = (state: RootState) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)