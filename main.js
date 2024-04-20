
const totalScore = {computerScore:0, playerScore:0}


// Get the Computer Choices with the use of high order methid

function getComputerChoice(){
    const rpsChoices = ['Rock','Paper','Scissor']
    const rpsNumber = Math.floor(Math.random() * 3)
    return rpsChoices[rpsNumber]
}

// getting the results between the playerChoice and the computerChoice
function getResults(playerOption, computerOption){
    let score;

    if( playerOption == computerOption ) {
        score = 0;
    } else if ( playerOption == 'Rock' && computerOption == 'Scissor' ){
        score = 1;
    } else if ( playerOption == 'Scissor' && computerOption == 'Paper' ){
        score = 1;
    } else if ( playerOption == 'Paper' && computerOption == 'Rock' ){
        score = 1;
    } else {
        score = -1
    }

    return score
}

function onClickRPS(playerOption){
    console.log({playerOption})

    // computer Options Section
    const computerOption = getComputerChoice()
    console.log({computerOption})

    // calling the get results
    const score = getResults(playerOption, computerOption)
    console.log(score)

    totalScore['playerScore'] += score
    console.log(totalScore)

    showResults(score, playerOption, computerOption)

}

// listenner for all the buttons to activate!
function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsbuttons')
    
    rpsButtons.forEach((rpsBtn) => {
        rpsBtn.onclick = () => onClickRPS(rpsBtn.value)
    })

    const clear = document.querySelector('.close')
    clear.onclick = () => endGame(totalScore)
}

// DOM manipulation
function showResults(score, playerOption, computerOption){

    // variables:
    const resultsDiv = document.querySelector('.resultDiv');
    const handDiv = document.querySelector('.handDiv');
    const personDivScore = document.querySelector('.personDivScore')



    // conditiona; Section Area
    if(score == -1){
        resultsDiv.innerText = 'You Loss my friend'
    } else if (score == 0) {
        resultsDiv.innerText = 'Its a Tie!'
    } else {    
        resultsDiv.innerText = 'You Win!!!'
    }

    handDiv.innerText = `Player Choice! ${playerOption} V.S. ${computerOption} Computer Choice!`

    personDivScore.innerText = `Your Score is ${totalScore['playerScore']}`
}

function endGame(totalScore){

    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultsDiv = document.querySelector('.resultDiv');
    const handDiv = document.querySelector('.handDiv');
    const personDivScore = document.querySelector('.personDivScore')

    resultsDiv.innerText = ''
    handDiv.innerText = ''
    personDivScore.innerText = ''
}


playGame()