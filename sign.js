let a=document.querySelector(".fn")
let b=document.querySelector(".ln")
let e=document.querySelector(".email")
let sub=document.querySelector("#button")
let num=document.querySelector(".no")
let passwd=document.querySelector(".pwd")
let confirm=document.querySelector(".cpwd")
let res=document.querySelector("#reset")
res.addEventListener("click",()=>{
a.value=""
b.value=""
e.value=""
num.value=""
passwd.value=""
confirm.value=""
})
sub.addEventListener("click",()=>{
   nam=a.value
    console.log(nam);
if((nam[0]>='a' && nam[0]<='z')||(nam[0]>='A' && nam[0]<='Z')==false)
{
alert("Enter valid First name")
}
else
td1.innerText=nam

last=b.value
console.log(last);
if((last[0]>='a' && last[0]<='z')||(last[0]>='A' && last[0]<='Z')==false)
alert("Enter valid last name")
else
td2.innerText=last

mail=e.value
console.log(mail);
let s=0;
let s1=0;
for(var i=0; i<=mail.length; i++){
    if(mail[i]=='@')
    s++;
    else if(mail[i]=='.')
    s1++;
}
if((s==1 && s1==1)==false)
alert("Please enter a valid email address")
else
td3.innerText=mail

phone=num.value;
console.log(phone);
if(phone.length!=10)
alert("Enter a valid phone number");
else
td4.innerText=phone

p=passwd.value;
console.log(p);
let upp=0;
let lw=0;
let dig=0;
let spl=0;
for(var i=0; i<p.length; i++)
{
    if(p[i]>='A' && p[i]<='Z')
    upp++;
    else if(p[i]>='a' && p[i]<='z')
    lw++;
    else if(p[i]>='0' && p[i]<='9')
    dig++;
    else
    spl++;
}
    if((p.length>=8 && upp>=1 && lw>=1 && dig>=1 && spl>=1)==false)
{
    alert("Enter vaild password")
}
else 
td5.innerText=p

c=confirm.value
if(c!=p)
alert("Passwords do not match")
})

var table=document.createElement("table")
var tr1=document.createElement("tr")
var tr2=document.createElement("tr")
var tr3=document.createElement("tr")
var tr4=document.createElement("tr")
var th1=document.createElement("th")
var th2=document.createElement("th")
var th3=document.createElement("th")
var th4=document.createElement("th")
var th5=document.createElement("th")
var td1=document.createElement("td")
var td2=document.createElement("td")
var td3=document.createElement("td")
var td4=document.createElement("td")
var td5=document.createElement("td")
var td6=document.createElement("td")
var td7=document.createElement("td")
var td8=document.createElement("td")
var td9=document.createElement("td")
var td10=document.createElement("td")
var td11=document.createElement("td")
var td12=document.createElement("td")
var td13=document.createElement("td")
var td14=document.createElement("td")
var td15=document.createElement("td")
th1.innerText="| First name |"
th2.innerText="Last name |"
th3.innerText="Email ID |"
th4.innerText="Phone num |"
th5.innerText="Password |"
window.document.body.append(table)
table.append(tr1, tr2, tr3, tr4)
tr1.append(th1,th2,th3,th4,th5)
tr2.append(td1,td2,td3,td4,td5)
tr3.append(td6,td7,td8,td9,td10)
tr4.append(td11,td12,td13,td14,td15)
