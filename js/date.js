/* sub5 명예의 전당 js */
$(function(){   
    const $optSelect = $('.opt-select');

    $optSelect.on({
        "click": function(){
            $(this).toggleClass('active');
        }
    });

    /* 년도 선택 */
    $('#year-select li:not(.disabled)').on({
        "click": function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('#year-select').closest('.opt-select').find('.date-txt').text($(this).text());
            $(this).closest('#year-select').closest('.opt-select').siblings('.opt-year').find('#year').text($(this).text());
            if($('.select-y22').hasClass('active')){
                $('#y-22').addClass('active').siblings('.result-area').removeClass('active');
            } else if($('.select-y21').hasClass('active')){
                $('#y-21').addClass('active').siblings('.result-area').removeClass('active');
            }

            /* 년도 클릭 시 월 강제로 바꿈 */
            if($('#y-21').hasClass('active')){
                $('#month-date').text('1월');
            } else if($('#y-22').hasClass('active')){
                $('#month-date').text(currentMonth + '월');
            }
        }
    });
    
    $('#month-select li').on({
        "click": function(){
            $(this).closest('#month-select').closest('.opt-select').find('.date-txt').text($(this).text());
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).parents('.opt-select').parent('.opt-wrap').siblings('.result-area.active').find('.hof-table')
            .eq($(this).index()).addClass('active').siblings('.hof-table').removeClass('active');
        }
    });

    $('#year-select .disabled').on({
        "click": function(e){
            e.stopPropagation();
        }
    });

    $(document).on({
        "click": function(e){
            if($('.opt-select').has(e.target).length === 0 && !$('.opt-select').is(e.target)){
                $optSelect.removeClass('active');
            }
        }
    });

    /* year */
    let date = new Date();
    let currentYear = date.getFullYear();
    console.log(currentYear);
    if(currentYear === 2022){
        $('#year-select .select-y22').addClass('active');
        $('#year').text('2022');
    } else if(currentYear === 2023){
        $('#year-select li').siblings('li').removeClass('active');
        $('#year-select .select-y23').addClass('active');
        $('#year').text('2023');
        $('#year-date').text('2023');
    }

    if($('#year-select .select-y22').hasClass('active')){
        $('#y-22').addClass('active');
    } else if($('#year-select .select-y21').hasClass('active')){
        $('#y-21').addClass('active');
    }

    /* month */
    let currentMonth = date.getMonth() + 1;
    console.log(currentMonth);

    /* 현재 월 비교 */
    switch(currentMonth){
        case 1:
            $('#month-select .select-mo-1').addClass('active');
            $('#y-22-mo-1').addClass('active');
            $('#month-date').text('1월');
            break;
        case 2:
            $('#month-select .select-mo-2').addClass('active');
            $('#y-22-mo-2').addClass('active');
            $('#month-date').text('2월');
            break;
        case 3:
            $('#month-select .select-mo-3').addClass('active');
            $('#y-22-mo-3').addClass('active');
            $('#month-date').text('3월');
            break;
        case 4:
            $('#month-select .select-mo-4').addClass('active');
            $('#y-22-mo-4').addClass('active');
            $('#month-date').text('4월');
            break;
        case 5:
            $('#month-select .select-mo-5').addClass('active');
            $('#y-22-mo-5').addClass('active');
            $('#month-date').text('5월');
            break;
        case 6:
            $('#month-select .select-mo-6').addClass('active');
            $('#y-22-mo-6').addClass('active');
            $('#month-date').text('6월');
            break;
        case 7:
            $('#month-select .select-mo-7').addClass('active');
            $('#y-22-mo-7').addClass('active');
            $('#month-date').text('7월');
            break;
        case 8:
            $('#month-select .select-mo-8').addClass('active');
            $('#y-22-mo-8').addClass('active');
            $('#month-date').text('8월');
            break;
        case 9:
            $('#month-select .select-mo-9').addClass('active');
            $('#y-22-mo-9').addClass('active');
            $('#month-date').text('9월');
            break;
        case 10:
            $('#month-select .select-mo-10').addClass('active');
            $('#y-22-mo-10').addClass('active');
            $('#month-date').text('10월');
            break;
        case 11:
            $('#month-select .select-mo-11').addClass('active');
            $('#y-22-mo-11').addClass('active');
            $('#month-date').text('11월');
            break;
        case 12:
            $('#month-select .select-mo-12').addClass('active');
            $('#y-22-mo-12').addClass('active');
            $('#month-date').text('12월');
            break;
    }
});