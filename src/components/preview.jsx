import "./Preview.css";

let Preview = ()=>{
    return(
        <div className="preview-container">
            <div className="image-box">
                <img src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12/Blue/Apple-iPhone-12-Blue-frontimage.png" />
            </div>
            <div className="preview-listing">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aliquam error molestias fugit ab. Voluptates et soluta aperiam unde voluptatibus veritatis vitae id saepe, sequi, fugit error porro quam voluptate tempore eveniet impedit reprehenderit rerum, possimus debitis! Atque iste accusantium sint repellendus omnis, minima molestiae asperiores esse sit dolor corporis.</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Preview;