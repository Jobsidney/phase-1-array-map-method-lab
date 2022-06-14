let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const singles=[]

function titleCased(){

}
// console.log(titleCased())

// tutorials.forEach(element => {
//   word=element.split(' ');
//   let word2=word.map(x=>`${x.charAt(0).toUpperCase()}${x.slice(1)}`).join(' ');
//   singles.push(word2);
  
// });
console.log(titleCased());
function titleCased(){
  tutorials.forEach(element => {
    word=element.split(' ');
    let word2=word.map(x=>`${x.charAt(0).toUpperCase()}${x.slice(1)}`).join(' ');
    singles.push(word2);
    
  });
  
}
// console.log(titleCased());

titleCased()
// function getTitleCase(str) {
//   const titleCase = str
//     .toLowerCase()
//     .split(' ')
//     .map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(' ');

//   return titleCase;
// }
