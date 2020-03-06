// dis함수는 계산기의 디스플레이틀 업데이트 한다.
function dis(val) { 
    document.getElementById("calHistory").innerText += val

    // 계산기의 결과값에 오직 0만 있다면 빈문자열로 만들고 시작한다.
    if (document.getElementById("calResult").innerText === '0') {
        document.getElementById("calResult").innerText = "";
    }
    // 계산기 History에 +가 없다는 것은 최초 숫자만 있다는 뜻이다.
    // + 가 존재하는지 체크하고 없을때 calResult에 입력숫자를 넣는다.
    if (!document.getElementById("calHistory").innerText.includes("+")) {
        document.getElementById("calResult").innerText += val
    }
}

// add 함수는 계산기에서 + 버튼을 눌렀을 때 실행되는 함수이다.
function add() { 
    document.getElementById("calResult").innerText = eval(document.getElementById("calHistory").innerText);
    document.getElementById("calHistory").innerText += "+"
}

// clr 함수는 계산기에서 C 버튼을 눌렀을 때 실행되는 함수이다.
function clr() {
    // 기존 총 프레임수를 초기화 한다.
    document.getElementById("totalFrame").innerText = "0";
    // 계산기의 히스토리를 초기화 한다.
    document.getElementById("calHistory").innerText = "";
    // 계산기의 결과를 초기화 한다.
    document.getElementById("calResult").innerText = "0";
}

//calculator hotkey
document.onkeydown = function(e) {
    if(event.target.tagName === "INPUT"){
        return
    }
    if(event.target.tagName === "BUTTON"){
        return
    }
    if (e.which == 49) {
        dis('1')
    } else if (e.which == 50){
        dis('2')
    } else if (e.which == 51){
        dis('3')
    } else if (e.which == 52){
        dis('4')
    } else if (e.which == 53){
        dis('5')
    }else if (e.which == 54){
        dis('6')
    }else if (e.which == 55){
        dis('7')
    }else if (e.which == 56){
        dis('8')
    }else if (e.which == 57){
        dis('9')
    }else if (e.which == 48){
        dis('0')
    }else if(e.shiftKey && e.which == 187){ //'+' button
        add()
    } else if(e.which == 13){ //'=' button
        evaluateCal()
    } else if(e.which == 67 || e.which == 99){ // 'C' button
        clr()
    }
};