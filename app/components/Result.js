var React = require('react');

var styles = {
    calloutStyle: {
        paddingLeft:'100px',
        paddingRight:'100px',
    }
}
function Result(){
    return(
        <div style = {styles.calloutStyle}>
            <div className = "bs-callout bs-callout-primary" >
                <h4>Result</h4>
            </div>
        </div>
    )
}

module.exports = Result;
