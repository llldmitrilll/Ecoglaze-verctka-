

let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	modal();


	if(windowWidth > mediaPoint1) {
		samplesAccardion();
	} else {
		bestSlider.destroy();

	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})






function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			popup.forEach((el) => {
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}

















function samplesAccardion() {
	$(document).ready(function() {
		$('.services_item').click(function() {
			// Проверяем, имеет ли элемент активный класс
			if ($(this).hasClass('active_item')) {
				// Если уже активен, то переходим по ссылке
				window.location = $(this).find('a').attr('href');
			} else {
				// Удаляем классы у всех элементов
				$('.services_item').removeClass('active_item');
				// Добавляем класс только текущему элементу
				$(this).addClass('active_item');
			}
		});
	});
}


$(document).ready(function() {
  $('.reco_accordion--itemWrapper').click(function() {
    // Проверяем, имеет ли элемент активный класс
		$('.reco_accordion--itemWrapper').removeClass('active_item');
		// Добавляем класс только текущему элементу
		$(this).addClass('active_item');
  });
});

	const bestSlider = new Swiper('.bestsellers-slider', {
		navigation: {
			prevEl: '.bestsellers_prev',
			nextEl: '.bestsellers_next'
		},
		loop: true,
		speed: 400,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 30
			}
		}
	});

const customersSlider = new Swiper('.customers_slider', {
	navigation: {
		prevEl: '.customers_prev',
		nextEl: '.customers_next'
	},
	scrollbar: {
		el: '.customers_scrollbar',
	},
	speed: 400,
	breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    }
	}
});

const newsSlider = new Swiper('.news_post_slider', {
	loop: true,
	speed: 700,
  autoplay: {
    delay: 5000, // Задержка между автоматическим переключением слайдов (в миллисекундах)
    disableOnInteraction: false // Позволяет автопрокрутке продолжаться даже при взаимодействии пользователя с слайдером
  },
	spaceBetween: 30,
});

document.addEventListener('DOMContentLoaded', function() {
  var dragElements = document.querySelectorAll('.drag-el');
  var containers = document.querySelectorAll('.samples_double--img');
  var imageAfters = document.querySelectorAll('.image-after');
  var fullscreenButtons = document.querySelectorAll('.fullscreen-btn');

  dragElements.forEach(function(dragElement, index) {
    var container = containers[index];
    var imageAfter = imageAfters[index];

    dragElement.addEventListener('mousedown', startDragging);
    dragElement.addEventListener('touchstart', startDragging);

    function startDragging(e) {
      e.preventDefault();

      var clientX = e.clientX || e.touches[0].clientX; // Обработка касания
      var dragStartX = clientX;
      var elementStartX = dragElement.offsetLeft;
      var containerWidth = container.offsetWidth;

      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag); // Обработка касания
      document.addEventListener('mouseup', stopDragging);
      document.addEventListener('touchend', stopDragging); // Обработка касания

      function drag(e) {
        var clientX = e.clientX || e.touches[0].clientX; // Обработка касания
        var dragDistance = clientX - dragStartX;
        var elementX = elementStartX + dragDistance;
        var clipValue = (elementX / containerWidth) * 100;

        if (clipValue >= 0 && clipValue <= 100) {
          dragElement.style.left = elementX + 'px';
          imageAfter.style.clipPath = 'inset(0 0 0 ' + clipValue + '%)';
        }
      }

      function stopDragging() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag); // Обработка касания
        document.removeEventListener('mouseup', stopDragging);
        document.removeEventListener('touchend', stopDragging); // Обработка касания
      }
    }
  });
  fullscreenButtons.forEach(function(fullscreenButton, index) {
    fullscreenButton.addEventListener('click', function() {
      console.log(fullscreenButton.parentNode)
      if(fullscreenButton.parentNode.classList.contains('active')) {
        fullscreenButton.parentNode.classList.remove('active')
      } else {
        fullscreenButton.parentNode.classList.add('active')
      }
      var container = containers[index];

      if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // Если документ не находится в полноэкранном режиме, открываем его
        if (container.requestFullscreen) {
          container.requestFullscreen();
        } else if (container.mozRequestFullScreen) { // Для Firefox
          container.mozRequestFullScreen();
        } else if (container.webkitRequestFullscreen) { // Для Chrome, Safari и Opera
          container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) { // Для IE/Edge
          container.msRequestFullscreen();
        }
      } else {
        // Если документ находится в полноэкранном режиме, закрываем его
        if (document.exitFullscreen) {
          document.exitFullscreen().then(function() {
            // Прокручиваем к контейнеру после выхода из полноэкранного режима
            container.scrollIntoView({ behavior: 'smooth' });
          });
        } else if (document.mozCancelFullScreen) { // Для Firefox
          document.mozCancelFullScreen().then(function() {
            container.scrollIntoView({ behavior: 'smooth' });
          });
        } else if (document.webkitExitFullscreen) { // Для Chrome, Safari и Opera
          document.webkitExitFullscreen().then(function() {
            container.scrollIntoView({ behavior: 'smooth' });
          });
        } else if (document.msExitFullscreen) { // Для IE/Edge
          document.msExitFullscreen().then(function() {
            container.scrollIntoView({ behavior: 'smooth' });
          });
        }
      }
    });
  });
});


$(document).ready(function() {
  document.addEventListener('wpcf7mailsent', function(event) {
    // Функция будет вызвана при успешной отправке письма
    succes('.success');
    $('.popup_form').removeClass('active')
  });
  
  document.addEventListener('wpcf7invalid', function(event) {
    // Функция будет вызвана, если поля не заполнены
    failed('.failed');
  });
  
})

document.addEventListener("DOMContentLoaded", function() {
    // Получение элемента header
    const header = document.querySelector('header');

    // Функция, которая добавляет или удаляет класс в зависимости от положения прокрутки
    function checkScroll() {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }

    // Обработчик события прокрутки
    window.addEventListener('scroll', checkScroll);
});




















































