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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_impale.png";
			skillDescrText.innerHTML = "Из земли прорывается полоса каменных шипов. Они наносят урон и подбрасывают врагов в воздух, оглушая их.";
			skillDescrName.innerHTML = "IMPALE";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/nyx_assassin/nyx_assassin_impale.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/nyx_assassin/nyx_assassin_impale.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_jolt.png";
			skillDescrText.innerHTML = "Наносит выбранному врагу урон, пропорциональный его интеллекту, а также долю от урона, полученного им от владельца способности за последние 15.0 сек.";
			skillDescrName.innerHTML = "MIND FLARE";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/nyx_assassin/nyx_assassin_jolt.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/nyx_assassin/nyx_assassin_jolt.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_spiked_carapace.png";
			skillDescrText.innerHTML = "Полностью блокирует урон от атаки или способности, по одному разу отражая урон и оглушая каждого, кто пытался его нанести. Не прерывает невидимость от способности Vendetta. Если герой находится под действием Burrow, эта способность мгновенно оглушает всех врагов вокруг.";
			skillDescrName.innerHTML = "SPIKED CARAPACE";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/nyx_assassin/nyx_assassin_spiked_carapace.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/nyx_assassin/nyx_assassin_spiked_carapace.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_vendetta.png";
			skillDescrText.innerHTML = "Делает героя невидимым и увеличивает его скорость передвижения. Если герой совершит атаку из невидимости, то нанесёт огромный дополнительный урон и лишит цель 50.0% от её максимальной маны. ";
			skillDescrName.innerHTML = "VENDETTA";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/nyx_assassin/nyx_assassin_vendetta.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/nyx_assassin/nyx_assassin_vendetta.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})