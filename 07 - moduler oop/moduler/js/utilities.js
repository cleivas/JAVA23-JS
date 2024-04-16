export function sortDescending(arr){
    const newArr = [...arr];
    newArr.sort();
    return newArr;
}

export function sortAscending(arr){
    const newArr = [...arr];
    newArr.sort();
    newArr.reverse();
    return newArr;
}

