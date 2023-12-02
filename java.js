const ekran = document.getElementById("ekran")
function barobar() {
    ekran.value = eval(ekran.value);
}
function tozalash() {
    ekran.value = "";
}
function ochirish(){
    ekran.value = ekran.value.slice(0,-1);
}
