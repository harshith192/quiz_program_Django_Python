const questionNumber=document.querySelector(".question-number");
const questionText=document.querySelector(".question-text");
const optionContainer=document.querySelector(".option-container");
const answersIndicatorContainer =document.querySelector(".answer-indicator");
const homeBox=document.querySelector(".home-box");
const quizBox=document.querySelector(".quiz-box");
const resultBox=document.querySelector(".result-box");


let questionCounter =0;
let CurrentQuestion;
let avaliableQuestions =[];
let avaliableOptions =[];
let correctAnswers= 0;
let attempt =0;


//push the questins into avaliableQuestions Array
function setAvaliableQuestions(){
    const totalQuestions = quiz.length;
    for (let i=0;i<totalQuestions;i++){
        avaliableQuestions.push(quiz[i])
    }

    
}

//set questions number , questions and options
function getNewQuestion(){
        //set question number

        questionNumber.innerHTML="Question "+(questionCounter + 1)+ " of "+quiz.length;
        //set question text
        //get random questions
        const questionIndex= avaliableQuestions[Math.floor(Math.random()*avaliableQuestions.length)]
        CurrentQuestion=questionIndex;
        questionText.innerHTML=CurrentQuestion.q;
       // get the position of question index from the avaliablequestons array
        const index1=avaliableQuestions.indexOf(questionIndex)
        
        // remove the question index delete so questions does"t repeated
        avaliableQuestions.splice(index1,1)

        //console.log(index1)
        //console.log(avaliableQuestions);

        //set options
        //get the length options
        
        const optionLen = CurrentQuestion.options.length
        //console.log(CurrentQuestion.options)
        for(let i=0;i<optionLen;i++){
            // push options into the avaliableOpttions Array
            avaliableOptions.push(i)

            }
            optionContainer.innerHTML = '';
            let animationDelay=0.15;
        //create options in html
        for(let i=0; i<optionLen; i++){
            const optionIndex=avaliableOptions[Math.floor(Math.random()* avaliableOptions.length)]
            //get the positions of option index from avaliable options
            const index2=avaliableOptions.indexOf(optionIndex);
            //remove the optionidex from the avaliableOptions so that optons dose not repeated
            avaliableOptions.splice(index2,1);
            const option = document.createElement("div");
            option.innerHTML = CurrentQuestion.options[optionIndex];
            option.id = optionIndex;
            option.style.animationDelay = animationDelay + "s"
            animationDelay = animationDelay + 0.15;
            option.className = "option";
            optionContainer.appendChild(option);
            option.setAttribute("onclick","getResult(this)");

        }
        

        questionCounter++

    }
    function getResult(element){
        const id = parseInt(element.id);
        console.log(id)
        // get the answer by compresing the id clicked option
        if(id == CurrentQuestion.answer){
            // set teh green color to the corect option
            element.classList.add("correct");
            //add the indicator to coorect mark
            updataAnswerIndicator("correct");
            correctAnswers++;
           // console.log("correct:"+correctAnswers)
        }
        else{
            // set the red color to the incorect option
            element.classList.add("wrong"); 
            //add the indicator to incorect mark
            updataAnswerIndicator("wrong");
            
            //if answer is incorrect the show the correct option by adding green color the correct option
            const optionLen = optionContainer.children.length;
            for (let i=0; i<optionLen ; i++){
                if(parseInt(optionContainer.children[i].id) === CurrentQuestion.answer ){
                    optionContainer.children[i].classList.add("correct");
                }

            }


      }
              attempt++;
              unclickableOptions();
    }


    function unclickableOptions(){

        const optionLen = optionContainer.children.length;
        for(let i=0 ;i<optionLen; i++){
            optionContainer.children[i].classList.add("already-answered");
        }

    }
    
    function answersIndicator(){
        answersIndicatorContainer.innerHTML = '';
        const totalQuestions = quiz.length;
        for(let i=0; i<totalQuestions ;i++){
            const indicator=document.createElement("div");
            answersIndicatorContainer.appendChild(indicator);


        }
    }
    
    function updataAnswerIndicator(markType){

            answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
    }

    function next(){
        if(questionCounter === quiz.length){
           // console.log("quiz is over");
            quizOver();
        }
        else{
            getNewQuestion();
        }
    }

    

    function quizOver(){
        //hide quiz box
        quizBox.classList.add("hide");
        //show result box
        resultBox.classList.remove("hide");
        quizResult();

    }

    function quizResult(){
        resultBox.querySelector(".total-question").innerHTML = quiz.length;
        resultBox.querySelector(".total-attempt").innerHTML = attempt;
        resultBox.querySelector(".total-Correct").innerHTML = correctAnswers;
        resultBox.querySelector(".total-Wrong").innerHTML = attempt - correctAnswers; 
        const Percentage =(correctAnswers/quiz.length) * 100
        resultBox.querySelector(".total-Percentage").innerHTML = Percentage.toFixed(2)+"%";
        resultBox.querySelector(".total-Score").innerHTML = correctAnswers +" / "+ quiz.length;
        
    }
    
    function resetQuiz(){
         questionCounter =0;
         correctAnswers= 0;
         attempt =0;
    }


    function tryAgainQuiz(){
        //hide the resultbox
        resultBox.classList.add("hide");
        //show the quiz box
        quizBox.classList.remove("hide");

        resetQuiz();
        startQuiz();
       
   }
   
   function goToHome(){
       // hide result Box
       resultBox.classList.add("hide");
       // show home box
       homeBox.classList.remove("hide");
       resetQuiz();

   }



    
// Staring point

function startQuiz()
{
    //hide home box
    homeBox.classList.add("hide");
    //show quiz box
    quizBox.classList.remove("hide");

    //first we will set all questions in validQuestions Array
     setAvaliableQuestions();
    //second we will call getNewQuestion(); function
     getNewQuestion();
    //to create indicator of answer
     answersIndicator();

   
     
}
window.onload = function () {
    homeBox.querySelector(".total-question").innerHtml = quiz.length;
}