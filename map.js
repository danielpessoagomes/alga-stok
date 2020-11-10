const names = ['Daniel', 'Heitor', 'Jessica']

const namesWithIndex = names.map((name, index) => {
    console.log(name, index)
    return name + index;
})

console.log(namesWithIndex);