import { memo } from 'react';

const ProductCard = memo(({ product, handleAdd }) => {
    console.log("Render:", product.name);

    return (
        <>
            <div className="border p-3 rounded">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button
                    onClick={() => handleAdd(product)}
                >Add Product</button>
            </div >
        </>
    )
})

export default ProductCard