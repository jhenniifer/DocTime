function navigateToHome(event) {
    event.preventDefault();
    window.location.href = '/html/home.html';
}
function navigateToDoctors(event) {
    event.preventDefault();
    window.location.href = '/html/doctors.html';
}
function backBtn(event){
    event.preventDefault();
    window.history.back();
}
function displayMenu(event){
    event.preventDefault();
    document.getElementById('aside').style.display ='block';
}