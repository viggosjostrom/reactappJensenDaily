document.addEventListener("DOMContentLoaded", function() {
    const languageDropdown = document.getElementById("languageDropdown");

    const translations = {
        en: {
            nameLabel: "Name:",
            emailLabel: "Email:",
            messageLabel: "Message:",
            submitText: "Submit"
        },
        es: {
            nameLabel: "Nombre:",
            emailLabel: "Correo electrónico:",
            messageLabel: "Mensaje:",
            submitText: "Enviar"
        },
        it: {
            nameLabel: "Nome:",
            emailLabel: "Email:",
            messageLabel: "Messaggio:",
            submitText: "Invia"
        },
        fr: {
            nameLabel: "Nom:",
            emailLabel: "Email:",
            messageLabel: "Message:",
            submitText: "Soumettre"
        },
        da: {
            nameLabel: "Navn:",
            emailLabel: "Email:",
            messageLabel: "Besked:",
            submitText: "Send"
        },
        sv: {
            nameLabel: "Namn:",
            emailLabel: "E-post:",
            messageLabel: "Meddelande:",
            submitText: "Skicka"
        }
    };

    languageDropdown.addEventListener("change", function() {
        const selectedLanguage = languageDropdown.value;

        const labels = translations[selectedLanguage];
        if (labels) {
            document.getElementById("nameLabel").textContent = labels.nameLabel;
            document.getElementById("emailLabel").textContent = labels.emailLabel;
            document.getElementById("messageLabel").textContent = labels.messageLabel;
            document.querySelector("input[type='submit']").value = labels.submitText;
        }
    });
});