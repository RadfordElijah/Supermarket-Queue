function queueTime(customers, n) {
    const numRegisters = [];
    for (let i = 0; i < n; i++) {
        numRegisters[i] = 0;
    }

    for (let i = 0; i < customers.length; i++) {
        numRegisters[0] += Number(customers[i]);
        numRegisters.sort((a, b) => a - b);
    }
    return numRegisters.sort((a, b) => b - a)[0];
}


/*  TEST CASES

    queueTime([], 1);
    queueTime([15,16,30,50,25,49,46,19,10,31,42,48,29,18,19,25,50,12,34,28,18,32,45,22,45]
    , 3);
    queueTime([1,2,3,4], 1);
    queueTime([2,2,3,3,4,4], 2);
    queueTime([1,2,3,4,5], 100)
*/
