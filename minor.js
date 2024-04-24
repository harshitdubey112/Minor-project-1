let gameSeq = [];
        let userSeq = [];
        let color = ["red","green","blue","yellow"]
        let body = document.querySelector("body")
        let play = document.querySelector(".start")
        let scoure = document.querySelector(".scoure")

        let started = false;
        let level = 0;
        let h=0;
        let h3 = document.querySelector("h3");
        let one = document.querySelector(".one")


        play.addEventListener("click", function(){
            if (started==false){
                console.log("Game has stated");
                started = true;
                levelUp();
            }

        });


        function btnFlash(btn){
            btn.classList.add("flash")
            setTimeout(()=>{
                btn.classList.remove("flash")
            },500)
        }
        function btnFlashP(btn){
            btn.classList.add("black")
            setTimeout(()=>{
                btn.classList.remove("black")
            },200)
        }
        function btnFlashbody(btn){
            btn.classList.add("red")
            setTimeout(()=>{
                btn.classList.remove("red")
            },500)
        }

        function levelUp (){
            userSeq = [];
            level++;
            h3.innerText = `Level ${level}`;
            let randomIdx = Math.floor(Math.random()*4)
            let randomColor = color[randomIdx]
            gameSeq.push(randomColor)
            let randomClass = document.querySelector(`.${randomColor}`)
            btnFlash(randomClass);
        }

        function check(index){
            if(gameSeq[index]==userSeq[index]){
                if(gameSeq.length == userSeq.length){
                    setTimeout(levelUp,1000)
                }
                console.log("contionue")
            }else{
                highestScore = level-1; 
                h3.innerText= `Game Over!! (Press PLAYto restart the game...)  AND YOUR SCORE WAS ${highestScore}`;
            
                if(h<highestScore){
                    h=highestScore;
                    scoure.innerText= h;
                }
                btnFlashbody(body);
                reset();
            }
        }

        function btnPress (){
            let btn = this;
            btnFlashP(btn);
            let userColor = btn.getAttribute("id");
            userSeq.push(userColor);
            check(userSeq.length-1);
        }

        let box = document.querySelectorAll(".box")
        for (btns of box){
            btns.addEventListener("click",btnPress)
        };


        function reset(){
            started= false;
            level = 0;
            userSeq =[];
            gameSeq = [];
        }