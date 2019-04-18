function factorial(N){
	return N<=1 ? 1 : N * factorial(N-1); // => factorial(--N);
}

console.log(factorial(5));
// summary-------------------
function sum(N){
	return N<=1 ? 1 : N + sum(N-1); // => factorial(--N);
}

console.log(sum(5));

//--------------------------последовательность чисел

function printRange(iNumber){
   if (iNumber){
    console.log(iNumber);
    printRange(--iNumber);  
    }
   }
  printRange(34);

 //-------------------------