//function that display value 
function dis(val) 
{ 
    document.getElementById("frameInput").value+=val 
}

//check the value before solve
function check(){
    if (!/^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/.test(document.getElementById("frameInput").value)) {
        alert("100 + 50 + 35의 형식으로 입력해주세요.")
        return
    }
}

//function that evaluates the digit and return result 
function solve() 
{
    //regular expression으로 input 체크
    let input = document.getElementById("frameInput").value
    let rmWhiteSpace = input.replace(/\s/g,'')
    if (!/^[0-9]+(\+[0-9]+)*$/.test(rmWhiteSpace)) {
        alert("수와 +부호를 이용해 입력해주세요. ex)100 + 45 + 120")
        return
    }
    let x = document.getElementById("frameInput").value 
    let y = eval(x)
    document.getElementById("frameInput").value = y 
} 

//function that clear the display 
function clr() 
{ 
    document.getElementById("frameInput").value = "" 
} 