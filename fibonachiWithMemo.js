// Fibonachi number with memoization

const fibWithMemo = (n) => {
    if (!fibWithMemo.answers) {
        fibWithMemo.answers = {};
    }

    if (fibWithMemo.answers[n] !== undefined) {
        return fibWithMemo.answers[n];
    }

    if (n < 3) {
        return fibWithMemo.answers[n] = 1;
    }

    return fibWithMemo.answers[n] = fibWithMemo(n-1) + fibWithMemo(n-2);
}

// ######### For testing #########
// assert(fibWithMemo(3) === 2, 'n = 3, fib = 2');
// assert(fibWithMemo(10) == 55, 'n = 10, fib 55');
// assert(fibWithMemo.answers[10] == 55, 'Memoization is working!');