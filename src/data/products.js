export const products = [
    {
        id: 'ethiopia-irgacheffe',
        title: 'Эфиопия Иргачефф',
        category: 'coffee',
        image: '/src/img/ethiopia1.png',
        brew: 'filter',
        price: 14.9,
        notes: ['ягоды', 'цветы', 'цитрус'],
        description:
            'Лёгкий и ароматный фильтр-кофе с ягодной сладостью и цветочным послевкусием.',
        details: {
            origin: 'Эфиопия',
            roast: 'светлая',
            weight: '250 г',
            process: 'мытая',
        },
    },
    {
        id: 'brazil-santos',
        title: 'Бразилия Сантос',
        category: 'coffee',
        image: '/src/img/brazil1.png',
        brew: 'espresso',
        price: 12.5,
        notes: ['шоколад', 'орех', 'карамель'],
        description:
            'Плотный и сладкий профиль для эспрессо. Отлично с молоком.',
        details: {
            origin: 'Бразилия',
            roast: 'средняя',
            weight: '250 г',
            process: 'натуральная',
        },
    },
    {
        id: 'kenya-aa',
        title: 'Кения AA',
        category: 'coffee',
        image: '/src/img/kenia1.png',
        brew: 'filter',
        price: 15.7,
        notes: ['смородина', 'грейпфрут', 'сахар'],
        description:
            'Яркая кислотность и сочные ягоды. Любимчик для V60/аэропресса.',
        details: {
            origin: 'Кения',
            roast: 'светлая',
            weight: '250 г',
            process: 'мытая',
        },
    },
    {
        id: 'v60-dripper',
        title: 'Воронка V60',
        category: 'accessory',
        image: '/src/img/voronka1.png',
        price: 9.9,
        notes: ['пластик', 'лёгкая', 'для фильтра'],
        description:
            'Классическая воронка для пуровера. Подходит для 1–2 чашек.',
        details: {
            material: 'пластик',
            size: '01',
        },
    },
    {
        id: 'filters-v60-100',
        title: 'Фильтры V60 (100 шт.)',
        category: 'accessory',
        image: '/src/img/filter1.png',
        price: 6.5,
        notes: ['бумага', '100 шт'],
        description:
            'Отбелённые бумажные фильтры для V60.',
        details: {
            qty: '100',
            type: 'V60 01',
        },
    },
    {
        id: 'scales-timer',
        title: 'Весы с таймером',
        category: 'accessory',
        image: '/src/img/vesiki1.png',
        price: 24.0,
        notes: ['0.1 г', 'таймер'],
        description:
            'Точные весы для заваривания с встроенным таймером.',
        details: {
            accuracy: '0.1 г',
            max: '3 кг',
        },
    },
]
