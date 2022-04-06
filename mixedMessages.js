/*mixed messages steps:
create 3 arrays of different strings
create function with three different random numbers that are multiplied by length of array using Math.floor and Math.random
return the random numbers
then use console.log to print random message to screen*/
const names = ["I","Mike","Liv","Emma","Dad","Mum","Cathy","Robert","Paul","Sarah","James","Keith","Ben","Sibs"];
const adjectives = ["loves","hates","adores","gives","sells","buys","wants","shares","breeds","despises","likes","gregarious","kills","shags","shanks","eats"];
const animals = ["dog","Charlie","cat","Great Danes","Bernease Mountain dog", "Great Swiss Mountain Dog","ferrets","Guinea Pigs","pigs","goats","donkeys","cows","coco","gypsy","Appa","Angel","Martha","rabbits","brittany","cocker Spaniels","Labradors"];

const mixedMessages = function(names,adjectives,animals){
  let namesnum = Math.floor(Math.random()*names.length);
  let adjectivesnum = Math.floor(Math.random()*adjectives.length);
  let animalsnum = Math.floor(Math.random()*animals.length);
  console.log (`${names[namesnum]} ${adjectives[adjectivesnum] ${animals[animalsnum]}`);
};
console.log(mixedMessages);
