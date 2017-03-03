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
                    });