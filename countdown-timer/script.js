const time = {
    hour: (document.getElementById('hours')*3600),
    minute: (document.getElementById('minutes')*60),
    seconds: document.getElementById('seconds')
}

//Possibly create an interface object to pull keys from 
const setTime = Number(time[0]+time[1]+time[2])
const startButton = document.getElementById('startButton')
const pauseButton = document.getElementById('pauseButton')
const resetButton = document.getElementById('resetButton')

function startTime(setTime){
    /**
     * create a function that takes the set time and starts the timer. combine with the setTimeout function below.
     */
}

setTimeout(() =>{
    console.log('time over.')
}, setTime, 'Time Over!')
