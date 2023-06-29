skills = document.querySelectorAll('.skill');

menuAbilities = document.querySelector('.hero-features__content__menu__abilities');
menuLore = document.querySelector('.hero-features__content__menu__lore');
contentAbilities = document.querySelector('.hero-features__content__abilities');
contentLore = document.querySelector('.hero-features__content__lore');

menuAbilities.addEventListener('click', () => {
	contentAbilities.classList.add('active');
	contentLore.classList.remove('active');
})
menuLore.addEventListener('click', () => {
	contentLore.classList.add('active');
	contentAbilities.classList.remove('active');
	
})

skillDescrIcon = document.querySelector('.skill__descr__icon');
skillDescrName = document.querySelector('.skill__descr__wrapper__name');
skillDescrText = document.querySelector('.skill__descr__wrapper__text');
skillDescrVideoWebm = document.querySelector('.video-source-webm');
skillDescrVideoMp4 = document.querySelector('.video-source-mp4');
VideoContainer = document.querySelector('.skill__descr__video');

skills.forEach(skill => {
	skill.addEventListener('click', () => {
		if(skill.id == "skill-1")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_sticky_bomb.png";
			skillDescrText.innerHTML = "Герой бросает в выбранную область бомбу-липучку. Если она приземлится рядом с вражеским героем, то приклеится к нему и замедлит его передвижение. Через несколько секунд бомба взорвётся, нанеся урон всем врагам вокруг и замедлив их на 3.0 сек.";
			skillDescrName.innerHTML = "STICKY BOMB";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_sticky_bomb.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_sticky_bomb.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_reactive_tazer.png";
			skillDescrText.innerHTML = "Герой окружает себя зарядом электричества, ненадолго повышая свою скорость передвижения. Если атаковать заряженного героя, то на обидчика применится бессилие и нормальное развеивание. Когда заряд заканчивает своё действие, он взрывается, накладывая бессилие на всех врагов вокруг.";
			skillDescrName.innerHTML = "REACTIVE TAZER";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_reactive_tazer.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_reactive_tazer.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_suicide.png";
			skillDescrText.innerHTML = "Герой бросается в гущу врагов и при приземлении взрывает свой боезапас, нанося задетым врагам огромный урон и оглушая их. Владелец способности получает при взрыве урон в размере доли от своего текущего запаса здоровья, но не может от него умереть.";
			skillDescrName.innerHTML = "BLAST OFF!";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_suicide.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_suicide.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_minefield_sign.png";
			skillDescrText.innerHTML = "На 60.0 сек. устанавливает предостерегающую табличку, мины в области действия которой неуязвимы. Нельзя ставить больше одной таблички одновременно. ";
			skillDescrName.innerHTML = "MINEFIELD SIGN";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_minefield_sign.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_minefield_sign.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-5")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/techies_land_mines.png";
			skillDescrText.innerHTML = "Устанавливает невидимую мину. Её невидимость невозможно раскрыть, но она станет видна, если противник зайдёт в область действия. Мина взорвётся, если противник будет 1.0 сек. находиться на расстоянии в 500.0 от неё. Взрыв уменьшает сопротивление магии врагов и наносит им урон, зависящий от близости к мине: на расстоянии в 150.0 достигается полный урон, а на краю области действия он составит 50.0%. Наносит постройкам 30.0% урона.";
			skillDescrName.innerHTML = "LAND MINES";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_land_mines.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/techies/techies_land_mines.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})