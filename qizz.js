   var questions = {
       1: "Who is the host of Comedy Bang Bang?",
       2: "What was the original name of the podcast",
       3: "Which guest has the most appearences on the podcast?",
       4: "What did Scott Name his dog?",
       5: "What year did comedy bang bang start?",
       6: "What is the famous catch phrase of the show?",
       7: "who voices Scotts dad",
       8: "Scotts alter ego is?",
       9: "Who is banned from the podcast?",
       10: "What is the last feature of each podcast?",
   };

   var choice1 = {
       1: "Jason Mantzoukas",
       2: "Comedy Death Ray",
       3: "Claudia ODoherty",
       4: "Rocky",
       5: "1999",
       6: "Whats up hotdog",
       7: "Seth Morris",
       8: "Hot Saucerman",
       9: "Rob Huebal",
       10: "Plugs",
   };

   var choice2 = {
       1: "Paul F. Thompkins",
       2: "Comedy Bang Bang",
       3: "Paul F. Thompkins",
       4: "Doggie",
       5: "2008",
       6: "Dog days of auggie doggie",
       7: "Paul Scheer",
       8: "Weirder Scott",
       9: "Paul Rust",
       10: "What am I thinking",
   }

   var choice3 = {
       1: "Nick Kroll",
       2: "Hello from the magic tavern",
       3: "Lauren Lapkus",
       4: "Freddy",
       5: "2017",
       6: "Heynongman",
       7: "James Adomian",
       8: "Homeofthe Whooperman",
       9: "Brett Gelman",
       10: "Rap Battle",
   };

   var choice4 = {
       1: "Scott Aukerman",
       2: "Nerdist",
       3: "Andy Daly",
       4: "Garfield",
       5: "2009",
       6: "A peanut in the rain",
       7: "Horatio Sanz",
       8: "Avoid Noiderman",
       9: "Nathan Fielder",
       10: "Would you rather",
   };

   var answers = {
       1: 2,
       2: 4,
       3: 1,
       4: 3,
   };

   function askQ(i) {
       $('.post-text').text('');
       $('.questionTitle').text(questions[i]);
       $('#choice1').text(choice1[i]);
       $('#choice2').text(choice2[i]);
       $('#choice3').text(choice3[i]);
       $('#choice4').text(choice4[i]);
   };

   function reset() {
       $('.questions').hide();
       $('.progress').hide();
   }


   function startQuiz() {
       $('.begin').hide();
       $('.progress').show();
       $('.questions').show();
       $('#reset').hide();
       askQ(1);
   }



   $(document).ready(function () {
       reset();
       var i = 1;
       var correctCount = parseInt($('.correct').html());
       var wrongCount = parseInt($('.wrong').html());

       $('#begin').click(startQuiz);

       $('#submit').click(function () {
           var y = $('input:checked');
           if (y.length === 1) {
               checkAns(y);
           } else {
               return false;
           };
       });

       $('#next').click(function () {
           if ($('.post-text').text() == '' && $('#submit:active')) {
               return false;
           };
           i += 1;
           $('.questionNum').text(i);
           askQ(i);
           $('#submit:submit').removeAttr("disabled");
           $('input:checked').prop('checked', false);
           if (i == 10) {
               $('#next').hide();
               $('#reset').show();
               return false;
           };
       });
       $('#reset').click(function () {
           location.reload();
       });



       function checkAns(y) {
           y.siblings('.post-text').removeClass('correct-ans wrong-ans');
           if (y.val() == answers[i]) {
               y.siblings('.post-text').addClass('correct-ans').text('correct!');
               correctCount += 1;
               $('.correct').text(correctCount);
           } else {
               y.sibling('.post-text').addClass('wrong-ans').text('wrong. see #' + answers[i]);
               wrongCount += 1;
               $('.wrong').text(wrongCount);
           };
           $('#submit:submit').attr("disabled", true);
           event.preventDefault();
       };
   })