/** 改行のエスケープ */
const manyLine = "Morning\
Noon";
console.log(manyLine);

/** 改行 */
const manyLine2 = "Morning\n\
Noon"
console.log(manyLine2);

const backQuote = `Morning
    Noon`;
console.log(backQuote);

/** 文字列連結を使用した改行 */
const multiLine = "Morning\n" +
      "Noon\n" +
      "Night";
console.log(multiLine);

/** 文字列連結例題 */
const point = 200;
const sentence = '鈴木君の点数は:' +
         `${point}点です\n` +
         "鈴木君天才！！\n" +
         '鈴木君神！';
console.log(sentence);
