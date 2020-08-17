const React = require('react');
const Default = require("./components/Default");

class Show extends React.Component {
    render(){
        return (
            <Default>
                <div id={"show"}>
                    <h1>{this.props.product.name}</h1>
                    <img src={this.props.product.imageURL} alt={"product image"} />
                    <h4>Description: {this.props.product.description}</h4>
                    <h4>Price: ${this.props.product.price}</h4>
                    <h4>Quantity Remaining: {this.props.product.quantity}</h4>
                    <form action={`/products/${this.props.product.id}?_method=PATCH`} method={'POST'}>
                        <h4>{this.props.product.forSale ?
                            <input type="submit" name="quantity" value={"Buy Here"}/>
                            : <input type={"submit"} value={"Not for sale!"} disabled/>}</h4>
                    </form>
                </div>
            </Default>
        )
    }
}
module.exports = Show;