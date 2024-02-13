// THIS IS FOR SIMPLICITY PURPOSES TODAY, because we don't 
// have a DATABASE, we are just using an in memory array, 
// so we have some data to work with!

// normally we will have an object with the methods that 
// talk to the database here!

const todos = [
	{id: 125223, todo: 'Feed Dogs', done: true},
	{id: 127904, todo: 'Learn Express', done: false},
	{id: 139608, todo: 'Buy Milk', done: false}
  ];
  
  module.exports = {
	getAll, // shorthand for getAll: getAll
	getOne // shorthand for getOne: GetOne

	// getOne: getOne
  };
  
  function getAll() {
	return todos;
  }

  function getOne(id) {
	// URL params are strings - convert to a number
	id = parseInt(id);
	// The Array.prototype.find iterator method is
	// ideal for finding objects within an array
	return todos.find(todo => todo.id === id);
  }