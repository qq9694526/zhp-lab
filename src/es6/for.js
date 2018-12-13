// const data = new Set(["a", "b", "c"]);
// const data = new Map([
//     ['name', '张三'],
//     ['title', 'Author']
// ]);

// =====for循环
// const data = ["a", "b", "c", "d"];
// for (let i = 0, len = data.length; i < len; i++) {
//   console.log(i);// 0 1 2 3
//   console.log(data[i]);// a b c d 
// }

// =====forEach
// const data = ["a", "b", "c", "d"];
// data.forEach((v, i) => {
//   console.log(v);// a b c d 
//   console.log(i);// 0 1 2 3
// })

// =====for...in
// const data = { key1: "a", key2: "b", key3: "c" };
// for (let key in data) {
//   console.log(key); // key1 key2 key3 
//   console.log(data[key]); // a b c   
// }
// const data = ["a", "b", "c", "d"];
// for (let index in data) {
//   console.log(index); // 0 1 2 3  
// }

// =====for...of
// const data = ["a", "b", "c", "d"];
// for (let item of data) {
//   console.log(item); // a b c d  
// }


//筛选出包含_mgt的项
// const limits = ["member_mgt", "member_audit", "recommend_mgt", "dictionary_mgt"]
// const result = limits.filter(item => {
//   return item.indexOf("_mgt") > -1
// })
// console.log(result)// [ 'member_mgt', 'recommend_mgt', 'dictionary_mgt' ]

//数据转大写
// const limits = ["member_mgt", "member_audit", "recommend_mgt", "dictionary_mgt"]
// const result = limits.map(item => {
//   return item.toLocaleUpperCase()
// })
// console.log(result)// [ 'MEMBER_MGT','MEMBER_AUDIT','RECOMMEND_MGT','DICTIONARY_MGT' ]

//判断数组中是否有member_mgt
// const limits = ["member_mgt", "member_audit", "recommend_mgt", "dictionary_mgt"]
// const result = limits.some(item => {
//   return item === "member_mgt"
// })
// console.log(result)// true
//这个例子其实等同于  limits.includes("member_mgt")

//判断数组中的值是否均为字符串
// const limits = ["member_mgt", "member_audit", "recommend_mgt", "dictionary_mgt"]
// const result = limits.every(item => {
//   return typeof item === "string"
// })
// console.log(result)// true
