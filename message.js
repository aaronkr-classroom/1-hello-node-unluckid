// messages.js
"use strict";

// @TODO: 3개의 문자열 messages 배열 만들어 주세요.
let messages = ["안녕", "하루", "커피"];
// @TODO: messages 배열에서 각 메시지를 인쇄하는 함수를 만들어 주세요.
let printMsgs = () =>{
  for (let count = 0; count <= messages.length-1; count++) {
    console.log(messages[count]);
}
};

printMsgs();
