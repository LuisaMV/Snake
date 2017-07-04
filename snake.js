function createBoard() {
 	 var root = document.getElementById('root');
   var board = [];
	 for (var i = 0; i < 50; i++) {
     var row = [];
		 var unit = document.createElement('div');
		 unit.classList.add('flex');
		 for (var j = 0; j < 50; j++) {
			 var child = document.createElement('div');
			 child.classList.add('unit');
			 unit.appendChild(child);
       row.push(child);
		 }
		 root.appendChild(unit);
     board.push(row);
	 }
   return board;
}

function createRandomSprinkle(board) {
  var randomRow = Math.floor(Math.random() * 50);
  var randomColumn = Math.floor(Math.random() * 50);
  board[randomRow][randomColumn].classList.add('sprinkle');
}

var board = createBoard();
createRandomSprinkle(board);
