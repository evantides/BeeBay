const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>BeeBay App</title>
                    <link href={"/css/style.css"} rel={"stylesheet"}/>
                    <link href="https://fonts.googleapis.com/css2?family=Alata&family=Roboto+Slab:wght@800&display=swap" rel="stylesheet" />
                </head>
                <body>
                    <div id={"mainBody"}>
                        <header>
                            <img src={"/beeimg/bimage.png"} />
                            <h1>Bee<span>Bay</span></h1>
                            <h3> Like Ebay, but for Bees!</h3>
                            <ul id={'nav'}>
                                <li><a href="/products/new">Add your bee to BeeBay!</a></li>
                                <li><a href="/products">Head to the Beedex!</a></li>
                            </ul>
                        </header>
                        <main>
                            {this.props.children}
                        </main>
                    </div>
                    <footer>

                    </footer>
                </body>
            </html>
        );

    }
}

module.exports = Default;