export function frequencyCountString(str: string) {
    let strArr = str.split('');
    let strMap = new Map();
    strArr.forEach(element => {
        if(strMap.has(element)){
            strMap.set(element, strMap.get(element) + 1);
        }else{
            strMap.set(element, 1);
        }
    });
    return strMap;
}