const container = document.querySelector(".container");
const btn = document.querySelector("button"); 
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper"); 
const scissor = document.querySelector(".scissor");
const computerSelection = document.querySelector(".computer-selection"); 

function generateRandom(){
   let number =  Math.floor(Math.random()*3)+1;

    if(number==1) return "rock";
    if(number==2) return "paper";
    if(number==3) return "scissor";

}

function checkForRock(){

    rock.addEventListener("click",(event)=>{
        let selection = "rock";
        computerSelection.innerText = "";
        computerSelection.style.display = "none";

        if(generateRandom() === "rock"){
            let showComputerSelection = document.createElement("button");
            let rockImage  = document.createElement("img");
            let divComputer = document.createElement("div");
            let divUser = document.createElement("div");
            let divfinal = document.createElement("div"); 


            let computerInfo = document.createElement("p");
            let userinfo = document.createElement("p");

            let showUserSelection = document.createElement("button");
            let userRockImage = document.createElement("img");

            computerInfo.innerHTML = "Computer selection<br><br>Rock"; 
            computerInfo.setAttribute("style","color:black; font-size:30px;");

            userinfo.innerHTML = "User Selection<br><br>Rock";
            userinfo.setAttribute("style","color:black; font-size:30px;");
            
            divfinal.textContent = "IT'S A DRAW";
            
            userRockImage.src = "./rock.png";
            rockImage.src = "./rock.png";
            showComputerSelection.appendChild(rockImage);
            showUserSelection.appendChild(userRockImage);

            divComputer.appendChild(computerInfo);
            divComputer.appendChild(showComputerSelection);


            divUser.appendChild(userinfo);
            divUser.appendChild(showUserSelection);

            divUser.style.marginLeft = "100px";



            computerSelection.appendChild(divComputer);
            computerSelection.appendChild(divUser);
            computerSelection.appendChild(divfinal);
            
            computerSelection.setAttribute("style","background:white; border: 1px solid white; border-radius: 10% 10% 10% 10% ; justify-self: center;  margin-top:100px; padding:40px; display:flex;");
            
        } else if(generateRandom() === "paper"){
            let showComputerSelection = document.createElement("button");
            let showPaper = document.createElement("img");
            let divComputer = document.createElement("div"); 
            let divUser = document.createElement("div");
            let divfinal = document.createElement("div"); 

            let computerInfo = document.createElement("p");
            let userInfo = document.createElement("p");
            let showUserSelection = document.createElement("button");
            let userPaperImage = document.createElement("img");


            computerInfo.innerHTML = "Computer Selection<br><br>Paper";
            computerInfo.setAttribute("style","color:black; font-size: 30px;")

            userInfo.innerHTML  = "User Selection<br><br>Rock";
            userInfo.setAttribute("style","color:black; font-size:30px");

            divfinal.textContent = "YOU LOSE";

            // import images 
            showPaper.src ="./paper.png";
            userPaperImage.src = "./rock.png";

            // add to button 
            showComputerSelection.appendChild(showPaper);
            showUserSelection.appendChild(userPaperImage);

            // add to pag
            divComputer.appendChild(computerInfo);
            divComputer.appendChild(showComputerSelection);

            divUser.appendChild(userInfo);
            divUser.appendChild(showUserSelection);
            divUser.style.marginLeft = "100px";
            
            computerSelection.appendChild(divComputer);
            computerSelection.appendChild(divUser);
            computerSelection.appendChild(divfinal);
    
            computerSelection.setAttribute("style","background:white; border: 1px solid white; border-radius: 10% 10% 10% 10% ; justify-self: center;  margin-top:100px; padding:40px; display:flex;");

        } else if(generateRandom() ==="scissor"){
            let showComputerSelection = document.createElement("button");
            let showScissor = document.createElement("img");
            let divComputer = document.createElement("div"); 
            let divUser = document.createElement("div");
            let divfinal = document.createElement("div"); 

            let computerInfo = document.createElement("p");
            let userInfo = document.createElement("p");
            let showUserSelection = document.createElement("button");
            let userRockImage = document.createElement("img");

            // get image 
            showScissor.src = "./scissor.png";
            userRockImage.src = "./rock.png"; 

            // option info
            computerInfo.innerHTML = "Computer Selection <br><br>Scissor";
            userInfo.innerHTML = "User Selection <br><br>Rock";

            computerInfo.setAttribute("style","color:black; font-size: 30px;")
            userInfo.setAttribute("style","color:black; font-size:30px");

            divfinal.innerHTML = "YOU WIN";

            // append to image;
            showComputerSelection.appendChild(showScissor);
            showUserSelection.appendChild(userRockImage);

            // append to div 
            divComputer.appendChild(computerInfo);
            divComputer.appendChild(showComputerSelection);

            divUser.appendChild(userInfo);
            divUser.appendChild(showUserSelection);
            divUser.style.marginLeft = "100px";

            // append to computer-selection 
            computerSelection.appendChild(divComputer);
            computerSelection.appendChild(divUser);
            computerSelection.appendChild(divfinal);

            computerSelection.setAttribute("style","background:white; border: 1px solid white; border-radius: 10% 10% 10% 10% ; justify-self: center;  margin-top:100px; padding:40px; display:flex;");


            




        }



    });

}


checkForRock();
