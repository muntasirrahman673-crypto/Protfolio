// Words for typing animation
const words = [
    "CSE Student",
    "Java Learner",
    "Web Developer",
    "Programmer"
  ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = "";
  let isDeleting = false;
  
  const typingElement = document.getElementById("typing");
  
  function typeEffect() {
    
    currentWord = words[wordIndex];
  
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex++);
    }
  
    let speed = 120;
  
    if (isDeleting) {
      speed = 60;
    }
  
    // Finished typing word
    if (!isDeleting && charIndex === currentWord.length + 1) {
      speed = 1200;
      isDeleting = true;
    }
  
    // Finished deleting word
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex++;
  
      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  
    setTimeout(typeEffect, speed);
  }
  
  // Start animation
  typeEffect();