'use strict'
// vairable declaration vairable value

const khalid = 'ewa';
// declaration vairable: value;
let muiz= 'Object';
muiz: 'bread';
var hazzy = 'cintia';

// data types
// string
// number
// bolean
//object
//array
// big int

// string
const xeno = 'he codes alot'
const fawaz = '2024'
console.log(xeno, fawaz);

let idan = '$(xeno) from 2005 $(fawaz)'
console.log(fawaz + 4);
// number
const birthyear= 2001;
console.log(birthyear + 10);

// boolean

const fawazlikephnone = true;
const khalidlikesbans = false;

// truthly and falsey statement (null undefined 0 false)
console.log(Boolean(0));

// array

const alfa = ['fila', 'iwe',  idan, 'gentle', 28, true, ['nicki minaj', 'aliya', 'bewaji'], 'orange']
console.log(alfa)

// object

const moh = {
    behavior :'gentle', 
    appearance : 'moustache',
    lappy : 'dell',
    colors : [ 'white', 'yellow', 'purple'],
    relationship : false,
    school:{
        primary : 'oke aluko',
        secondary : 'tepaton',
        tetiary: 'unilorin',
    }
}

// big int
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
// BigInt()

// template string

idan = `${xeno} from 2005 to ${fawaz}`;

// concarination

const fawas = 'will you marry me? : ';
const rokibs = 'yes, i will';

console.log(fawas + rokibs);

// operators
// equality operator ==, ===, >==, <===, <, >, !, !=
// logical operators &&, ||,
// nullish coalescene ??, ?
// conditional statement if\else switch statement , tenary operator
// if else
if (5 > 12) {
    console.log('ori re pe')
}else{
    console.log('ori re pe')
}

if (15 > 12) {
    // throw new Error('lor shey iron condem')
}else{
    console.log('ori re pe')
}

// nested
if (3 >= 2) {
    console.log('first');  
}else if(2 === 2) {
    console.log('second');  
}else{
    console.log('third');  
}
// CODEING CHALLENGE
// There are 2 teams, team ewa and obe. They compete against each other 3 times. The winner with the highest average score wins the throphy!
// 1.calculate the average score for each team using the test data bellow to deetermine the winner of the compretition and print it in the console
// 2.compare the average team score and print  it in console

// dont forget that there can be a draw, test for that as well(draw means they have same average score)
//3. include the requirement of a minimum score of 100, with this rule a team only wins if it has a higher score than the other team 
// and at the same time a score of at least 100 points

// HINT: use a logical operator to test for minimum score, as well as multiple elseif blocks

// 4. minimum score also aplies to a draw !so a draw only happens when both teams have the same score and both have a score greater or equals 100 points , otherwise no team wins
// TEST DATA: obe score 96,108 and 89. ewa scores 88 91 and 110
// bonus round  TEST DATA: obe scores 97, 112 and 101. ewa scores 109 95 and 123
// bonus round  TEST DATA: obe scores 97, 112 and 101. ewa scores 109 95 and 106

// let a = 96;
// let b = 108;
// let c = 89;
// let sum =( a + b + c);

// let averageobe = sum / 3;

// console.log(averageobe)


// let d = 88;
//  let e = 91;
//  let f = 110;
//  let total =( d + e + f);

// let averageewa = sum / 3;

//  console.log(averageewa)

//  let lead = 0;

 


//  if (averageobe > averageewa && averageobe >= 100) {
//     lead = averageobe - averageewa;
//     console.log(`OBE WINS THE THROPHY leading by ${lead} `);
    
//  }else if (averageewa > averageobe && averageewa >= 100){
//     lead = averageewa - averageobe ;
//     console.log(`EWA WINS THE THROPHY leading by ${lead}`);

//  }else if(averageewa === averageobe && averageewa >= 100){
//     console.log('No one wins and the match is a DRAW')

//  }else{
//     console.log('No one wins because no one scores at least 100')
//  }

 
 
//  winner(96, 108, 89, 88, 91, 110)
//  winner(97, 112, 101, 109, 95, 123 )
//  winner(97, 112, 101, 109, 95, 106)


//   switch statement

const day = 'wednesday';
let occation = 0 ;
 
switch (day) {
    case 'monday':
        console.log('ojo aje');
        console.log('khalid je breakfast');
        break;
    case 'tuesday':
        console.log("gym day");
    case 'wednesday':
        occation = ('newcore day');
        break;
    case 'thursday':
        console.log('loru loru');
        console.log('dev practice');
        break;
    case 'friday':
        console.log('jumat');
        console.log('hosting day');
        break;
    case 'saturday':
    case 'sunday':
        console.log('weekend');
        break;
    default:
        console.log('enter a correct date');                          
}

console.log(occation)

// tenary operator

    const activity = (5 > 2) ? 'it is possible' : ' it is imposible';
    console.log(activity);

// function
// function declaration
// function expression
// Arrow

const lenth = 10;
const width = 5;

const area = lenth * width

console.log(area)





let days = 'wednesday';

if (days === 'monday') {
    console.log('ojo aje')

}else if (days === 'tuesday') {
    console.log('gym day')

}else if (days === 'wednesday') {
    console.log('newcore day')

}else if (days === 'thursday') {
    console.log('loruloru')

}else if (days === 'friday') {
    console.log('jumat')

}else if (days === 'saturday') {
    console.log('chilling')

}else if (days === 'sunday') {
    console.log('weekend')
}else{
    console.log('Enter valid day')
}


function events(days) {
    if (days === 'monday') {
        console.log('ojo aje')
    
    }else if (days === 'tuesday') {
        console.log('gym day')
    
    }else if (days === 'wednesday') {
        console.log('newcore day')
    
    }else if (days === 'thursday') {
        console.log('loruloru')
    
    }else if (days === 'friday') {
        console.log('jumat')
    
    }else if (days === 'saturday') {
        console.log('chilling')
    
    }else if (days === 'sunday') {
        console.log('weekend')
    }else{
        console.log('Enter valid day')
    }    
    
}

events('sunday')





// let ewa = average(88, 91, 110)
// let obe = average(96, 108, 89)

//  obe = average(97, 112, 101)
//  ewa = average( 109, 95, 123)

//  obe = average(97, 112, 101)
//  ewa = average( 109, 95, 106)

const result = document.querySelector('.result');
const resulttext = document.querySelector('.winnerresult');

const ewaone = document.querySelector('.ewaone')
const ewatwo = document.querySelector('.ewatwo')
const ewathree = document.querySelector('.ewathree')
const obeone = document.querySelector('.obeone')
const obetwo = document.querySelector('.obetwo')
const obethree = document.querySelector('.obethree')

const average = (a, b, c) => (a + b + c)/3;


function winner(averageewa, averageobe) {
    let lead, win;
   
 if (averageobe > averageewa && averageobe > 100) {
    lead = averageobe - averageewa;
    win = `OBE WINS THE THROPHY leading by ${lead} `;
    
 }else if (averageewa > averageobe && averageewa > 100){
    lead = averageewa - averageobe ;
    win = `EWA WINS THE THROPHY leading by ${lead}`;

 }else if(averageewa = averageobe && averageewa > 100){
    win = 'No one wins and the match is a DRAW';

 }else {
    win = 'No one wins because no one scores at least 100';
 }
    return win    
 }

result.addEventListener('click', function(e){
    let ewa = average(Number(ewaone.value) + Number(ewatwo.value) + Number(ewathree.value)) 
    let obe = average(+obeone.value + Number(obetwo.value) + Number(obethree.value)) 
    resulttext.textContent = winner(obe, ewa)
})

   
winner(0, 0)
// e.target.closest

document.querySelector('.house').innerHTML = 'HELLO'
 









// calc.addEventListener('click', function(e){
//     display.textContent = `THE AREA IS ${calcarea(+lent.value, +bret.value)}`
// })


// function exprwession

const hazz = function(){

}
hazz()

// Arrow Function


// const calcare = (len, bre) => {
//     const ans = bre * len;
//     return ans
// }

let len = 0 ;
let bre = 0 ;






// calcarea( 2,4)
// calcarea
// calcarea(2,6)

const lent = document.querySelector('.len')
const bret = document.querySelector('.bre')
const calc = document.querySelector('.ara')
const display = document.querySelector('.display')





      const calcarea =  function (le, br) {
        const ans = br * le;
        return ans;
      }



calc.addEventListener('click', () => calcarea(lent, bret));

calc.addEventListener('click' , function(e) {
    e.preventDefault
switch (+lent.value) {
    case +bret.value:
        display.textContent = `THE AREA OF THE SQUARE IS ${calcarea(+lent.value, +bret.value)}`
        break;
    default:
        display.textContent = `THE AREA OF THE RECTANGLE IS ${calcarea(+lent.value, +bret.value)}`
        break;
}

    
})



// AS FUNCTION DECLARERATION



// calc.addEventListener('click', function(e){
//     switch (lent.value) {
//         case bret.value:
//             display.textContent = `THE AREA OF THE SQUARE IS ${calcarea(+lent.value, +bret.value)}`
//             break;
//         default:
//             display.textContent = `THE AREA OF THE RECTANGLE IS ${calcarea(+lent.value, +bret.value)}`
//             break;
//     }
//    if (bret.value == lent.value) {
//           display.textContent = `THE AREA OF THE SQUARE IS ${calcarea(+lent.value, +bret.value)}`
    
//    } else {
//          display.textContent = `THE AREA OF THE RECTANGLE IS ${calcarea(+lent.value, +bret.value)}`
//    }
// })

    ;

// AS FUNCTION EXPRESSION

    // const expression = function (){
    //     if (bret.value == lent.value) {
    //                   display.textContent = `THE AREA OF THE SQUARE IS ${calcarea(+lent.value, +bret.value)}`
                
    //            } else {
    //                  display.textContent = `THE AREA OF THE RECTANGLE IS ${calcarea(+lent.value, +bret.value)}`
    //            }
    // }

 // AS ARROW FUNCTION
 
//  const arrow = () => {
//     if (bret.value == lent.value) {
//         display.textContent = `THE AREA OF THE SQUARE IS ${calcarea(+lent.value, +bret.value)}`
  
//  } else {
//        display.textContent = `THE AREA OF THE RECTANGLE IS ${calcarea(+lent.value, +bret.value)}`
//  }
//  }
 
//  calc.addEventListener('click', arrow)
 

 const radius = document.querySelector('.radius')
 const circleans = document.querySelector('.circleans')
 const calccircle = document.querySelector('.calccircle')
 const circle = document.querySelector('.circle')

circle.st

 
   const circumfrence =(radai) => { 
  const radais =  ((22/7)*2)*radai;
  return radais;
  
}

const diametre = function(rad){
    const diam = rad*2;
    return diam
}
    
    const circlearea = () => {
        
        circleans.textContent = `The circumfrence of the circle is ${circumfrence(+radius.value)}`
    }
    
    
    calccircle.addEventListener('click', function(e){
        circleans.textContent = `The circumfrence of the circle is ${circumfrence(+radius.value)}`
        const me = +radius.value;
      if (e.target.tagName === 'BUTTUN') {
        circle.style.height = `${me}`
      }  
        // calccircle.closest(circle).style.height = `${me}`
        // calccircle.closest(circle).style.width = `${me}`
    })


    