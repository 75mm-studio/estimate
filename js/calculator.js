//function that display value 
function dis(val) 
{ 
    document.getElementById("result").value+=val 
}

//check the value before solve
function check(){
    if (!/^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/.test(document.getElementById("result").value)) {
        alert("100 + 50 + 35의 형식으로 입력해주세요.")
        return
    }
}

//function that evaluates the digit and return result 
function solve() 
{
    //regular expression으로 input 체크
    let input = document.getElementById("result").value
    let rmWhiteSpace = input.replace(/\s/g,'')
    if (!/^[0-9]+(\+[0-9]+)*$/.test(rmWhiteSpace)) {
        alert("수와 +부호를 이용해 입력해주세요. ex)100 + 45 + 120")
        return
    }
    let x = document.getElementById("result").value 
    let y = eval(x)
    document.getElementById("result").value = y 
} 

// clr 함수는 계산기에서 C 버튼을 눌렀을 때 실행되는 함수이다.
function clr() {
    // 기존 총 프레임수를 초기화 한다.
    document.getElementById("totalFrame").innerText = "0";
    // 계산기의 결과를 초기화 한다.
    document.getElementById("result").value = "0";
} 