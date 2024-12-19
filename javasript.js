function AddNum(){
    let num1=document.getElementById('firstbox').value
    let num2=document.getElementById('secondbox').value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h1=document.getElementById('res')
    result=num1+num2
    h1.innerHTML="Result:" +result
}
function SubNum(){
    let num1=document.getElementById('firstbox').value
    let num2=document.getElementById('secondbox').value
    let h1=document.getElementById('res')
    result=num1-num2
    h1.innerHTML="Result:"+result

}
function MulNum(){
    let num1=document.getElementById('firstbox').value
    let num2=document.getElementById('secondbox').value
    let h1=document.getElementById('res')
    result=num1*num2
    h1.innerHTML="Result:"+result
}
function DivNum(){
    let num1=document.getElementById('firstbox').value
    let num2=document.getElementById('secondbox').value
    let h1=document.getElementById('res')
    result=num1/num2
    h1.innerHTML="Result:"+result
}
function PowNum(){
    let num1=document.getElementById('firstbox').value
    let num2=document.getElementById('secondbox').value
    let h1=document.getElementById('res')
    result=num1**num2
    h1.innerHTML="Result:"+result
}