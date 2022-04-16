$(function(){
	const darkModeEvent = document.querySelector('.btnDarkMode');
	let choiceTheme = localStorage.getItem('theme');
	let prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const domBody = document.body;
	let setMode = prefersTheme ? 'dark' : 'light';

	window.onload = () => {
		if (choiceTheme === 'dark') {
			domBody.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
			darkModeEvent.classList.add('active');
		} else {
			domBody.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
			darkModeEvent.classList.remove('active');
		}
	};

	const darkActive = () => {
		darkModeEvent.classList.add('active');
		domBody.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	}

	const darkDeactive = () => {
		darkModeEvent.classList.remove('active');
		domBody.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}

	darkModeEvent.addEventListener('click', () => {

		choiceTheme = localStorage.getItem('theme');
		if (choiceTheme === 'light') {
			darkActive();
		} else {
			darkDeactive();
		}
	});

	$('.btnDarkMode').each(function(){
		if(localStorage.getItem('theme') === 'dark'){
			$(this).attr('aria-pressed', 'true');
			$(this).find('span').text('라이트모드');
		} else if($(localStorage.getItem('theme') === 'light')) {
			$(this).attr('aria-pressed', 'false');
			$(this).find('span').text('다크모드');
		}
	})

	$('.btnDarkMode').on({
		"click":function(){
			if(localStorage.getItem('theme') === 'dark'){
                $(this).attr('aria-pressed', 'true');
                $(this).find('span').text('라이트모드');
            } else if($(localStorage.getItem('theme') === 'light')) {
                $(this).attr('aria-pressed', 'false');
                $(this).find('span').text('다크모드');
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
			$('#dimmed').show();
		}
	});
	$('.mobile-nav').on({
		"click":function(){
			$('.mobile-nav-right').show();
		}
	});

	/*사이드 메뉴에서 닫기 버튼을 누르면 사이드 메뉴와 dimmed가 숨겨짐. */
	$('.mnr-nav-close').on({
		"click":function(){
			$('.mobile-nav-right').hide();
			$('#dimmed').hide();
		}
	});

	/* dimmed를 클릭하면 dimmed 제거 , 사이드 메뉴 숨기기 */
	$(document).on('click','#dimmed',function(){
		$(this).remove();
		$('.mobile-nav-right').hide();
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

	var N_font = [
		'font-family: RecipeKorea',
		'font-size:60px',
		'color: #4b89dc'
	].join(';');

	console.log('%cN',N_font);

	var T_font = [
		'font-family: RecipeKorea',
		'font-size:60px',
		'color: #fff'
	].join(';');

	console.log('%cT',T_font);
});