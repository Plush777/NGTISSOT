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
	});

	$('.btnDarkMode').on({
		'click':function(){
			if(localStorage.getItem('theme') === 'dark'){
				$(this).attr('aria-pressed', 'true');
				$(this).find('span').text('라이트모드');
			} else if($(localStorage.getItem('theme') === 'light')) {
				$(this).attr('aria-pressed', 'false');
				$(this).find('span').text('다크모드');
			}
		}
	});

	$('.tab-list li').on({
		'click':function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			$(this).closest('.tab-nav').siblings('.tab-cont').eq($(this).index()).addClass('active').siblings('.tab-cont').removeClass('active');
		}
	});

	$('.accordion .dep1>li>.head').on({
		'click': function click(e) {
			e.preventDefault();
			$(this).closest('li').toggleClass('active').siblings().removeClass('active').find('.dep2').hide();
			$(this).closest('li').children('.dep2').stop().slideToggle(400).closest('li').siblings('li').children('.dep2').slideUp(400);
		}
	});	

	/*모바일 메뉴 클릭 시 모바일 사이드 메뉴와 dimmed가 보여짐. */
	$('.mobile-nav').on({
		'click':function(){
			$('#dimmed').fadeIn();
		}
	});

	$('.mobile-nav').on({
		'click':function(){
			$('.mobile-nav-right').css('right', '0');
			$('.mobile-nav-right').css('visibility', 'visible');
			$('.mobile-nav-right').css('opacity', '1');
		}
	});

	/*사이드 메뉴에서 닫기 버튼을 누르면 사이드 메뉴와 dimmed가 숨겨짐. */
	$('.mnr-nav-close').on({
		'click':function(){
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

	let lastScrollTop = 0;
	let decidedScrollTop = 120;
	$(window).scroll(function () {
		let st = $(this).scrollTop();
		if (st > decidedScrollTop) {
			$('header').addClass('fixed');
		} else if (st < decidedScrollTop) {
			$('header').removeClass('fixed');
		}

		if (st > lastScrollTop) {
			$('header').removeClass('head-sub-down').addClass('head-sub-up');
		} else {
			$('header').removeClass('head-sub-up').addClass('head-sub-down');
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

	let btnSearch = '<button type="button" class="btn-search" title="플레이어 태그 검색"></button>';
	$(document).on('mouseenter', '.readerTable td,.coReaderTable td', function() {
		$(this).find('p').append(btnSearch);
	}) .on('mouseleave', '.readerTable td,.coReaderTable td', function() {	
		$('.btn-search').remove();
	});

	$(document).on('click','.btn-search', function(){
		window.open('https://royaleapi.com/');
	});

	if(window.matchMedia('(max-width: 945px)').matches) {
		$(document).on('mouseenter', '.readerTable td,.coReaderTable td', function() {
			$('.btn-search').remove();
		});
	}

	$('.btn-mobile-search').on({
		'click':function(){
			$(this).closest('.mobile-search-area').addClass('active');
			$(this).addClass('on');
		}
	});

	$(window).load(function(){
		if(!$('.btn-mobile-search').hasClass('on') && $('.mobile-search-input').val() != '') {
			$('.mobile-search-input').val('');
		}
	});

	$('.mobile-search-input').on({
		'keyup':function(){
			if($(this).val() != ''){
				$('.btn-mobile-search').on({
					'click':function(){
						location.href = 'https://royaleapi.com/player/search/results?q=' + $(this).closest('.mobile-search-area').find('.mobile-search-input').val();
					}
				});
			}
		}
	});

	$(document).on({
		'click':function(e){
			if($(e.target).closest('.mobile-search-area').length == 0){
				$('.mobile-search-area').removeClass('active');
				$('.mobile-search-input').val('');
				$('.btn-mobile-search').removeClass('on');
			}
		}
	});
});