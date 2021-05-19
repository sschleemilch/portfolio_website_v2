function showLoader() {
    document.getElementById("preloader").classList.remove("off")
}

window.onload = function () {    
    document.getElementById("preloader").classList.add("off");
}