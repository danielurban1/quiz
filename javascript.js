var question = [["Jak przeglądasz stronę internetową na co zwraczasz uwagę w pierszej kolejności", "obrazki", "układ strony", "szata graficzna", "efekty specjalne", -50, +50, -25, +25],
               ["Jeśli kupowałbyś samochód na jakie rzeczy zwróciłbyś uwagę w pierwszej kolejności", "niezawodność", "wygląd", "osiągi", "szybkość", +100, +25, -25, 0],
               ["Czy lubisz się uczyć języków obcych", "tak", "raczej tak",  "raczej nie", "zdecydowanie nie", +50, +25, -25, 0],
               ["Jaki zestaw umiejętności Cie najtrafniej określa",  "pracowity i dokładny", "kreatywny i chłonny nowych umiejętności", "ostrożny i podejrzliwy", "wzrokowiec i chłonny nowych wrażeń", +75, -50, +50, -100],
               ["Gdzie byś najchętniej spędził czas wolny", "w interaktywnym laboratorium technologii", "w galerii sztuki", "na łonie natury", "w krzemowej dolinie", +100, -100, 0, +50]];


var score = 0;
var quesNum = 0;
var questNumber = Object.keys(question).length;

document.addEventListener('DOMContentLoaded', function() {
    displayQuiz();
}, false);


function displayQuiz(){

var quest = document.getElementById("question");
quest.innerHTML = question[quesNum][0];

  for(j=1; j<=4; j++){
     var opt = document.getElementById("choice"+j);
     opt.innerHTML = question[quesNum][j];
 }
}



  function validate(item){
	if (item === "a"){
       	score += question[quesNum][5];
	}
	else if (item === "b"){
       	score += question[quesNum][6];
	}
	else if (item === "c"){
       	score += question[quesNum][7];
	}
	else if (item === "d"){
       	score += question[quesNum][8];
	}
         if(quesNum  === questNumber - 1){
        	var mainBody = document.getElementById("quiz");
			if (score < (-questNumber * 100 * 1 / 4)){
				mainBody.innerHTML = "<h1>"+"Frontend"+ score+"/5"+"</h1>"+"<p>"+"Twój zmysł artystyczny wskazuje na to, że świetnie odnajdziesz się we frontendzie."+ "</p>"+"<a href='https://reaktor.pwn.pl/kurs/front-end-developer/'>Zaposznaj się z ofertą i zapisz się!</a>";
			}
			else if (score > (questNumber * 100 * 1 / 4)){
				mainBody.innerHTML = "<h1>Backend"+ score+"</h1>"+"<p>"+"Twoja umiejętność analitycznego myślenia predysponuje Cię do pracy w backendzie."+ "</p>"+"<a href='https://reaktor.pwn.pl/kurs/back-end-developer/'>Zaposznaj się z ofertą i zapisz się!</a>";
			}
			else{
				mainBody.innerHTML = "<h1>Fullstack"+ score+"</h1>"+"<p>"+"Posiadasz zdolności predysonujące Cię do pracy jako fullstack developer."+ "</p>"+"<a href='https://reaktor.pwn.pl/kurs/back-end-developer/'>Zaposznaj się z ofertą i zapisz się!</a>";
			};

        }

        quesNum++;
        var progress = document.getElementById("progress");
	progress.innerHTML = "<p>" + "Pytanie " + (quesNum + 1) + " z " + questNumber + ".</p>";
     }


function listen(cl) {
    validate(cl);
	displayQuiz();
}
