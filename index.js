const input = (n = 2) => n < 2 ? (build(2)) : (n > 20 ? (build(20)) : (build(n))); // 2 < n < 20

// utils
const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
String.prototype.insertAt = function (index, string) {
    return this.substr(0, index) + string + this.substr(index);
}
// three builder
const build = (n) => {
    let frst_step = true;
    for (let i = 0; i < n; i++) {
        let star = '*';
        let space = '_';
        let toy = 'o';

        for (let j = 1; j <= i; j++) {
            star = star + '**';
        }

        let spaces = space.repeat(n - i - 1);
        star = spaces + (frst_step ? star : star.insertAt(rnd(0, star.length), toy).substr(0, star.length)) + spaces;
        frst_step = false;
        console.log(star);
    }
    return 'Done!'
}