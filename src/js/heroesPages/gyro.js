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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_rocket_barrage.png";
			skillDescrText.innerHTML = "Герой обстреливает окружающих врагов ракетами. Длится 3.0 сек.";
			skillDescrName.innerHTML = "ROCKET BARRAGE";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/gyrocopter/gyrocopter_rocket_barrage.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/gyrocopter/gyrocopter_rocket_barrage.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_homing_missile.png";
			skillDescrText.innerHTML = "Запускает во врага самонаводящуюся ракету. Она постепенно набирает скорость, а при столкновении с целью оглушает её и наносит урон. Враги могут уничтожить ракету, пока она летит к цели.";
			skillDescrName.innerHTML = "HOMING MISSILE";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/gyrocopter/gyrocopter_homing_missile.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/gyrocopter/gyrocopter_homing_missile.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_flak_cannon.png";
			skillDescrText.innerHTML = "Несколько следующих атак героя сопровождаются залпами по всем врагам в области вокруг него. Эффекты атаки (например, критический урон) действуют только на основную цель. Неиспользованные залпы пропадают через 12.0 сек.";
			skillDescrName.innerHTML = "FLAK CANNON";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/gyrocopter/gyrocopter_flak_cannon.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/gyrocopter/gyrocopter_flak_cannon.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_call_down.png";
			skillDescrText.innerHTML = "Вызывает воздушный удар на выбранную область. Через 2.0 сек. туда падает первый снаряд, а через 2.0 сек. — второй.";
			skillDescrName.innerHTML = "CALL DOWN";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/gyrocopter/gyrocopter_call_down.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/gyrocopter/gyrocopter_call_down.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})