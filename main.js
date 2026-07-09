function openPopup() {
  document.getElementById("admissionPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("admissionPopup").style.display = "none";
}

function submitForm() {
  alert("Thank You! Your admission request has been received.");
  closePopup();
}

window.onload = function(){
    document.getElementById("loader").style.display = "none";
}

let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let count = localStorage.getItem("visitorCount");

if(count == null){
    count = 1;
}else{
    count = parseInt(count) + 1;
}

localStorage.setItem("visitorCount", count);

document.getElementById("visitorCount").innerHTML =
"👥 Total Visitors: " + count;

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});