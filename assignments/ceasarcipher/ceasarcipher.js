function ceasarcipher(str){
    let splitStr = str?.split('');
    let outStr = ''
    let uppChars = []
    let itemLoc = []
    splitStr?.forEach((item,index)=>{
        if(item === item.toUpperCase()){
            uppChars.push(index)
        }
        let regex = /\W/;
        let actualLoc;
        if(regex.test(item)===false){
            actualLoc = (item.toLowerCase().charCodeAt(0)-97+1) + 3
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
    itemLoc.forEach((item)=>{
        outStr += String.fromCharCode(97+item-1)
    })
    let outSplit = outStr.split('');
    outSplit.forEach((item,index)=>{
        if(uppChars.includes(index)){
            outSplit[index]=outSplit[index].toUpperCase()
            }
        })
    return outSplit.join('')
}
// let regex = /\W/
// console.log(regex.test('?'))
// console.log(ceasarcipher('heLLo?'))
module.exports = ceasarcipher;