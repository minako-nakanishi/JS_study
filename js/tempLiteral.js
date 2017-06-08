/** テンプレートリテラル */
let temp = 19.5;
const sentence = "現在の温度は" + temp + "℃です";
console.log(sentence);

/** バッククオートで囲むと以下のように書ける */
const sentence2 = `現在の温度は${temp}℃です`; // ${...}で囲むとその変数や値が文字列に挿入される。
console.log(sentence2);
