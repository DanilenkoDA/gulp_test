 const urls = [
       "https://example.com",
       "https://www.wikipedia.org",
       "https://www.python.org"
   ];

   let currentIndex = 0;
   const webView = document.getElementById('web-view');
   const timerDisplay = document.getElementById('timer');
   let timer;

   function loadNextPage() {
       webView.src = urls[currentIndex];
       currentIndex = (currentIndex + 1) % urls.length;
       startTimer();
   }

   function startTimer() {
       let timeLeft = 5;
       timerDisplay.textContent = timeLeft;
       clearInterval(timer);
       
       timer = setInterval(() => {
           timeLeft--;
           timerDisplay.textContent = timeLeft;
           if (timeLeft <= 0) {
               clearInterval(timer);
               loadNextPage();
           }
       }, 1000);
   }

   // Запускаем программу
   loadNextPage();

