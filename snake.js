function createBoard() {
	var root = document.getElementById('root');
	console.log(root);
	for (var i = 0; i < 50; i++) {
		var unit = document.createElement('div');
		unit.classList.add('flex');
		for (var j = 0; j < 50; j++) {
			var child = document.createElement('div');
			child.classList.add('unit');
			unit.appendChild(child);
		}
		root.appendChild(unit);
	}
}

createBoard();

