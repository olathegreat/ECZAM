// exampage script

;
let startexam = document.querySelector(".start-button");
let input = document.getElementsByName("course");
let beforeExam = document.querySelector(".before-exam");
let exam = document.querySelector(".exam");
let logoheader = document.querySelector(".masthead-brand");
let questionNumber = document.querySelector(".questionNumber");
let totalQuestions = document.querySelector(".total-questions");

let optionA = document.querySelector(".optionA");
let optionB = document.querySelector(".optionB");
let optionC = document.querySelector(".optionC");
let optionD = document.querySelector(".optionD");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");



let question = document.querySelector(".question")
let score = 0;
let scoredisplay = document.querySelector(".scoredisplay");
let nextButton = document.querySelector(".nextButton");
let prevButton = document.querySelector(".prevButton");
let submitExam = document.querySelector(".submitexam");



let GnsQuestions = [
    {
       Questions : "In what year was Nigeria given Independence?",
       option : ["1960", "1970" , "1969","1963"],
       correct: "opt0"

    },
    {
        Questions : "Who is the president of Nigeria",
       option : ["Vasco de gama", "Atiku" , "Jonathan","Buhari"],
       correct: "opt3"
    },
    {
        Questions : "What is the name of american presidential chambers",
       option : ["Aso rock", "Blue house" , "White House","Red house"],
       correct: "opt2"
    },
    {
        Questions : "Nigeria first indigenous prime minister is",
       option : ["Ikoku", "Balewa" , "Awolowo","Azikwe"],
       correct: "opt1"
    }
]


let Numi = 0;
startexam?.addEventListener('click', function(){

    if(input[0].checked){
        beforeExam.classList.add("nodisplay");
        exam.classList.add("display");
       question.textContent = GnsQuestions[Numi].Questions;
       optionA.textContent = GnsQuestions[Numi].option[0];
       optionB.textContent = GnsQuestions[Numi].option[1];
       optionC.textContent = GnsQuestions[Numi].option[2];
       optionD.textContent = GnsQuestions[Numi].option[3];
       
       totalQuestions.textContent = GnsQuestions.length;
       questionNumber.textContent = Numi + 1;  

      
    console.log(Numi);

    }
    else if(input[1].checked){
        alert("you have checked ser")
    }
    else{
        alert("kindly select an exam")
    }
  
   

  
})
let scoreCounter = 0;

nextButton.addEventListener('click',function(){
   
    if(Numi>=0 && Numi<3){
        Numi = Numi + 1;
        question.textContent = GnsQuestions[Numi].Questions;
        optionA.textContent = GnsQuestions[Numi].option[0];
        optionB.textContent = GnsQuestions[Numi].option[1];
        optionC.textContent = GnsQuestions[Numi].option[2];
        optionD.textContent = GnsQuestions[Numi].option[3];


        totalQuestions.textContent = GnsQuestions.length;
        questionNumber.textContent = Numi + 1;  

        
        let inputs = document.querySelector('input[name="options1"]:checked').value;
        let currentAnswer = GnsQuestions[Numi-1].correct;
        


        if (inputs == currentAnswer){
               scoreCounter = scoreCounter + 1;
                //  alert("your score is" + score)
               //  scoreCounter=scoreCounter + 1;
       } else{
            scoreCounter = scoreCounter + 0;
         }
       
       scoredisplay.textContent = scoreCounter;
        
         



        
        
      

    }
   
    
   console.log(Numi);
   
})
prevButton.addEventListener("click", function(){
   if(Numi>0 && Numi<=GnsQuestions.length){
       Numi = Numi - 1;
       question.textContent = GnsQuestions[Numi].Questions;
       optionA.textContent = GnsQuestions[Numi].option[0];
       optionB.textContent = GnsQuestions[Numi].option[1];
       optionC.textContent = GnsQuestions[Numi].option[2];
       optionD.textContent = GnsQuestions[Numi].option[3];

       totalQuestions.textContent = GnsQuestions.length;
       questionNumber.textContent = Numi + 1;  
     
   }
   

  console.log(Numi);




})

let examSection = document.querySelector(".exam");
let prompter = document.querySelector(".prompter");
submitExam.addEventListener("click",function(){
    // alert("your score is" + scoreCounter);
    examSection.style.opacity = "0.3";
    
    
    prompter.style.display = "block";
    prompter.style.marginTop = "20%";
    prompter.style.marginLeft = "10%";
    examSection.classList.add("z");


})
let btnYes = document.querySelector(".yes");
let btnNo = document.querySelector(".No");
let scoredisplaysection =  document.querySelector(".scoredisplay");
let finalScoreDisplay = document.querySelector(".finalScoreDisplay");

btnYes.addEventListener("click",function(){
    
    alert("you have successful submitted, your score is " + scoreCounter)
    window.location.href= "./loginpage.html";
    //  scoredisplaysection.style.display = "block";
     
    //    prompter.style.display = "none";
    //    finalScoreDisplay.textContent = "Your score is ";
})
btnNo.addEventListener("click",function(){
    examSection.style.opacity = "1.0";
    
    
    prompter.style.display = "none";
    prompter.style.marginTop = "20%";
    prompter.style.marginLeft = "10%";
    examSection.classList.remove("z");


})
// document.querySelector(".logout").addEventListener("click",function(){
//   window.location.href("./loginpage.html");
// })



