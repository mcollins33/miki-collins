var path = require("path");
var projects = require("../../data/projects.js");

module.exports = function(app) {
	app.get("/api/projects", function(req, res) {
		return res.json(projects);
	});
}