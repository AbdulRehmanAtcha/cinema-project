document.querySelector(".movie-trailer").style.display = "none";
document.querySelector(".movie-content").style.display = "block";

document.querySelector(".show-trailer").style.display = "none";
document.querySelector(".show-content").style.display = "block";

document.querySelector(".trend-trailer").style.display = "none";
document.querySelector(".trend-content").style.display = "block";

document.querySelector(".famous-trailer").style.display = "none";
document.querySelector(".famous-content").style.display = "block";

var movieTrailer = document.getElementById("movie-trailer-show");
var showTrailer = document.getElementById("show-trailer-show");
var trendTrailer = document.getElementById("trend-trailer-show");
var famousTrailer = document.getElementById("famous-trailer-show");

function showMoviewTrailer(args) {
    if (args === "bat") {
        document.querySelector(".movie-trailer").style.display = "block";
        document.querySelector(".movie-content").style.display = "none";
        movieTrailer.setAttribute("src", "https://www.youtube.com/embed/u34gHaRiBIU");
    }
    else if (args === "crab") {
        document.querySelector(".movie-trailer").style.display = "block";
        document.querySelector(".movie-content").style.display = "none";
        movieTrailer.setAttribute("src", "https://www.youtube.com/embed/fmjKsL_-rfw");
    }
    else if (args === "me") {
        document.querySelector(".movie-trailer").style.display = "block";
        document.querySelector(".movie-content").style.display = "none";
        movieTrailer.setAttribute("src", "https://www.youtube.com/embed/Mmq_NVwLN_g");
    }
    else if (args === "naval") {
        document.querySelector(".movie-trailer").style.display = "block";
        document.querySelector(".movie-content").style.display = "none";
        movieTrailer.setAttribute("src", "https://www.youtube.com/embed/hS5EIQ3zubE");
    }
}

function closeMovieTrailer() {
    document.querySelector(".movie-trailer").style.display = "none";
    document.querySelector(".movie-content").style.display = "block";
    movieTrailer.setAttribute("src", "");
}

function showingShowTrailer(args2) {
    if (args2 === "dead") {
        console.log("dead");
        document.querySelector(".show-trailer").style.display = "block";
        document.querySelector(".show-content").style.display = "none";
        showTrailer.setAttribute("src", "https://www.youtube.com/embed/IN5TD4VRcSM");
    }
    else if (args2 === 'business') {
        document.querySelector(".show-trailer").style.display = "block";
        document.querySelector(".show-content").style.display = "none";
        showTrailer.setAttribute("src", "https://www.youtube.com/embed/M-PHcxPyasA");
    }
    else if (args2 === 'mind') {
        document.querySelector(".show-trailer").style.display = "block";
        document.querySelector(".show-content").style.display = "none";
        showTrailer.setAttribute("src", "https://www.youtube.com/embed/LP8goZ3Ok6s");
    }
    else if (args2 === 'ring') {
        document.querySelector(".show-trailer").style.display = "block";
        document.querySelector(".show-content").style.display = "none";
        showTrailer.setAttribute("src", "https://www.youtube.com/embed/x8UAUAuKNcU");
    }
}

function closeShowTrailer() {
    showTrailer.setAttribute("src", "");
    document.querySelector(".show-trailer").style.display = "none";
    document.querySelector(".show-content").style.display = "block";
}

function showTrendTrailer(args3) {
    if (args3 === "bullet") {
        document.querySelector(".trend-trailer").style.display = "block";
        document.querySelector(".trend-content").style.display = "none";
        trendTrailer.setAttribute("src", "https://www.youtube.com/embed/0IOsk2Vlc4o");
    }
    else if (args3 === "kai") {
        document.querySelector(".trend-trailer").style.display = "block";
        document.querySelector(".trend-content").style.display = "none";
        trendTrailer.setAttribute("src", "https://www.youtube.com/embed/sUR9PYwlNaA");
    }
    else if (args3 === 'nope') {
        document.querySelector(".trend-trailer").style.display = "block";
        document.querySelector(".trend-content").style.display = "none";
        trendTrailer.setAttribute("src", "https://www.youtube.com/embed/In8fuzj3gck");
    }
    else if (args3 === "patient") {
        document.querySelector(".trend-trailer").style.display = "block";
        document.querySelector(".trend-content").style.display = "none";
        trendTrailer.setAttribute("src", "https://www.youtube.com/embed/LpmMxXfBn-Y");
    }
}

function closeTrendTrailer() {
    document.querySelector(".trend-trailer").style.display = "none";
    document.querySelector(".trend-content").style.display = "block";
    trendTrailer.setAttribute("src", "");
}


function showFamousTrailer(args4) {
    if (args4 === 'end') {
        document.querySelector(".famous-trailer").style.display = "block";
        document.querySelector(".famous-content").style.display = "none";
        famousTrailer.setAttribute("src", "https://www.youtube.com/embed/TcMBFSGVi1c");
    }
    else if (args4 === 'incep') {
        document.querySelector(".famous-trailer").style.display = "block";
        document.querySelector(".famous-content").style.display = "none";
        famousTrailer.setAttribute("src", "https://www.youtube.com/embed/YoHD9XEInc0");
    }
    else if (args4 === "home") {
        document.querySelector(".famous-trailer").style.display = "block";
        document.querySelector(".famous-content").style.display = "none";
        famousTrailer.setAttribute("src", "https://www.youtube.com/embed/JfVOs4VSpmA");
    }
    else if (args4 === "black") {
        document.querySelector(".famous-trailer").style.display = "block";
        document.querySelector(".famous-content").style.display = "none";
        famousTrailer.setAttribute("src", "https://www.youtube.com/embed/xjDjIWPwcPU");
    }
}

function closefamousTrailer() {
    document.querySelector(".famous-trailer").style.display = "none";
    document.querySelector(".famous-content").style.display = "block";
    famousTrailer.setAttribute("src", "");
}

// Starting SignUP/SignIN Work.

let mainContainer = document.querySelector(".main-container");
mainContainer.style.display = "none";

let formContainer = document.querySelector(".container2");
formContainer.style.display = "flex";

let signUp = document.querySelector(".signup");
signUp.style.display = "block";

let signin = document.querySelector(".signin");
signin.style.display = "none";

let signinError = document.querySelector(".signin-error");
signinError.style.display = "none";

let signUpName = document.getElementById("signupName");
let signUpEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPass");
let signupConfirmPassword = document.getElementById("signupCPass");
let signUpNumber = document.getElementById("signupNumber");
let error1 = 0;
let error2 = 0;
let error3 = 0;
let error4 = 0;
let error5 = 0;


function signUpCheck(event) {
    event.preventDefault();
    if (signUpName.value === "" || signUpName.value.length < 5) {
        signUpName.style.border = "2px solid red";
        error1 = 1;
    }
    else {
        error1 = 0;
        signUpName.style.border = "2px solid rgb(66, 70, 66)"
    }
    if (signUpEmail.value === "") {
        signUpEmail.style.border = "2px solid red";
        error2 = 1;
    }
    else {
        error2 = 0;
        signUpEmail.style.border = "2px solid rgb(66, 70, 66)"
    }
    if (signupPassword.value === "" || signupPassword.value.length < 5 || signupPassword.value.length > 9) {
        signupPassword.style.border = "2px solid red";
        error3 = 1;
    }
    else {
        error3 = 0;
        signupPassword.style.border = "2px solid rgb(66, 70, 66)"
    }
    if (signupConfirmPassword.value !== signupPassword.value) {
        signupConfirmPassword.style.border = "2px solid red";
        error4 = 1;
    }
    else {
        error4 = 0;
        signupConfirmPassword.style.border = "2px solid rgb(66, 70, 66)"
    }
    if (signUpNumber.value.length < 11) {
        signUpNumber.style.border = "2px solid red";
        error5 = 1;
    }
    else {
        error5 = 0;
        signUpNumber.style.border = "2px solid rgb(66, 70, 66)";
    }
    if (error1 === 0 && error2 === 0 && error3 === 0 && error4 === 0 && error5 === 0) {
        // var userInformation = {
        //     userName: signUpName.value,
        //     userEmail: signUpEmail.value,
        //     userPassword: signupPassword.value,
        //     userNumber: signUpNumber.value
        // }
        // var userInformation2 = JSON.stringify(userInformation);
        // localStorage.setItem("userInformation", userInformation2);
        // JSON.parse(userInformation2);
        // var gettingUserInformation = localStorage.getItem("userInformation");
        window.localStorage.setItem("userName", signUpName.value);
        window.localStorage.setItem("userEmail", signUpEmail.value);
        window.localStorage.setItem("userPassword", signupPassword.value);
        window.localStorage.setItem("userNumber", signUpNumber.value);

        signUpName.value = "";
        signUpEmail.value = "";
        signupPassword.value = "";
        signupConfirmPassword.value = "";
        signUpNumber.value = "";
        signUp.style.display = "none";
        signin.style.display = "block";
    }

}

let signinEmail = document.getElementById("signInEmail");
let signInPassword = document.getElementById("signInPassword");

function checkSignIn() {
    event.preventDefault();
    if (signinEmail.value !== localStorage.getItem("userEmail") || signInPassword.value !== localStorage.getItem("userPassword")) {
        signinError.style.display = "flex";
        signInPassword.style.border = "2px solid red";
        signinEmail.style.border = "2px solid red";
    }
    else if (signinEmail.value === localStorage.getItem("userEmail") && signInPassword.value === localStorage.getItem("userPassword")) {
        signInPassword.style.border = "2px solid rgb(66, 70, 66)";
        signinEmail.style.border = "2px solid rgb(66, 70, 66)";
        signInPassword.value = "";
        signinEmail.value = "";
        formContainer.style.display = "none";
        mainContainer.style.display = "block";
    }
}

function showsignUp(){
    mainContainer.style.display = "none";
    formContainer.style.display = "flex";
    signin.style.display = "none";
    signinError.style.display = "none";
    signUp.style.display = "block";
    signUpName.value = "";
    signUpEmail.value = "";
    signupPassword.value = "";
    signupConfirmPassword.value = "";
    signUpNumber.value = "";
    signinEmail.value = "";
    signInPassword.value = "";

}

function logOut() {
    mainContainer.style.display = "none";
    formContainer.style.display = "flex";
    signUp.style.display = "none";
    signin.style.display = "block";
    signinEmail.value = "";
    signInPassword.value = "";
    signinError.style.display = "none";
}

function signOut() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userNumber");
    mainContainer.style.display = "none";
    formContainer.style.display = "flex";
    signUp.style.display = "block";
    signin.style.display = "none";
}

let seats = document.querySelector(".seats");
seats.style.display = "none";

function showSeats() {
    if(localStorage.getItem("selectedSeats") !== undefined){
        for(let i =0; i<selectedSeats.length; i++){
            document.getElementById(selectedSeats[i]).className = "confirmSelected";
        }
    }
    seats.style.display = "flex";
    document.querySelector(".booking").style.display = "none";
}

// function confirmBooking() {
//     seats.style.display = "none";
//     document.querySelector(".booking").style.display = "flex";
// }



for (let i = 1; i <= 24; i++) {
    document.getElementById(i).className = "notSelected";
}

let selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [ ];

function selectingId(getId) {
    let seatId = document.getElementById(getId);



    if(document.getElementById(getId).className === "notSelected"){
        document.getElementById(getId).className = "selected";
        selectedSeats.push(getId);
    }
    else if(document.getElementById(getId).className === "selected"){
        document.getElementById(getId).className = "notSelected";
        let itemToBeRemoved = selectedSeats.indexOf(getId);
        selectedSeats.splice(itemToBeRemoved, 1);
        // console.log(selectedSeats);
    }   
}





function confirmBooking() {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    seats.style.display = "none";
    document.querySelector(".booking").style.display = "flex";
}











// console.log(gettingUserInformation);

