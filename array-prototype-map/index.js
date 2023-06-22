function mapping(arr) {
    const mappedArray = [];
    for ( i = 0; arr.length > i; i++) {
        arr.push(i)
    };
    arr.map((i)=> { i * 10})
    console.log(mappedArray)
    return mappedArray
}
