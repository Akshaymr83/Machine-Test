let n =6;
let string ;
for(let i = 1; i<= n ; i++){
    for(let j = 1 ; j<i ; j++){
        if( i===1 || i === 2 ||i==3|| i===6){
            string += '*';

        }
       
        else if(i===4 || i===5){
            for(let k= j+1 ; k<= i -1 ;k++){
                string += ' '
            }
        }
       
       
    }
    string += ("\n")
}
console.log(string);

