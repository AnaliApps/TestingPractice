function getMin(ar){
    let min = ar[0];
    ar.forEach(item=>{
        if(item < min){
            min = item;
        }
    })
    return min;
}
function getLength(ar){
    return ar.length;
}
function getAverage(ar){
    let length = getLength(ar)
    let sum = ar.reduce((prev,curr)=>prev + curr,0)
    let average = sum/length;
    return average;
}
function getMax(ar){
    let max = ar[0];
    ar.forEach((item)=>{
        if(item > max){
            max = item;
        }
    })
    return max;
}
function analyzeArray(arr){
    arr = [1,8,3,4,2,6]
    return {
        average:getAverage(arr),
        min:getMin(arr),
        max:getMax(arr),
        length:getLength(arr)
    };
}

module.exports = {analyzeArray};