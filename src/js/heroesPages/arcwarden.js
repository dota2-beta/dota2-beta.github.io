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
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_flux.png";
			skillDescrText.innerHTML = "Охватывает одинокого врага нестабильной энергией, нанося ему периодический урон. Урон блокируется, если рядом с целью есть ее союзники. Оригинал: замедляет передвижение жертвы. Копия: замедляет слабее, но наносит больше урона.";
			skillDescrName.innerHTML = "FLUX";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_flux.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_flux.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-2")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_magnetic_field.png";
			skillDescrText.innerHTML = "Оригинал: создаёт круглое магнитное поле, дающее героям и строениям внутри него уклонение от всех атак, совершённых извне, а также увеличивающее скорость атаки. Копия: поле увеличивает дальность атаки союзников и добавляет к их атакам магический урон. Существует дольше.";
			skillDescrName.innerHTML = "MAGNETIC FIELD";
			skillDescrVideoWebm.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_magnetic_field.webm');
			skillDescrVideoMp4.setAttribute('src', 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_magnetic_field.mp4');
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-3")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_spark_wraith.png";
			skillDescrText.innerHTML = "Оригинал: призывает призрачную искру, которая медленно материализуется и сторожит выделенную область. При появлении врага искра бросается на него и взрывается, нанося жертве магический урон и замедляя её. Копия: искра движется быстрее и замедляет дольше, но наносит меньше урона.";
			skillDescrName.innerHTML = "SPARK WRAITH";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_spark_wraith.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_spark_wraith.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
		if(skill.id == "skill-4")
		{
			skillDescrIcon.src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_tempest_double.png";
			skillDescrText.innerHTML = "Сконцентрировав свои осколки в единую сущность, герой создаёт свою идеальную электрическую копию, которая может применять собственную версию способностей и использовать все предметы, кроме многих расходуемых и тех, что теряются при смерти. Копия имеет отдельное время перезарядки способностей и предметов. За убийство копии противник получит золото. Копия теряет себя, если находится на слишком большом расстоянии от своего создателя, отчего наносит меньше урона атаками.";
			skillDescrName.innerHTML = "TEMPEST DOUBLE";
			skillDescrVideoWebm.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_tempest_double.webm");
			skillDescrVideoMp4.setAttribute("src", "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_tempest_double.mp4");
			VideoContainer.load();
			VideoContainer.play();
		}
	})
})