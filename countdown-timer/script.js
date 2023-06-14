const time = {
    hour: document.getElementById('hours').value * 3600,
    minute: document.getElementById('minutes').value * 60,
    seconds: document.getElementById('seconds').value
}

//Possibly create an interface object to pull keys from 
const setTime = Number(time.hour + time.minute + time.seconds)
const startButton = document.getElementById('startButton')
const pauseButton = document.getElementById('pauseButton')
const resetButton = document.getElementById('resetButton')

let timerInterval;

/*===========Start Function==========*/
startButton.addEventListener('click', () => {

    document.getElementById('pauseButton').style.display = 'inline';
    document.getElementById('resetButton').style.display = 'inline';

    timerInterval = setInterval(() => {
      const hours = Math.floor(setTime / 3600);
      const minutes = Math.floor((setTime % 3600) / 60);
      const seconds = setTime % 60;
  
      document.getElementById('timerDisplay').innerHTML = `${hours}:${minutes}:${seconds}`;
  
      if (setTime === 0) {
        clearInterval(timerInterval);
        document.getElementById('timerDisplay').innerHTML = 'Time over!';
      }
  
      setTime--;
    }, 1000);
  });
  
  /*===========Pause Function==========*/
  pauseButton.addEventListener('click', () => {
    document.getElementById('pauseButton').style.display = 'none';
    clearInterval(timerInterval);
  });
  
  /*===========Reset Function==========*/
  resetButton.addEventListener('click', () => {
    document.getElementById('pauseButton').style.display = 'none';
    document.getElementById('resetButton').style.display = 'none';
    clearInterval(timerInterval);
    setTime = Number(time.hour + time.minute + time.seconds);
    document.getElementById('timerDisplay').innerHTML = `${time.hour}:${time.minute}:${time.seconds}`;
  });


