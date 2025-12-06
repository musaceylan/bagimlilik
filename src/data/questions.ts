import type { Question, UserRole } from '../types';

const questionsSelf: Question[] = [
    {
        id: 1,
        text: {
            tr: "Arkadaş çevrenizde alkol ya da uyuşturucu kullanan var mı?",
            en: "Is there anyone in your circle of friends who uses alcohol or drugs?",
            ar: "هل هناك أي شخص في دائرة أصدقائك يتعاطى الكحول أو المخدرات؟",
            es: "¿Hay alguien en tu círculo de amigos que consuma alcohol o drogas?"
        },
        type: 'scale'
    },
    {
        id: 2,
        text: {
            tr: "Arkadaş gruplarına dahil olmak için onlar gibi davranmak zorunda hissediyor musunuz?",
            en: "Do you feel like you have to act like them to be included in friend groups?",
            ar: "هل تشعر أنه يتعين عليك التصرف مثلهم ليتم ضمك إلى مجموعات الأصدقاء؟",
            es: "¿Sientes que tienes que actuar como ellos para ser incluido en los grupos de amigos?"
        },
        type: 'scale'
    },
    {
        id: 3,
        text: {
            tr: "Ailenizde alkol ya da uyuşturucu kullanan var mı?",
            en: "Is there anyone in your family who uses alcohol or drugs?",
            ar: "هل هناك أي شخص في عائلتك يتعاطى الكحول أو المخدرات؟",
            es: "¿Hay alguien en tu familia que consuma alcohol o drogas?"
        },
        type: 'scale'
    },
    {
        id: 4,
        text: {
            tr: "Bu kişiler bağımlılık nedeniyle adli işlem gördü mü?",
            en: "Have these people been prosecuted due to addiction?",
            ar: "هل تمت محاكمة هؤلاء الأشخاص بسبب الإدمان؟",
            es: "¿Han sido procesadas estas personas debido a la adicción?"
        },
        type: 'scale'
    },
    {
        id: 5,
        text: {
            tr: "Ebeveynleriniz boşandı mı veya ayrı mı yaşıyor?",
            en: "Are your parents divorced or living apart?",
            ar: "هل والداك مطلقان أم منفصلان؟",
            es: "¿Tus padres están divorciados o viven separados?"
        },
        type: 'scale'
    },
    {
        id: 6,
        text: {
            tr: "Hanenize giren aylık ortalama gelir yetersiz mi?",
            en: "Is the average monthly income entering your household insufficient?",
            ar: "هل متوسط الدخل الشهري الذي يدخل أسرتك غير كافٍ؟",
            es: "¿Es insuficiente el ingreso mensual promedio que entra en tu hogar?"
        },
        type: 'scale'
    },
    {
        id: 7,
        text: {
            tr: "Ailenizde sigara kullanımı yaygın mı?",
            en: "Is smoking common in your family?",
            ar: "هل التدخين شائع في عائلتك؟",
            es: "¿Es común fumar en tu familia?"
        },
        type: 'scale'
    },
    {
        id: 8,
        text: {
            tr: "Pasif içicilik hakkında bilgi sahibi misiniz?",
            en: "Do you have knowledge about passive smoking?",
            ar: "هل لديك معرفة عن التدخين السلبي؟",
            es: "¿Tienes conocimiento sobre el tabaquismo pasivo?"
        },
        type: 'scale'
    },
    {
        id: 9,
        text: {
            tr: "Evinizde şiddet veya istismar öyküsü var mı?",
            en: "Is there a history of violence or abuse in your home?",
            ar: "هل هناك تاريخ من العنف أو سوء المعاملة في منزلك؟",
            es: "¿Hay antecedentes de violencia o abuso en tu hogar?"
        },
        type: 'scale'
    },
    {
        id: 10,
        text: {
            tr: "Benlik saygınızı düşük olarak hissediyor musunuz?",
            en: "Do you feel your self-esteem is low?",
            ar: "هل تشعر أن احترامك لذاتك منخفض؟",
            es: "¿Sientes que tu autoestima es baja?"
        },
        type: 'scale'
    },
    {
        id: 11,
        text: {
            tr: "Duygu durumunuz bozuk olduğunda kendinizden beklemediğiniz davranışlar sergiliyor musunuz?",
            en: "Do you exhibit behaviors you wouldn't expect from yourself when your mood is bad?",
            ar: "هل تظهر سلوكيات لا تتوقعها من نفسك عندما يكون مزاجك سيئًا؟",
            es: "¿Exhibes comportamientos que no esperarías de ti mismo cuando tu estado de ánimo es malo?"
        },
        type: 'scale'
    },
    {
        id: 12,
        text: {
            tr: "Arkadaş baskısına karşı koymakta zorlanır mısınız?",
            en: "Do you find it hard to resist peer pressure?",
            ar: "هل تجد صعوبة في مقاومة ضغط الأقران؟",
            es: "¿Te resulta difícil resistir la presión de grupo?"
        },
        type: 'scale'
    },
    {
        id: 13,
        text: {
            tr: "Sorunlarla yüzleşmek yerine kaçma eğiliminiz var mı?",
            en: "Do you have a tendency to run away instead of facing problems?",
            ar: "هل لديك ميل للهروب بدلاً من مواجهة المشاكل؟",
            es: "¿Tienes tendencia a huir en lugar de enfrentar los problemas?"
        },
        type: 'scale'
    },
    {
        id: 14,
        text: {
            tr: "Kendinizi duygusal açıdan yalnız hissediyor musunuz?",
            en: "Do you feel emotionally lonely?",
            ar: "هل تشعر بالوحدة العاطفية؟",
            es: "¿Te sientes emocionalmente solo?"
        },
        type: 'scale'
    },
    {
        id: 15,
        text: {
            tr: "Merak duygunuz sizi riskli deneyimlere yönlendiriyor mu?",
            en: "Does your curiosity lead you to risky experiences?",
            ar: "هل يقودك فضولك إلى تجارب محفوفة بالمخاطر؟",
            es: "¿Tu curiosidad te lleva a experiencias riesgosas?"
        },
        type: 'scale'
    },
    {
        id: 16,
        text: {
            tr: "Güçsüz veya dayanıksız bir kişiliğe sahip olduğunuzu düşünüyor musunuz?",
            en: "Do you think you have a weak or fragile personality?",
            ar: "هل تعتقد أن لديك شخصية ضعيفة أو هشة؟",
            es: "¿Crees que tienes una personalidad débil o frágil?"
        },
        type: 'scale'
    },
    {
        id: 17,
        text: {
            tr: "Çevrenizle yüz yüze iletişimi, sosyal medya iletişimine göre daha çok tercih ediyor musunuz?",
            en: "Do you prefer face-to-face communication over social media communication?",
            ar: "هل تفضل التواصل وجهاً لوجه على التواصل عبر وسائل التواصل الاجتماعي؟",
            es: "¿Prefieres la comunicación cara a cara sobre la comunicación en redes sociales?"
        },
        type: 'scale'
    },
    {
        id: 18,
        text: {
            tr: "Sık sık öfke patlamaları ya da dengesiz ruh hali yaşıyor musunuz?",
            en: "Do you often experience outbursts of anger or unstable moods?",
            ar: "هل تعاني غالبًا من نوبات غضب أو مزاج غير مستقر؟",
            es: "¿Experimentas a menudo estallidos de ira o estados de ánimo inestables?"
        },
        type: 'scale'
    },
    {
        id: 19,
        text: {
            tr: "Ebeveynleriniz ile iletişiminiz sevgi ve saygı temelli midir?",
            en: "Is your communication with your parents based on love and respect?",
            ar: "هل تواصلك مع والديك مبني على الحب والاحترام؟",
            es: "¿Tu comunicación con tus padres se basa en el amor y el respeto?"
        },
        type: 'scale'
    },
    {
        id: 20,
        text: {
            tr: "Yaşadığınız cevrede maddeye ulaşım kolay mıdır?",
            en: "Is access to substances easy in the environment you live in?",
            ar: "هل الوصول إلى المواد المخدرة سهل في البيئة التي تعيش فيها؟",
            es: "¿Es fácil el acceso a sustancias en el entorno en el que vives?"
        },
        type: 'scale'
    },
    {
        id: 21,
        text: {
            tr: "Eğitim hayatınızda başarısızlık, okuldan kopma veya devamsızlık öykünüz var mı?",
            en: "Do you have a history of failure, dropping out, or absenteeism in your education life?",
            ar: "هل لديك تاريخ من الفشل أو التسرب أو التغيب في حياتك التعليمية؟",
            es: "¿Tienes antecedentes de fracaso, deserción o ausentismo en tu vida educativa?"
        },
        type: 'scale'
    },
    {
        id: 22,
        text: {
            tr: "Çevrenizde işsizlik oranı yüksek mi?",
            en: "Is the unemployment rate high in your area?",
            ar: "هل معدل البطالة مرتفع في منطقتك؟",
            es: "¿Es alta la tasa de desempleo en tu área?"
        },
        type: 'scale'
    },
    {
        id: 23,
        text: {
            tr: "Çevrenizde bağımlılığın maddi yükü altında olan bireyler borç almak için sık sık yalan söyleme davranışına başvuruyor mu?",
            en: "Do individuals under the financial burden of addiction in your circle often resort to lying to borrow money?",
            ar: "هل يلجأ الأفراد الذين يعانون من العبء المالي للإدمان في دائرتك غالبًا إلى الكذب لاقتراض المال؟",
            es: "¿Las personas bajo la carga financiera de la adicción en tu círculo recurren a menudo a mentir para pedir dinero prestado?"
        },
        type: 'scale'
    },
    {
        id: 24,
        text: {
            tr: "Sosyal destek (arkadaş, aile, öğretmen vb.) eksikliği hissediyor musunuz?",
            en: "Do you feel a lack of social support (friends, family, teachers, etc.)?",
            ar: "هل تشعر بنقص الدعم الاجتماعي (الأصدقاء، العائلة، المعلمين، إلخ)؟",
            es: "¿Sientes falta de apoyo social (amigos, familia, maestros, etc.)?"
        },
        type: 'scale'
    },
    {
        id: 25,
        text: {
            tr: "Kumar oynuyor veya cevrim içi oyunlara bağımlı mısınız?",
            en: "Do you gamble or are you addicted to online games?",
            ar: "هل تقامر أو تدمن الألعاب عبر الإنترنت؟",
            es: "¿Juegas o eres adicto a los juegos en línea?"
        },
        type: 'scale'
    },
    {
        id: 26,
        text: {
            tr: "Tütün ürünlerinin kullanımının her yaş grubu üzerinde olumsuz etki uyandıracağını düşünüyor musunuz?",
            en: "Do you think the use of tobacco products has a negative effect on every age group?",
            ar: "هل تعتقد أن استخدام منتجات التبغ له تأثير سلبي على كل فئة عمرية؟",
            es: "¿Crees que el uso de productos de tabaco tiene un efecto negativo en todos los grupos de edad?"
        },
        type: 'scale'
    },
    {
        id: 27,
        text: {
            tr: "Günde 3 saatten fazla sosyal medya/ekran kullanımı var mı?",
            en: "Do you use social media/screens for more than 3 hours a day?",
            ar: "هل تستخدم وسائل التواصل الاجتماعي/الشاشات لأكثر من 3 ساعات في اليوم؟",
            es: "¿Usas redes sociales/pantallas por más de 3 horas al día?"
        },
        type: 'scale'
    },
    {
        id: 28,
        text: {
            tr: "Ekran sürenizin fazla olması durumunda sosyal etkinliklerinizin kısıtlanacağını düşünüyor musunuz?",
            en: "Do you think your social activities will be restricted if your screen time is excessive?",
            ar: "هل تعتقد أن أنشطتك الاجتماعية ستكون مقيدة إذا كان وقت الشاشة مفرطًا؟",
            es: "¿Crees que tus actividades sociales se verán restringidas si tu tiempo frente a la pantalla es excesivo?"
        },
        type: 'scale'
    },
    {
        id: 29,
        text: {
            tr: "Daha önce riskli davranışlar (trafikte hız, kavga vb.) gösterdiniz mi?",
            en: "Have you shown risky behaviors (speeding in traffic, fighting, etc.) before?",
            ar: "هل أظهرت سلوكيات محفوفة بالمخاطر (السرعة في حركة المرور، القتال، إلخ) من قبل؟",
            es: "¿Has mostrado comportamientos riesgosos (exceso de velocidad en el tráfico, peleas, etc.) antes?"
        },
        type: 'scale'
    },
    {
        id: 30,
        text: {
            tr: "Alkol ya da maddeyi deneme isteğiniz oldu mu?",
            en: "Have you ever wanted to try alcohol or substances?",
            ar: "هل رغبت يومًا في تجربة الكحول أو المواد المخدرة؟",
            es: "¿Alguna vez has querido probar alcohol o sustancias?"
        },
        type: 'scale'
    },
    {
        id: 31,
        text: {
            tr: "Madde kullanan akranlarınızla vakit geçirmekten keyif alıyor musunuz?",
            en: "Do you enjoy spending time with peers who use substances?",
            ar: "هل تستمتع بقضاء الوقت مع الأقران الذين يتعاطون المواد المخدرة؟",
            es: "¿Disfrutas pasar tiempo con compañeros que consumen sustancias?"
        },
        type: 'scale'
    },
    {
        id: 32,
        text: {
            tr: "Daha önce sigara içtiniz mi veya düzenli olarak sigara kullanıyor musunuz?",
            en: "Have you smoked before or do you smoke regularly?",
            ar: "هل دخنت من قبل أو هل تدخن بانتظام؟",
            es: "¿Has fumado antes o fumas regularmente?"
        },
        type: 'scale'
    },
    {
        id: 33,
        text: {
            tr: "Tütün ürünlerini bırakmak için denemeleriniz oldu mu?",
            en: "Have you tried to quit tobacco products?",
            ar: "هل حاولت الإقلاع عن منتجات التبغ؟",
            es: "¿Has intentado dejar los productos de tabaco?"
        },
        type: 'scale'
    },
    {
        id: 34,
        text: {
            tr: "Hayatınızda bir amaçsızlık ya da gelecek kaygısı hissediyor musunuz?",
            en: "Do you feel a lack of purpose or anxiety about the future in your life?",
            ar: "هل تشعر بنقص في الهدف أو القلق بشأن المستقبل في حياتك؟",
            es: "¿Sientes falta de propósito o ansiedad sobre el futuro en tu vida?"
        },
        type: 'scale'
    },
    {
        id: 35,
        text: {
            tr: "Çevrenizde bağımlı olan bireyler varsa onlara profesyonel bir yardım almaları gerektiğini söylüyor musunuz?",
            en: "If there are addicted individuals around you, do you tell them they should get professional help?",
            ar: "إذا كان هناك أفراد مدمنون من حولك، هل تخبرهم أنه يجب عليهم الحصول على مساعدة مهنية؟",
            es: "¿Si hay personas adictas a tu alrededor, les dices que deberían buscar ayuda profesional?"
        },
        type: 'scale'
    },
];

const questionsHealth: Question[] = [
    {
        id: 1,
        text: {
            tr: "Hastanın çevresinde alkol ya da uyuşturucu kullanan var mı?",
            en: "Is there anyone around the patient who uses alcohol or drugs?",
            ar: "هل هناك أي شخص حول المريض يتعاطى الكحول أو المخدرات؟",
            es: "¿Hay alguien alrededor del paciente que consuma alcohol o drogas?"
        },
        type: 'scale'
    },
    {
        id: 2,
        text: {
            tr: "Hasta herhangi bağımlılık türü ile ilgili maddi amaçları olan bir grubun parçası mıdır?",
            en: "Is the patient part of a group with financial goals related to any type of addiction?",
            ar: "هل المريض جزء من مجموعة ذات أهداف مالية تتعلق بأي نوع من الإدمان؟",
            es: "¿Es el paciente parte de un grupo con objetivos financieros relacionados con algún tipo de adicción?"
        },
        type: 'scale'
    },
    {
        id: 3,
        text: {
            tr: "Hastanın ailesinde alkol ya da uyuşturucu kullanan var mı?",
            en: "Is there anyone in the patient's family who uses alcohol or drugs?",
            ar: "هل هناك أي شخص في عائلة المريض يتعاطى الكحول أو المخدرات؟",
            es: "¿Hay alguien en la familia del paciente que consuma alcohol o drogas?"
        },
        type: 'scale'
    },
    {
        id: 4,
        text: {
            tr: "Daha önce hasta bağımlılık nedeniyle adli işlem görmüş mü?",
            en: "Has the patient been prosecuted due to addiction before?",
            ar: "هل تمت محاكمة المريض بسبب الإدمان من قبل؟",
            es: "¿Ha sido procesado el paciente debido a la adicción antes?"
        },
        type: 'scale'
    },
    {
        id: 5,
        text: {
            tr: "Hastanın ebeveynlerinin boşanma öyküsü var mı?",
            en: "Is there a history of divorce among the patient's parents?",
            ar: "هل هناك تاريخ من الطلاق بين والدي المريض؟",
            es: "¿Hay antecedentes de divorcio entre los padres del paciente?"
        },
        type: 'scale'
    },
    {
        id: 6,
        text: {
            tr: "Hastanın hanesine giren aylık ortalama gelir yetersiz mi?",
            en: "Is the average monthly income entering the patient's household insufficient?",
            ar: "هل متوسط الدخل الشهري الذي يدخل أسرة المريض غير كافٍ؟",
            es: "¿Es insuficiente el ingreso mensual promedio que entra en el hogar del paciente?"
        },
        type: 'scale'
    },
    {
        id: 7,
        text: {
            tr: "Hastanın ailesinde sigara kullanımı yaygın mı?",
            en: "Is smoking common in the patient's family?",
            ar: "هل التدخين شائع في عائلة المريض؟",
            es: "¿Es común fumar en la familia del paciente?"
        },
        type: 'scale'
    },
    {
        id: 8,
        text: {
            tr: "Hasta pasif içicilik hakkında bilgi sahibi mi?",
            en: "Does the patient have knowledge about passive smoking?",
            ar: "هل لدى المريض معرفة عن التدخين السلبي؟",
            es: "¿Tiene el paciente conocimiento sobre el tabaquismo pasivo?"
        },
        type: 'scale'
    },
    {
        id: 9,
        text: {
            tr: "Hastanın evinde şiddet veya istismar öyküsü var mı?",
            en: "Is there a history of violence or abuse in the patient's home?",
            ar: "هل هناك تاريخ من العنف أو سوء المعاملة في منزل المريض؟",
            es: "¿Hay antecedentes de violencia o abuso en el hogar del paciente?"
        },
        type: 'scale'
    },
    {
        id: 10,
        text: {
            tr: "Hastanın göz bebeklerinde büyüme gözlemliyor musunuz?",
            en: "Do you observe dilation in the patient's pupils?",
            ar: "هل تلاحظ توسعًا في حدقة عين المريض؟",
            es: "¿Observas dilatación en las pupilas del paciente?"
        },
        type: 'scale'
    },
    {
        id: 11,
        text: {
            tr: "Hastanın duygu durumu bozuk olduğunda kendisinden beklenmedik davranışlar sergiliyor mu?",
            en: "Does the patient exhibit unexpected behaviors when their mood is bad?",
            ar: "هل يظهر المريض سلوكيات غير متوقعة عندما يكون مزاجه سيئًا؟",
            es: "¿Exhibe el paciente comportamientos inesperados cuando su estado de ánimo es malo?"
        },
        type: 'scale'
    },
    {
        id: 12,
        text: {
            tr: "Hastanın arkadaşları konusunda hassasiyeti bulunuyor mu?",
            en: "Is the patient sensitive about their friends?",
            ar: "هل المريض حساس تجاه أصدقائه؟",
            es: "¿Es el paciente sensible con respecto a sus amigos?"
        },
        type: 'scale'
    },
    {
        id: 13,
        text: {
            tr: "Hastanın sorunlarını ifade etme becerisi var mı?",
            en: "Does the patient have the ability to express their problems?",
            ar: "هل لدى المريض القدرة على التعبير عن مشاكله؟",
            es: "¿Tiene el paciente la capacidad de expresar sus problemas?"
        },
        type: 'scale'
    },
    {
        id: 14,
        text: {
            tr: "Hastanın duygu durumunu ifade etme becerisi var mı?",
            en: "Does the patient have the ability to express their mood?",
            ar: "هل لدى المريض القدرة على التعبير عن مزاجه؟",
            es: "¿Tiene el paciente la capacidad de expresar su estado de ánimo?"
        },
        type: 'scale'
    },
    {
        id: 15,
        text: {
            tr: "Hastanın öz bakım becerileri zedelenmiş durumda mı?",
            en: "Are the patient's self-care skills impaired?",
            ar: "هل مهارات الرعاية الذاتية للمريض ضعيفة؟",
            es: "¿Están deterioradas las habilidades de autocuidado del paciente?"
        },
        type: 'scale'
    },
    {
        id: 16,
        text: {
            tr: "Hastanın göz teması kurmak istiyor mu?",
            en: "Does the patient want to make eye contact?",
            ar: "هل يريد المريض التواصل البصري؟",
            es: "¿Quiere el paciente hacer contacto visual?"
        },
        type: 'scale'
    },
    {
        id: 17,
        text: {
            tr: "Hasta yoksunluk belirtileri sergiliyor mu?",
            en: "Does the patient exhibit withdrawal symptoms?",
            ar: "هل يظهر المريض أعراض الانسحاب؟",
            es: "¿Exhibe el paciente síntomas de abstinencia?"
        },
        type: 'scale'
    },
    {
        id: 18,
        text: {
            tr: "Hastanın öfke patlamaları ya da dengesiz ruh hali mevcut mu?",
            en: "Does the patient have outbursts of anger or unstable moods?",
            ar: "هل يعاني المريض من نوبات غضب أو مزاج غير مستقر؟",
            es: "¿Tiene el paciente estallidos de ira o estados de ánimo inestables?"
        },
        type: 'scale'
    },
    {
        id: 19,
        text: {
            tr: "Hasta iletişimde saygı prensibini benimsemiş mi?",
            en: "Has the patient adopted the principle of respect in communication?",
            ar: "هل تبنى المريض مبدأ الاحترام في التواصل؟",
            es: "¿Ha adoptado el paciente el principio de respeto en la comunicación?"
        },
        type: 'scale'
    },
    {
        id: 20,
        text: {
            tr: "Hasta madde kullanımı açısından dezavantajlı bir çevrede mi yaşıyor?",
            en: "Does the patient live in a disadvantaged environment in terms of substance use?",
            ar: "هل يعيش المريض في بيئة محرومة من حيث تعاطي المخدرات؟",
            es: "¿Vive el paciente en un entorno desfavorecido en términos de consumo de sustancias?"
        },
        type: 'scale'
    },
    {
        id: 21,
        text: {
            tr: "Hastanın eğitim hayatında okuldan atılma öyküsü var mı?",
            en: "Does the patient have a history of expulsion from school in their education life?",
            ar: "هل للمريض تاريخ من الطرد من المدرسة في حياته التعليمية؟",
            es: "¿Tiene el paciente antecedentes de expulsión de la escuela en su vida educativa?"
        },
        type: 'scale'
    },
    {
        id: 22,
        text: {
            tr: "Hastanın yaşadığı çevrede işsizlik oranı yüksek mi?",
            en: "Is the unemployment rate high in the area where the patient lives?",
            ar: "هل معدل البطالة مرتفع في المنطقة التي يعيش فيها المريض؟",
            es: "¿Es alta la tasa de desempleo en el área donde vive el paciente?"
        },
        type: 'scale'
    },
    {
        id: 23,
        text: {
            tr: "Hastanın sık sık yalan söyleme davranışı bulunmakta mıdır?",
            en: "Does the patient frequently exhibit lying behavior?",
            ar: "هل يظهر المريض سلوك الكذب بشكل متكرر؟",
            es: "¿Exhibe el paciente frecuentemente un comportamiento mentiroso?"
        },
        type: 'scale'
    },
    {
        id: 24,
        text: {
            tr: "Hastanın sosyal (arkadaş, iş, aile) ilişkileri sağlıklı mıdır?",
            en: "Are the patient's social (friends, work, family) relationships healthy?",
            ar: "هل علاقات المريض الاجتماعية (الأصدقاء، العمل، الأسرة) صحية؟",
            es: "¿Son saludables las relaciones sociales (amigos, trabajo, familia) del paciente?"
        },
        type: 'scale'
    },
    {
        id: 25,
        text: {
            tr: "Hastanın kumar davranışı öyküsü bulunmakta mıdır?",
            en: "Does the patient have a history of gambling behavior?",
            ar: "هل للمريض تاريخ من سلوك المقامرة؟",
            es: "¿Tiene el paciente antecedentes de comportamiento de juego?"
        },
        type: 'scale'
    },
    {
        id: 26,
        text: {
            tr: "Hasta tütün ve tütün ürünlerinin zararları hakkında bilgi sahibi mi?",
            en: "Does the patient have knowledge about the harms of tobacco and tobacco products?",
            ar: "هل لدى المريض معرفة بأضرار التبغ ومنتجات التبغ؟",
            es: "¿Tiene el paciente conocimiento sobre los daños del tabaco y los productos de tabaco?"
        },
        type: 'scale'
    },
    {
        id: 27,
        text: {
            tr: "Hastanın Günde 3 saatten fazla sosyal medya/ekran kullanımı var mı?",
            en: "Does the patient use social media/screens for more than 3 hours a day?",
            ar: "هل يستخدم المريض وسائل التواصل الاجتماعي/الشاشات لأكثر من 3 ساعات في اليوم؟",
            es: "¿Usa el paciente redes sociales/pantallas por más de 3 horas al día?"
        },
        type: 'scale'
    },
    {
        id: 28,
        text: {
            tr: "Hastanın yoğun ekran maruziyeti sosyal hayatını olumsuz yönde etkilemekte midir?",
            en: "Does the patient's intense screen exposure negatively affect their social life?",
            ar: "هل يؤثر تعرض المريض المكثف للشاشة سلبًا على حياته الاجتماعية؟",
            es: "¿Afecta negativamente la intensa exposición a la pantalla del paciente a su vida social?"
        },
        type: 'scale'
    },
    {
        id: 29,
        text: {
            tr: "Hasta daha önce riskli davranışlar (trafikte hız, kavga vb.) göstermiş mi?",
            en: "Has the patient shown risky behaviors (speeding in traffic, fighting, etc.) before?",
            ar: "هل أظهر المريض سلوكيات محفوفة بالمخاطر (السرعة في حركة المرور، القتال، إلخ) من قبل؟",
            es: "¿Ha mostrado el paciente comportamientos riesgosos (exceso de velocidad en el tráfico, peleas, etc.) antes?"
        },
        type: 'scale'
    },
    {
        id: 30,
        text: {
            tr: "Hastanın alkol ve/veya madde deneyimi olmuş mudur?",
            en: "Has the patient had alcohol and/or substance experience?",
            ar: "هل كان للمريض تجربة مع الكحول و/أو المواد المخدرة؟",
            es: "¿Ha tenido el paciente experiencia con alcohol y/o sustancias?"
        },
        type: 'scale'
    },
    {
        id: 31,
        text: {
            tr: "Hasta madde kullanan akranlarıyla vakit geçirmekten keyif alıyor mu?",
            en: "Does the patient enjoy spending time with peers who use substances?",
            ar: "هل يستمتع المريض بقضاء الوقت مع الأقران الذين يتعاطون المواد المخدرة؟",
            es: "¿Disfruta el paciente pasar tiempo con compañeros que consumen sustancias?"
        },
        type: 'scale'
    },
    {
        id: 32,
        text: {
            tr: "Hastanın tütün kullanımı olmuş mu?",
            en: "Has the patient used tobacco?",
            ar: "هل استخدم المريض التبغ؟",
            es: "¿Ha usado tabaco el paciente?"
        },
        type: 'scale'
    },
    {
        id: 33,
        text: {
            tr: "Hastanın daha önceden tütün ürünlerini bırakmak için denemeleri olmuş mudur?",
            en: "Has the patient tried to quit tobacco products before?",
            ar: "هل حاول المريض الإقلاع عن منتجات التبغ من قبل؟",
            es: "¿Ha intentado el paciente dejar los productos de tabaco antes?"
        },
        type: 'scale'
    },
    {
        id: 34,
        text: {
            tr: "Hastanın hayatı ile ilgili bir amaçsızlık ya da gelecek kaygısı mevcut mudur?",
            en: "Is there a lack of purpose or anxiety about the future in the patient's life?",
            ar: "هل هناك نقص في الهدف أو القلق بشأن المستقبل في حياة المريض؟",
            es: "¿Hay falta de propósito o ansiedad sobre el futuro en la vida del paciente?"
        },
        type: 'scale'
    },
    {
        id: 35,
        text: {
            tr: "Hastanın intihar veya kendisine zarar verme geçmişi var mıdır?",
            en: "Does the patient have a history of suicide or self-harm?",
            ar: "هل للمريض تاريخ من الانتحار أو إيذاء النفس؟",
            es: "¿Tiene el paciente antecedentes de suicidio o autolesiones?"
        },
        type: 'scale'
    },
];

const questionsRelative: Question[] = [
    {
        id: 1,
        text: {
            tr: "Çocuğunuzun arkadaş çevresinde alkol ya da uyuşturucu kullanan kişiler olduğunu düşünüyor musunuz?",
            en: "Do you think there are people in your child's circle of friends who use alcohol or drugs?",
            ar: "هل تعتقد أن هناك أشخاصًا في دائرة أصدقاء طفلك يتعاطون الكحول أو المخدرات؟",
            es: "¿Crees que hay personas en el círculo de amigos de tu hijo que consumen alcohol o drogas?"
        },
        type: 'scale'
    },
    {
        id: 2,
        text: {
            tr: "Çocuğunuzun arkadaş gruplarına dahil olmak için onlar gibi davrandığını düşünüyor musunuz?",
            en: "Do you think your child acts like them to be included in friend groups?",
            ar: "هل تعتقد أن طفلك يتصرف مثلهم ليتم ضمه إلى مجموعات الأصدقاء؟",
            es: "¿Crees que tu hijo actúa como ellos para ser incluido en los grupos de amigos?"
        },
        type: 'scale'
    },
    {
        id: 3,
        text: {
            tr: "Ailenizde alkol ya da uyuşturucu kullanan var mı?",
            en: "Is there anyone in your family who uses alcohol or drugs?",
            ar: "هل هناك أي شخص في عائلتك يتعاطى الكحول أو المخدرات؟",
            es: "¿Hay alguien en tu familia que consuma alcohol o drogas?"
        },
        type: 'scale'
    },
    {
        id: 4,
        text: {
            tr: "Çevrenizde bağımlılık nedeniyle adli işlem gören kişiler var mı?",
            en: "Are there people in your circle who have been prosecuted due to addiction?",
            ar: "هل هناك أشخاص في دائرتك تمت محاكمتهم بسبب الإدمان؟",
            es: "¿Hay personas en tu círculo que hayan sido procesadas debido a la adicción?"
        },
        type: 'scale'
    },
    {
        id: 5,
        text: {
            tr: "Eşinizden boşanma veya ayrı yaşama durumunuz oldu mu?",
            en: "Have you been divorced or separated from your spouse?",
            ar: "هل طلقت أو انفصلت عن زوجك؟",
            es: "¿Te has divorciado o separado de tu cónyuge?"
        },
        type: 'scale'
    },
    {
        id: 6,
        text: {
            tr: "Hanenize giren aylık ortalama gelir yetersiz mi?",
            en: "Is the average monthly income entering your household insufficient?",
            ar: "هل متوسط الدخل الشهري الذي يدخل أسرتك غير كافٍ؟",
            es: "¿Es insuficiente el ingreso mensual promedio que entra en tu hogar?"
        },
        type: 'scale'
    },
    {
        id: 7,
        text: {
            tr: "Ebeveynler olarak sigara kullanıyor musunuz?",
            en: "Do you smoke as parents?",
            ar: "هل تدخنون كآباء؟",
            es: "¿Fuman como padres?"
        },
        type: 'scale'
    },
    {
        id: 8,
        text: {
            tr: "Sigara kullandığınız ortamlarda çocuklarınızın olması sizi rahatsız ediyor mu?",
            en: "Does it bother you that your children are present in environments where you smoke?",
            ar: "هل يزعجك وجود أطفالك في البيئات التي تدخن فيها؟",
            es: "¿Te molesta que tus hijos estén presentes en ambientes donde fumas?"
        },
        type: 'scale'
    },
    {
        id: 9,
        text: {
            tr: "Evinizde şiddet veya istismar öyküsü var mı?",
            en: "Is there a history of violence or abuse in your home?",
            ar: "هل هناك تاريخ من العنف أو سوء المعاملة في منزلك؟",
            es: "¿Hay antecedentes de violencia o abuso en tu hogar?"
        },
        type: 'scale'
    },
    {
        id: 10,
        text: {
            tr: "Pasif içicilik konusunda bilgi sahibi misiniz?",
            en: "Do you have knowledge about passive smoking?",
            ar: "هل لديك معرفة عن التدخين السلبي؟",
            es: "¿Tienes conocimiento sobre el tabaquismo pasivo?"
        },
        type: 'scale'
    },
    {
        id: 11,
        text: {
            tr: "Duygu durumunuz bozuk olduğunda çocuklarınıza karşı kendinizden beklemediğiniz davranışlar sergiliyor musunuz?",
            en: "Do you exhibit behaviors towards your children that you wouldn't expect from yourself when your mood is bad?",
            ar: "هل تظهر سلوكيات تجاه أطفالك لا تتوقعها من نفسك عندما يكون مزاجك سيئًا؟",
            es: "¿Exhibes comportamientos hacia tus hijos que no esperarías de ti mismo cuando tu estado de ánimo es malo?"
        },
        type: 'scale'
    },
    {
        id: 12,
        text: {
            tr: "Çocuklarınızın arkadaş baskısına karşı koymakta zorlanacağını düşünüyor musunuz?",
            en: "Do you think your children will find it hard to resist peer pressure?",
            ar: "هل تعتقد أن أطفالك سيجدون صعوبة في مقاومة ضغط الأقران؟",
            es: "¿Crees que a tus hijos les resultará difícil resistir la presión de grupo?"
        },
        type: 'scale'
    },
    {
        id: 13,
        text: {
            tr: "Aile içi sorunlarla ilgili çocuklarınızla konuşur misiniz?",
            en: "Do you talk to your children about family problems?",
            ar: "هل تتحدث مع أطفالك عن المشاكل العائلية؟",
            es: "¿Hablas con tus hijos sobre los problemas familiares?"
        },
        type: 'scale'
    },
    {
        id: 14,
        text: {
            tr: "Çocuğunuzun duygu durumu ile ilgili misiniz?",
            en: "Are you concerned about your child's mood?",
            ar: "هل أنت قلق بشأن مزاج طفلك؟",
            es: "¿Te preocupa el estado de ánimo de tu hijo?"
        },
        type: 'scale'
    },
    {
        id: 15,
        text: {
            tr: "Çocuğunuzun daha önce riskli deneyimleri oldu mu?",
            en: "Has your child had risky experiences before?",
            ar: "هل مر طفلك بتجارب محفوفة بالمخاطر من قبل؟",
            es: "¿Ha tenido tu hijo experiencias riesgosas antes?"
        },
        type: 'scale'
    },
    {
        id: 16,
        text: {
            tr: "Özgüvenli çocuklar yetiştirdiğinizi düşünüyor musunuz?",
            en: "Do you think you are raising self-confident children?",
            ar: "هل تعتقد أنك تربي أطفالًا واثقين من أنفسهم؟",
            es: "¿Crees que estás criando hijos seguros de sí mismos?"
        },
        type: 'scale'
    },
    {
        id: 17,
        text: {
            tr: "Sosyal medyada ebeveynler olarak çok vakit geçirdiğinizi düşünüyor musunuz?",
            en: "Do you think you spend too much time on social media as parents?",
            ar: "هل تعتقد أنك تقضي الكثير من الوقت على وسائل التواصل الاجتماعي كآباء؟",
            es: "¿Crees que pasas demasiado tiempo en las redes sociales como padres?"
        },
        type: 'scale'
    },
    {
        id: 18,
        text: {
            tr: "Sık sık öfke patlamaları ya da dengesiz ruh hali yaşıyor musunuz?",
            en: "Do you often experience outbursts of anger or unstable moods?",
            ar: "هل تعاني غالبًا من نوبات غضب أو مزاج غير مستقر؟",
            es: "¿Experimentas a menudo estallidos de ira o estados de ánimo inestables?"
        },
        type: 'scale'
    },
    {
        id: 19,
        text: {
            tr: "Çocuklarınız ile iletişiminiz sevgi ve saygı temelli midir?",
            en: "Is your communication with your children based on love and respect?",
            ar: "هل تواصلك مع أطفالك مبني على الحب والاحترام؟",
            es: "¿Tu comunicación con tus hijos se basa en el amor y el respeto?"
        },
        type: 'scale'
    },
    {
        id: 20,
        text: {
            tr: "Yaşadığınız cevrede maddeye ulaşım kolay mıdır?",
            en: "Is access to substances easy in the environment you live in?",
            ar: "هل الوصول إلى المواد المخدرة سهل في البيئة التي تعيش فيها؟",
            es: "¿Es fácil el acceso a sustancias en el entorno en el que vives?"
        },
        type: 'scale'
    },
    {
        id: 21,
        text: {
            tr: "Çocuğunuzun eğitim başarısını ve devamsızlık durumunu yakından takip ediyor musunuz?",
            en: "Do you closely monitor your child's educational success and absenteeism?",
            ar: "هل تراقب عن كثب نجاح طفلك التعليمي وتغيبه؟",
            es: "¿Monitoreas de cerca el éxito educativo y el ausentismo de tu hijo?"
        },
        type: 'scale'
    },
    {
        id: 22,
        text: {
            tr: "Çevrenizde işsizlik oranı yüksek mi?",
            en: "Is the unemployment rate high in your area?",
            ar: "هل معدل البطالة مرتفع في منطقتك؟",
            es: "¿Es alta la tasa de desempleo en tu área?"
        },
        type: 'scale'
    },
    {
        id: 23,
        text: {
            tr: "Çocuğunuz sık sık para isteme davranışı sergiliyor mu?",
            en: "Does your child frequently exhibit money-asking behavior?",
            ar: "هل يظهر طفلك سلوك طلب المال بشكل متكرر؟",
            es: "¿Exhibe tu hijo frecuentemente el comportamiento de pedir dinero?"
        },
        type: 'scale'
    },
    {
        id: 24,
        text: {
            tr: "Çocuğunuza yeterli sosyal destek verdiğinizi düşünüyor musunuz?",
            en: "Do you think you provide enough social support to your child?",
            ar: "هل تعتقد أنك تقدم الدعم الاجتماعي الكافي لطفلك؟",
            es: "¿Crees que le brindas suficiente apoyo social a tu hijo?"
        },
        type: 'scale'
    },
    {
        id: 25,
        text: {
            tr: "Çocuğunuzun kumar ile ilgili bilgisi var mı veya kumar oynadığını düşünüyor musunuz?",
            en: "Does your child have knowledge about gambling or do you think they gamble?",
            ar: "هل لدى طفلك معرفة بالمقامرة أو هل تعتقد أنه يقامر؟",
            es: "¿Tiene tu hijo conocimiento sobre el juego o crees que juega?"
        },
        type: 'scale'
    },
    {
        id: 26,
        text: {
            tr: "Tütün ürünlerinin kullanımının her yaş grubu üzerinde olumsuz etki uyandıracağını düşünüyor musunuz?",
            en: "Do you think the use of tobacco products has a negative effect on every age group?",
            ar: "هل تعتقد أن استخدام منتجات التبغ له تأثير سلبي على كل فئة عمرية؟",
            es: "¿Crees que el uso de productos de tabaco tiene un efecto negativo en todos los grupos de edad?"
        },
        type: 'scale'
    },
    {
        id: 27,
        text: {
            tr: "Çocuğunuzun ekran süresi ile alakalı bir sınırlandırmanız var mı?",
            en: "Do you have a limitation regarding your child's screen time?",
            ar: "هل لديك قيود بخصوص وقت الشاشة لطفلك؟",
            es: "¿Tienes una limitación con respecto al tiempo de pantalla de tu hijo?"
        },
        type: 'scale'
    },
    {
        id: 28,
        text: {
            tr: "Çocuklarınızın sosyal medyaya fazla önem verdiğini düşünüyor musunuz?",
            en: "Do you think your children attach too much importance to social media?",
            ar: "هل تعتقد أن أطفالك يولون أهمية كبيرة لوسائل التواصل الاجتماعي؟",
            es: "¿Crees que tus hijos le dan demasiada importancia a las redes sociales?"
        },
        type: 'scale'
    },
    {
        id: 29,
        text: {
            tr: "Trafikte çocuğunuzun yanında agresif davranışlar sergiliyor musunuz?",
            en: "Do you exhibit aggressive behaviors in traffic while your child is with you?",
            ar: "هل تظهر سلوكيات عدوانية في حركة المرور أثناء وجود طفلك معك؟",
            es: "¿Exhibes comportamientos agresivos en el tráfico mientras tu hijo está contigo?"
        },
        type: 'scale'
    },
    {
        id: 30,
        text: {
            tr: "Çocuğunuzun alkol ve maddeye bir eğilimi olduğunu düşünüyor musunuz?",
            en: "Do you think your child has a tendency towards alcohol and substances?",
            ar: "هل تعتقد أن طفلك لديه ميل نحو الكحول والمواد المخدرة؟",
            es: "¿Crees que tu hijo tiene una tendencia hacia el alcohol y las sustancias?"
        },
        type: 'scale'
    },
    {
        id: 31,
        text: {
            tr: "Çocuğunuzun çevresinde zararlı arkadaşlıklar gözlemlemekte misiniz?",
            en: "Do you observe harmful friendships around your child?",
            ar: "هل تلاحظ صداقات ضارة حول طفلك؟",
            es: "¿Observas amistades dañinas alrededor de tu hijo?"
        },
        type: 'scale'
    },
    {
        id: 32,
        text: {
            tr: "Ebeveynler olarak sigara kullanıyorsanız paketinizdeki sigara miktarında beklenmedik azalmalar görüyor musunuz?",
            en: "If you smoke as parents, do you see unexpected decreases in the amount of cigarettes in your pack?",
            ar: "إذا كنتم تدخنون كآباء، هل ترون انخفاضًا غير متوقع في كمية السجائر في علبتكم؟",
            es: "¿Si fuman como padres, ven disminuciones inesperadas en la cantidad de cigarrillos en su paquete?"
        },
        type: 'scale'
    },
    {
        id: 33,
        text: {
            tr: "Tütün ürünlerini bırakmak için denemeleriniz oldu mu?",
            en: "Have you tried to quit tobacco products?",
            ar: "هل حاولت الإقلاع عن منتجات التبغ؟",
            es: "¿Has intentado dejar los productos de tabaco?"
        },
        type: 'scale'
    },
    {
        id: 34,
        text: {
            tr: "Çocuklarınızda bir amaçsızlık ve asi davranışlar gözlemlemekte misiniz?",
            en: "Do you observe a lack of purpose and rebellious behaviors in your children?",
            ar: "هل تلاحظ نقصًا في الهدف وسلوكيات متمردة لدى أطفالك؟",
            es: "¿Observas falta de propósito y comportamientos rebeldes en tus hijos?"
        },
        type: 'scale'
    },
    {
        id: 35,
        text: {
            tr: "Bağımlı bireylerin profesyonel yardım alması gerektiğini düşünüyor musunuz?",
            en: "Do you think addicted individuals should get professional help?",
            ar: "هل تعتقد أن الأفراد المدمنين يجب أن يحصلوا على مساعدة مهنية؟",
            es: "¿Crees que las personas adictas deberían buscar ayuda profesional?"
        },
        type: 'scale'
    },
];

export const questions: Record<UserRole, Question[]> = {
    self: questionsSelf,
    relative: questionsRelative,
    health_professional: questionsHealth,
};
