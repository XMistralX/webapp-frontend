var React = require('react');

var Main = React.createClass({
    render : function(){
        return(
            <div >
            <nav className="navbar navbar-default">
                <div className ="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">ReverseSearch</a>
                    </div>
                </div>
            </nav>
            {this.props.children}
            </div>
        );
    }
})

module.exports = Main;
