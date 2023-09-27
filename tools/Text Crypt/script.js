    const optionSelect = document.getElementById("method");
    const actionButton = document.getElementById("btn");

    const inputText = document.getElementById("input");
    const outputText = document.getElementById("output");

    const copyButton = document.getElementById("copyButton");
    const usageCountElement = document.getElementById("usageCount");
    let usageCount = 0;

    function encrypt(str) {
        let encrypted_str = "";
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) === 65 || str.charCodeAt(i) === 63 || str.charCodeAt(i) === 64) {
                encrypted_str += String.fromCharCode(str.charCodeAt(i));
            } else if (str.charCodeAt(i) < 64) {
                encrypted_str += String.fromCharCode(str.charCodeAt(i) + 2);
            } else {
                encrypted_str += String.fromCharCode(str.charCodeAt(i) - 2);
            }
        }
        return encrypted_str;
    }
    
    function decrypt(str) {
        let decrypted_str = "";
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) === 65 || str.charCodeAt(i) === 63 || str.charCodeAt(i) === 64) {
                decrypted_str += String.fromCharCode(str.charCodeAt(i));
            } else if (str.charCodeAt(i) < 64) {
                decrypted_str += String.fromCharCode(str.charCodeAt(i) - 2);
            } else {
                decrypted_str += String.fromCharCode(str.charCodeAt(i) + 2);
            }
        }
        return decrypted_str;
    }
        

    optionSelect.addEventListener("change", function () {
        if (optionSelect.value === "Decryption") {
            actionButton.textContent = "DECRYPT";
            input.placeholder = "Enter text to Decrypt";
            output.placeholder = "Decryption";
        } else {
            actionButton.textContent = "ENCRYPT";
            input.placeholder = "Enter text to Encrypt";
            output.placeholder = "Encryption";
        }

        inputText.value = "";
        outputText.value = "";
    });

    actionButton.addEventListener("click", function () {
        const selectedOption = optionSelect.value;
        const input = inputText.value.trim();
        
        
        if (selectedOption === "Encryption") {
            const encryptedText = encrypt(input);
            outputText.value = encryptedText;
        } else if (selectedOption === "Decryption") {
            const decryptedText = decrypt(input);
            outputText.value = decryptedText;
        }

    });

    copyButton.addEventListener("click", function () {
        outputText.select();
        try {
            navigator.clipboard.writeText(outputText.value);
            copyButton.textContent = "Copied!";
            setTimeout(() => {
                copyButton.textContent = "Copy";
            }, 1500); // Reset after 1.5 seconds
        } catch (err) {
            console.error("Copy failed:", err);
        }
    });

    
