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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_berserkers_call.png";
			skillDescrText.innerHTML = "Герой бросает вызов ближайшим врагам, заставляя их атаковать его, а также получает бонус к броне на время действия способности.";
			skillDescrName.innerHTML = "BERSERKER'S CALL";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/axe/axe_berserkers_call.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/axe/axe_berserkers_call.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_battle_hunger.png";
			skillDescrText.innerHTML = "Приводит врага в бешенство, нанося ему урон, пока он кого-нибудь не убьёт или действие способности не закончится. Урон от способности увеличивается в зависимости от брони владельца способности. Скорость передвижения жертвы уменьшается, когда она не смотрит в сторону владельца способности.";
			skillDescrName.innerHTML = "BATTLE HUNGER";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/axe/axe_battle_hunger.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/axe/axe_battle_hunger.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_counter_helix.png";
			skillDescrText.innerHTML = "После определённого числа полученных атак герой прокручивает вокруг себя топор, нанося чистый урон всем врагам неподалёку.";
			skillDescrName.innerHTML = "COUNTER HELIX";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/axe/axe_counter_helix.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/axe/axe_counter_helix.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_culling_blade.png";
			skillDescrText.innerHTML = "Герой находит слабую точку врага и наносит ему чистый урон. Если убить этой способностью вражеского героя, её перезарядка сбрасывается, броня её владельца навсегда увеличится, а он и его союзники поблизости временно получат дополнительную скорость передвижения.";
			skillDescrName.innerHTML = "CULLING BLADE";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/axe/axe_culling_blade.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/axe/axe_culling_blade.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})