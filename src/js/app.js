window.addEventListener('DOMContentLoaded', () => {
    const btn_theme = document.querySelectorAll('.changeTheme'),
    menu = document.querySelector('.mobileHeader__container'),
    hamburger = document.querySelector('.hamburger');
    
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "light") {
        document.body.classList.add("lightTheme");
    }

    btn_theme.forEach(item => {
        item.addEventListener('click', () => {
            document.body.classList.toggle('lightTheme');
            let theme = "";
            if (document.body.classList.contains("lightTheme")) { 
                theme = "light";
            }
            localStorage.setItem("theme", theme);
        });
    });
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobileHeader__container_active');
    });
})

