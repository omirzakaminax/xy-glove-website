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
        "about-title": "Technology that changes lives",
        "about-desc": "XY Glove is an innovative glove designed for children with motor skill impairments...",
        "how-title": "How It Works",
        "step1-title": "Step 1",
        "step1-desc": "Put the glove on the child's hand...",
        "step2-title": "Step 2",
        "step2-desc": "Connect the glove to the app via Bluetooth...",
        "app-title": "XY Glove App – Your assistant in managing the glove",
        "app-desc": "The XY Glove app allows users to control the glove's operation and personalize exercises according to the child's motor skills. It is designed to make the rehabilitation process simple, engaging, and adapted to each user.",
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
        "about-title": "Технология, которая меняет жизнь",
        "about-desc": "XY Glove — это инновационная перчатка, разработанная для детей с двигательными нарушениями...",
        "how-title": "Как это работает",
        "step1-title": "Шаг 1",
        "step1-desc": "Наденьте перчатку на руку ребенка...",
        "step2-title": "Шаг 2",
        "step2-desc": "Подключите перчатку к приложению через Bluetooth...",
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
        "about-title": "Өмірді өзгертетін технология",
        "about-desc": "XY Glove – бұл моторикасы бұзылған балаларға арналған инновациялық қолғап...",
        "how-title": "Қалай жұмыс істейді",
        "step1-title": "Қадам 1",
        "step1-desc": "Қолғапты балаңыздың қолына киіңіз...",
        "step2-title": "Қадам 2",
        "step2-desc": "Қолғапты Bluetooth арқылы қосыңыз...",
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
