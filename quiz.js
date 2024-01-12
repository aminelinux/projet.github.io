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

// Function to generate and display the quiz
function generateQuiz() {
    var quizContainer = document.getElementById('quizContainer');
    var submitBtn = document.getElementById('submitBtn');
    var resultElement = document.getElementById('quizResult');

    // Loop through the questions array
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = document.createElement('div');
        var optionsHtml = "";

        // Loop through the options for each question
        for (var j = 0; j < questions[i].options.length; j++) {
            optionsHtml += '<input type="radio" name="question' + i + '" value="' + questions[i].options[j] + '"> ' + questions[i].options[j] + '<br>';
        }

        // Add the question and options to the questionDiv
        questionDiv.innerHTML = '<p>' + questions[i].question + '</p>' + optionsHtml;
        quizContainer.appendChild(questionDiv);
    }

    // Function to calculate and display the result when the user clicks submit
    submitBtn.onclick = function () {
        var score = 0;

        // Loop through the questions and check the selected answer
        for (var i = 0; i < questions.length; i++) {
            var selectedOption = document.querySelector('input[name="question' + i + '"]:checked');
            
            if (selectedOption) {
                var userAnswer = selectedOption.value;

                if (userAnswer === questions[i].correctAnswer) {
                    score++;
                }
            }
        }

        // Display the result
        resultElement.innerHTML = 'Votre score au quiz : ' + score + ' sur ' + questions.length;

        // You can add more actions or feedback based on the score if needed
    };
}
