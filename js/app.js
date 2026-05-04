// COUNTDOWN
let time=300;
setInterval(()=>{
 if(time>0){
  time--;
  let m=Math.floor(time/60);
  let s=time%60;
  document.getElementById('time').innerText=`${m}:${s<10?'0'+s:s}`;
 }
},1000);

// BOOK
function bookNow(){
 const name=document.getElementById('name').value;
 const phone=document.getElementById('phone').value;

 if(!name||!phone){
  alert("กรอกข้อมูล");
  return;
 }

 fbq('track','Purchase',{value:250,currency:'THB'});

 fetch("YOUR_SCRIPT_URL",{
  method:"POST",
  body: JSON.stringify({
    type:"new",
    name:name,
    phone:phone,
    breed:"หมา",
    service:"อาบน้ำ"
  })
 });

 const msg=`จอง\n${name}\n${phone}`;
 window.location.href=`https://line.me/R/msg/text/?${encodeURIComponent(msg)}`;
}