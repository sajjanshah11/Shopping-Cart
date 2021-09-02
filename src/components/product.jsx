import "./Product.css"

let Product = () => {
    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    <img src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12/Blue/Apple-iPhone-12-Blue-frontimage.png" />
                </div>
                <div className="product-button">
                    <button>Add to cart</button>
                </div>
            </div>

        </>
    )
}

export default Product;