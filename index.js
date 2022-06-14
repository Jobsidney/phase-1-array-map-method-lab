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
  tutorials.map(element => {
    let word=element.split(' ');
    let word2=word.map(x=>`${x.charAt(0).toUpperCase()}${x.slice(1)}`).join(' ');
    singles.push(word2);
    
    
  });
  return singles;
}
console.log(titleCased())

