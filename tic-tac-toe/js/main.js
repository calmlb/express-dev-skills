//*------constants-----*//

//Need a 3x3 board
//Need a player
//Need a starting score of 0


//*------app state-----*//
//Need player1 and player2 score
//Need to store the cell click id

//*------cached elements-----*//
//cache each board position
//Need to store player choice in cell

//*------event listeners-----*//
//listen for click
//check cell for existing letter
//if no letter, add letter from player click
//if letter, return try again
//run logic once a winner is possible

//*------functions-----*//

//initialize the page once dom is available
//draw board
//ask for player names
//on click of cell, update cell with right letter and switch turns, continue until winner is found
//winner logic
    //determine possible winning sequences
    //compare the board to possible winning sequences after every turn 
    //on winner, display, "PlayerXY is the winner!" and update score