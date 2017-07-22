const object = {}; //空のオブジェクト.
object.color = "緑色";
console.log(object.color); // 緑色
object["color of the earth"] = "黄色";
console.log(object["color of the earth"]); // 黄色
console.log(object.size); // undifined
// console.log(object[color]); // error

/** Symbol */
const SIZE = Symbol();
object[SIZE] = 10;
console.log(object[SIZE]);
console.log(object);