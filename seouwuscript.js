// let today = new Date();
function myname() {
    let userAnswer = document.getElementById("mynameinput").value; // 사용자가 입력한 답
  
    // 정답과 비교
    if (userAnswer === "SEOWOO") {
        alert("맞았습니다!");}
    if (userAnswer === "서우") {
        alert("맞았습니다!");}
    if (userAnswer === "seowoo") {
        alert("맞았습니다!");
    } else {
        alert("틀렸습니다!");
    }
  }
  function catname() {
    let userAnswer = document.getElementById("catnameinput").value; // 사용자가 입력한 답
  
    // 정답과 비교
    if (userAnswer === "설") {
        alert("맞았습니다!");}
    if (userAnswer === "설이") {
        alert("맞았습니다!");
    } else {
        alert("틀렸습니다!");
    }
  }