var readlineSync= require('readline-sync');
var userName = readlineSync.question('enter your name ');
console.log('Hi! ' + userName)


var userResponse= readlineSync.question("Do you want to play this game 'yes' or 'no' ")
if (userResponse === 'yes')
{
console.log('Let us begin');

}
else
{
  console.log('you may quit');
}

var score=0;
function play(question, answer)
{
var userAnswer = readlineSync.question(question);
if (userAnswer === answer)
{
  console.log('Hurray!, you are correct. ')
  score= score+1;

}
else
{
  console.log('Oops, you are wrong.');
  score=score+0;
}
console.log('your current score is: '+ score )
console.log('-------------------')
}
play("1.what is my name? ","saahith");
play("2.where do i live? ","hyderabad");
play("3.what is my birthday month ","april");
play("4.Am i introvert or extrovert ","introvert");
play("5.who is my female celebrity crush? ","deepika padukone");
play("6.what is my favorite netflix show? ","dark");
play("7.Do i play sports? ",'no');

console.log('Wohoo!, your final score is: '+score)
console.log('-------------------')
console.log('Incase if you missed anything, here the answers for above questions:')
var list = ['1.saahith','2.hyderabad','3.april','4.introvert','5.deepika padukone','6.dark','7.no'];
for( var i=0; i<7;i++)
console.log(list[i])
console.log('-------------------')
console.log('checkout high scores')
var highScores =[
  {
  name: "manideep",
  score:6,
},
{
  name: "vaibhav",
  score:5,
}]
console.log(highScores)