const LinkedList = require('./TwoWayLinkedList')

const list = new LinkedList()

list.append('a', {data: 'I am a a'})
list.append('c', {data: 'I am a c'})
list.append('b', {data: 'I am a b'})
console.log(list.toArray({value: true, back: false}))
list.swap('a', 'b')
console.log(list.toArray({value: true, back: false}))

console.log(list.getDataByValue('a'))

// list.append('abc', {data: 'abc'})
// // list.append(123)
// // list.append(undefined)
// // list.append(function() {})
// // list.preappend('preappend')
// list.preappend('First!(last)',{data: 'First!(last)'})


// console.log(list.toArray({value: true, back: false}))


// list.appendAfter('new', 5, {data: 'new'})

// console.log('size:', list.size)


// list.appendBefore('before', 1, {data: 'before'})
// list.insertBefore('before before', 'before', {data: 'be before\'s father '})

// // console.log(list.toArray({value: true, back: false}))

// list.appendAfter('new', 3, {data: 'new'})

// console.log('size:', list.size)

// console.log(list.toArray({value: true, back: false}))

// console.log(list.getDataByIndex(0))
// console.log(list.getDataByValue('new'))

// list.removeByIndex(0)
// list.removeByValue('new')
// console.log(list.toArray({value: false, back: false}))
// console.log('size:', list.size)

// list.swap('before', 'abc')

// console.log(list.toArray({value: false, back: false}))

