
let btn = document.getElementById("btn");

function generateQR() {
    let textinput = document.getElementById("input").value;
   let imagebox = document.getElementById("imgbox");
   imagebox.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textinput}">`;
   imagebox.style.display = "block";    
}
btn.addEventListener("click", generateQR);