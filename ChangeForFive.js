 
/* Steps to make change
   I am given 5 dollars for a purchase of $2.33, compute how much change I need to give back.  5.00 - 2.33 = 2.67
   let change = 2.67
   do everything in cents or whole numbers like 100 cents = 1.00 becaause computers don't round very well.
 
   let coins = {dollar:0, quarter:0} do this for nickle and dime and so on.  I won't have pennys becasue the left over amount will be in pennys.  No penny loop.
   first time through the loop it will replace 1 with the object, the second time it will replace 2.  This is how many dollars are in the change variable. 
   We are creating an object called coins with the property of dollar and its value is 0.
  
   while 'change' > 100 then I have a loop, which will
       incriment the number of dollar bills to return. Is there enough change to remove at least one dollar
           coins.dollar++
               this increase the dollar property by 1.
       update 'change' or 100 cents
           change = change - 100
           change -= 100
           This subtracts 100 and updates the change variable
       each time through the loop I'm testing for one dollar
  
   go through all bills starting at the biggest and working my way down.  This discribes the rest of the process
   Ask the questiion does this bill fit?
   Does 1 fit?
   Once I find the bills that fit and repeat the process for coins
   Does 25c fit?
   Does 10c fit?
   Does 5c fit?
   Does 1c fit?
   What if I can return 2 $1 dollar bills?
   The variable called "change" has the amount I'm returning (2.67)
       As we figure a bill to return, we subject that amount from the variable "change" and so "change" represents the amount we haven't determined coins for yet.
   return coins is the last statement
      
*/
//Check my mentor notes for how to go about starting the exercise.
 
/*
The price of the purchase would have it's own function, price = x
Make a variable with an array of the bill and coin values and then loop through them
   looping through arrays lesson
*/
 
 
function makechange(amount) { // 1
    let change = 500 - amount * 100 // 2
    let coins = {dollar:0, quarter:0, dime:0, nickle:0} // 3
    while (change > 100) { // 4
        coins.dollar++ // 5
        change -= 100; // 6
    }
    while (change >= 25) {
        coins.quarter++
        change -= 25;
    }
    return coins;
 }
 /*
  1.  makechange is the function name.  amount is the amount of the purchase such as 2.67.
 */
  
 /*
  2.  change is the function has the amount I'm returning (2.33)
 */
  
 /*
  3.  coins is the object with the different bills/coins I'm using in my loop.  The object’s properties only need to keep track of how many of each bill/coin there are.
 */
  
 /*
   4.  A while loop with the parameter change (the amount I'm ruturning 2.33) which is greater than 100 since a dollar is 100 cents.  It is checking if there is more than 100 cents.
 */
  
 /*
  5.  This increases the dollar property by 1.
 */
  
 /*
  6.  This subtracts 100 and updates the change variable.  It is checking if change (the amount I'm returning 2.33) is equal to the amount of 100 cents.
 */
  
  
  
  
 function getPrice() {
    var price = 1.56; //declare the variable and to have a default price if nothing is specified in the price URL
    var queryString = location.search;  // parameters passed in the URL, it contains everything in the URL after the ? and parameters
    var params = new URLSearchParams(queryString);  // parse them, to break this up into an object
    if (params.has('price')) { //checks to see if a parameter called 'price' is passed or not
        price = Number( params.get('price') );  // URL params are strings, this only gets exicuted if a parameter called price is found in the URL, also I convert 'price' to a number using the number function
    }
    return price;
 }
  
 function makechange(amount) {
    var change = 500 - amount * 100;
    var coins = {dollar:0, quarter:0, dime:0, nickle:0, penny:0};
    while (change >= 100) {
        coins.dollar++;
        change -= 100;
        }
    while (change >= 25) {
        coins.quarter++
        change -= 25;
        }
    while (change >= 10) {
        coins.dime++
        change -= 10;
    }
    while (change >= 5) {
        coins.nickle++
        change -= 5;
    }
    coins.penny = change; // .penny = whatever is leftover from change after all the loops
    return coins; 
 }
 var coins1 = makechange(2.33);
 console.log(coins1);
  
 function printResults(amount, coins) {
    console.log(amount);
    console.log('Number of dollar bills: ' + coins.dollar); // if one side is a string it will convert coins.dollar to a string when I have the + sign.
    console.log(`Number of quarters: ${coins.quarter}`); // this is another way to include a variable in a string, one or more variables as part of the string.  Use the backtick button (under the esc button)
    console.log('Number of dimes: ' + coins.dime);
    console.log('Number of nickles: ' + coins.nickle);
    console.log('Number of pennies ' + coins.penny);
 }
  
  
  
 console.log(printResults); //this needs to be inside the makechange function because amount is not a global property and just exists inside the function.
   
  
  
 // amount is the amount of the purchase
 // amount * 100 is making amount in cents
 // the object will be used inside the function and be returned when I'm done computing
 //
 // this will print what is on the coins1 variable
 /* next add another while loop for quarters and dimes and such /*
 // calling the function
 /*
 right of = is returning the function with the parameter of 2.33 which will be computed by the function.
 coins1 is saving what the function will return
 */
 