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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/batrider_sticky_napalm.png";
			skillDescrText.innerHTML = "Выплёскивает в выбранную область вязкое масло, которое увеличивает урон от всех атак и способностей героя. Масло замедляет передвижение и поворот врагов. Эффект от масла складывается до 10.0 раз. Каждое попадание наносит немного урона.";
			skillDescrName.innerHTML = "STICKY NAPALM";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/batrider_sticky_napalm.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/batrider_sticky_napalm.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/batrider_flamebreak.png";
			skillDescrText.innerHTML = "Кидает в указанную точку бутылку с горючей смесью, взрыв которой отталкивает и замедляет всех врагов в области действия, после чего им наносится периодический урон.";
			skillDescrName.innerHTML = "FLAMEBREAK";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/batrider_flamebreak.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/batrider_flamebreak.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/batrider_firefly.png";
			skillDescrText.innerHTML = "Герой поднимается в воздух, оставляя за собой огненный след. Огонь наносит урон врагам и уничтожает деревья.";
			skillDescrName.innerHTML = "FIREFLY";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/batrider_firefly.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/batrider_firefly.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/batrider_flaming_lasso.png";
			skillDescrText.innerHTML = "Захватывает врага в огненное лассо и тащит за собой, не давая ему атаковать, передвигаться или использовать способности. Телепортация разорвёт лассо.";
			skillDescrName.innerHTML = "FLAMING LASSO";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/batrider_flaming_lasso.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/batrider/batrider_flaming_lasso.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})