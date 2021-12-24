 let currenttab=0;
 showform(currenttab);
function showform(n){
    var form=document.getElementsByClassName('form');
    form[n].style.display='flex';

    if (n==0){
        document.getElementById('previous').style.display='none';
    }else{
        document.getElementById('previous').style.display='flex';
    }

    if(n==(form.length-1)){
        document.getElementById('next').innerHTML='Submit';
    }else{
        document.getElementById('next').innerHTML='Next';
    }

    regulateStepIndicator(n)

    
}

var move=document.getElementsByClassName('nav-btns') ;

 for(i=0;i<move.length;i++){
 move[i].addEventListener('click',function nextTab(n){
    
    var form =document.getElementsByClassName('form');
    if(n==0 && !validateform()) return false;
    form[currenttab].style.display='none';
    currenttab= currenttab+1;

    if(currenttab>=form.length){
        document.getElementById('donationform').submit();
        return false;
    }
    showform(currenttab);
});
 }

function validateform(){
    var form,input,i=true;
    var form=document.getElementsByClassName('form');
    var input= document.getElementsByTagName('input');
    for(i=0,i<input.length;i++;) {
    if(input[i].value=""){
        input[i].className +='invalid';
        valid=false;
    }
    }
    if(valid){
        document.getElementsByClassName('check')[currenttab].className+='completed';
    }
    return valid;
}

function regulateStepIndicator(n){
var i, check=document.getElementsByClassName('check');
for(i=0,i<check.length;i++;){
    check[i].className=check[i].className.replace("completed",'');
}
check[n].className += " completed";

}