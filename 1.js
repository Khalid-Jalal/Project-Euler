console.log(solve(1000));

function solve(range){
    const xs = [...Array(range).keys()];
    const numbers = xs.filter(x => ((x % 5) == 0) || (x % 3) == 0);
    return numbers.reduce((x,y) => x + y);
}

