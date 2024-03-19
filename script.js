const hisoblash =  () => {
    let hisobla = document.getElementById("matn").value;
    let matn = (hisobla).split(' ').length;

    document.getElementById("matn-xisoblash").innerText = matn;
    document.getElementById("belgilar").innerText = hisobla.length;
}