// Тексты для разных языков
const langElements = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-how": "How It Works",
        "nav-store": "Store",
        "nav-contact": "Contact",
        "main-heading": "XY Glove – Restoring fine motor skills",
        "main-subheading": "An innovative glove designed for children with special needs, helping them regain control through a mobile app.",
        "cta-buy": "Buy Now",
        "cta-learn": "Learn More",
        "about-title": "Technology that changes lives",
        "about-desc": "XY Glove is an innovative glove designed for children with motor skill impairments...",
        "how-title": "How It Works",
        "step1-title": "Step 1",
        "step1-desc": "Put the glove on the child's hand...",
        "step2-title": "Step 2",
        "step2-desc": "Connect the glove to the app via Bluetooth..."
    },
    ru: {
        "nav-home": "Главная",
        "nav-about": "О продукте",
        "nav-how": "Как это работает",
        "nav-store": "Магазин",
        "nav-contact": "Контакты",
        "main-heading": "XY Glove — Восстановление мелкой моторики",
        "main-subheading": "Инновационная перчатка для детей с особыми потребностями, возвращает контроль через мобильное приложение.",
        "cta-buy": "Купить сейчас",
        "cta-learn": "Узнать больше",
        "about-title": "Технология, которая меняет жизнь",
        "about-desc": "XY Glove — это инновационная перчатка, разработанная для детей с двигательными нарушениями...",
        "how-title": "Как это работает",
        "step1-title": "Шаг 1",
        "step1-desc": "Наденьте перчатку на руку ребенка...",
        "step2-title": "Шаг 2",
        "step2-desc": "Подключите перчатку к приложению через Bluetooth..."
    },
    kk: {
        "nav-home": "Басты бет",
        "nav-about": "Өнім туралы",
        "nav-how": "Қалай жұмыс істейді",
        "nav-store": "Дүкен",
        "nav-contact": "Байланыс",
        "main-heading": "XY Glove – Ұсақ моториканы қалпына келтіру",
        "main-subheading": "Ерекше қажеттіліктері бар балаларға арналған инновациялық қолғап, қолданбамен басқару арқылы қолдың қозғалысын қалпына келтіреді.",
        "cta-buy": "Қазір сатып алу",
        "cta-learn": "Көбірек білу",
        "about-title": "Өмірді өзгертетін технология",
        "about-desc": "XY Glove – бұл моторикасы бұзылған балаларға арналған инновациялық қолғап...",
        "how-title": "Қалай жұмыс істейді",
        "step1-title": "Қадам 1",
        "step1-desc": "Қолғапты балаңыздың қолына киіңіз...",
        "step2-title": "Қадам 2",
        "step2-desc": "Қолғапты Bluetooth арқылы қосыңыз..."
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
