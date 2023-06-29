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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/muerta_dead_shot.png";
			skillDescrText.innerHTML = "Герой выпускает призрачную пулю во врага или в дерево. Достигнув цели, пуля нанесёт ей урон и ненадолго замедлит её, после чего отрикошетит в указанном направлении. Рикошет наносит урон всем существам на пути и останавливается при попадании в героя, накладывая на жертву страх, отчего та бежит по направлению рикошета.";
			skillDescrName.innerHTML = "DEAD SHOT";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/muerta/muerta_dead_shot.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/muerta/muerta_dead_shot.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/muerta_the_calling.png";
			skillDescrText.innerHTML = "Призывает 4 призрака, неторопливо кружащих в указанной области. Враги в ней медленнее передвигаются и атакуют. Проходя сквозь врагов, призраки наносят им урон и накладывают на них безмолвие.";
			skillDescrName.innerHTML = "THE CALLING";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/muerta/muerta_the_calling.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/muerta/muerta_the_calling.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/muerta_gunslinger.png";
			skillDescrText.innerHTML = "При каждой атаке герой имеет шанс совершить дополнительный выстрел в случайную цель (в первую очередь — в героев).";
			skillDescrName.innerHTML = "GUNSLINGER";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/muerta/muerta_gunslinger.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/muerta/muerta_gunslinger.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/muerta_pierce_the_veil.png";
			skillDescrText.innerHTML = "Герой принимает бесплотную форму, получая невосприимчивость к физическому урону и возможность проходить сквозь существ. Несмотря на бесплотность, герой может атаковать, а его сопротивление магии не снижается. Урон от атак увеличивается и становится магическим, отчего герой может атаковать других бесплотных существ, но такие атаки не наносят урона невосприимчивым к магии целям.";
			skillDescrName.innerHTML = "PIERCE THE VEIL";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/muerta/muerta_pierce_the_veil.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/muerta/muerta_pierce_the_veil.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})