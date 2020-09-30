I have created the code quiz.
There is a clickable start button.
A timer starts at 30 seconds and begins counting down while presenting questions
The questions can be answered.
Once one question is answered, the title and options of the question change to the next title and options.
When a question is answered incorrectly it subtracts 5 seconds from timeRemaining.
All questions can be answered which stop the timer. Once the timer runs out it will read "Quiz Over!"
I unfortunately wasn't able to set up submit initials or score. However, I did manage to create the score function.


```
GIVEN I am taking a code quiz [/] Completed
WHEN I click the start button [/] Completed
THEN a timer starts and I am presented with a question [/] Completed
WHEN I answer a question [/] Completed
THEN I am presented with another question [/] Completed
WHEN I answer a question incorrectly [/] Completed
THEN time is subtracted from the clock [/] Completed
WHEN all questions are answered or the timer reaches 0 [/] Completed
THEN the game is over [/] Completed
WHEN the game is over [/] Completed
THEN I can save my initials and score [\] Not Completed
```

