// Quiz questions and answers
var questions = [
    {
        question: "Quel est l'organe responsable de la digestion dans le corps humain?",
        options: ["Le cœur", "Les poumons", "L'estomac"],
        correctAnswer: "L'estomac"
    },
    {
        question: "Combien de verres d'eau devrait-on boire en moyenne par jour pour rester hydraté?",
        options: ["5 verres", "8 verres", "12 verres"],
        correctAnswer: "8 verres"
    },
    {
        question: "Quelle vitamine est souvent appelée la 'vitamine du soleil'?",
        options: ["Vitamine A", "Vitamine C", "Vitamine D"],
        correctAnswer: "Vitamine D"
    }
];

// Fonction pour générer et afficher le quiz
function generateQuiz() {
    var quizContainer = document.getElementById('quizContainer');
    var submitBtn = document.getElementById('submitBtn');
    var resultElement = document.getElementById('quizResult');

    // Boucle à travers le tableau de questions
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = document.createElement('div');
        var optionsHtml = "";

        // Boucle à travers les options pour chaque question
        for (var j = 0; j < questions[i].options.length; j++) {
            optionsHtml += '<input type="radio" name="question' + i + '" value="' + questions[i].options[j] + '"> ' + questions[i].options[j] + '<br>';
        }

        // Ajouter la question et les options à questionDiv
        questionDiv.innerHTML = '<p>' + questions[i].question + '</p>' + optionsHtml;
        quizContainer.appendChild(questionDiv);
    }

    // Fonction pour calculer et afficher le résultat lorsque l'utilisateur clique sur Soumettre
    submitBtn.onclick = function () {
        var score = 0;

        // Boucle à travers les questions et vérifie la réponse sélectionnée
        for (var i = 0; i < questions.length; i++) {
            var selectedOption = document.querySelector('input[name="question' + i + '"]:checked');
            
            if (selectedOption) {
                var userAnswer = selectedOption.value;

                if (userAnswer === questions[i].correctAnswer) {
                    score++;
                }
            }
        }

        // Afficher le résultat
        resultElement.innerHTML = 'Votre score au quiz : ' + score + ' sur ' + questions.length;

    };
}
