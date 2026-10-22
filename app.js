function show(num) {

    let largest = -Infinity
    let second=-Infinity 
    for (let i = 0; i <= num[i]; i++){
        if (num[i] > largest) {
            second=largest
            largest=num[i]
        }
        else if(second < num[i]){
            second=num[i]
        }
        
    }
    return second
    
}

let num = [1, 2, 3, 4,43,23,2323]
let ans=show(num)
console.log(ans)