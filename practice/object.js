const obj1={
    key1:"anupam"
}

const obj2={
    key2:"zope"
}

// const obj3=obj1+obj2
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3)