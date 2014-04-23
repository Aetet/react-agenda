/**
* @jsx React.DOM
*/
var React = require('react');
var CreateEvent = React.createClass({
  render: function () {
    return (
      <div>
      <div className="modal-backdrop">
      </div>
        <div className="modal">
          <div className="modal-header">
            <button type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true">
              &times;
            </button>
            <h3>Modal header</h3>
          </div>
          <div className="modal-body">
            <p>One fine body…</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn">Close</a>
            <a href="#" className="btn btn-primary">Save changes</a>
          </div>
        </div>
        </div>
    );
  }
});
module.exports = CreateEvent;