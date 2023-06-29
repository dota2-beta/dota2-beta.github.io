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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_tether.png";
			skillDescrText.innerHTML = "Связывает героя с союзным существом, увеличивая скорость передвижения обоих. Когда владелец способности восстанавливает здоровье или ману, их в приумноженном количестве получает и привязанное существо. Связь разорвётся, если отменить способность вручную или если расстояние до цели окажется слишком большим. Если противник заденет связь, его скорость передвижения будет ненадолго уменьшена.";
			skillDescrName.innerHTML = "TETHER";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/wisp/wisp_tether.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/wisp/wisp_tether.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_spirits.png";
			skillDescrText.innerHTML = "Призывает пять духов, которые кружатся вокруг героя. При столкновении с вражеским героем дух взрывается, нанося урон всем существам в области вокруг взрыва. При столкновении с крипом дух наносит немного урона, но не взрывается. По окончании действия способности взрываются все оставшиеся духи.";
			skillDescrName.innerHTML = "SPIRITS";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/wisp/wisp_spirits.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/wisp/wisp_spirits.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_overcharge.png";
			skillDescrText.innerHTML = "Герой повышает свою скорость атаки, наносит увеличенный урон от заклинаний и получает дополнительное восстановление здоровья, зависящее от своего максимального здоровья. Связанное с владельцем способности существо также получает эти бонусы.";
			skillDescrName.innerHTML = "OVERCHARGE";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/wisp/wisp_overcharge.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/wisp/wisp_overcharge.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/wisp_relocate.png";
			skillDescrText.innerHTML = "Телепортирует героя и связанного с ним союзника в любую точку карты. Спустя некоторое время герой вернётся туда, откуда он телепортировался, также перенеся связанного с собой союзника. Двойное нажатие отправит героя к своему фонтану.";
			skillDescrName.innerHTML = "RELOCATE";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/wisp/wisp_relocate.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/wisp/wisp_relocate.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})