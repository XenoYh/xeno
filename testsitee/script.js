'use strict';

///////////////////////////////////////////////
///////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Rasheed Hassan',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (move, i) {
    const type = move > 0 ? `deposit` : `withdrawal`;
    const html = `
        <div class="movements__row">
              <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
              <div class="movements__value">${move}€</div>
        </div>

    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

const calcDisplayBalance = function (accs) {
  accs.balance = accs.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${accs.balance}€`;
};
// calcDisplayBalance(account1.movements)

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements)

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);
console.log(accounts);

const updateUI = function (acc) {
  // display Movements
  displayMovements(acc.movements);

  // display Balance
  calcDisplayBalance(acc);

  // display summary
  calcDisplaySummary(acc);
};

//Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // prevent
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and Message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    receiverAcc &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1)) {
    //
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    // console.log(accounts)
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE (does not mutate the original array)
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// // SPLICE (mutate the original array)
// // console.log(arr.splice(2));
// // console.log(arr)
// console.log(arr.splice(-1))
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

// // REVERSE (mutate the original array)
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = (arr.concat(arr2));
// console.log(letters);

// //JOIN
// console.log(letters.join('-'));

// const aarr = [23, 11, 64];
// console.log(aarr[0]);
// console.log(aarr.at(0))

// // getting last array element;
// console.log(aarr[aarr.length - 1]);
// console.log(aarr.slice(-1)[0])
// console.log(aarr.at(-1))

// console.log('jonas'.at(0))
// console.log('jonas'.at(-1))

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const [index, movement] of movements.entries()){
//   if (movement > 0){
//     console.log(`Movement ${index + 1}: You deposited ${movement}`)
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// }

// console.log(`using forEach`)

// // forEach Method
// movements.forEach(function(movement, index, array){
//   if (movement>0){
//     console.log(`Movement ${index + 1}: You deposited ${movement}`)
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// })

// // forEach on Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`)
// })

// //forEach on set

// const currencyUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currencyUnique)
// currencyUnique.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`)
// })

// challenge

// const checkDogs = function (dogsJulia, dogsKate){
//   // const shallowJuila = dogsJulia.slice(1, -2);
//   // OR
//   const shallowJuila = dogsJulia.slice();
//   shallowJuila.splice(0, 1);
//   shallowJuila.splice(-2);
//   console.log(shallowJuila);
//   const corrected = shallowJuila.concat(dogsKate);
//   console.log(corrected);
//   corrected.forEach(function (dog, i){
//     const thedog = dog >= 3 ? `adult and is ${dog} years old` : 'is still a puppy '
//     console.log(`Dog number ${i + 1} is ${thedog}`)
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// MAP method

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov){
//   return mov * eurToUsd
// });

// const movementsUSD = movements.map(mov => mov * eurToUsd)

// console.log(movementsUSD);

// const movementDescription = movements.map((mov, i, arr) =>
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited': `withdrew ${Math.abs(mov)}`}`
// );
// console.log(movementDescription);

// FIlTER METHOd

// const deposit = movements.filter(function(mov){
//   return mov > 0;
// });

// const withdra = movements.filter(function(mov){
//   return mov < 0;
// })

// console.log(deposit, withdra);

// // REDUCE method

// // accumulator acc is like a snowball

// const balanc = movements.reduce(function(acc, curr, i, arr){
//   console.log(`iteration ${i} : ${acc}`);
//   return acc + curr;
// }, 0);

// console.log(balanc);

// using reduce to find the highest value in an array
const highest = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(highest);

// challenge

// const calcAverageHumanAge = function(ages){
//   const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
//   // const humanAge = ages.map(function (age){
//   //   if(age <= 2){
//   //    return 2 * age;
//   //   } else {
//   //    return 16 + age * 4;
//   //   }
//   // })
//   console.log(humanAge)

//   const olderDogs = humanAge.filter(human => human >= 18);
//   // const olderDogs = humanAge.filter(function(human){
//   //   return human >= 18
//   // })

//   console.log(olderDogs)

//   const humanAgeAverage = olderDogs.reduce(function(acc,curr){
//     return acc + curr
//   },0) / olderDogs.length;
//   // console.log(humanAgeAverage)
//   return humanAgeAverage;
// };

const calcAverageHumanAge = ages => {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(human => human >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// CHAINING

const eurToUsd = 1.1;
// const totalDepositedUSD = function (movements){
//  return movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0)
// }

// or
const totalDepositedUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// const ans = totalDepositedUSD(account1.movements);
// console.log(ans)

console.log(totalDepositedUSD);

// FIND METHOD

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Sarah Smith');
console.log(account);

let ans;
for (const acc of accounts) {
  ans = acc.owner === 'Sarah Smith' && acc;
}

console.log(ans);

const xeno = movements.map(move => move * 3);
console.log(xeno);

let sum = 0;
for (const add of xeno) {
  sum = sum + add;
  console.log(sum, add);
}

// findIndex method returns the index of the particular condition;
const indexly = movements.findIndex(mov => mov === 70);
console.log(indexly);

// some and every method
// some method; its used to find any condition and returns a boolean;
const testing = movements.some(mov => mov > 300);
console.log(testing);

// every method ; its used to find all condition and returns a boolean;
movements.some(mov => mov > 300);
console.log(testing);

// flat and flatMap method (turns a nested array to a single array)
// flat method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// most preferred.
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
// OR flatMap
// const overallBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

//Sort method ; arranges the elements in an array in a certain order; its mutates the original array
const owners = ['jonas', 'zach', 'adam', 'martha'];
console.log(owners.sort());

// console.log(movements.sort()) // sort doesnt sort numbers by default

// Number array sorting
// return < 0; (keep order)
// return > 0; (switch order)

// Ascending
// movements.sort((a,b)=>{
//   if(a > b) return 1;
//   if(a < b) return -1;
// });
// or
// movements.sort((a,b)=> a-b)
// console.log(movements);

// descending
// movements.sort((a,b)=>{
//   if(a > b) return -1;
//   if(a < b) return 1;
// });
// or
// movements.sort((a,b)=> b-a)
// console.log(movements)

console.log(movements.slice());

// creating and filling up array programatically;
const arra = [1, 2, 3, 4, 5, 6, 7];

// Empty array + fill method
const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
// x.fill(1);
console.log(x);

arra.fill(23, 2, 6);
console.log(arra);
//Array from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(z);

const v = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6) + 1);
console.log(v);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

// sort Method

const stringArray = [
  'hassan',
  'khalid',
  'phelo',
  'tolani',
  'muiz',
  'xeno',
  'nifemi',
  'rasheed',
];
console.log(stringArray.sort());

const movemento = [200, 450, -400, 3000, -650, -130, 70, 1300];

const numberArray = [...movemento];
// numberArray.sort((a, b) => {
//   if(a < b) return -1;
//   if(a > b) return 1
// });
// ascending order
numberArray.sort((a, b) => a - b);
// descending order
numberArray.sort((a, b) => b - a);
console.log(numberArray);

// more practices
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);
// or
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? sum.deposits += cur : sum.withdrawals += cur;
      sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title

const convertTileCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase)
};
console.log(convertTileCase('this is a nice title'))
console.log(convertTileCase('this is a LONG title but Not too long And clumsy'))
console.log(convertTileCase('and Not too long And clumsy'));

// challenge 
// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
// 1.
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));

// 2.
const sarahDog = dogs.find(dog => dog.owners.some(owner => owner === 'Sarah'));
const appetite = (sarahDog.curFood > sarahDog.recommendedFood) ? 'eating too much' : 'eating too little';
console.log(sarahDog, appetite)

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle, ownersEatTooMuch)

// 4.
const toString = "Matilda and Alice and Bob's dogs eat too much!";
const muchEat = ownersEatTooMuch.join(' and ') + ' dogs eats too much';
const littleEat = ownersEatTooMuch.join(' and ') + ' dogs eats too little';
console.log(muchEat, littleEat);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood)) 

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10);
console.log(dogs.some(dog => dog.curFood > (dog.recommended * 0.90) && dog.curFood < (dog.recommended * 1.10))) 

// 7.
const okFood = dogs.filter(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10));
console.log(okFood);

// 8.
const shallowDog = dogs.slice().sort((a,b) => a.recommendedFood-b.recommendedFood);
console.log(shallowDog);