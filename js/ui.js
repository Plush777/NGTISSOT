//TOP버튼 클릭 시 부드럽게 올라감 
$(document).ready(function(){
    $(".quick-btn").click(function() {
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


	/* PC 다크모드 */
	const storedTheme = localStorage.getItem("darkTheme");
	const storedThemeLight = localStorage.getItem("lightTheme");

	/* dark class 일때 */
	var darkEvent = document.getElementsByClassName('darkToggle');
	function localSetDark() {
		const html = document.documentElement;
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("darkTheme", "false");
        } else {
            html.classList.add("dark");
            localStorage.setItem("darkTheme", "true");
        }
	}
	for (var i = 0; i < darkEvent.length; i++) {
		darkEvent[i].addEventListener('click', localSetDark);
	}

	if (storedTheme !== null) {
        if (storedTheme === "true") {
            document.documentElement.classList.add("dark");
        }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
    }


	/* light 클래스일때 */
	var lightEvent = document.getElementsByClassName('darkToggle');
	function localSetLight() {
		const html = document.documentElement;
        if (html.classList.contains("light")) {
            html.classList.remove("light");
            localStorage.setItem("lightTheme", "false");
        } else {
            html.classList.add("light");
            localStorage.setItem("lightTheme", "true");
        }
	}
	for (var i = 0; i < lightEvent.length; i++) {
		lightEvent[i].addEventListener('click', localSetLight);
	}

	if (storedThemeLight !== null) {
        if (storedThemeLight === "true") {
            document.documentElement.classList.add("light");
        }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        document.documentElement.classList.add("light");
    }

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