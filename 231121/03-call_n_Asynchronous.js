//콜백함수실행
fnMsg(fnHello);
//콜백함수는 3 출력 후 실행
function fnMsg(fnCallback) {
  console.log("1");
  fnCallback();
  console.log("3");
}

function fnHello() {
  setTimeout(() => {
    console.log("2"), 1000;
  });
}
