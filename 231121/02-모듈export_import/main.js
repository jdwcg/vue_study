import { conHello, fnPlusNumbers } from "./named.js";
console.log(conHello, "이름으로 내보내기입니다.");
console.log("1+2=", fnPlusNumbers(1, 2));

import * as myLibray from "./named.js";
console.log(myLibray.conHello, "*을 사용한 이름으로 내보내기입니다.");
console.log("3+4=", myLibray.fnPlusNumbers(3, 4));

import fnMyfunction from "./default.js";
console.log("안녕하세요! ㅣ본으로 내보내기입니다.");
console.log("5+6=", fnMyfunction(5, 6));
