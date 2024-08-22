function reverseString(str){
    let splitStr = str?.split('')
    let res = ''
    for(let i =splitStr?.length-1;i>=0;i--){
        res += splitStr[i];
    }
    return res;
}
module.exports = reverseString;