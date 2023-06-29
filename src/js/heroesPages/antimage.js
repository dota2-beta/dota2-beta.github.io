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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png";
			skillDescrText.innerHTML = "Каждая атака сжигает ману цели и наносит ей урон, равный доле от сожжённой маны. Замедляет жертв, у которых нет маны.";
			skillDescrName.innerHTML = "MANA BREAK";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_mana_break.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_mana_break.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png";
			skillDescrText.innerHTML = "Перемещение на короткую дистанцию, позволяющее ворваться в схватку или быстро из неё сбежать.";
			skillDescrName.innerHTML = "BLINK";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_blink.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_blink.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_counterspell.png";
			skillDescrText.innerHTML = "Пассивно увеличивает сопротивление магическому урону. Можно применить, чтобы создать вокруг себя противомагический щит, который полностью блокирует и отражает все направленные заклинания обратно во врага.";
			skillDescrName.innerHTML = "COUNTERSPELL";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_counterspell.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_counterspell.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_void.png";
			skillDescrText.innerHTML = "Кратковременно оглушает вражескую цель, а затем наносит ей и всем окружающим её противникам урон, пропорциональный числу отсутствующей у неё маны.";
			skillDescrName.innerHTML = "MANA VOID";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_mana_void.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_mana_void.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})