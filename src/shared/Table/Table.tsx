import React from 'react';
import './Table.scss';
import Products from './Table.mockdata';

const headers = [
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'actions', value: 'Actions' },
    { key: 'stock', value: 'Availble Stock' }
]

declare interface TableHeader {
    key: string
    value: string
    right?: boolean
}

type IndexedHeaders = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key: string]: any
}

function organizeData(data: [], headers: TableHeader[]) {
    const indexedHeaders: IndexedHeaders = {}

    headers.forEach(header => {
        indexedHeaders[header.key] = {
            ...header
        }
    })

    const headerKeysInOrder = Object.keys(indexedHeaders)

    const organizedData = data.map(item => {
        const organizedItem: OrganizedItem = {}

        headerKeysInOrder.forEach(key => {
            organizedItem[key] = item[key]
        })
    })
}


const Table: React.FC = () => {
    organizeData([], headers);
    return <table className="AppTable">
        <thead>
            <tr>
                {
                    headers.map(header =>
                        <th key={header.key}>
                            {header.value}
                        </th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                Products.map(product => <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                </tr>)
            }
        </tbody>
    </table>
}

export default Table