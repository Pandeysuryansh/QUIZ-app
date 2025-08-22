document.addEventListener('DOMContentLoaded',function(){
     
  let quizData = {
  "sections": [
    {
      "sectionTitle": "GK",
      "questions": [
        {
          "questionType": "MCQ",
          "question": "Which is the largest ocean in the world?",
          "options": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
          "answer": "Pacific Ocean"
        },
        {
          "questionType": "MCQ",
          "question": "Who is known as the Father of the Nation in India?",
          "options": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Dr. B. R. Ambedkar"],
          "answer": "Mahatma Gandhi"
        },
        {
          "questionType": "MCQ",
          "question": "What is the national flower of India?",
          "options": ["Rose", "Lotus", "Sunflower", "Lily"],
          "answer": "Lotus"
        },
        {
          "questionType": "MCQ",
          "question": "Which country is known as the Land of the Rising Sun?",
          "options": ["India", "China", "Japan", "Thailand"],
          "answer": "Japan"
        },
        {
          "questionType": "MCQ",
          "question": "Who was the first man to step on the Moon?",
          "options": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
          "answer": "Neil Armstrong"
        },
        {
          "questionType": "MCQ",
          "question": "Which is the smallest continent in the world?",
          "options": ["Europe", "Australia", "Antarctica", "South America"],
          "answer": "Australia"
        },
        {
          "questionType": "MCQ",
          "question": "What is the currency of Japan?",
          "options": ["Won", "Dollar", "Yen", "Euro"],
          "answer": "Yen"
        },
        {
          "questionType": "MCQ",
          "question": "Which is the longest river in the world?",
          "options": ["Amazon", "Nile", "Ganga", "Mississippi"],
          "answer": "Nile"
        },
        {
          "questionType": "MCQ",
          "question": "How many players are there in a cricket team?",
          "options": ["9", "10", "11", "12"],
          "answer": "11"
        },
        {
          "questionType": "MCQ",
          "question": "Which is the national bird of India?",
          "options": ["Peacock", "Parrot", "Sparrow", "Eagle"],
          "answer": "Peacock"
        }
      ]
    },
    {
      "sectionTitle": "Science",
      "questions": [
        {
          "questionType": "MCQ",
          "question": "What is the chemical formula of water?",
          "options": ["CO2", "H2O", "O2", "NaCl"],
          "answer": "H2O"
        },
        {
          "questionType": "MCQ",
          "question": "Which planet is known as the Red Planet?",
          "options": ["Earth", "Mars", "Venus", "Jupiter"],
          "answer": "Mars"
        },
        {
          "questionType": "MCQ",
          "question": "What gas do humans exhale during respiration?",
          "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
          "answer": "Carbon Dioxide"
        },
        {
          "questionType": "MCQ",
          "question": "What is the powerhouse of the cell?",
          "options": ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
          "answer": "Mitochondria"
        },
        {
          "questionType": "MCQ",
          "question": "Which vitamin is produced in the human body when exposed to sunlight?",
          "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          "answer": "Vitamin D"
        },
        {
          "questionType": "MCQ",
          "question": "Which planet is closest to the Sun?",
          "options": ["Mercury", "Venus", "Earth", "Mars"],
          "answer": "Mercury"
        },
        {
          "questionType": "MCQ",
          "question": "What is the boiling point of water at sea level?",
          "options": ["90°C", "100°C", "110°C", "120°C"],
          "answer": "100°C"
        },
        {
          "questionType": "MCQ",
          "question": "Which part of the human body pumps blood?",
          "options": ["Lungs", "Brain", "Heart", "Kidney"],
          "answer": "Heart"
        },
        {
          "questionType": "MCQ",
          "question": "Which is the largest planet in the solar system?",
          "options": ["Earth", "Jupiter", "Saturn", "Neptune"],
          "answer": "Jupiter"
        },
        {
          "questionType": "MCQ",
          "question": "Which organ is responsible for filtering blood in humans?",
          "options": ["Liver", "Kidney", "Lungs", "Stomach"],
          "answer": "Kidney"
        }
      ]
    },
    {
      "sectionTitle": "Maths",
      "questions": [
        {
          "questionType": "MCQ",
          "question": "What is 12 × 8?",
          "options": ["80", "96", "108", "88"],
          "answer": "96"
        },
        {
          "questionType": "MCQ",
          "question": "The square root of 144 is?",
          "options": ["10", "12", "14", "16"],
          "answer": "12"
        },
        {
          "questionType": "MCQ",
          "question": "What is the value of π (pi) approximately?",
          "options": ["2.14", "3.14", "4.13", "3.41"],
          "answer": "3.14"
        },
        {
          "questionType": "MCQ",
          "question": "What is 25% of 200?",
          "options": ["25", "50", "75", "100"],
          "answer": "50"
        },
        {
          "questionType": "MCQ",
          "question": "Solve: 15 ÷ 3 × 2",
          "options": ["5", "10", "15", "20"],
          "answer": "10"
        },
        {
          "questionType": "MCQ",
          "question": "What is 7 squared?",
          "options": ["42", "47", "49", "56"],
          "answer": "49"
        },
        {
          "questionType": "MCQ",
          "question": "If a triangle has angles 90°, 45°, and x°, what is x?",
          "options": ["30", "45", "60", "90"],
          "answer": "45"
        },
        {
          "questionType": "MCQ",
          "question": "What is 1000 divided by 25?",
          "options": ["25", "30", "35", "40"],
          "answer": "40"
        },
        {
          "questionType": "MCQ",
          "question": "Simplify: (5 × 6) + (10 ÷ 2)",
          "options": ["35", "40", "45", "50"],
          "answer": "35"
        },
        {
          "questionType": "MCQ",
          "question": "What is the perimeter of a square with side 12?",
          "options": ["24", "36", "44", "48"],
          "answer": "48"
        }
      ]
    },
    {
      "sectionTitle": "Indian History",
      "questions": [
        {
          "questionType": "MCQ",
          "question": "Who was the first President of India?",
          "options": ["Mahatma Gandhi", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"],
          "answer": "Dr. Rajendra Prasad"
        },
        {
          "questionType": "MCQ",
          "question": "In which year did India get Independence?",
          "options": ["1942", "1945", "1947", "1950"],
          "answer": "1947"
        },
        {
          "questionType": "MCQ",
          "question": "Who founded the Maurya Empire?",
          "options": ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
          "answer": "Chandragupta Maurya"
        },
        {
          "questionType": "MCQ",
          "question": "The Jallianwala Bagh massacre took place in which year?",
          "options": ["1915", "1919", "1921", "1930"],
          "answer": "1919"
        },
        {
          "questionType": "MCQ",
          "question": "Who was known as the Iron Man of India?",
          "options": ["Bhagat Singh", "Subhash Chandra Bose", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru"],
          "answer": "Sardar Vallabhbhai Patel"
        },
        {
          "questionType": "MCQ",
          "question": "Who was the first Prime Minister of India?",
          "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajiv Gandhi"],
          "answer": "Jawaharlal Nehru"
        },
        {
          "questionType": "MCQ",
          "question": "Who was the last Governor-General of India?",
          "options": ["Lord Mountbatten", "C. Rajagopalachari", "Warren Hastings", "Lord Wavell"],
          "answer": "C. Rajagopalachari"
        },
        {
          "questionType": "MCQ",
          "question": "Who was the founder of the Mughal Empire?",
          "options": ["Akbar", "Babur", "Humayun", "Aurangzeb"],
          "answer": "Babur"
        },
        {
          "questionType": "MCQ",
          "question": "Who gave the slogan 'Inquilab Zindabad'?",
          "options": ["Mahatma Gandhi", "Bhagat Singh", "Lala Lajpat Rai", "Bal Gangadhar Tilak"],
          "answer": "Bhagat Singh"
        },
        {
          "questionType": "MCQ",
          "question": "Which movement was launched in 1942 by Mahatma Gandhi?",
          "options": ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
          "answer": "Quit India Movement"
        }
      ]
    }
  ]
};

 initSections();

  function initSections() {
    let sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.addEventListener("click", () => {
        let sectionNumber = parseInt(section.getAttribute("data-section"));
        startQuiz(sectionNumber);
      });
    });
  }

  function startQuiz(index) {
    const currentQuestions = quizData.sections[index].questions;
    let currentQuestionIndex = 0;
    let score = 0;
    let answerSelected = false;

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("home-button").style.display = "none";
    document.getElementById("next-button").style.display = "inline-block";
    document.getElementById("score").textContent = "Score: 0";

    showQuestions();

    function showQuestions() {
      answerSelected = false;
      const question = currentQuestions[currentQuestionIndex];
      const questionElement = document.getElementById("question");
      const optionsElement = document.getElementById("options");

      questionElement.textContent = question.question;
      optionsElement.innerHTML = '';

      if (question.questionType === "MCQ") {
        question.options.forEach(option => {
          const optionElement = document.createElement('div');
          optionElement.textContent = option;
          optionElement.classList.add("option");
          optionElement.addEventListener('click', function () {
            if (!answerSelected) {
              answerSelected = true;
              highlightSelectedOptions(optionElement);
              checkAnswer(option, question.answer);
            }
          });
          optionsElement.appendChild(optionElement);
        });
      }
    }

    function checkAnswer(givenAnswer, correctAnswer) {
      const feedbackElement = document.createElement('div');
      feedbackElement.id = 'feedback';
      if (givenAnswer === correctAnswer) {
        score++;
        feedbackElement.textContent = '✅ Correct!';
        feedbackElement.style.color = 'green';
      } else {
        feedbackElement.textContent = `❌ Wrong! Correct answer: ${correctAnswer}`;
        feedbackElement.style.color = 'red';
      }
      const optionsElement = document.getElementById('options');
      optionsElement.appendChild(feedbackElement);
      updateScore();
    }

    function updateScore() {
      document.getElementById('score').textContent = "Score: " + score;
    }

    document.getElementById("next-button").onclick = () => {
      if (currentQuestionIndex >= currentQuestions.length - 1) {
        document.getElementById("question").textContent = "🎉 Quiz Over!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("next-button").style.display = "none";
        document.getElementById("home-button").style.display = "inline-block";
      } else {
        currentQuestionIndex++;
        showQuestions();
      }
    };

    document.getElementById("home-button").onclick = () => {
      document.getElementById("quiz-container").style.display = "grid";
  document.getElementById("question-container").style.display = "none";
  document.getElementById("next-button").style.display = "inline-block";
  document.getElementById("home-button").style.display = "none";
  document.getElementById("score").textContent = "";
  document.getElementById("question").textContent = "";
  document.getElementById("options").innerHTML = "";
  window.scrollTo(0, 0);
    };
  }

  function highlightSelectedOptions(selectedElement) {
    const options = document.querySelectorAll("#options div.option");
    options.forEach(option => {
      option.style.backgroundColor = "";
    });
    selectedElement.style.backgroundColor = "#d1e0ff";
  }
});
