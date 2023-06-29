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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_acid_spray.png";
			skillDescrText.innerHTML = "Распыляет в указанной области облако кислоты, которое наносит врагам периодический урон и снижает их броню.";
			skillDescrName.innerHTML = "ACID SPRAY";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_acid_spray.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_acid_spray.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_unstable_concoction.png";
			skillDescrText.innerHTML = "Герой начинает встряхивать колбу с гремучей смесью, которую можно бросить во вражеского героя. При попадании колба взорвётся, оглушив всех противников в радиусе взрыва и нанеся им урон. Чем дольше смесь встряхивать, тем больше урона она нанесёт и тем дольше будет оглушение. Пока герой не бросит колбу, он передвигается быстрее. Максимальный эффект достигается после 5.0 сек., однако если не выбросить колбу через 5.5 секунды, она взорвётся в руках героя, подействовав и на него самого.";
			skillDescrName.innerHTML = "UNSTABLE CONCOCTION";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_unstable_concoction.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_unstable_concoction.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_corrosive_weaponry.png";
			skillDescrText.innerHTML = "Покрытое кислотой оружие героя снижает сопротивление эффектам и скорость передвижения у жертв его атак. Этот эффект складывается.";
			skillDescrName.innerHTML = "CORROSIVE WEAPONRY";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_corrosive_weaponry.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_corrosive_weaponry.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_chemical_rage.png";
			skillDescrText.innerHTML = "Особая химическая смесь разъяряет героя, отчего задержка перед его атакой уменьшается, а скорость его передвижения и восстановление здоровья увеличиваются.";
			skillDescrName.innerHTML = "CHEMICAL RAGE";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_chemical_rage.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_chemical_rage.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})