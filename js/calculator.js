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
    if (!/^[0-9]+(\+[0-9]+)*$/.test(document.getElementById("result").value)) {
        alert("수와 +부호를 이용해 입력해주세요. ex)100 + 45 + 120")
        return
    }
    let x = document.getElementById("result").value 
    let y = eval(x)
    document.getElementById("result").value = y 
} 

//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "" 
} 