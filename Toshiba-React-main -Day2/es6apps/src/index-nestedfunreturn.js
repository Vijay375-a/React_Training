//return function from another function.

function outer(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return `${a} ${b} ${c} ${d}`
            }
        }
    }
}
// const result = outer()
// const a1 = result();
const res = outer(1)(2)(3)(4)
console.log(res)

let myouter = (a) => {
    return (b) => {
        return (c) => {
            return (d) => {
                return `${a} ${b} ${c} ${d}`
            }
        }
    }
}
let myres = myouter(1)(2)(3)(4)
console.log(myres)

myouter = a => b => c => d => `${a} ${b} ${c} ${d}`

myres = myouter(1)(2)(3)(84)
console.log(myres)