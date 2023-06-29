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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_cold_feet.png";
			skillDescrText.innerHTML = "Отправляет снаряд в направлении выбранной точки на карте. Повторное применение запускает ледяной шар, который взорвётся там, где находился снаряд на момент активации. Чем дальше он пролетит, тем больше будет радиус взрыва. У врагов, которые оказались в радиусе взрыва или на пути ледяного шара, застывает кровь, отчего они не могут лечиться и восстанавливать здоровье. Если здоровье поражённой цели упадёт ниже определённого уровня, она мгновенно разобьётся на осколки.";
			skillDescrName.innerHTML = "COLD FEET";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_cold_feet.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_cold_feet.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_ice_vortex.png";
			skillDescrText.innerHTML = "Создаёт вихрь ледяной энергии, который наносит врагам в области действия урон, замедляет их и увеличивает получаемый ими магический урон.";
			skillDescrName.innerHTML = "ICE VORTEX";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_ice_vortex.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_ice_vortex.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_chilling_touch.png";
			skillDescrText.innerHTML = "Увеличивает дальность следующей атаки. Она наносит значительный магический урон и замедляет жертву.";
			skillDescrName.innerHTML = "CHILLING TOUCH";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_chilling_touch.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_chilling_touch.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_ice_blast.png";
			skillDescrText.innerHTML = "Отправляет снаряд в направлении выбранной точки на карте. Повторное применение запускает ледяной шар, который взорвётся там, где находился снаряд на момент активации. Чем дальше он пролетит, тем больше будет радиус взрыва. У врагов, которые оказались в радиусе взрыва или на пути ледяного шара, застывает кровь, отчего они не могут лечиться и восстанавливать здоровье. Если здоровье поражённой цели упадёт ниже определённого уровня, она мгновенно разобьётся на осколки.";
			skillDescrName.innerHTML = "ICE BLAST";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_ice_blast.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_ice_blast.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})