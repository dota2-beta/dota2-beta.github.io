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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bane_enfeeble.png";
			skillDescrText.innerHTML = "Наносит урон каждую секунду, а также снижает урон от атак и дальность применения заклинаний.";
			skillDescrName.innerHTML = "ENFEEBLE";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/bane/bane_enfeeble.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/bane/bane_enfeeble.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bane_brain_sap.png";
			skillDescrText.innerHTML = "Высасывает жизненную энергию врага, нанося ему урон и восстанавливая здоровье героя.";
			skillDescrName.innerHTML = "BRAIN SAP";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/bane/bane_brain_sap.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/bane/bane_brain_sap.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bane_nightmare.png";
			skillDescrText.innerHTML = "Погружает вражеского или союзного героя в сон, прерываемый уроном. Если пробудить спящее существо атакой, эффект передаётся атакующему. Владелец способности может беспрепятственно атаковать спящие цели.";
			skillDescrName.innerHTML = "NIGHTMARE";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/bane/bane_nightmare.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/bane/bane_nightmare.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bane_fiends_grip.png";
			skillDescrText.innerHTML = "ПРЕРЫВАЕМАЯ — захватывает врага, оглушая его и нанося большой периодический урон. Также жертва каждые 0.5 сек. теряет долю от максимального запаса маны, передавая её владельцу способности.";
			skillDescrName.innerHTML = "FIEND'S GRIP";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/bane/bane_fiends_grip.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/bane/bane_fiends_grip.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})