import {v4 as uuidv4} from 'uuid';


export const initialRoute = [
    {
        id: "fjlk234jdflskdjf",
        title: 'all theory-and-drill-showing',
        russianTitle: 'Вся грамматика',
        description: '',
    },
    {
        id: "fsldkjf323235",
        title: 'What is Grammar',
        russianTitle: 'Что такое грамматика',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Грамматика — это правила, которые помогают соединять между собой слова ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: '',
    },
    {
        id: "lkdj34234kjkj",
        title: 'sentence structure ',
        russianTitle: 'Как строить предложения',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Предложение — это законченная фраза ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "sdlfkj23498s7f",
        title: 'conditionals',
        russianTitle: 'Условные предложения',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Условные предложения — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "kjsdf2834792837",
        title: 'conditional 1',
        russianTitle: 'Условные предложения 1',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Условные предложения первого типа — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "lsdjf298374",
        title: 'conditional 2',
        russianTitle: 'Условные предложения 2',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Условные предложения второго типа — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "023984lskdjf",
        title: 'conditional 3',
        russianTitle: 'Условные предложения 3',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Условные предложения третьего типа — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "sldkfj238975",
        title: 'modal verbs',
        russianTitle: 'Модальные глаголы',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Модальные глаголы — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "fjkl3k480s9fsdf",
        title: 'What is Tense',
        russianTitle: 'Что такое «время»',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Время (tense) — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "sdlkjf3487",
        title: 'present simple',
        russianTitle: 'Настоящее простое время',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Настоящее простое время — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "sdlkfjl3427fdjf",
        title: 'present simple (positive statement)',
        russianTitle: 'Настоящее простое (утверждения)',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Утвердительные предложения в Present simple — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "lksj347924sdfh",
        title: 'present simple (negative statement)',
        russianTitle: 'Настоящее простое (отрицания)',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Отрицательные предложения в Present simple — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "dlfkj234jlkj34",
        title: 'present simple (question)',
        russianTitle: 'Настоящее простое (вопросы)',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Вопросительные предложения в Present simple — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "flksj38472983",
        title: 'future simple',
        russianTitle: 'Будущее простое время',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Будущее простое время Future simple — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "fklj342342kj",
        title: 'past simple',
        russianTitle: 'Прошедшее простое время',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Прошедшее простое время — это ... ',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "flkj2342jh",
        title: 'present continuous',
        russianTitle: 'Настоящее продолженное',
        theory: [
            {
                styleIs: 'explanation',
                text: 'Настоящее продолженное время — это ... ',
            },
            {
                styleIs: 'using',
                text: 'Используется, когда ',
                list: ['']
            },
            {
                styleIs: 'forming',
                text: 'do + verb (ing)',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "slkj234234",
        title: 'present perfect',
        russianTitle: 'Настоящее совершенное',
        theory: [
            {
                styleIs: 'text',
                text: 'Настоящее совершенное время — показывает завершенное действие или событие, которое связано с настоящим временем и имеет результат в настоящем времени.',
            },
            {
                styleIs: 'using',
                text: 'Используется, когда говорим:',
                list: ['о незаконченном периоде времени',
                    'о своем опыте (это случилось в какой-то момент в прошлом, но опыт всегда со мной как багаж, воспоминания, навыки)',
                    'о незаконченных действиях или привычках, которые начались в какой-то момент в прошлом и продолжаются до сих пор (с предлогами since, for)',
                ]
            },
            {
                styleIs: 'forming',
                text: 'have + verb (3rd)',
            },
            {
                styleIs: 'example',
                text: 'Например:',
                list: [
                    'Я не могу выйти из дома, так как потерял свои ключи (сейчас ключи потеряны)' ,
                    'Я закончил отчет (держу его в руках)',
                    'Я опоздал на поезд (и жду следующий)',
                    'Я ее еще не спросила (поэтому не знаю ответ)',
                    'Я уже позавтракал (и сейчас сытый)',
                    'Я ему звонил на этой неделе (эта неделя еще не закончилась)',
                    'Мы были в отпуске 2 раза в этом году (этот год еще не закончился)',
                    'Я читала «Унесенные ветром» (опыт)',
                    'Мы были в Париже (опыт)',
                    'Я в командировке 2 недели (уехала 2 недели назад и сейчас еще там)',
                    'Я учу английский с 2012 года (начала учить и сейчас продолжаю)',
                ]
            }
        ],
        description: ''
    },
    {
        id: "sldkfj3247987",
        title: 'present perfect (positive statement)',
        russianTitle: 'Настоящее совершенное (утвердительное)',
        theory: [
            {
                styleIs: 'text',
                text: 'Утвердительные предложения в настоящем совершенном времени — это ... ',
            },
            {
                styleIs: 'forming',
                text: 'have + verb (3rd)',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "dkfwher9237fsdf",
        title: 'present perfect (negative statement)',
        russianTitle: 'Настоящее совершенное (отрицательное)',
        theory: [
            {
                styleIs: 'text',
                text: 'Отрицательные предложения в настоящем совершенном времени — это ... ',
            },
            {
                styleIs: 'forming',
                text: 'have not + verb (3rd)',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "djwlkej2387fsj3",
        title: 'present perfect (questions)',
        russianTitle: 'Настоящее совершенное (вопросы)',
        theory: [
            {
                styleIs: 'text',
                text: 'Вопросительные предложения в настоящем совершенном времени — это ... ',
            },
            {
                styleIs: 'forming',
                text: 'have + __ + verb (3rd)',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
    {
        id: "flkj3423423",
        title: 'imperative mood',
        russianTitle: 'Повелительное наклонение',
        theory: [
            {
                styleIs: 'text',
                text: 'Повелительное наклонение — это ... ',
            },
            {
                styleIs: 'forming',
                text: '',
            },
            {
                styleIs: 'example',
                text: 'Например, ...'
            }
        ],
        description: ''
    },
]
