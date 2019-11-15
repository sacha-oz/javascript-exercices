let a = prompt("De quel nombre veux-tu calculer la factorielle ?");
let b = a - 1;

if (a == 0){
	a =1;
}

while(b>0){
	a = a*b;
	b--;
}

console.log(`Le résultat est : ${a}`);