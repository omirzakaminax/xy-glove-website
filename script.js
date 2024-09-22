const langElements = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-how": "How It Works",
        "nav-app": "App",
        "nav-store": "Store",
        "nav-contact": "Contact",
        "main-heading": "XY Glove – Restoring fine motor skills",
        "main-subheading": "An innovative glove designed for children with special needs, helping them regain control through a mobile app.",
        "cta-buy": "Buy Now",
        "cta-learn": "Learn More",
        "app-title": "XY Glove App — Your assistant in managing the glove",
        "app-desc": "The XY Glove app allows users to control the glove's operation and personalize exercises according to the child's motor skills.",
        "cta-download": "Download the app"
    },
    ru: {
        "nav-home": "Главная",
        "nav-about": "О продукте",
        "nav-how": "Как это работает",
        "nav-app": "Приложение",
        "nav-store": "Магазин",
        "nav-contact": "Контакты",
        "main-heading": "XY Glove — Восстановление мелкой моторики",
        "main-subheading": "Инновационная перчатка для детей с особыми потребностями, возвращает контроль через мобильное приложение.",
        "cta-buy": "Купить сейчас",
        "cta-learn": "Узнать больше",
        "app-title": "Приложение XY Glove — Ваш помощник в управлении перчаткой",
        "app-desc": "Приложение XY Glove позволяет пользователям контролировать работу перчатки и персонализировать упражнения в зависимости от уровня моторики ребенка.",
        "cta-download": "Скачать приложение"
    },
    kk: {
        "nav-home": "Басты бет",
        "nav-about": "Өнім туралы",
        "nav-how": "Қалай жұмыс істейді",
        "nav-app": "Қолданба",
        "nav-store": "Дүкен",
        "nav-contact": "Байланыс",
        "main-heading": "XY Glove – Ұсақ моториканы қалпына келтіру",
        "main-subheading": "Ерекше қажеттіліктері бар балаларға арналған инновациялық қолғап, қолданбамен басқару арқылы қолдың қозғалысын қалпына келтіреді.",
        "cta-buy": "Қазір сатып алу",
        "cta-learn": "Көбірек білу",
        "app-title": "XY Glove қолданбасы — қолғапты басқарудағы көмекшіңіз",
        "app-desc": "XY Glove қолданбасы пайдаланушыларға қолғап жұмысын бақылауға және жаттығуларды баланың моторика деңгейіне сәйкес бейімдеуге мүмкіндік береді.",
        "cta-download": "Қолданбаны жүктеу"
    }
};

// Переключение языка
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.dataset.lang;
        Object.keys(langElements[selectedLang]).forEach(id => {
            document.getElementById(id).textContent = langElements[selectedLang][id];
        });
    });
});

