
var quotes = [
"The only way to do great work is to love what you do.",
"In three words I can sum up everything I've learned about life: it goes on.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"You miss 100% of the shots you don't take.",
"Be the change that you wish to see in the world.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The future belongs to those who believe in the beauty of their dreams.",
"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"Life is what happens when you're busy making other plans.",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"The only impossible journey is the one you never begin.",
"The best way to predict the future is to create it.",
"It always seems impossible until it's done.",
"If you want to lift yourself up, lift up someone else.",
"Imagination is more important than knowledge.",
"The purpose of our lives is to be happy.",
"Don't cry because it's over, smile because it happened.",
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
"The only person you are destined to become is the person you decide to be."
]
// var randomnumber = Math.floor(Math.random()*20);
// console.log(randomnumber)
let= res;
function newQuote(){
   res = setInterval(function(){
        var randomnumber = Math.floor(Math.random()* (quotes.length  ));
document.getElementById("quotedisplay").innerHTML =quotes[randomnumber];
    },2000)

}
function stop(){
    clearInterval(res);
}