import {v4 as uuidv4} from "uuid";

const initialUserPhrases = [
    {
        id: uuidv4(),
        english: 'It`s even got pretty lace back straps that won`t show through your shirt.',
        russian: 'У него даже есть красивые ремешки для спины, которые не будут видны через рубашку.',
        note: '',
        wordId: 'fslkjr809d8f3',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'This choppy haircut is especially good for women with thin hair that`s short. ',
        russian: 'Эта прическа с рваными прядями особенно хороша для женщин с тонкими короткими волосами.',
        note: '',
        wordId: 'elkjv7ds3jhsdi3',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'This choppy haircut is especially good for women with thin hair that`s short. ',
        russian: 'Эта прическа с рваными прядями особенно хороша для женщин с тонкими короткими волосами.',
        note: '',
        wordId: 'jfd983kjsd8g73',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I don’t care if you’re an indie store or a massive corporation — what I`ll show you is PROVEN to work.',
        russian: 'Меня не волнует, буть у вас свой маленький магазин или крупная корпорация — то, что я покажу вам — работает, и это ДОКАЗАНО.',
        note: '',
        wordId: 'elkjv7ds3jhsdi3',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'They have a massive house.',
        russian: 'У них огромный дом.',
        note: '',
        wordId: 'fdslkj3098zdf',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'That seems expensive - have you compared prices in other shops?',
        russian: 'Это кажется дорогим - вы сравнивали цены в других магазинах?',
        note: '',
        wordId: 'dskjdfo98djh2',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Take advantage of our favourable offer and call us!',
        russian: 'Воспользуйтесь нашим выгодным предложением и позвоните нам!',
        note: '',
        wordId: 'fkj39f8dkj3f',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'You scorned all my suggestions.',
        russian: 'Вы презирали все мои предложения.',
        note: '',
        wordId: 'dlkjf37r98s7df',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'You scorned all my suggestions.',
        russian: 'Вы презирали все мои предложения.',
        note: '',
        wordId: 'dlkjf37r98s7df',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'You can always have the wind at your back.',
        russian: 'Пусть тебе всегда сопутствует удача (дословно — ветер дует тебе в спину).',
        note: '',
        wordId: 'sdjk98fskf98s',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Sophie is a total vibe today.',
        russian: 'Софи сегодня в полном восторге.',
        note: '',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I got my room cleaned.',
        russian: 'Мою комнату убрали.',
        note: 'Конструкция "to have/get something done" — это альтернатива пассивного залога, когда кто-то делает то, о чем идет речь.',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Tom will have his work done by his colleague.',
        russian: 'Работу Тома выполнит его коллега.',
        note: 'Конструкция "to have smth done" — это альтернатива пассивного залога, когда кто-то делает то, о чем идет речь.',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'He`s just dying to get there.',
        russian: 'Он до смерти хочет туда попасть.',
        note: '"Is/are just dying" — готов умереть, не может дождаться и т. п.',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'He`s really just a homebody.',
        russian: 'Он на самом деле просто домосед.',
        note: '"homebody" — домосед.',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'He loves going on car rides.',
        russian: 'Он любит ездить на машине.',
        note: '"car rides" — ездить на машине.',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I can`t get over this view.',
        russian: 'Я так поражена этим видом. (Не погу поверить, что это вижу!)',
        note: '"can`t get over (something)" = I`m just so amazed (smth)! (Я просто поражена (чем-то)!)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It goes well with this boots.',
        russian: 'Это классно сочетается с этой обувью.',
        note: '"go" — выглядеть или быть приемлемым или подходящим (одно из значений)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'If I wear the orange hat with the blue dress, do you think it will go?',
        russian: 'Если я надену оранжевую шляпу с синим платьем, ты думаешь, это сойдет?',
        note: '"go" — выглядеть или быть приемлемым или подходящим (одно из значений)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Do you have something beige? I want to see if this bag goes with my coat.',
        russian: 'У вас есть что-то бежевое? Хочу понять, подойдет ли эта сумка к моему пальто.',
        note: '"go" — выглядеть или быть приемлемым или подходящим (одно из значений)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'When I realised I had dropped my gloves, I decided to retrace my steps.',
        russian: 'Когда я понял, что выронил перчатки, я решил пойти обратно той же дорогой.',
        note: '"retrace your steps" — идиома, означает "вернуться в то место тем же способом, каким ты пришел"',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I`d rather you explained to her why we can`t go.',
        russian: 'Я бы предпочла, чтобы ты объяснила ей, почему мы не можем поехать. (Лучше ты объясни ей, почему мы не можем поехать.)',
        note: '"would rather" — используется, чтобы показать, что вы предпочитаете иметь или делать одну вещь больше, чем другие. Прошедшее время (explained) — когда речь идет о том, чтобы кто-то другой что-то сделал',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I left my last job because I had no possibility to travel.',
        russian: 'Я ушел с этой работы, потому что у меня не было возможности путешествовать.',
        note: '"possibility" — что-то, что вы можете сделать по своему выбору в конкретной ситуации',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It was only ten days ago that she started her new job.',
        russian: 'Всего 10 дней назал она начала работать.',
        note: '"that" — используется для введения пункта, сообщающего что-либо или предоставляющего дополнительную информацию, хотя его часто можно опустить',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Despite sleeping a lot, she wasn`t able to get up.',
        russian: 'Несмотря на то, что она много спала, она не смогла встать.',
        note: '"Despite" — несмотря на. В том числе используется с -ing',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I don`t feel like going out this evening. Me neither.',
        russian: 'Я не хочу никуда идти. Я тоже.',
        note: '"don`t feel like" — это означает, что вы не хотите или что у вас нет большого желания или энергии, чтобы сделать что-то. Wanna drink? I really don`t feel like drinking (it).',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Either film was fascinating.',
        russian: 'Оба фильма были захватывающими.',
        note: '"fascinating" — чрезвычайно интересный, "either" — когда речь идет о выборе между двумя вариантами.',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'He went down memory lane',
        russian: 'Он погрузился в воспоминания',
        note: '"go down memory lane" — погружаться в воспоминания, вспоминать, ностальгировать',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Let`s take a walk down memory lane.',
        russian: 'Давай вспомним былое (понастальгируем).',
        note: '"take a walk/trip/journey down memory lane" — погружаться в воспоминания, вспоминать, ностальгировать',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It`s not a rocket science.',
        russian: 'Это легко и понятно',
        note: 'Устойчивое выражение с переносным смыслом "Это не наука ракетостроения"',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It`s a blessing in disguise.',
        russian: 'Все к лучшему.',
        note: 'В прямом смысле - "за маской чего-то плохого спряталось хорошее"',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It`s all downhill from here',
        russian: 'Дальше будет легче',
        note: 'В прямом смысле - "Теперь вся дорога под горку"',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It happens once in a blue moon.',
        russian: 'Это очень редко случается.',
        note: '"once in a blue moon" — раз в пятилетку, раз в сто лет, очень редко',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It doesn`t ring a bell',
        russian: 'Это мне ни о чем не говорит.',
        note: '"ring a bell" — звучать знакомо (it sounds familiar)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Maintaining a positive attitude really helps make things a lot easier.',
        russian: 'Сохранение позитивного настроя действительно помогает сделать вещи намного проще.',
        note: '"positive attitude" — положительный настрой, хорошее отношение к чему-то. "Maintain" — продолжать иметь; сохранять существование или не позволять становиться меньше (поддерживать, сохранять).',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I didn`t like the vibes.',
        russian: 'Мне не понравилась энергетика.',
        note: '"vibes" — чувство, которое вы испытываете, находясь в определенном месте или ситуации или находясь с конкретным человеком',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It drives me up the wall when people ask such a silly questions.',
        russian: 'Меня бесит, когда люди задают такие глупые вопросы.',
        note: '"drive someone up the wall" — сделать кого-то очень злым',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I`m dying to have a vacation!',
        russian: 'Я так хочу в отпуск!',
        note: '"Dying to + V1" — очень сильно хотеть чего-то',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: ' Our trip to Hawaii is a dream come true.',
        russian: 'Наша поездка на Гавайи - сбывшаяся мечта.',
        note: '"A dream come true" — сбывшаяся мечта',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'You bark up the wrong tree',
        russian: 'Ты не ту цель преследуешь.',
        note: '"bark up the wrong tree" — пытаясь сделать что-то таким способом, который не сработает',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It`s a peace of cake.',
        russian: 'Легкотня',
        note: '"a peace of cake" — что очень легко сделать',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It`s the last straw.',
        russian: 'Это последняя капля.',
        note: '"the final/last straw" — последнее в серии неприятных событий, которое, наконец, заставляют вас чувствовать, что вы не можете продолжать принимать плохую ситуацию',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It`s the water under the bridge.',
        russian: 'Что было, то прошло.',
        note: '"water under the bridge" — что-то, что произошло в прошлом и не может быть изменено',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'He`s alive and kicking.',
        russian: 'Он жив здоров.',
        note: '"alive and kicking / alive and well" — все еще полон энергии и активности (Traditional jazz is still alive and well in Chicago) ',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'She`s stolen your thunder.',
        russian: 'Она присвоила твои заслуги.',
        note: '"steal someone`s thunder" — делать то, что собирался делать кто-то другой, прежде чем он это сделает, особенно если это отнимает у него успех или похвалу',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'What`s in here, in the box?',
        russian: 'Что здесь внутри, в этой коробке?',
        note: '"in here" — здесь внутри',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'What`s in there, in that box?',
        russian: 'Что там внутри, в той коробке?',
        note: '"in there" — там внутри',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'What`s going on out there?',
        russian: 'Что там снаружи происходит?',
        note: '"out there" — там снаружи, можно заменить outside',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'We`re on the same page.',
        russian: 'Мы на одной волне (согласны друг с другом).',
        note: '"be on the same page" — иметь те же идеи, что и другие',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I can`t agree on this one',
        russian: 'Я не могу согласиться с этим.',
        note: '',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'We have to deal with problems as they arise.',
        russian: 'Мы должны решать проблемы по мере их возникновения.',
        note: '"deal with someone/something" — разработать способ управления или отношения с кем-то или чем-то',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Her only problem is a lack of confidence.',
        russian: 'Ее единственная проблема - отсутствие уверенности.',
        note: '"lack of something" — тот факт, что что-то не доступно или что его недостаточно',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Not making a will can have serious consequences for your children and other family members.',
        russian: 'Отсутствие завещания может иметь серьезные последствия для ваших детей и других членов семьи.',
        note: '"will" — завещание, "consequence" — результат конкретного действия или ситуации, часто той, которая является плохой или неудобной',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'The money was of little consequence to Tony',
        russian: 'Деньги не имели большого значения для Тони.',
        note: '"of little/no consequence (not of any/much consequence)" — не важно, не имеет значения',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It seems a lot of effort but I`m sure it`s the best solution in the long run',
        russian: 'Кажется, это много усилий, но я уверен, что это лучшее решение в долгосрочной перспективе',
        note: '"in the long run" — в долгосрочной перспективе (далеком будущем)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It`s raining cats and dogs',
        russian: 'Льет, как из ведра',
        note: '"it`s raining cats and dogs!" — что-то, что ты говоришь, когда идет сильный дождь',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I heard through the grapevine that he was leaving - is it true?',
        russian: 'Ходят слухи, что он уезжает - это правда?',
        note: '"hear (something) through/on the grapevine" — услышать новости от кого-то, кто услышал их от кого-то еще (ходят слухи, до меня дошли слухи)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'He attempted a joke, but no one laughed.',
        russian: 'Он пытался пошутить, но никто не смеялся.',
        note: '"attempt" — попытаться сделать что-то, особенно что-то трудное',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Two unlikely heroes come together in an attempt to change the course of the future.',
        russian: 'Два маловероятных героя объединяются в попытке изменить курс будущего.',
        note: '"unlikely" — маловероятно, вряд ли может произойти',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'He`s an unlikely-looking doctor',
        russian: 'Он не похож на доктора',
        note: '"unlikely" — не так, как вы обычно ожидаете',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'What is that word?',
        russian: 'Как это называется?',
        note: 'Можем спросить, если не можем вспомнить или не знаем слово',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'You need a cool head and steady nerves for this job',
        russian: 'Тебе нужна трезвая голова и крепкие нервы для этой работы',
        note: '"steady/strong nerves" — способность сохранять спокойствие в сложных ситуациях',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I`ll call you right away.',
        russian: 'Я позвоню тебе прямо сейчас.',
        note: '"right away" — прямо сейчас',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: '- We can`t deliver it today. - Then, deliver it tomorrow',
        russian: '- Мы не можем доставить их сегодня. - Тогда доставьте их завтра.',
        note: '"then" — в таком случае',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'I know people who lease a new car every year. That`s how they roll.',
        russian: 'Я знаю людей, которые арендуют новую машину каждый год. Вот как они делают.',
        note: '"how sb rolls" — как кто-то обычно любит делать вещи (как предпояитает вести себя, отвечать на что-то)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'If that is the case then I will be very disappointed.',
        russian: 'Если это так, то я буду очень разочарован.',
        note: '"(not) the case" — (не) правда',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Are you bummed about it?',
        russian: 'Ты расстроен из-за этого?',
        note: '" bummed" — это сленг, когда чувствуешь себя расстроенным или разочарованным, или путешествуешь без определенного места назначения.',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'He`s been really bummed out since his girlfriend moved to California',
        russian: 'Он действительно расстроен, с тех пор как его девушка переехала в Калифорнию',
        note: '"bummed out" — (сленг) подавленный, разочарованный, в мрачном настроении',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'We`ll have a sneak out',
        russian: 'Мы сбежим из дома (тайно выскользнем из дома)',
        note: '"sneak" — пойти или сделать что-то тайно, или увезти кого-то или что-то тайно',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It turned out to be such a busy Sunday morning.',
        russian: 'Воскресное утро оказалось таким насыщенным.',
        note: '"turn out" — случаются определенным образом или иметь определенный результат, особенно неожиданный (оказалось, получилось)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'She says she’s leaving him for good.',
        russian: 'Она говорит, что уходит от него навсегда.',
        note: '"for good" — навсегда',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'She is sure to know Spanish.',
        russian: 'Она наверняка знает Испанский.',
        note: '"be sure to" — несомненно, без сомнений',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'How long do you think the drive is?',
        russian: 'Сколько времени, вы думаете, займет поездка?',
        note: 'Порядок слов: сначала вопрос, а потом обычный порядок. How much do you think it costs?',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'It says here they have live music.',
        russian: 'Здесь сказано, что тут живая музыка.',
        note: '"it says" — тут сказано, написано (о часах, знаках, письмах, сообщениях, этикетках и т.п.)',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'We worked on this for well over an hour',
        russian: 'Мы работали над этим в течение более часа.',
        note: '"for well over an hour/year etc" —  в течение более часа/года и т. п.',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'You need to take charge and leadership of your situation.',
        russian: 'Вы должны взять ответственность и лидерство в вашей ситуации.',
        note: '"take charge" — взять на себя ответственность',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Whatever the case, you can turn your setback into a comeback.',
        russian: 'Что бы не случилось, ты можешь превратить неудачу в восстановление',
        note: '"comeback" — возвращение в более раннее и лучшее положение или состояние, восстановление, возрождение, "setback" — (неудача, сбой) что происходит, что задерживает или препятствует развитию процесса',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'Wy don`t you start out early so that you don`t have to hurry?',
        russian: 'Почему бы тебе не начинать раньше, чтобы не надо было торопиться?',
        note: '"so (that)" — чтобы что-то произошло, стало возможным',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: 'The trees are covered with snow and you feel like you`re in a fairy tale.',
        russian: 'Деревья покрыты снегом и чувствуешь себя, как в сказке.',
        note: '"fairy tale" — сказка, традиционная история, написанная для детей, которая обычно включает воображаемых существ и магию',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: ' — Do you prefer tea or coffee? — It depends.',
        russian: ' — Ты предпочитаешь чай или кофе? — Когда как.',
        note: '"it depends" — зависит от обстоятельств / когда как',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
    {
        id: uuidv4(),
        english: '— Do you prefer orange juice or tomato? Neither. I prefer milk.',
        russian: 'Ты предпочитаешь апельсиновый или томатный сок? Ни то, ни другое. Я предпочитаю молоко.',
        note: '"neither" — не один и не другой из двух вещей или людей',
        wordId: '',
        isStudied: false,
        userId: 'dlkfjl3487f9s',
    },
]

export default initialUserPhrases;