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
			skillDescrIcon.src="/src/img/heroesList/heroes/abaddon/skills/abaddon_death_coil.png";
			skillDescrText.innerHTML = "Ценой собственного здоровья выпускает смертельный туман, который наносит урон врагу или лечит союзника.";
			skillDescrName.innerHTML = "MIST COIL";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="/src/img/heroesList/heroes/abaddon/skills/abaddon_aphotic_shield.png";
			skillDescrText.innerHTML = "Окружает союзника барьером из тёмной энергии, который поглощает некоторое количество урона. Если барьер пропадёт или его уничтожат, он взорвётся и нанесёт врагам вокруг урон, равный здоровью барьера. Применение снимает с цели оглушение и большинство отрицательных эффектов.";
			skillDescrName.innerHTML = "APHOTIC SHIELD";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_aphotic_shield.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_aphotic_shield.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="/src/img/heroesList/heroes/abaddon/skills/abaddon_frostmourne.png";
			skillDescrText.innerHTML = "Атаки героя замедляют передвижение жертвы. Если атаковать врага 4.0 раза, его окутают ледяные чары: они накладывают безмолвие и замедление, а все атакующие этого врага существа получают дополнительную скорость атаки.";
			skillDescrName.innerHTML = "CURSE OF AVERNUS";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_frostmourne.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_frostmourne.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="/src/img/heroesList/heroes/abaddon/skills/abaddon_borrowed_time.png";
			skillDescrText.innerHTML = "Обращает весь получаемый урон в лечение. Применение снимает большинство отрицательных эффектов. Если способность готова, то она сработает автоматически, как только здоровье владельца упадёт ниже 400.0.";
			skillDescrName.innerHTML = "BORROWED TIME";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_borrowed_time.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_borrowed_time.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})