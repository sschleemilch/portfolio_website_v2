window.onload = function () {
    document.getElementById("preloader").innerHTML = '<div class="black_wall"></div><div class="loader2"></div>';
    setTimeout(() => { document.getElementById("preloader").classList.add("off") }, 10000);
};