// -CARDS-
const typesbnd=document.getElementById('bandageselected')
const imgbnd=document.getElementById('bandagepic')
const pricebnd=document.getElementById('bandageprice')
typesbnd.addEventListener('change', function() {
    let selectedOption1=typesbnd.options[typesbnd.selectedIndex];
    let newprice =selectedOption1.getAttribute('data-price');
    let newimg= selectedOption1.getAttribute('data-img');
    pricebnd.textContent=newprice;
    imgbnd.src=newimg;
})
const typescmp=document.getElementById('compresseselected')
const imgcmp=document.getElementById('compressepic')
const pricecmp=document.getElementById('compresseprice')
typescmp.addEventListener('change', function() {
    let selectedOption2=typescmp.options[typescmp.selectedIndex];
    let newprice =selectedOption2.getAttribute('data-price');
    let newimg= selectedOption2.getAttribute('data-img');
    pricecmp.textContent=newprice;
    imgcmp.src=newimg;
})

// -YOUR ORDER-
var gauzebandagePrice=2000
var velpeaubandagePrice=2200
var tubularbandagePrice=2400
var plasterbandagePrice=2800
var sterilecompressesPrice=600
var purifiedcompressesPrice=500
const input1=document.getElementById('input1')
const price1=document.getElementById('price1')
const input2=document.getElementById('input2')
const price2=document.getElementById('price2')
const input3=document.getElementById('input3')
const price3=document.getElementById('price3')
const input4=document.getElementById('input4')
const price4=document.getElementById('price4')
const input5=document.getElementById('input5')
const price5=document.getElementById('price5')
const input6=document.getElementById('input6')
const price6=document.getElementById('price6')
const totalprice1=document.getElementById('totalprice1')
// -1-
function updateBandagePrice(){
    price1.innerText=(parseInt(input1.value)||0)*gauzebandagePrice;
    // totalprice1.innerText=(parseInt(price1.value))
    updateTotalPrice()
}
function plusgauzebandage(){
    input1.value=parseInt(input1.value)+1
    updateBandagePrice()
    updateTotalPrice()
}
function minusgauzebandage(){
    if(parseInt(input1.value)){
        input1.value=parseInt(input1.value)-1
        updateBandagePrice()
        updateTotalPrice()
    }
}
input1.addEventListener('input',updateBandagePrice)
// -2-
function updateBandagePrice2(){
    price2.innerText=(parseInt(input2.value)||0)*velpeaubandagePrice;
    updateTotalPrice()
}
function plusvelpeaubandage(){
    input2.value=parseInt(input2.value)+1
    updateBandagePrice2()
    updateTotalPrice()
}
function minusvelpeaubandage(){
    if(parseInt(input2.value)>0){
        input2.value=parseInt(input2.value)-1
        updateBandagePrice2()
        updateTotalPrice()
    }
}
input2.addEventListener('input',updateBandagePrice2)
// -3-
function updateBandagePrice3(){
    price3.innerText=(parseInt(input3.value)||0)*tubularbandagePrice;
    updateTotalPrice()
}
function plustubularbandage(){
    input3.value=parseInt(input3.value)+1
    updateBandagePrice3()
    updateTotalPrice()
}
function minustubularbandage(){
    if(parseInt(input3.value)>0){
        input2.value=parseInt(input3.value)-1
        updateBandagePrice3()
        updateTotalPrice()
    }
}
input3.addEventListener('input',updateBandagePrice3)
// -4-
function updateBandagePrice4(){
    price4.innerText=(parseInt(input4.value)||0)*plasterbandagePrice;
    updateTotalPrice()
}
function plusplasterbandage(){
    input4.value=parseInt(input4.value)+1
    updateBandagePrice4()
    updateTotalPrice()
}
function minusplasterbandage(){
    if(parseInt(input4.value)>0){
        input4.value=parseInt(input4.value)-1
        updateBandagePrice4()
        updateTotalPrice()
    }
}
input4.addEventListener('input',updateBandagePrice4)
// -5-
function updateCompressePrice5(){
    price5.innerText=(parseInt(input5.value)||0)*sterilecompressesPrice;
    updateTotalPrice()
}
function plussterilecompresses(){
    input5.value=parseInt(input5.value)+1
    updateCompressePrice5()
    updateTotalPrice()
}
function minussterilecompresses(){
    if(parseInt(input5.value)>0){
        input5.value=parseInt(input5.value)-1
        updateCompressePrice5()
        updateTotalPrice()
    }
}
input5.addEventListener('input',updateCompressePrice5)
// -6-
function updateCompressePrice6(){
    price6.innerText=(parseInt(input6.value)||0)*purifiedcompressesPrice;
    updateTotalPrice()
}
function pluspurifiedcompresses(){
    input6.value=parseInt(input6.value)+1
    updateCompressePrice6()
    updateTotalPrice()
}
function minuspurifiedcompresses(){
    if(parseInt(input6.value)>0){
        input6.value=parseInt(input6.value)-1
        updateCompressePrice6()
        updateTotalPrice()
    }
}
input6.addEventListener('input',updateCompressePrice6)
-7-
function updateTotalPrice(){
    let prices=document.querySelectorAll(".price")
    let total=0
    prices.forEach(p=>{
        total=total+parseInt(p.innerText)
    })
    totalprice1.innerText=total
}

// -OFFERS-
const totalprice2=document.getElementById('totalprice2')
const monthlybtn=document.getElementById('monthlybtn')
const yearlybtn=document.getElementById('yearlybtn')
const basicprice=document.getElementById('basicprice')
const proprice=document.getElementById('proprice')
monthlybtn.addEventListener('click',()=>{
    basicprice.innerText="there's no offer"
    proprice.innerText="3% discount"
    monthlybtn.classList.add('active')
    yearlybtn.classList.remove('active')

})

yearlybtn.addEventListener('click',()=>{
    basicprice.innerText="5% discount"
    proprice.innerText="10% discount"
    yearlybtn.classList.add('active')
    monthlybtn.classList.remove('active')
    
})
function updateTotalPrice(){
    let prices=document.querySelectorAll(".price")
    let total=0
    prices.forEach(p=>{
        total=total+parseInt(p.innerText)
    })
    totalprice1.innerText=total
}
// function totalQuantity(){
//     let inputs=document.querySelectorAll("input[type='number']")
//     let totalqty=0
//     inputs.forEach(input=>{
//         totalqty+=parseInt(input.value)||0
//     })
//     console.log(totalqty)
//     return totalqty;
// }
// let qty=totalQuantity()
// let discount=0
// if (plantype==='monthly'){
//     if (qty>10){
//         discount=0.03
//     }
// }
// else if(plantype==='yearly'){
//     if (qty<10){
//         discount=0.03
//     }
//     else{
//         discount=0.05 
//     }
// }
// let offertotal=totalprice1.value-(totalprice1.value*discount)
// totalprice2.innerText=offertotal

// -FORM-
const userform=document.getElementById('form')
form.addEventListener('submit',()=>{
    event.preventDefault()
    const username=document.getElementById('name')
    const noname=document.getElementById('noname')
    const nametitel=document.getElementById('nametitel')
    if (!username.value) {
        alert("please fillin all fields  correctly!")
        noname.style.visibility='visible'
        noname.style.color='red'
        nametitel.style.color='red'
        username.style.borderColor='red'
        return;
    }
    else{
        noname.style.visibility='hidden'
        nametitel.style.color='#0a2436'
        username.style.borderColor='black'
    }

    const useremail=document.getElementById('email')
    const noemail=document.getElementById('noemail')
    const emailtitel=document.getElementById('emailtitel')
    if (!useremail.value || !useremail.value.includes('@')) {
        alert("please fillin all fields correctly!")
        noemail.style.visibility='visible'
        noemail.style.color='red'
        emailtitel.style.color='red'
        useremail.style.borderColor='red'
        return;
    }
    else{
        noemail.style.visibility='hidden'
        emailtitel.style.color='#0a2436'
        useremail.style.borderColor='black'
    }
    const usernumber=document.getElementById('number')
    const nonumber=document.getElementById('nonumber')
    const numbertitel=document.getElementById('numbertitel')
    const phoneRegex=/^(05|06|07)[0-9]{8}$/
    if (!usernumber.value || !phoneRegex.test(usernumber.value)) {
        alert("please fillin all fields correctly!")
        nonumber.style.visibility='visible'
        nonumber.style.color='red'
        numbertitel.style.color='red'
        usernumber.style.borderColor='red'
        return;
    }
    else{
        nonumber.style.visibility='hidden'
        numbertitel.style.color='#0a2436'
        usernumber.style.borderColor='black'
    }

    const usercity=document.getElementById('city')
    const nocity=document.getElementById('nocity')
    const citytitel=document.getElementById('citytitel')
    if (!usercity.value) {
        alert("please fillin all fields correctly!")
        nocity.style.visibility='visible'
        nocity.style.color='red'
        citytitel.style.color='red'
        usercity.style.borderColor='red'
        return;
    }
    else{
        nocity.style.visibility='hidden'
        citytitel.style.color='#0a2436'
        usercity.style.borderColor='black'
    }
    
    // -NEW USER-
    const newuser=document.createElement('li')
    var x=`
    <li>${username.value} / city:${usercity.value}</li>
    `
    newuser.innerHTML=x
    const allusers=document.getElementById('allusers')
    allusers.appendChild(newuser)

    // -ALL USERS-
    const totalusers=document.getElementById('totalusers')
    totalusers.textContent=parseInt(totalusers.textContent)+1
})


