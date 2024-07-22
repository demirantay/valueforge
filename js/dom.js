 // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
 window.onscroll = function () { scrollFunction() };

 function scrollFunction() {
     if (window.scrollY > 50) {
         document.getElementById("navbar-top").style.display = "none";
         document.getElementById("navbar").style.height = "85px";
         document.getElementById("navbar-logo").style.height = "80px";
     } else {
         document.getElementById("navbar-top").style.display = "block";
         document.getElementById("navbar").style.height = "135px";
         document.getElementById("navbar-logo").style.height = "130px";
     }
 }

 
 // hidden mobile navigation toggle logic
 let open_btn = document.getElementById("hidden-mobile-open-btn");
 let close_btn = document.getElementById("hidden-mobile-close-btn");
 let hidden_mobile_bg = document.getElementById("hidden-mobile-bg");
 let hidden_mobile = document.getElementById("hidden-mobile");

 open_btn.onclick = function() {
     hidden_mobile_bg.style.display = "block";
     hidden_mobile.style.display = "block";
 }

 close_btn.onclick = function() {
     hidden_mobile_bg.style.display = "none";
     hidden_mobile.style.display = "none";
 }



/* 
Loop through all dropdown buttons to toggle between hiding and showing its 
dropdown content - This allows the user to have multiple dropdowns without any 
conflict 
*/
var dropdown = document.getElementsByClassName("dropdown-btn-mobile");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



// Accordion DOM Logic
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}