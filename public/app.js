// Firebase sozlamalari
const firebaseConfig = {
    apiKey: "AIzaSyChl1yTnnBXLZehIYrIpUQ2IfWKn-T0k3Y",
    authDomain: "whatbro-40613.firebaseapp.com",
    projectId: "whatbro-40613",
    storageBucket: "whatbro-40613.firebasestorage.app",
    messagingSenderId: "749624114326",
    appId: "1:749624114326:web:f6310be55e7a9b983396b7"
};

// Firebase’ni ishga tushirish
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function sendCode() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (!email) {
        message.textContent = "Iltimos, emailingizni kiriting!";
        return;
    }

    auth.sendSignInLinkToEmail(email, {
        url: window.location.href, // Foydalanuvchi qaytib kelishi kerak bo'lgan sahifa
        handleCodeInApp: true
    }).then(() => {
        message.style.color = "green";
        message.textContent = "Emailga tasdiqlash linki yuborildi!";
        window.localStorage.setItem("emailForSignIn", email);
        document.getElementById("email-container").style.display = "none";
        document.getElementById("code-container").style.display = "block";
    }).catch((error) => {
        message.textContent = "Xatolik: " + error.message;
    });
}

function verifyCode() {
    const email = window.localStorage.getItem("emailForSignIn");
    const message = document.getElementById("message");

    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        auth.signInWithEmailLink(email, window.location.href)
            .then(() => {
                message.style.color = "green";
                message.textContent = "Muvaffaqiyatli tizimga kirdingiz!";
                window.localStorage.removeItem("emailForSignIn");
                window.location.href = "/home.html"; // Kirgandan keyin yo‘naltirish
            })
            .catch((error) => {
                message.textContent = "Kod noto‘g‘ri: " + error.message;
            });
    }
}
