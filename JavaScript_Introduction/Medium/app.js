//Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. 
//Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

let voice = prompt('Please type any word.');

if (voice === voice.toUpperCase()) {
    console.log('The user is shouting')
  } else if (voice === voice.toLowerCase()) {
    console.log('The user is whispering')
  } else {
    console.log('The user is talking normally.')
  }
