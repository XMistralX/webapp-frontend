var React = require('react');
var ReactRouter = require('react-router');
var Search = require('../components/Search');
var ResultContainer = require('../containers/ResultContainer');
var SearchContainer = React.createClass({
    render: function(){
        return(
            <div>
                <div className = "row" >
                    <Search />
                </div>
                    <ResultContainer />
            </div>
        )
    }
})

module.exports = SearchContainer;
