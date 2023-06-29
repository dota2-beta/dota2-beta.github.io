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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_bramble_maze.png";
			skillDescrText.innerHTML = "Герой зачаровывает выбранную область, где через 0.3 сек. вырастает лабиринт из терновых кустов. Они накладывают оцепенение на задетых противников и наносят им периодический урон.";
			skillDescrName.innerHTML = "BRAMBLE MAZE";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_bramble_maze.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_bramble_maze.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_shadow_realm.png";
			skillDescrText.innerHTML = "Герой прячется в мир теней, отчего его нельзя выбрать целью. Действие способности прервётся, если совершить атаку. Она имеет увеличенную дальность, а также нанесёт дополнительный магический урон, зависящий от того, как долго герой пробыл в мире теней. Максимальный эффект достигается после 3.5 сек.";
			skillDescrName.innerHTML = "SHADOW REALM";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_shadow_realm.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_shadow_realm.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_cursed_crown.png";
			skillDescrText.innerHTML = "Герой насылает на противника древнее заклятие фей. Спустя некоторое время оно оглушает жертву и всех противников вокруг неё.";
			skillDescrName.innerHTML = "CURSED CROWN";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_cursed_crown.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_cursed_crown.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_bedlam.png";
			skillDescrText.innerHTML = "Герой призывает на помощь ручного светлячка, который начинает вращаться вокруг своего владельца, быстро атакуя ближайших противников. Невозможно применить во время действия способности Terrorize.";
			skillDescrName.innerHTML = "BEDLAM";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_bedlam.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_bedlam.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-5")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dark_willow_terrorize.png";
			skillDescrText.innerHTML = "Герой натравливает на врагов своего ручного светлячка. После небольшой задержки он пугает всех противников в выбранной области, отчего они начинают бежать к своей базе. Невозможно применить во время действия способности Bedlam.";
			skillDescrName.innerHTML = "TERRORIZE";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_terrorize.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/dark_willow/dark_willow_terrorize.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})