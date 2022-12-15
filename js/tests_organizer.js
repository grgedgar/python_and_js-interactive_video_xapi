const timestamps = csvDataInArray.map((el) => {return Number(el[0])});
const questions = csvDataInArray.map((el) => {return el[1]});
const correctAnswers = csvDataInArray.map((el) => {return el[2]});
const distractors = csvDataInArray.map((el) => {return el[3]});
let testIsOpen = false;
let renderedTestIndex;
let testScore;

function toggleTest(arg) {
    document.getElementById('form_container').classList.toggle("show");
    if(arg == 'asyncf') {
        setTimeout('testIsOpen = !testIsOpen', 2000);
    } else {
        testIsOpen = !testIsOpen;
    }
}

function clearTestForm() {
    test_container.innerHTML = '';
}

function createTestQuestion(text) {
    let questionLabel = document.createElement('label');
        questionLabel.name = 'question';
        questionLabel.className = 'question';
        questionLabel.textContent = text;
    test_container.appendChild(questionLabel);
}
function mixAnswers(correct, distractors){
    let mix = [];
    distractors = distractors.slice(1, -1).split(',');
    distractors.map(element => mix.push(element));
    mix.push(correct);
    mix = mix
        .map(value => ({ value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return mix;
}
function createTestAnswers(mix) {
    mix.forEach((value, index) => {
        let answerInput = document.createElement('input');
            answerInput.type = 'radio';
            answerInput.name = "answer";
            answerInput.id = 'answer_id_' + [index];
        test_container.appendChild(answerInput);
        let answerLabel = document.createElement('label');
            answerLabel.setAttribute('for', 'answer_id_' + [index]);
            answerLabel.textContent = value;
            answerLabel.id = 'label_for_answer_id_' + [index];
        test_container.appendChild(answerLabel);
    });
}
function buildTest(index) {
    renderedTestIndex = index;
    clearTestForm();
    createTestQuestion(questions[index]);
    createTestAnswers(mixAnswers(correctAnswers[index], distractors[index]));
    toggleTest();
}
function calculateScore() {
    testScore = 0;
    let userAnswerRadioId = document.querySelector('input[name="answer"]:checked').id;
    let userAnswer = document.getElementById('label_for_' + userAnswerRadioId).textContent;
    if(userAnswer == correctAnswers[renderedTestIndex]) {
        testScore++;
    }
    return testScore;
}
function submitTest() {
    xapiTestSubmit(calculateScore());
    showTestResult();
    toggleTest('asyncf');
    vid.play();
    return false;
}
function showTestResult() {
    if(testScore == 1) {
        alert('Richtig!');
    } else {
        alert('Ihre Antwort ist nicht korrekt. Bitte sehen Sie sich das Video an und versuchen Sie es erneut.');
    }
}