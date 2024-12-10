function heloworld(){
    alert("Hello World!");
    console.log("traceado")
}
let nomUsuari = "";

function saludar() {
    nomUsuari = document.getElementById("name").value;
    if (nomUsuari.trim() !== "") {
        document.getElementById("saludo").innerText = `Hola, ${nomUsuari}!`;
        document.getElementById("modal").style.display = "flex";
        console.log("Nom de l'usuari: " + nomUsuari);
    } else {
        alert("Si us plau, introdueix el teu nom.");
    }
}

function tancarModal() {
    document.getElementById("modal").style.display = "none";
}