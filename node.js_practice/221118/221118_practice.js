let obj = {
    key1: 'one',
    key2: 'two'
};
let { key1: newKey1, key2, key3 = 'three'} = obj;
console.log("key1: ", key1);
console.log("newKey1: ", newKey1);
console.log("key2: ", key2);
console.log("key2: ", key2);

let {a,b} = {a: 10, b:20};
console.log("a: ", a);
console.log("b: ", b);

let {c, d, ...rest} = {c: 30, d:40, e:50, f:60};
console.log("c: ", c);
console.log("d: ", d);
console.log("rest : ", rest);

class Cat {
    constructor(name, age){
        //속성
        this.name = name;
        this.age = age;
    }
    //메소드
    mew(){
        console.log("야옹");
    }
    eat(){
        console.log("먹이를 먹습니다.")
    }
}
let cat1 = new Cat('나비', 1);
let cat2 = new Cat('나비', 2);``

cat1.mew();
cat1.eat();

cat2.mew();