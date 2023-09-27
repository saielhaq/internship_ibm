// script.js

// Fonction pour crypter le fichier
function encryptFile() {
    const fileInput = document.getElementById("fileInput");
    const output = document.getElementById("output");
    
    if (fileInput.files.length === 0) {
        alert("Sélectionnez un fichier à crypter.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const fileContent = event.target.result;
        const password = prompt("Entrez votre mot de passe pour le cryptage :");

        if (password === null || password === "") {
            alert("Mot de passe invalide.");
            return;
        }

        const encrypted = CryptoJS.AES.encrypt(fileContent, password);
        output.textContent = encrypted.toString();
        output.style.display = "block";
    };

    reader.readAsText(file);
}

// Fonction pour décrypter le fichier
function decryptFile() {
    const output = document.getElementById("output");
    const password = prompt("Entrez le mot de passe de décryptage :");

    if (password === null || password === "") {
        alert("Mot de passe invalide.");
        return;
    }

    try {
        const encryptedText = output.textContent;
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, password);
        const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
        
        if (decryptedText) {
            output.textContent = decryptedText;
        } else {
            alert("Erreur de décryptage. Assurez-vous que le mot de passe est correct.");
        }
    } catch (error) {
        alert("Erreur de décryptage. Assurez-vous que le mot de passe est correct.");
    }
}

// Fonction pour télécharger le fichier décrypté
function downloadFile() {
    const output = document.getElementById("output");
    const decryptedText = output.textContent;

    if (!decryptedText) {
        alert("Aucun fichier décrypté à télécharger.");
        return;
    }

    const blob = new Blob([decryptedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "fichier_decrypte.txt"; // Nom du fichier de téléchargement
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}
