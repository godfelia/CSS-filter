function change_src(photo) {
    document.getElementById("main_photo").src = photo;
}
function change_filter(clas) {
    document.getElementById("main_photo").classList.remove('sepia', 'invert', 'blur', 'saturate', 'origin');
    document.getElementById("main_photo").classList.add(clas);
}