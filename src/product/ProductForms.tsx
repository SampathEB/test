import React, { useState } from "react"
import { useAppDispatch } from "../store.hooks"
import { addProduct, Product } from "./product.slice"
const ProductForms: React.FC = () => {

    const dispatch = useAppDispatch()

    const [product, setProduct] = useState<Product>({
        id: "",
        title: "",
        price: 0
    })

    const handalChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setProduct(prev => {
            (prev as any)[name] = value;
            const newValue = { ...prev }
            return newValue
        })
    }

    const hadalSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addProduct(product))
    }

    const {title , price, id } = product
    return (
        <>
            <h1>Add Game TO the Sote</h1>
            <form action="" onSubmit={hadalSubmit}>
                <input type="text" className="" value={product.title} placeholder="game title" name="title" onChange={handalChange} />
                <input type="text" className="" value={product.price} placeholder="price" name="price" onChange={handalChange} />
                <input type="text" className="" value={product.id} placeholder="id" name="id" onChange={handalChange} />
                <button type="submit">Price</button>
            </form>
        </>
    )
}

export default ProductForms