// Definiera rätt användarnamn och lösenord
const correctUsername = "Kaffekungen";
const correctPassword = "sippar_Bryggkaffe4Life";

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Återställ felmeddelandet
    errorMessage.style.display = "none";

    // Kontrollera om användarnamn och lösenord är ifyllda
    if (username === "" || password === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Du måste fylla i både användarnamn och lösenord!";
        return false; // Stoppar formuläret från att skickas
    }

    // Kontrollera om användarnamn och lösenord är korrekt
    if (username === correctUsername && password === correctPassword) {
        // Omdirigera till startsidan
        window.location.href = "start.html";
        return false; // Stoppar formuläret från att skickas
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Fel användarnamn eller lösenord!";
        return false; // Stoppar formuläret från att skickas
    }
}