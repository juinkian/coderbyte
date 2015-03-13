// coin_change
// return the minimum number of coins needed to return "amount" of change

function coin_change_greedy(amount, denoms) {
    var coinsNum;
    var sum = 0 ;
   // var coinsArray;
    denoms.sort(function(a,b){ return b-a; });
    for (var i =0 ; i < denoms.length ; i++){
        coinsNum = Math.floor(amount/denoms[i]) 
       // coinsArray.push(coinsNum);
        amount -= coinsNum * denoms[i];
        sum += coinsNum;
    }
    
    return sum;
}

var numcalls = 0;
var memory = {};

function coin_change(amount, denoms) {
    numcalls++;
    
    var isFound = false;
    var minNum = Infinity;
    var tempNum = 0;
    
    if (memory[amount]) {
        return memory[amount];
    }
    
    // for ( var i = 0 ; i denoms.length; i++){
    // }
    
    // 1) base case
    //   - simplest version of this problem
    //   - where the recursion ends
    //   - how to come up with a good base case:
    //      - what are the simplest non-trivial outputs that this function could have?
    //       e.g 0, 1...

    isFound = denoms.indexOf(amount) !==-1;

    if (isFound){
        return 1;
    } else {
        for ( var i = 0 ; i < denoms.length ; i++){
            if (amount > denoms[i]) {
                tempNum = 1 + coin_change(amount-denoms[i],denoms);
                if (tempNum < minNum){
                    minNum = tempNum;
                }
            }
        }
        
        memory[amount] = minNum;
        
        return minNum;
        
        // [4,3,1]
        // var coin_needed_if_4_used_first = 1 + coin_change(amount-4, denoms);
        // var coin_needed_if_3_used_first = 1 + coin_change(amount-3, denoms);
        // var coin_needed_if_1_used_first = 1 + coin_change(amount-1, denoms);
    }
           
    // 2) recursive case
    //     - calling the function inside itself
    //     - each call should make the problem simpler, toward the base case
    //     - have some mechanism to combine base cases into the final answer
}

// memoization
//  - there is a balance between memory consumed and run time
 
console.log(coin_change(157, [1, 3, 4]));
console.log(numcalls);

