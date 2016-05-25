var React = require('react');
var Result = require('../components/Result');


var ResultContainer = React.createClass({
    render: function(){
        return(
            <div >
                <Result />
            </div>
        )
    }
});

module.exports = ResultContainer;
