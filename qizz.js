$(document).ready(function () {
            $('.questions').hide();
            $('.progress').hide();
            var i = 1;
            var correctCount = parseInt($('.correct').html());
            var wrongCount = parseInt($('.wrong'.html()); $('#begin').click(function () {
                        $('.begin').hide();
                        $('.progress').show();
                        $('.questions').show();
                        $('#reset').hide();
                        askQ(i);
                    });

                    $('#submit').click(function () {
                        var y = $('input:checked');
                        if (y.length === 1) {
                            checkAns(y);
                        } else {
                            return false;
                        };
                    }); $('#next').click(function () {
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
                    }); $('#reset').click(function () {
                        location.reload();
                    });

                    function askQ(i) {
                        $('.post-text').text('');
                        $('.questiontitle').text(questions[i]);
                        $('#choice1').text(choice1[i]);
                        $('#choice2').text(choice2[i]);
                        $('#choice3').text(choice3[i]);
                        $('.#choice4').text(chocie4[i]);
                    };

                    function checkAns(u) {
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

                    var questions = {
                        1: "Who is the host of Comedy Bang Bang?",
                        2: "What was the original name of the podcast",
                        3: "Which guest has the most appearences on the podcast?",
                        4: "",
                        5: "What year did comedy bang bang start?",
                        6: "What is the famous catch phrase of the show?",
                        7: "who voices Scotts dad",
                        8: "Scotts alter ego is?",
                        9: "Who is banned from the podcast?",
                        10: "What is the last feature of each podcast?",
                    };