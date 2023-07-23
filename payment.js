const card_front = document.getElementById('card_display')
const card_back = document.getElementById('card_display_back')
const card_number = document.getElementById('card_number')
const card_holder = document.getElementById('holder_name')
const exp_month = document.getElementById('exp_month')
const exp_year = document.getElementById('exp_year')
const cvv = document.getElementById('cvv')
const mm = document.getElementById('exp_month')
const yy = document.getElementById('exp_year')
const submit = document.getElementById('submit')
function display_front(){
    card_back.style.transform = "rotateY(90deg)"
    setTimeout(() => {
        card_front.style.transform = "rotateY(0deg)"
    }, 300);
}
function display_back(){
    card_front.style.transform = "rotateY(90deg)"
    setTimeout(() => {
        card_back.style.transform = "rotateY(0deg)"
    }, 300)
}
function disp_hash(n){
    let hash = ""
    for(let i=0;i<n;i++){
        hash+='#'
    }
    return hash
}
function check_validity(){
    return (card_number.value.length === 16 && card_holder.value 
        && exp_month.value>0 && exp_month.value<=12 && exp_year.value>=2023 
        &&exp_year.value<=3000 && cvv.value.length === 3 )
}
window.addEventListener('blur',()=>{
    document.title = "Complete the Payment!"
})
window.addEventListener('focus',()=>{
    document.title = "Card Payment"
})
card_front.addEventListener('click',display_back)
card_back.addEventListener('click',display_front)
card_number.addEventListener('focusin',display_front)
card_holder.addEventListener('focusin',display_front)
exp_month.addEventListener('focusin',display_front)
exp_year.addEventListener('focusin',display_front)
cvv.addEventListener('focusin',display_back)
card_holder.addEventListener('focusin',()=>{
    document.getElementById('display_card_holder_div').style.boxShadow = "0 0 10px 5px white"
})
card_holder.addEventListener('focusout',()=>{
    document.getElementById('display_card_holder_div').style.boxShadow = "none"
})
card_number.addEventListener("focusin",()=>{
    document.getElementById('display_card_number').style.boxShadow = "0 0 10px 5px white"
})
card_number.addEventListener("focusout",()=>{
    document.getElementById('display_card_number').style.boxShadow = "none"
})
mm.addEventListener('focusin',()=>{
    document.getElementById('mm').style.boxShadow = "0 0 10px 5px white"
})
yy.addEventListener('focusin',()=>{
    document.getElementById('yy').style.boxShadow = "0 0 10px 5px white"
})
mm.addEventListener('focusout',()=>{
    document.getElementById('mm').style.boxShadow = "none"
})
yy.addEventListener('focusout',()=>{
    document.getElementById('yy').style.boxShadow = "none"
})
cvv.addEventListener('focusin',()=>{
    document.getElementById('cvv_disp_div').style.boxShadow = "0 0 10px 5px white"
})
cvv.addEventListener('focusout',()=>{
    document.getElementById('cvv_disp_div').style.boxShadow = "none"
})
card_holder.addEventListener('input',()=>{
    document.getElementById('display_card_holder').innerHTML = card_holder.value
})
card_number.addEventListener('input',()=>{
    if(card_number.value.length === 17) card_number.value = card_number.value.substring(0,16)
    else document.getElementById('display_card_number').innerHTML = card_number.value + (disp_hash(16-card_number.value.length))
})
mm.addEventListener('input',()=>{
    if(mm.value.length === 3)   mm.value = mm.value.substring(0,2)
    if(!mm.value){
        document.getElementById('mm').innerHTML = "mm"
    }
    else if(mm.value <=9 && mm.value>=0){
        document.getElementById('mm').innerHTML = "0"+mm.value
    }
    else document.getElementById('mm').innerHTML = mm.value
})
yy.addEventListener('input',()=>{
    if(yy.value.length === 5){
        yy.value = yy.value.substring(0,4)
    }
    if(!yy.value){
        document.getElementById('yy').innerHTML = "yyyy"
    }
    else if(yy.value <=9 && yy.value>=0){
        document.getElementById('yy').innerHTML = "000"+yy.value
    }
    else if(yy.value >9 && yy.value<=99){
        document.getElementById('yy').innerHTML = "00"+yy.value
    }
    else if(yy.value>99 && yy.value<=999){
        document.getElementById('yy').innerHTML = "0"+yy.value
    }
    else document.getElementById('yy').innerHTML = yy.value
})
cvv.addEventListener('input',()=>{
    if(cvv.value.length === 4) cvv.value = cvv.value.substring(0,3)
    if(!cvv.value)  document.getElementById('cvv_disp').innerHTML = "xxx"
    else if(cvv.value>=0 && cvv.value<=9){
        document.getElementById('cvv_disp').innerHTML = cvv.value+"xx"
    }
    else if(cvv.value>9 && cvv.value<=99){
        document.getElementById('cvv_disp').innerHTML = cvv.value+"x"
    }
    else document.getElementById('cvv_disp').innerHTML = cvv.value
})
submit.addEventListener('click',()=>{
    const valid = check_validity()
    console.log(valid)
})