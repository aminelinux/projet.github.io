function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    
    // Demander l'âge de l'utilisateur en utilisant prompt()
    var age = prompt("Entrez votre âge:");

    if (weight > 0 && height > 0 && age > 0) {
        var heightInMeters = height / 100; // Convertir la taille de centimètres à mètres
        var bmi = weight / (heightInMeters * heightInMeters);

        var result = "Votre IMC est : " + bmi.toFixed(2);

        if (bmi < 18.5) {
            result += " - Poids insuffisant";
        } else if (bmi >= 18.5 && bmi < 25) {
            result += " - Poids normal";
        } else if (bmi >= 25 && bmi < 30) {
            result += " - Surpoids";
        } else {
            result += " - Obésité";
        }

        // Ajouter un message en fonction de l'âge
        if (age < 18) {
            result += " - Vous êtes encore jeune, assurez-vous de maintenir un mode de vie sain.";
        } else {
            result += " - Vous êtes en plein dans votre vie active, continuez à prendre soin de votre santé.";
        }

        document.getElementById('result').innerHTML = result;

    } else {
        alert("Veuillez saisir des valeurs valides pour le poids, la taille et l'âge.");
    }
}

window.onload = function() {
    generateQuiz();
};


// Fonction pour afficher une alerte lors du clic sur le titre
function showAlert() {
    alert("Vous avez cliqué sur le titre !");
}

// Fonction pour retourner à l'accueil
function returnToIndex() {
    window.location.href = "index.html"; // Assurez-vous que le nom du fichier est correct
}

// Attacher l'événement au chargement de la page
window.onload = function() {
    // Sélectionner l'élément avec l'ID "barèmeTitle" (ajoutez cet ID à votre balise h1)
    var titleElement = document.getElementById("barèmeTitle");

    // Vérifier si l'élément existe avant d'attacher l'événement
    if (titleElement) {
        // Attacher l'événement au clic sur le titre
        titleElement.addEventListener("click", showAlert);
    }
};

function returnToIndex() {
    // Redirige vers la page d'accueil
    window.location.href = 'index.html';
}

function showDayType() {
    const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const jourActuel = new Date().getDay();
    
    // Affiche le type de jour dynamique
    alert(`Type de jour: ${joursSemaine[jourActuel]} - Recette légère et équilibrée`);
}

// Appel de la fonction showDayType uniquement sur la page "Recettes"
function initRecettesPage() {
    if (document.getElementById('recettesPage')) {
        showDayType();
    }
}

// Appel de la fonction d'initialisation pour la page "Recettes"
initRecettesPage();