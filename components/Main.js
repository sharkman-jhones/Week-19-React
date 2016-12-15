var React = require("react");

var Search = require(".Search.js");

var Saved = require(".Saved.js");

var Main = React.createClass({

	render: function(){
		return(
			<div className = "container">
				<div className = "row">
					<div className = "jumbotron">
						<h1>New York Times Article Scrubber</h1>
						<h2>Search for and annotate articles of interest</h2>
					</div>
				</div>
				<div>
					<div className="panel panel-default">
						<div className="panel-heading">
							Search
						</div>
						<div className="panel-body">
							<div className="form-group">
								<label for="searchField">Search</label>
								<input type="text" className="form-control" id="searchField"></input>
							</div>
						</div>
					</div>
				</div>



			</div>
			);
	}
});

module.exports = Main;