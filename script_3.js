let height = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");


for (var i = 1; i <= height; i++) {
  var row = '';
    
	for (var j = 1; j <= (height - i); j++) {
	  row += ' ';
	}

	for (var k = 1; k <= i; k++) {
	  row += '#';
	}

console.log(row)

}