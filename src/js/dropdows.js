window.addEventListener('DOMContentLoaded', () => {
    gameBtn = document.querySelector('.header__menu__btn__game');
	dropdown = document.querySelector('.header__menu__dropdown');
	gameBtn.addEventListener('mouseenter', () => { // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
		dropdown.style.opacity = '1';
	});
	
	gameBtn.addEventListener('mouseleave', () => { // И ещё обработчик mouseleave - при "уходе" курсора с элемента
		dropdown.style.opacity = '0';
	});
	dropdown.addEventListener('mouseenter', () => { // Вешаем на него обработчик mouseenter - при наведение мыши на элемент
		dropdown.style.opacity = '1';
	});
	dropdown.addEventListener('mouseleave', () => { // И ещё обработчик mouseleave - при "уходе" курсора с элемента
		dropdown.style.opacity = '0';
	});
})

