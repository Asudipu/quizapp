let quizDB=[
    {
        question: "Q1 : what is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2 : what is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading style sheep",
        c: "Cartton Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3 : what is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Text Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext transfer protocol",
        ans:"ans4"
    },
    {
        question: "Q4 : what is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordanShoes",
        ans:"ans1"
    }
]

let question=document.querySelector(".question");
let option1=document.querySelector("#option1");
let option2=document.querySelector("#option2");
let option3=document.querySelector("#option3");
let option4=document.querySelector("#option4");
let submit = document.querySelector("#submit");
let answers = document.querySelectorAll(".answer");
let showscore=document.querySelector("#showscore");

let questioncount=0;
let score=0;


function loadquestion(){

   let questionlist = quizDB[questioncount];
   question.innerHTML=questionlist.question;
   option1.innerHTML=questionlist.a;
   option2.innerHTML=questionlist.b;
   option3.innerHTML=questionlist.c;
   option4.innerHTML=questionlist.d;
}
loadquestion()

const getcheckanswer=()=>{
    let answer;
    answers.forEach((curanselem) => {
        if(curanselem.checked){
            answer=curanselem.id;
        }
    })
    return answer;
};

submit.addEventListener("click",function(){
    let checkedanswer= getcheckanswer();
    console.log(checkedanswer);
    if(checkedanswer==quizDB[questioncount].ans){
        score++
    };

    questioncount++;

    function deselectall(){
        answers.forEach((curanselem)=>curanselem.checked=false);
    }
    if(questioncount<quizDB.length){
        loadquestion();
    }else{
        showscore.innerHTML=`
        <h3>You Scored ${score}/${quizDB.length}</h3>
        <button class ="btn" onclick="location.reload()">Click Me</button>
        `;
        showscore.classList.remove("scorearea");
    }
});
