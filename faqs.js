var varfaq = document.getElementsByClassName("classfaq4");
var f;
for (f = 0; f < varfaq.length; f++) {
    varfaq[f].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}