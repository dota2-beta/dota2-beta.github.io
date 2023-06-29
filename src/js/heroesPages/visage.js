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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/visage_grave_chill.png";
			skillDescrText.innerHTML = "Крадёт скорость передвижения и атаки цели, прибавляя эти показатели себе и гаргульям неподалёку.";
			skillDescrName.innerHTML = "GRAVE CHILL";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/visage/visage_grave_chill.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/visage/visage_grave_chill.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/visage_soul_assumption.png";
			skillDescrText.innerHTML = "Способность получает заряд каждый раз, когда нанесённый героям неподалёку урон превышает 100.0. Наносит выбранной цели урон, зависящий от числа зарядов.";
			skillDescrName.innerHTML = "SOUL ASSUMPTION";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/visage/visage_soul_assumption.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/visage/visage_soul_assumption.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/visage_gravekeepers_cloak.png";
			skillDescrText.innerHTML = "Герой создаёт на себе слоистый защитный барьер. Если герой получает урон от игрока, один слой исчезает и восстанавливается спустя определённое время.";
			skillDescrName.innerHTML = "GRAVEKEEPER'S CLOAK";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/visage/visage_gravekeepers_cloak.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/visage/visage_gravekeepers_cloak.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/visage_summon_familiars.png";
			skillDescrText.innerHTML = "Призывает слепых гаргулий, которые будут сражаться на стороне героя. Гаргульи имеют способность Stone Form, которая позволяет им превратиться в камень, оглушая врагов при приземлении. В каменном облике гаргульи неуязвимы и быстро восстанавливают здоровье. За убийство гаргулий враг получает значительную награду.";
			skillDescrName.innerHTML = "SUMMON FAMILIARS";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/visage/visage_summon_familiars.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/visage/visage_summon_familiars.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})