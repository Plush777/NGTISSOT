$(function(){
	$('html').easeScroll();

	$('.btnDarkMode').each(function(){
		if(localStorage.getItem('theme') === 'dark'){
			$(this).attr('aria-pressed', 'true');
			$(this).find('span').text('라이트모드');
		} else if($(localStorage.getItem('theme') === 'light')) {
			$(this).attr('aria-pressed', 'false');
			$(this).find('span').text('다크모드');
		}
	})

	let imgArea = $('.img-area img');
	if(localStorage.getItem('theme') === 'dark'){
		imgArea.attr('src', 'images/dBHallOfFameLogo-white.png');
	} else if (localStorage.getItem('theme') === 'light') {
		imgArea.attr('src', 'images/dBHallOfFameLogo.png');
	}

	$('.btnDarkMode').on({
		"click":function(){
			if(localStorage.getItem('theme') === 'dark'){
                $(this).attr('aria-pressed', 'true');
                $(this).find('span').text('라이트모드');
				imgArea.attr('src', 'images/dBHallOfFameLogo-white.png');
            } else if($(localStorage.getItem('theme') === 'light')) {
                $(this).attr('aria-pressed', 'false');
                $(this).find('span').text('다크모드');
				imgArea.attr('src', 'images/dBHallOfFameLogo.png');
            }
		}
	})

    $(".btn-top").click(function() {
        $('html').animate({scrollTop : 0}, 600);
    });

	$('.tabList li').on({
		"click":function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			$(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
		}
	})

	$('.accordion .dep1>li>.head').on({
		'click': function click(e) {
		  e.preventDefault();
		  $(this).closest('li').toggleClass('active').siblings().removeClass('active').find('.dep2').hide();
		  $(this).closest('li').children('.dep2').stop().slideToggle(400).closest('li').siblings('li').children('.dep2').slideUp(400);
		}
	});	

	/*모바일 메뉴 클릭 시 모바일 사이드 메뉴와 dimmed가 보여짐. */
	$('.mobile-nav').on({
		"click":function(){
			$('#dimmed').fadeIn();
		}
	});
	$('.mobile-nav').on({
		"click":function(){
			$('.mobile-nav-right').css('right', '0');
			$('.mobile-nav-right').css('visibility', 'visible');
			$('.mobile-nav-right').css('opacity', '1');
		}
	});

	/*사이드 메뉴에서 닫기 버튼을 누르면 사이드 메뉴와 dimmed가 숨겨짐. */
	$('.mnr-nav-close').on({
		"click":function(){
			$('.mobile-nav-right').css('right','-280px');
			$('.mobile-nav-right').css('visibility', 'hidden');
			$('.mobile-nav-right').css('opacity', '0');
			$('#dimmed').fadeOut();
		}
	});

	/* dimmed를 클릭하면 dimmed 제거 , 사이드 메뉴 숨기기 */
	$(document).on('click','#dimmed',function(){
		$(this).fadeOut();
		$('.mobile-nav-right').css('right','-280px');
	});

	// //퀵메뉴1
	// $(document).ready(function() {
	//     var floatPosition = parseInt($(".quick-btn").css('top'));
	// 	$(window).scroll(function() {
	// 		var scrollTop = $(window).scrollTop();
	// 		var newPosition = scrollTop + floatPosition + "px";
	// 		$(".quick-btn").stop().animate({
	// 			"top" : newPosition
	// 		}, 500);
	// 	}).scroll();
	// });

	$('.yearListContainer .yearTxt').on({
		"click":function(){
			$(this).siblings('.yearSelect').toggleClass('active');
		}
	});

	$('.yearListContainer .yearSelect li').on({
		"click":function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			$(this).closest('.yearSelect').siblings('.yearTxt').find('span').text($(this).text());
			$(this).closest('.yearSelect').removeClass('active');
			if($(this).hasClass('active')){
				$(this).closest('.yearSelect').parent('.yearListContainer').siblings('p').find('.yearTitle').text($(this).text());
			}

			//2021년
			if($(this).index() === 0){
				$(this).parents('.title.desc').siblings('.y21').addClass('active').siblings('.y22').removeClass('active');
				if($(this).hasClass('active')){
					$(this).closest('.yearSelect').parent('.yearListContainer').siblings('.monthListContainer').find('.monthTxt').children('span').text('1월');
				}
			} 
			
			//2022년
			else if($(this).index() === 1){
				$(this).parents('.title.desc').siblings('.y22').addClass('active').siblings('.y21').removeClass('active');
			}
		}
	});

	$('.monthListContainer .monthTxt').on({
		"click":function(){
			$(this).siblings('.monthSelect').toggleClass('active');
		}
	});

	//모바일 월 선택
	$('.monthListContainer .monthSelect li').on({
		"click":function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			$(this).closest('.monthSelect').siblings('.monthTxt').find('span').text($(this).text());
			$(this).closest('.monthSelect').removeClass('active');

			// 2022년 
			if($('.y22').hasClass('active')){
				switch($(this).index()){
					case 0:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.jan').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 1:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.feb').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 2:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.mar').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 3:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.apr').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 4:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.may').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 5:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.jun').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 6:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.jul').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 7:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.aug').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 8:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.sep').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 9:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.oct').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 10:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.nov').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 11:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y22').find('.tabCont.dec').addClass('active').siblings('.tabCont').removeClass('active');
						break;
				}
			} 
			
			// 2021년
			else if($('.y21').hasClass('active')){
				switch($(this).index()){
					case 0:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.jan').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 1:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.feb').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 2:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.mar').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 3:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.apr').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 4:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.may').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 5:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.jun').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 6:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.jul').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 7:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.aug').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 8:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.sep').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 9:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.oct').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 10:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.nov').addClass('active').siblings('.tabCont').removeClass('active');
						break;
					case 11:
						$(this).parents('.monthListContainer').parents('.title.desc').siblings('.tabWrap.y21').find('.tabCont.dec').addClass('active').siblings('.tabCont').removeClass('active');
						break;
				}
			}
		}
	});

	//현재 월 비교해서 tabNav 엑티브
	function dateCompare(date1) {
		var date1 = new Date();
		var month1 = date1.getMonth() + 1;
		
		switch (month1) {
			case 1:
				$('.tabWrap.y22 .tabNav .tabList .jan').addClass('active');
				$('.tabWrap.y22 .tabCont.jan').addClass('active');
				$('.monthListContainer .monthTxt span').text('1월');
				break;
			case 2:
				$('.tabWrap.y22 .tabNav .tabList .feb').addClass('active');
				$('.tabWrap.y22 .tabCont.feb').addClass('active');
				$('.monthListContainer .monthTxt span').text('2월');
				break;
			case 3:
				$('.tabWrap.y22 .tabNav .tabList .mar').addClass('active');
				$('.tabWrap.y22 .tabCont.mar').addClass('active');
				$('.monthListContainer .monthTxt span').text('3월');
				break;
			case 4:
				$('.tabWrap.y22 .tabNav .tabList .apr').addClass('active');
				$('.tabWrap.y22 .tabCont.apr').addClass('active');
				$('.monthListContainer .monthTxt span').text('4월');
				break;
			case 5:
				$('.tabWrap.y22 .tabNav .tabList .may').addClass('active');
				$('.tabWrap.y22 .tabCont.may').addClass('active');
				$('.monthListContainer .monthTxt span').text('5월');
				break;
			case 6:
				$('.tabWrap.y22 .tabNav .tabList .jun').addClass('active');
				$('.tabWrap.y22 .tabCont.jun').addClass('active');
				$('.monthListContainer .monthTxt span').text('6월');
				break;
			case 7:
				$('.tabWrap.y22 .tabNav .tabList .jul').addClass('active');
				$('.tabWrap.y22 .tabCont.jul').addClass('active');
				$('.monthListContainer .monthTxt span').text('7월');
				break;
			case 8:
				$('.tabWrap.y22 .tabNav .tabList .aug').addClass('active');
				$('.tabWrap.y22 .tabCont.aug').addClass('active');
				$('.monthListContainer .monthTxt span').text('8월');
				break;
			case 9:
				$('.tabWrap.y22 .tabNav .tabList .sep').addClass('active');
				$('.tabWrap.y22 .tabCont.sep').addClass('active');
				$('.monthListContainer .monthTxt span').text('9월');
				break;
			case 10:
				$('.tabWrap.y22 .tabNav .tabList .oct').addClass('active');
				$('.tabWrap.y22 .tabCont.oct').addClass('active');
				$('.monthListContainer .monthTxt span').text('10월');
				break;
			case 11:
				$('.tabWrap.y22 .tabNav .tabList .nov').addClass('active');
				$('.tabWrap.y22 .tabCont.nov').addClass('active');
				$('.monthListContainer .monthTxt span').text('11월');
				break;
			case 12:
				$('.tabWrap.y22 .tabNav .tabList .dec').addClass('active');
				$('.tabWrap.y22 .tabCont.dec').addClass('active');
				$('.monthListContainer .monthTxt span').text('12월');
				break;
		}
	}

	dateCompare();

	let lastScrollTop = 0;
	let decidedScrollTop = 120;
    $(window).scroll(function () {
        let st = $(this).scrollTop();
        if (st > decidedScrollTop) {
            $('header').addClass('fixed');
        } else if (st < decidedScrollTop) {
            $('header').removeClass('fixed');
        }

		if(window.matchMedia('(max-width: 628px)').matches) {
			if (st > lastScrollTop) {
				$('header').removeClass('headDown').addClass('headUp');
			} else {
				$('header').removeClass('headUp').addClass('headDown');
			}
		}

        lastScrollTop = st;
    });

	/*const d = new Date(); 
	let currentDate = d.getFullYear() + "년 " + ( d.getMonth() + 1 ) + "월 " + d.getDate() + "일";  
	const result = document.getElementById("today"); result.innerHTML = "Today : " + currentDate;*/
});