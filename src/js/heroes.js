window.addEventListener('DOMContentLoaded', () => {
    const attributes = document.querySelectorAll('.btn__item'), //attributes - атрибуты
	difficult = document.querySelectorAll('.btn__itemLvl'), //difficult - уровень сложности
	heroes = document.querySelectorAll('.strength,.agility,.intelligence'); //список героев
	heroesName = document.querySelectorAll('.hero__content__name');
	btns = document.querySelectorAll('.btn');
	attributes.forEach(item => {
		item.addEventListener('click',() => {
			item.classList.toggle('btn__item__active'); //добавляем класс активности атрибуду
			attributes.forEach(i => {
				if(i != item) {
					i.classList.remove('btn__item__active');
				}
			})
			if(item.classList[2] == 'btn__item__active')	{ //если кнопка атрибутов активна, то ищем, какие элементы убрать
				if(item.classList[1] == 'strengthItem') {
					heroes.forEach(hero => {
						if(hero.classList[2] == 'agility' || hero.classList[2] == 'intelligence') {
							hero.classList.add('hiddenHero');
							//hero.style.display = "none";
						}
						if(hero.classList[2] == "strength"){
							hero.classList.remove('hiddenHero')
							//hero.style.display = "block";
							
						}
					})
				}
				if(item.classList[1] == 'agilityItem') {
					heroes.forEach(hero => {
						if(hero.classList[2] == 'strength' || hero.classList[2] == 'intelligence') {
							hero.classList.add('hiddenHero');
						}
						if(hero.classList[2] == "agility"){
							hero.classList.remove('hiddenHero')
						}
					})
				}
				if(item.classList[1] == 'intelligenceItem') {
					heroes.forEach(hero => {
						if(hero.classList[2] == 'agility' || hero.classList[2] == 'strength') {
							hero.classList.add('hiddenHero');
						}
						if(hero.classList[2] == "intelligence"){
							hero.classList.remove('hiddenHero')
						}
					})
				}
			} else { //если кнопка атрибутов не активна, то ищем, есть ли активные
				let count = false;
				attributes.forEach(i => {
					if(i.classList[2] != undefined){
						count = true;
					}
				})
				if(!count) { //если активных нет, то показываем всех героев
					heroes.forEach(hero => {
						hero.classList.remove('hiddenHero')
					})
				}
			}
		})
	})
	difficult.forEach(item => {
		item.addEventListener('click',() => {
			item.classList.toggle('btn__itemLvl__active');
			let counter = 0;
			difficult.forEach(i => {
				if(i.classList[2] == 'btn__itemLvl__active'){
					counter++;
				}
			})
			if(counter == 1) {
				heroes.forEach(hero => {
					if(hero.classList[3] == 'lvl-2' || hero.classList[3] == 'lvl-3'){
						hero.classList.add('hiddenDifficult');
					}
					if(hero.classList[3] == 'lvl-1'){
						hero.classList.remove('hiddenDifficult');
					}
				})
			} else
			if(counter == 2) {
				heroes.forEach(hero => {
					if(hero.classList[3] == 'lvl-1' || hero.classList[3] == 'lvl-3'){
						hero.classList.add('hiddenDifficult');
					}
					if(hero.classList[3] == 'lvl-2'){
						hero.classList.remove('hiddenDifficult');
					}
				})
			} else
			if(counter == 3) {
				heroes.forEach(hero => {
					if(hero.classList[3] == 'lvl-1' || hero.classList[3] == 'lvl-2'){
						hero.classList.add('hiddenDifficult');
					}
					if(hero.classList[3] == 'lvl-3'){
						hero.classList.remove('hiddenDifficult');
					}
				})
			} else
			if(counter == 0) {
				heroes.forEach(hero => {
					hero.classList.remove('hiddenDifficult');
				})
			}
		})
	})

	document.querySelector('input[name=filterSearch]').addEventListener('keyup', function(e) {
		btns.forEach(btn => {
			btn.style.pointerEvents='none';
		})
		attributes.forEach(i => {
			i.classList.remove('btn__item__active');
		})
		difficult.forEach(i => {
			i.classList.remove('btn__itemLvl__active');
		})
		heroes.forEach(hero => {
			hero.classList.remove('hiddenHero');
			hero.classList.remove('hiddenDifficult');
		})
		var text = document.getElementsByTagName("input")[0];
		var val = text.value.toLowerCase();
		heroesName.forEach(heroName => {
			if(!heroName.textContent.includes(val)){
				getParentNode(heroName,3).classList.add('hiddenHero');
			} else {
				getParentNode(heroName,3).classList.remove('hiddenHero');
			}
		})
		if(val.length == 0) {
			btns.forEach(btn => {
				btn.style.pointerEvents='auto';
			})
		}
	});
	
})

function getParentNode(element, level = 1) {
    while (level-- > 0) {
      element = element.parentNode;
      if (!element) return null; // чтобы избежать возможного "TypeError: Cannot read property 'parentNode' of null" если уровень больше, чем документ
    }
    return element;
}

