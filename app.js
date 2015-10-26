
var myPositions = [];
var opponentPosition = [];
var possibilities = [];
function initialize(size, ships) {
    for (var i = 0; i < size; i++) {
        myPositions[i] = [];
        opponentPosition[i] = [];
        for (var j = 0; j < size; j++) {
            if (i != size -1) {
                possibilities.push([i, j]);
            }
            myPositions[i][j] = 0;
            opponentPosition[i][j] = 0;
        }
    }
 
    setShips(size, ships, "my");
}

function removePlace(place) {
 
    for (var i = 0; i < possibilities.length; i++) {
        if (possibilities[i][0] == place[0] && possibilities[i][1] == place[1]) {
 
            possibilities.splice(i, 1);
            break;
 
        }
    }
 
}
 
 
function setShips(size, ships, board) {
    var x = 0;
    var y = 0;
    var randomPosition;
 
    for (var i = 0; i < ships; i++) {
 
        if (possibilities.length == 0) {
            break;
        }
        randomPosition = getRandomInt(0, possibilities.length - 1);
        alert(randomPosition + " " + possibilities[randomPosition]);
        x = possibilities[randomPosition][0];
        y = possibilities[randomPosition][1];
        removePlace([y, x]);
        removePlace([y, x+2]);
        removePlace([y, x-1]);
        removePlace([y, x - 2]);
        removePlace([y+1,x]);
        removePlace([y-1, x]);
        removePlace([y+1, x+1]);
        removePlace([y-1, x-1]);
        removePlace([y-1, x+1]);
        removePlace([y+1, x-1]);
        removePlace([y, x+1]);
 
        if (board == "my") {
            myPositions[y][x] = 1;
            myPositions[y][x+1] = 1;
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
 
function getById(x) {
    return document.getElementById(x);
}
 
function makeMove(tableid, row, column){
    var cid = (tableid.id + row) + column;
    getById(cid).innerHTML="*";
    getById(cid).style.backgroundColor="#999999";
}
 
function changeFunc(id){
    var selectBox = getById(id);
    var size = selectBox.options[selectBox.selectedIndex].value;
    var html = "<option disabled selected label=' '></option>";
    for (var i = 1; i < size; i++) {
        html += "<option value =" + i + ">" + i + "</option>\n";
    }
    getById('shipSelect').innerHTML=html;
}
 
function changeShipNumber(id) {
    var sizeSelectBox = getById('boardSize');
    var size = sizeSelectBox.options[sizeSelectBox.selectedIndex].value;
    var shipsSelectBox = getById(id);
    var ships = shipsSelectBox.options[shipsSelectBox.selectedIndex].value;
    initialize(size, ships);
 
}
 
function buildBoard(id, size){
    var html = "";
    var i, j;
    html += "<table>";
    for (i = 0; i < parseInt(size); i++) {
        html += "<tr>";
        for (j = 0; j < parseInt(size); j++){
            html += "<td class='board'";
            html += " onclick='makeMove(" + id + "," + i + ", " + j + ")'";
            html += " id='" + id + i + j +"'>";
            if (myPositions[i][j] == 1) {
                html += "x";
            }
            html += "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    getById(id).innerHTML=html;
}

function newGame(){
	hideGameElements();
	buildBoard("myBoard", size);
    buildBoard("compBoard", size);
}
/*
function hideGameElements() {
	document.getElementById("myBoard").innerHTML = myBoard;
  document.getElementById("computerBoard").innerHTML = computerBoard;

  document.getElementById("myBoard").style.display="none";
  document.getElementById("computerBoard").style.display="none";
}


  function xIs3() {
  	pcMaxScoreX = 10;
  	showGameElements();
  }

  function xIs6() {
  	pcMaxScoreX = 15;
  	showGameElements();
  }

  function xIs9() {
  	pcMaxScoreX = 20;
  	showGameElements();
  }



function fillBoard(size) {
  var r,c,i,foundok,count;
  size=parseInt(size);
  for(i=0;i<size;i++) {
    foundok=false;
    count=0;
    while(!foundok && count<20) {
      c=Math.floor(Math.random()*(size-1));
      console.log("try ship for row "+i+" at col "+c);
      if (i>0) {
        if (table[i-1][c]==1) { foundok=false; }
        else if (c>0 && table[i-1][c-1]==1) { foundok=false; }
        else if (c<size-1 && table[i-1][c+1]==1) { foundok=false; }
        else foundok=true;
      } else {
        foundok=true;
      }
      count++;
    }
    if (foundok) {
      console.log("got ship for row "+i+" at col "+c);
      table[i][c]=1;
      table[i][c+1]=1;
      console.log(table);
    }
  }
}


function showBoard (tbl,divid) {
    var r,c,place;

    for (r=0;r<tbl.length;r++) {
        for(c=0;r<tbl.length;c++) {
            place=gid ( (divid+r)+c);
            if
            
*/
