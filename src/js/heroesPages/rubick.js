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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/rubick_telekinesis.png";
			skillDescrText.innerHTML = "Используя телекинез, герой ненадолго поднимает противника в воздух, а затем швыряет его обратно на землю — с такой силой, что оглушает всех врагов рядом с ним.";
			skillDescrName.innerHTML = "TELEKINESIS";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/rubick/rubick_telekinesis.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/rubick/rubick_telekinesis.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/rubick_fade_bolt.png";
			skillDescrText.innerHTML = "Герой создаёт мощный поток магической энергии, который перемещается между противниками, нанося им урон и снижая урон от их атак. Каждый последующий скачок наносит меньше урона.";
			skillDescrName.innerHTML = "FADE BOLT";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/rubick/rubick_fade_bolt.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/rubick/rubick_fade_bolt.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/rubick_arcane_supremacy.png";
			skillDescrText.innerHTML = "Знания тайной магии усиливают заклинания героя: они применяются с большего расстояния и действуют эффективнее.";
			skillDescrName.innerHTML = "ARCANE SUPREMACY";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/rubick/rubick_arcane_supremacy.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/rubick/rubick_arcane_supremacy.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/rubick_spell_steal.png";
			skillDescrText.innerHTML = "Герой улавливает следы магической энергии, обучаясь таинствам последней способности, применённой выбранным противником. Полученная способность находится в распоряжении героя несколько минут либо пока он не погибнет. Отрицательные эффекты от украденных способностей действуют дольше.";
			skillDescrName.innerHTML = "SPELL STEAL";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/rubick/rubick_spell_steal.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/rubick/rubick_spell_steal.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})