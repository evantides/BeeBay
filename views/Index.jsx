const React = require('react');
const Default = require("./components/Default");

class Index extends React.Component {
    render() {
        return (
            <Default>
                <h4>Current Product List!</h4>
                <ul id={"mainProducts"}>
                    {
                        this.props.products.map((product, i) => {
                            return (
                                <li id={"cardTainer"}>
                                    <h2><a href={`/products/${product.id}`}>{product.name}</a></h2>
                                    <div className={'content'}>
                                        <img src={product.imageURL} alt={"product image"} />
                                        <p>Price: ${product.price}</p>
                                        <p>Quantity Remaining: {product.quantity}</p>
                                        <form action={`/products/${product.id}?_method=PATCH`} method={'POST'}>
                                            <h4>{product.forSale ?
                                                <input type="submit" value={"Buy Here"}/>
                                                : <input type={"submit"} value={"Not for sale!"} disabled/>}</h4>
                                        </form>
                                    </div>
                                </li>
                        )
                        })
                    }
                </ul>
            </Default>
        );
    }
}

module.exports = Index;