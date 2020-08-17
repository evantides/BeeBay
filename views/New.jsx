const React = require('react');
const Default = require("./components/Default");

class New extends React.Component {
    render(){
        return (
            <Default>
                <div id={"formThing"}>
                    <h1>New Product</h1>
                    <form action="/products" method="POST">
                        Name: <input type="text" name="name" /><br/>
                        Description: <input type="text" name="description" /><br/>
                        Picture URL: <input type="text" name="imageURL" /><br/>
                        Price: <input type="number" min={0.05} step={.01} name="price" /><br/>
                        Quantity: <input type="number" min={1} name="quantity" /><br/>
                        Is This Item For Sale? : <input type="checkbox" name="forSale" /><br/>
                        <input type="submit" id={"buttonThing"} value="Create Product"/>
                    </form>
                </div>
            </Default>
        )
    }
}
module.exports = New;