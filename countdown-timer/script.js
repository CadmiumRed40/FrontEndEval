document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');
    let timerInterval;
    let totalSeconds = 0;
    let isTimerRunning = false;
    let remainingSeconds = 0;
  
    startButton.addEventListener('click', () => {
      const time = {
        hour: document.getElementById('hours').value,
        minute: document.getElementById('minutes').value,
        seconds: document.getElementById('seconds').value
      };
  
      let hours = Number(time.hour);
      let minutes = Number(time.minute);
      let seconds = Number(time.seconds);
  
      if (!isTimerRunning) {
        totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
        remainingSeconds = totalSeconds;
  
        document.getElementById('inputFields').style.display = 'none';
        document.getElementById('timerDisplay').style.display = 'block';
        document.getElementById('pauseButton').style.display = 'inline';
        document.getElementById('resetButton').style.display = 'inline';
  
        timerInterval = setInterval(() => {
          if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerDisplay').textContent = 'Time over!';
            return;
          }
  
          hours = Math.floor(totalSeconds / 3600);
          minutes = Math.floor((totalSeconds % 3600) / 60);
          seconds = totalSeconds % 60;
  
          document.getElementById('timerDisplay').textContent = `${hours}:${minutes}:${seconds}`;
  
          totalSeconds--;
        }, 1000);
  
        isTimerRunning = true;
      } else {
        clearInterval(timerInterval);
        totalSeconds = remainingSeconds;
  
        timerInterval = setInterval(() => {
          if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerDisplay').textContent = 'Time over!';
            isTimerRunning = false;
            return;
          }
  
          hours = Math.floor(totalSeconds / 3600);
          minutes = Math.floor((totalSeconds % 3600) / 60);
          seconds = totalSeconds % 60;
  
          document.getElementById('timerDisplay').textContent = `${hours}:${minutes}:${seconds}`;
  
          totalSeconds--;
        }, 1000);
      }
    });
  
    pauseButton.addEventListener('click', () => {
      if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        document.addEventListener('DOMContentLoaded', () => {
            const startButton = document.getElementById('startButton');
            const pauseButton = document.getElementById('pauseButton');
            const resetButton = document.getElementById('resetButton');
            let timerInterval;
            let totalSeconds = 0;
            let isTimerRunning = false;
            let remainingSeconds = 0;
          
            startButton.addEventListener('click', () => {
              const time = {
                hour: document.getElementById('hours').value,
                minute: document.getElementById('minutes').value,
                seconds: document.getElementById('seconds').value
              };
          
              let hours = Number(time.hour);
              let minutes = Number(time.minute);
              let seconds = Number(time.seconds);
          
              if (!isTimerRunning) {
                totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
                remainingSeconds = totalSeconds;
          
                document.getElementById('inputFields').style.display = 'none';
                document.getElementById('timerDisplay').style.display = 'block';
                document.getElementById('pauseButton').style.display = 'inline';
                document.getElementById('resetButton').style.display = 'inline';
          
                timerInterval = setInterval(() => {
                  if (totalSeconds <= 0) {
                    clearInterval(timerInterval);
                    document.getElementById('timerDisplay').textContent = 'Time over!';
                    return;
                  }
          
                  hours = Math.floor(totalSeconds / 3600);
                  minutes = Math.floor((totalSeconds % 3600) / 60);
                  seconds = totalSeconds % 60;
          
                  document.getElementById('timerDisplay').textContent = `${hours}:${minutes}:${seconds}`;
          
                  totalSeconds--;
                }, 1000);
          
                isTimerRunning = true;
              } else {
                clearInterval(timerInterval);
                totalSeconds = remainingSeconds;
          
                timerInterval = setInterval(() => {
                  if (totalSeconds <= 0) {
                    clearInterval(timerInterval);
                    document.getElementById('timerDisplay').textContent = 'Time over!';
                    isTimerRunning = false;
                    return;
                  }
          
                  hours = Math.floor(totalSeconds / 3600);
                  minutes = Math.floor((totalSeconds % 3600) / 60);
                  seconds = totalSeconds % 60;
          
                  document.getElementById('timerDisplay').textContent = `${hours}:${minutes}:${seconds}`;
          
                  totalSeconds--;
                }, 1000);
              }
            });
          
            pauseButton.addEventListener('click', () => {
              if (isTimerRunning) {
                clearInterval(timerInterval);
                remainingSeconds = totalSeconds;
                isTimerRunning = false;
              }
            });
          
            resetButton.addEventListener('click', () => {
              clearInterval(timerInterval);
              isTimerRunning = false;
              totalSeconds = 0;
              remainingSeconds = 0;
              document.getElementById('timerDisplay').textContent = '';
              document.getElementById('inputFields').style.display = 'block';
            });
          });
          
      }
    });
  
    resetButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      isTimerRunning = false;
      totalSeconds = 0;
      remainingSeconds = 0;
      document.getElementById('timerDisplay').textContent = '';
      document.getElementById('inputFields').style.display = 'block';
    });
  });
  