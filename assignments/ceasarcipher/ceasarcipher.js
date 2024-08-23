function decodeStr(itemLoc){
     let outStr = ''
    itemLoc.forEach((item)=>{
        outStr += String.fromCharCode(97+item-1)
    })
    return outStr;
}

function getStrOutput(outSplit,uppChars){
    outSplit.forEach((item,index)=>{
        if(uppChars.includes(index)){
            outSplit[index]=outSplit[index].toUpperCase()
            }
        })
    return outSplit.join('')
}
function ceasarcipher(str,num){
    let splitStr = str?.split('');
    let uppChars = []
    let itemLoc = []
    splitStr?.forEach((item,index)=>{
        let regex = /\W/;
        let actualLoc;
        if(item === item.toUpperCase()){
            uppChars.push(index)
        }
        if(regex.test(item)===false){
            actualLoc = (item.toLowerCase().charCodeAt(0)-97+1) + num
            if(actualLoc <= 0){
                actualLoc += 25;
            }
            else if(actualLoc > 25){
                actualLoc -= 26
            }
    }else{
        actualLoc = item.toLowerCase().charCodeAt(0)-97+1
    }
        itemLoc.push(actualLoc)
    })
    let outSplit = decodeStr(itemLoc).split('')
    let res = getStrOutput(outSplit,uppChars);
    return res;
}
console.log(ceasarcipher('heLlo',3))
module.exports = ceasarcipher;