/* eslint-disable */
import "bootstrap";
import "./style.css";




  //write your code here
let pronoun = ['the','my','your','our']
let adjective = ['new','old','fast','cheap','best']
let noun = ['pool','books','cars','pets','sports']
for(let i = 0; i < pronoun.length; i++){
  for(let j = 0; j < adjective.length; j++){
    for(let k = 0; k < noun.length; k++){
      console.log(`${pronoun[i]}${adjective[j]}${noun[k]}.com`)
    }
  }
}