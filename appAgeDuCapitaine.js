let age = 1;
while(age < 51){

    if(age < 18) {
        document.getElementById('texte').innerHTML += age +"ans, le capitaine est jeune !";
    }
    else if(age === 35){ // age veritable
        document.getElementById('texte').innerHTML += age +" ans , le capitaine n'est pas vieux!";
    }
    else if(age < 51){ // age max
        document.getElementById('texte').innerHTML += age + " ans , le capitaine est vieux !";
    }
    age++;
}
