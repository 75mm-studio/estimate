// dis함수는 계산기의 디스플레이틀 업데이트 한다.
function dis(val) { 
    document.getElementById("calHistory").innerText += val
}

// clr 함수는 계산기에서 C 버튼을 눌렀을 때 실행되는 함수이다.
function clr() {
    // 기존 총 프레임수를 초기화 한다.
    document.getElementById("totalFrame").innerText = "0";
    // 계산기의 결과를 초기화 한다.
    document.getElementById("calHistory").innerText = "";
} 