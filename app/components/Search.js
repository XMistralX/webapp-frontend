var React = require('react');
var ReactRouter = require('react-router');

var styles = {
    buttonStyle: {
        marginLeft:'auto',
        marginRight:0,
        marginTop: '10px',
        display: 'block',

    }
}
function Button (props) {
  return (
     <button type='button'
     style = {styles.buttonStyle}
     className='btn btn-md btn-success'
     onClick={props.onSubmitQuery}>
     {props.children}
    </button>
  )
}
function Search(){
    return(
        <div className="container">
          <h2>Input Query</h2>
          <p className = "Lead">The input text must be not more than 200 words.</p>
          <form role="form">
            <div className="form-group">
              <label for="comment">Input</label>
              <textarea className="form-control" rows="5" id="comment"></textarea>
            </div>
          </form>
          <Button>Search</Button>
        </div>
    )
};
module.exports = Search;
