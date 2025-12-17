import { useCallback, useMemo, useState } from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {

    const products = useMemo(() => [
        { id: 1, name: "Protein Powder", price: 500 },
        { id: 2, name: "Diabetic Mix", price: 700 },
    ], []);

    const [cart, setCart] = useState([]);

    const handleAdd = useCallback((product) => {
        setCart((prev) => [...prev, product])
    }, [])

    return (
        <>
            {
                products.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        handleAdd={handleAdd}
                    />
                ))
            }
        </>
    )
}

export default ProductList