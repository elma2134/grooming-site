const API = "https://script.google.com/macros/s/AKfycbxBSzwD3wqfMoSNsCd0k6Uk6kZkHg7Hg3509vtQ3Ir8zPAt582_o9vlGHNE7Z9DRAZu/exec";

const USERNAME = "admin";
const PASSWORD = "1234";

function login(){
 const u=document.getElementById('user').value;
 const p=document.getElementById('pass').value;

 if(u===USERNAME && p===PASSWORD){
  localStorage.setItem("login","true");
  showDashboard();
 }else{
  alert("ผิด");
 }
}

function showDashboard(){
 document.getElementById('loginBox').style.display="none";
 document.getElementById('dashboard').style.display="block";
 loadData();
}

async function loadData(){
 const res = await fetch(API);
 const data = await res.json();

 const list=document.getElementById('list');
 list.innerHTML="";

 data.reverse().forEach(item=>{
  list.innerHTML+=`
  <div>
   ${item.name} (${item.phone}) - ${item.status}
   <button onclick="update(${item.row},'กำลังทำ')">ทำ</button>
   <button onclick="update(${item.row},'เสร็จแล้ว')">เสร็จ</button>
  </div>`;
 });
}

async function update(row,status){
 await fetch(API,{
  method:"POST",
  body: JSON.stringify({
    type:"update",
    row:row,
    status:status
  })
 });
 loadData();
}