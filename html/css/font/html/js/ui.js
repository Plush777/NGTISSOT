//TOP버튼 클릭 시 부드럽게 올라감 
$(document).ready(function(){
    $(".quick-btn").click(function() {
        $('html').animate({scrollTop : 0}, 600);
    });
});

// /* 팝업 close 닫기버튼  */
// $(document).ready(function () {
// 	$('.btn-close').click(function(){
// 		$('.layer-popup').hide();
// 	});

// 	$('.btn-close').click(function(){
// 		$('.popup-mask').hide();
// 	});
// });


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


//탭 리스트
$(document).ready(function(){
	$('.tabList li').on({
		"click":function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			$(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
		}
	})
});
/* 아코디언 메뉴 토글 */
$(document).ready(function(){
	$('.accordion .dep1>li>.head').on({
		'click': function click(e) {
		  e.preventDefault();
		  $(this).closest('li').toggleClass('active').siblings().removeClass('active').find('.dep2').hide();
		  $(this).closest('li').children('.dep2').stop().slideToggle(400).closest('li').siblings('li').children('.dep2').slideUp(400);
		}
	});	
});


/* PC 다크모드 */
$(document).ready(function(){
	const storedTheme = localStorage.getItem("darkTheme");

	document.getElementById("darklight").addEventListener("click", () => {
        const html = document.documentElement;
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("darkTheme", "false");
        } else {
            html.classList.add("dark");
            localStorage.setItem("darkTheme", "true");
        }
    });
    if (storedTheme !== null) {
        if (storedTheme === "true") {
            document.documentElement.classList.add("dark");
        }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
    }

	document.getElementById("mobile-darklight").addEventListener("click", () => {
        const html = document.documentElement;
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("darkTheme", "false");
        } else {
            html.classList.add("dark");
            localStorage.setItem("darkTheme", "true");
        }
    });
    if (storedTheme !== null) {
        if (storedTheme === "true") {
            document.documentElement.classList.add("dark");
        }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
    }
});


$(document).ready(function(){
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
});