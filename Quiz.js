var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionBox');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');

var app = {
    questions: [{
            q: 'In which European country are the largest areas of primeval forest preserved?',
            options: ['Bulgaria', 'Finald', 'Poland', 'America'],
            answer: 2,
        },
        {
            q: 'Who produces 70 percent of the worlds food?',
            options: ['Organic farmers', 'Large corporations', 'Small farmers', 'Doctors'],
            answer: 3,
        },
        {
            q: 'By how much does a healthy peatland grow per year?',
            options: ['1mm', '0.5cm', '1cm', '1m'],
            answer: 1,
        },
        {
            q: 'What is NOT found in the alpine mountain world?',
            options: ['Shells and corals', 'Microplastics', 'Mammoths', 'Humans'],
            answer: 3,
        },
        {
            q: 'Ladybirds are often used against plant pests. How many aphids can a single specimen kill per day?',
            options: ['10', '30', '50', '12'],
            answer: 3,
        },
        {
            q: 'What is the goal number of LIFE ON LAND',
            options: ['1', '12', '4', '15'],
            answer: 4,
        },

        {
            q: 'Ladybirds are often used against plant pests. How many aphids can a single specimen kill per day?',
            options: ['10', '30', '50', '80'],
            answer: 3,
        },
        {
            q: 'What should you NOT take home as a souvenir from your holiday?',
            options: ['Ivory', 'Shells', 'Pebbas', 'Gem'],
            answer: 1,
        },
        {
            q: 'Where was a glacier officially declared dead for the first time in August 2019?',
            options: ['In the Alps', 'In the Andes', 'In Iceland', 'In Finland'],
            answer: 2,
        },

    ],
    index: 0,
    load: function() {
        if (this.index <= this.questions.length - 1) {
            quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
            op1.innerHTML = this.questions[this.index].options[0];
            op2.innerHTML = this.questions[this.index].options[1];
            op3.innerHTML = this.questions[this.index].options[2];
            op4.innerHTML = this.questions[this.index].options[3];

            this.scoreCard();
        } else {

            quizBox.innerHTML = "Quiz is Over!!!"
            op1.style.display = "none";
            op2.style.display = "none";
            op3.style.display = "none";
            op4.style.display = "none";
            btn.style.display = "none";
        }
    },

    next: function() {
        this.index++;
        this.load();
    },
    check: function(ele) {

        var id = ele.id.split('');

        if (id[id.length - 1] == this.questions[this.index].answer) {
            this.score++;
            ele.className = "correct";
            ele.innerHTML = "Correct";
            this.scoreCard();
        } else {
            ele.className = "Incorrect";
            ele.innerHTML = "Incorrect";
        }

    },

    notClickAble: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "none";
        }
    },

    clickAble: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = ''

        }
    },

    score: 0,
    scoreCard: function() {
        scoreCard.innerHTML = this.score + "/" + this.questions.length;
    }

}
window.onload = app.load();

function button(ele) {
    app.check(ele);
    app.notClickAble();
}

function next() {
    app.next();
    app.clickAble();
}