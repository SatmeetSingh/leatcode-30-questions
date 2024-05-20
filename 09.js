/*  
Write a function argumentsLength that returns the count of arguments passed to it.

args is a valid JSON array
0 <= args.length <= 100 */

function argumentsLength(...args) {
  console.log(args.length);
}

argumentsLength(2, {}, 'satmeet');
