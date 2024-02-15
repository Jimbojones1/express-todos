// By Convention the model is capitalized!
const TodoModel = require('../models/todo')

module.exports = {
	index, // shorthand for index: index
	show,
	new: newTodo,
	create,
	delete: deleteTodo
}

function deleteTodo(req, res) {
	TodoModel.deleteOne(req.params.id);
	res.redirect('/todos');
  }


function create(req, res){

	console.log(req.body, "< - req.body is the contents of our form")
	TodoModel.create(req.body)
	// CREATE, UPDATE, DELETE always respond with a redirect to a get route
	res.redirect('/todos')
}

function newTodo(req, res){
	// render looks in the views folder
	// for the ejs page you want to return to the client
	res.render('todos/new')
}

// ctrl index function always responds
// with all of a certain resource
// for example, responds with all the toods
function index(req, res){

	// send to the client when a request made to the server
	// a ejs page with all the todos!
	// render automatically looks for files in the views folder!
	res.render('todos/index', {todos: TodoModel.getAll()})
	// the key on the object (todos) will be a variable in the todos/index page
	// which in this case will be an array of all the todos!
}

function show(req, res){

	console.log(req.params, " <- req.params")
	// todos/show is the ejs file in the views folder
	res.render('todos/show', {todo: TodoModel.getOne(req.params.id)})
}