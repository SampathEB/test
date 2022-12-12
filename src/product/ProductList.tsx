import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getProductSelectore } from './product.slice'

interface ProductListProps{

}

const ProductList: React.FC<ProductListProps> =({}) =>{
    const products = useSelector(getProductSelectore)
    return(
        <div className="">
            <div className="">game list</div>
            {products.map(product => <div key={product.id}>
                <span>{product.title} : ${product.price}</span>
            </div>)}
        </div>
    )
}

export default ProductList