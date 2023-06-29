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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_wild_axes.png";
			skillDescrText.innerHTML = "Герой швыряет топоры, которые прорубают деревья и противников на своём пути и возвращаются обратно. Каждый топор задевает одного врага лишь единожды и увеличивает урон, получаемый от героя и его существ.";
			skillDescrName.innerHTML = "WILD AXES";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_wild_axes.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_wild_axes.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_call_of_the_wild_boar.png";
			skillDescrText.innerHTML = "Герой призывает на поле битвы кабана-помощника. Его ядовитые атаки замедляют атаку и передвижение цели.";
			skillDescrName.innerHTML = "CALL OF THE WILD (КАБАН)";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_call_of_the_wild_boar.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_call_of_the_wild_boar.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_call_of_the_wild_hawk.png";
			skillDescrText.innerHTML = "Герой отправляет невидимого ястреба разведать территорию.";
			skillDescrName.innerHTML = "CALL OF THE WILD (ЯСТРЕБ)";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_call_of_the_wild_hawk.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_call_of_the_wild_hawk.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_inner_beast.png";
			skillDescrText.innerHTML = "Высвобождает животную ярость союзников неподалёку, увеличивая скорость их атак.";
			skillDescrName.innerHTML = "INNER BEAST";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_inner_beast.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_inner_beast.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-5")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_primal_roar.png";
			skillDescrText.innerHTML = "Герой издаёт громогласный рык, который оглушает цель и раскидывает всех противников на пути к ней. Все задетые враги получают урон, а у отлетевших в стороны врагов снижается скорость атаки и передвижения. Также на 3 секунды скорость передвижения героя и его существ увеличивается на 40.0%.";
			skillDescrName.innerHTML = "PRIMAL ROAR";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_primal_roar.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/beastmaster/beastmaster_primal_roar.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})