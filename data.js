// חוברת בירור מידות לשידוכים - מאגר נתונים מלא
const SHIDDUCH_DATA = {
  title: "חוברת בירור מידות לשידוכים",
  subtitle: "120 שאלות עומק להכרת האדם ולבניית בית",
  intro: {
    purpose: "מטרת החוברת אינה למצוא אדם ללא חסרונות. אין אדם כזה. המטרה היא לברר האם עומד מולנו אדם עם מידות טובות, יראת שמים, אחריות, ענווה, יציבות, יכולת לתקן, כבוד לזולת ורצון אמיתי לבנות בית של תורה, שלום וחסד.",
    note: "התשובות לדוגמה אינן 'תשובות שצריך לשנן'. להפך — הן נועדו להמחיש איזה סוג של חשיבה והתנהלות כדאי לחפש.",
    critical: "חשוב במיוחד לזכור: תשובה יפה אינה הוכחה למידה טובה. דוגמה אמיתית מהחיים, עקביות בהתנהגות ובירור אצל אנשים שמכירים את האדם — חשובים הרבה יותר."
  },
  goldenRule: {
    title: "כלל הזהב של החוברת",
    notLookingFor: "לא מחפשים: 'האם הוא מושלם?'",
    lookingForList: [
      "האם הוא אדם שמכיר את עצמו?",
      "האם הוא יודע לקחת אחריות?",
      "האם הוא יודע לבקש סליחה?",
      "האם הוא יודע לכבד גם בזמן מחלוקת?",
      "האם הוא יודע לוותר?",
      "האם הוא יודע להציב גבולות בלי לפגוע?",
      "האם הוא שמח בטובת האחר?",
      "האם אפשר לסמוך עליו?"
    ],
    mostImportant: "והחשוב ביותר: כאשר הוא מגלה מידה שדורשת תיקון — האם הוא מוכן לעבוד עליה?",
    summary: "כי בבניית בית לא מחפשים אדם שאין לו מה לתקן. מחפשים אדם שיש לו לב טוב, יושר, ענווה ורצון אמיתי לגדול יחד."
  },
  chapters: [
    { id: 0, title: "חימום", name: "חימום ושבירת קרח", range: "121–150", icon: "sun", color: "amber" },
    { id: 1, title: "פרק א׳", name: "ענווה ומודעות עצמית", range: "1–10", icon: "feather", color: "indigo" },
    { id: 2, title: "פרק ב׳", name: "כעס ושליטה עצמית", range: "11–20", icon: "flame", color: "rose" },
    { id: 3, title: "פרק ג׳", name: "סבלנות", range: "21–30", icon: "hourglass", color: "amber" },
    { id: 4, title: "פרק ד׳", name: "ויתור וגמישות", range: "31–40", icon: "shuffle", color: "emerald" },
    { id: 5, title: "פרק ה׳", name: "רגישות, חסד ועין טובה", range: "41–50", icon: "heart", color: "teal" },
    { id: 6, title: "פרק ו׳", name: "יחס לחלשים ולנותני שירות", range: "51–60", icon: "users", color: "blue" },
    { id: 7, title: "פרק ז׳", name: "נדיבות", range: "61–70", icon: "gift", color: "violet" },
    { id: 8, title: "פרק ח׳", name: "קנאה ופרגון", range: "71–80", icon: "sparkles", color: "fuchsia" },
    { id: 9, title: "פרק ט׳", name: "כבוד, אגו ושליטה", range: "81–90", icon: "shield", color: "purple" },
    { id: 10, title: "פרק י׳", name: "אמינות ואחריות", range: "91–100", icon: "check-circle", color: "cyan" },
    { id: 11, title: "פרק י״א", name: "חריצות, התמדה והתמודדות", range: "101–110", icon: "compass", color: "orange" },
    { id: 12, title: "פרק י״ב", name: "זוגיות ובניית הבית", range: "111–120", icon: "home", color: "pink" }
  ],
  questions: [
    // פרק א׳ — ענווה ומודעות עצמית
    {
      id: 1,
      chapterId: 1,
      text: "ספר/י לי על טעות משמעותית שעשית לאחרונה.",
      sampleAnswer: "היה לי ויכוח עם אדם קרוב. הייתי בטוח שאני צודק ודיברתי בצורה לא מספיק מכבדת. אחר כך הבנתי שגם אם הייתי צודק בנושא, הדרך שלי הייתה לא נכונה. ביקשתי סליחה ודיברנו על זה.",
      desirable: "ענווה, לקיחת אחריות, יכולת לתקן.",
      toCheck: "האם האדם באמת אומר 'טעיתי', או שמיד מסביר למה למעשה האחר אשם.",
      redFlag: "אני בדרך כלל לא טועה. הבעיה היא שאנשים לא מבינים אותי.",
      followUp: "מה היית עושה אחרת היום?",
      externalInquiry: "האם יצא לך לראות אותו מודה בטעות?",
      isGolden: true,
      goldenNumber: 1
    },
    {
      id: 2,
      chapterId: 1,
      text: "מתי בפעם האחרונה ביקשת סליחה?",
      sampleAnswer: "לא מזמן. הבנתי שפגעתי במישהו למרות שלא התכוונתי, והרגשתי שאני צריך להתנצל ולא רק להסביר שלא הייתה לי כוונה.",
      desirable: "יכולת להכיר בפגיעה גם כשהכוונה הייתה טובה.",
      toCheck: "האם התנצלות היא חלק מההתנהלות שלו.",
      redFlag: "אני לא אוהב לבקש סליחה כי זה נותן לצד השני תחושה שהוא צודק.",
      followUp: "מה יותר קשה לך — להגיד 'טעיתי' או 'סליחה'?",
      externalInquiry: "האם הוא יודע להתנצל אחרי שפגע?",
      isGolden: true,
      goldenNumber: 5
    },
    {
      id: 3,
      chapterId: 1,
      text: "מה אנשים שמכירים אותך הכי טוב יגידו שקשה אצלך?",
      sampleAnswer: "כנראה שלפעמים אני ממהר לקבל החלטות ולא תמיד נותן מספיק זמן לאחרים. אני משתדל לעבוד על זה.",
      desirable: "מודעות עצמית אמיתית.",
      toCheck: "האם האדם מכיר את החסרונות שלו.",
      redFlag: "כולם אומרים שאני מושלם.",
      followUp: "מה אתה עושה כדי להשתפר בזה?",
      externalInquiry: "לשאול אדם שמכיר אותו היטב האם זו אכן נקודה מוכרת.",
      isGolden: true,
      goldenNumber: 6
    },
    {
      id: 4,
      chapterId: 1,
      text: "ספר/י על ביקורת שקיבלת והבנת שהיא נכונה.",
      sampleAnswer: "מישהו אמר לי שאני לפעמים לא מספיק מקשיב לפני שאני נותן פתרון. בהתחלה לא אהבתי לשמוע את זה, אבל אחר כך שמתי לב שהוא צודק.",
      desirable: "יכולת להקשיב ולהפיק לקחים.",
      toCheck: "האם ביקורת מובילה אותו להתבוננות או מיד להתגוננות.",
      redFlag: "כל ביקורת מוצגת כהתקפה או קנאה.",
      followUp: "מה עשית בעקבות הביקורת?",
      isGolden: true,
      goldenNumber: 4
    },
    {
      id: 5,
      chapterId: 1,
      text: "האם קרה שמישהו צעיר ממך לימד אותך משהו חשוב?",
      sampleAnswer: "כן. לפעמים דווקא אנשים צעירים ממני רואים דברים שאני לא שם לב אליהם. אני משתדל להיות פתוח לזה.",
      desirable: "ענווה.",
      toCheck: "האם הוא מסוגל לקבל מאדם שלא נמצא מעליו במעמד.",
      redFlag: "מה כבר יש לו ללמד אותי?",
      followUp: null
    },
    {
      id: 6,
      chapterId: 1,
      text: "מה יותר קשה לך — להודות שטעית או לבקש סליחה?",
      sampleAnswer: "כנראה להודות שטעיתי. אני חושב שזה משהו שאני צריך לעבוד עליו.",
      desirable: "כנות ולא ניסיון להציג עצמו כמושלם.",
      toCheck: null,
      redFlag: null,
      followUp: "ומה אתה עושה כשאתה מרגיש שהאגו נכנס לתמונה?"
    },
    {
      id: 7,
      chapterId: 1,
      text: "אם בן/בת הזוג יוכיחו לך שאתה טועה — איך תרצה להגיב?",
      sampleAnswer: "אני רוצה להיות מסוגל להגיד שטעיתי. אולי לא תמיד יהיה לי קל באותו רגע, אבל חשוב לי שהאמת תהיה יותר חשובה מהצורך לנצח.",
      desirable: "אהבת אמת, ענווה ובגרות.",
      toCheck: null,
      redFlag: "אני לא אוהב שאנשים מתקנים אותי.",
      followUp: "ומה אם עדיין תחשוב שאתה צודק?"
    },
    {
      id: 8,
      chapterId: 1,
      text: "איזו מידה שלך היית רוצה לתקן?",
      sampleAnswer: "אני רוצה לעבוד על סבלנות. כשאני בלחץ אני רוצה שהכול יתקדם מהר.",
      desirable: "מודעות ורצון לעבוד.",
      toCheck: "האם יש פעולה מעשית ולא רק הצהרה.",
      redFlag: null,
      followUp: "מה אתה עושה בפועל כדי לשנות את זה?",
      isGolden: true,
      goldenNumber: 17
    },
    {
      id: 9,
      chapterId: 1,
      text: "במה אתה הכי גאה מבחינת האופי שלך?",
      sampleAnswer: "אני חושב שאפשר לסמוך עליי. אם אמרתי שאעשה משהו, אני משתדל מאוד לעמוד בזה.",
      desirable: "הערכה למידות ולא רק להישגים חיצוניים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 10,
      chapterId: 1,
      text: "איך היית רוצה שאנשים יזכרו אותך?",
      sampleAnswer: "כאדם שהיה אפשר לסמוך עליו, שהיה טוב לאחרים ושניסה לעשות את הדבר הנכון.",
      desirable: "ערכים של אמינות, חסד ודרך ארץ.",
      toCheck: null,
      redFlag: "דגש כמעט מוחלט על כבוד, מעמד וכסף.",
      followUp: null
    },

    // פרק ב׳ — כעס ושליטה עצמית
    {
      id: 11,
      chapterId: 2,
      text: "מה בדרך כלל מצליח להוציא אותך מהכלים?",
      sampleAnswer: "כשאני מרגיש שלא מקשיבים לי. אבל אני יודע שזה לא מצדיק התפרצות, ולכן אני משתדל לעצור.",
      desirable: "מודעות לטריגרים ואחריות על התגובה.",
      toCheck: null,
      redFlag: null,
      followUp: "מה אתה עושה ברגע שזה קורה?"
    },
    {
      id: 12,
      chapterId: 2,
      text: "איך אתה מתנהג כשאתה מאוד כועס?",
      sampleAnswer: "אני מעדיף לקחת זמן להירגע ולא להמשיך לדבר כשאני מרגיש שאני עלול לומר דברים לא נכונים.",
      desirable: "שליטה עצמית.",
      toCheck: null,
      redFlag: "כשאני כועס אני אומר הכול, אין לי שליטה.",
      followUp: null,
      isGolden: true,
      goldenNumber: 2
    },
    {
      id: 13,
      chapterId: 2,
      text: "האם יצא לך להצטער על משהו שאמרת בכעס?",
      sampleAnswer: "כן. פעם אמרתי דברים קשים ולא הייתי צריך. אחר כך ביקשתי סליחה.",
      desirable: "יכולת לתקן.",
      toCheck: null,
      redFlag: null,
      followUp: "מה למדת מהמקרה?"
    },
    {
      id: 14,
      chapterId: 2,
      text: "כשאתה כועס, אתה מעדיף לדבר מיד או להירגע קודם?",
      sampleAnswer: "להירגע קודם. אבל חשוב לי לחזור לשיחה ולא לברוח ממנה.",
      desirable: "ויסות רגשי בלי התחמקות.",
      toCheck: null,
      redFlag: "שימוש בשתיקה כעונש.",
      followUp: null
    },
    {
      id: 15,
      chapterId: 2,
      text: "אם בן/בת הזוג יבקשו להפסיק שיחה כי הם מוצפים?",
      sampleAnswer: "אם הם צריכים להירגע, אני יכול לתת להם זמן. חשוב לי שנקבע שנחזור לשיחה.",
      desirable: "כיבוד גבולות לצד אחריות לפתור את הבעיה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 16,
      chapterId: 2,
      text: "מה עוזר לך להירגע?",
      sampleAnswer: "לצאת קצת מהסיטואציה, להתפלל, ללכת, ואז לחזור לדבר.",
      desirable: "כלים בריאים להתמודדות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 17,
      chapterId: 2,
      text: "איך אתה מגיב כשמישהו מעליב אותך?",
      sampleAnswer: "אני משתדל לא להגיב באותו מטבע. אם צריך, אני מציב גבול ואומר שזה לא מקובל עליי.",
      desirable: "איפוק לצד גבולות.",
      toCheck: null,
      redFlag: "אני תמיד חייב להחזיר.",
      followUp: null
    },
    {
      id: 18,
      chapterId: 2,
      text: "האם אתה נוטה לזכור דברים שעשו לך?",
      sampleAnswer: "אני יכול להיפגע, אבל אני לא רוצה לנהל את החיים לפי פנקס של דברים שאנשים עשו לי.",
      desirable: "יכולת לסלוח.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 19,
      chapterId: 2,
      text: "איך אתה מתנהג כשאתה עייף?",
      sampleAnswer: "אני פחות סבלני, ולכן כשאני יודע שאני עייף אני משתדל לא להיכנס לוויכוחים מיותרים.",
      desirable: "מודעות עצמית.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 20,
      chapterId: 2,
      text: "איך אנשים קרובים מתארים אותך בתקופות לחץ?",
      sampleAnswer: "הם אומרים שאני נעשה יותר שקט וממוקד, אבל לפעמים פחות סבלני.",
      desirable: "תשובה מאוזנת ולא מושלמת מדי.",
      toCheck: null,
      redFlag: null,
      followUp: null,
      externalInquiry: "זו שאלה חשובה במיוחד לבדיקה חיצונית.",
      isGolden: true,
      goldenNumber: 12
    },

    // פרק ג׳ — סבלנות
    {
      id: 21,
      chapterId: 3,
      text: "איזה סוג אנשים הכי קשה לך לסבול?",
      sampleAnswer: "אנשים שלא עומדים במילה שלהם. אבל אני יודע שצריך להיזהר לא לשפוט אדם מהר.",
      desirable: "סבלנות ועין טובה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 22,
      chapterId: 3,
      text: "איך אתה מתנהג כשאתה צריך לחכות הרבה?",
      sampleAnswer: "זה לא הדבר האהוב עליי, אבל אני משתדל לקבל את זה ולא להוציא את העצבים על אחרים.",
      desirable: "שליטה עצמית.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 23,
      chapterId: 3,
      text: "מה קורה כשמישהו עושה משהו מאוד לאט?",
      sampleAnswer: "אם אין סיבה למהר, אני משתדל לתת לו את הזמן שלו.",
      desirable: "הכלה והתחשבות בקצב האחר.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 24,
      chapterId: 3,
      text: "איך תגיב אם ילד ישאל אותך אותה שאלה שוב ושוב?",
      sampleAnswer: "כנראה שבשלב מסוים אתעייף, אבל אני רוצה לזכור שזה ילד ושצריך סבלנות.",
      desirable: "סבלנות לצד הכרה במגבלות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 25,
      chapterId: 3,
      text: "אם בן/בת הזוג מסבירים לך דבר שכבר הבנת?",
      sampleAnswer: "אני יכול להגיד בעדינות שהבנתי, אבל לא רוצה לגרום להם להרגיש שהם מטרידים אותי.",
      desirable: "עדינות וכבוד לקצב השיתוף.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 26,
      chapterId: 3,
      text: "מה יותר קשה לך — לחכות או לוותר?",
      sampleAnswer: "לוותר קשה לי יותר, במיוחד אם אני מרגיש שאני צודק.",
      desirable: "כנות ומודעות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 27,
      chapterId: 3,
      text: "האם אתה סבלני מטבעך או שלמדת להיות סבלני?",
      sampleAnswer: "לא תמיד הייתי סבלני. אני חושב שזה משהו שאפשר ללמוד.",
      desirable: "הבנה שמידות דורשות עבודה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 28,
      chapterId: 3,
      text: "ספר/י על מצב שבו היית צריך הרבה סבלנות.",
      sampleAnswer: "עזרתי לאדם קרוב במשך תקופה ארוכה. היו ימים שהתעייפתי, אבל השתדלתי להמשיך.",
      desirable: "התמדה ויכולת לשאת קושי.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 29,
      chapterId: 3,
      text: "איך אתה מגיב כשמישהו חוזר שוב ושוב על אותה טעות?",
      sampleAnswer: "אני אנסה להבין למה זה קורה, ובמקביל להציב גבול אם צריך.",
      desirable: "שילוב של סבלנות ואחריות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 30,
      chapterId: 3,
      text: "האם אתה יודע לתת לאדם זמן להשתנות?",
      sampleAnswer: "כן, אבל אני גם חושב שצריך לראות שיש רצון אמיתי להשתנות.",
      desirable: "סבלנות שאינה נאיביות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },

    // פרק ד׳ — ויתור וגמישות
    {
      id: 31,
      chapterId: 4,
      text: "ספר/י על משהו שרצית מאוד ובסוף ויתרת עליו.",
      sampleAnswer: "רציתי משהו מסוים מאוד, אבל הבנתי שזה חשוב יותר לאדם שהיה איתי באותה החלטה, אז מצאנו פתרון אחר.",
      desirable: "ויתור מתוך בחירה ולא מתוך חולשה.",
      toCheck: null,
      redFlag: null,
      followUp: null,
      isGolden: true,
      goldenNumber: 9
    },
    {
      id: 32,
      chapterId: 4,
      text: "על מה קשה לך לוותר?",
      sampleAnswer: "על דברים שאני מרגיש שהם עקרוניים. בדברים אחרים אני משתדל להיות גמיש.",
      desirable: "יכולת להבדיל בין עיקר לטפל.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 33,
      chapterId: 4,
      text: "מה חשוב יותר — לקבל את מה שרצית או להגיע להסכמה?",
      sampleAnswer: "בבית חשוב לי להגיע להסכמה, גם אם לפעמים אף אחד לא מקבל בדיוק את מה שרצה.",
      desirable: "העדפת שלום בית ושותפות על פני ניצחון אישי.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 34,
      chapterId: 4,
      text: "אם בן/בת הזוג בוחרים מסעדה שאתה לא אוהב?",
      sampleAnswer: "אם זה לא משהו עקרוני, אין לי בעיה ללכת בשבילם.",
      desirable: "גמישות בדברים קטנים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 35,
      chapterId: 4,
      text: "אם תוכנית שתכננת משתנה ברגע האחרון?",
      sampleAnswer: "זה יכול להפריע לי, אבל אני משתדל לא לתת לזה להרוס את כל הערב.",
      desirable: "חוסן רגשי והסתגלות לשינויים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 36,
      chapterId: 4,
      text: "מה ההבדל בעיניך בין ויתור לבין ויתור עצמי?",
      sampleAnswer: "ויתור הוא כשאני בוחר לתת מקום לאחר. ויתור עצמי קבוע שבו אני תמיד מבטל את עצמי יכול ליצור תסכול.",
      desirable: "בגרות וגבולות בריאים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 37,
      chapterId: 4,
      text: "האם אתה נוטה להרגיש שאתה תמיד זה שמוותר?",
      sampleAnswer: "אם אני מרגיש חוסר איזון, אני מעדיף לדבר על זה ולא לצבור טינה.",
      desirable: "תקשורת פתוחה ומניעת מרמור.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 38,
      chapterId: 4,
      text: "מה חשוב יותר — צדק או שלום?",
      sampleAnswer: "צריך את שניהם. יש דברים שבהם חשוב לעמוד על האמת, ויש דברים שבהם לא שווה להרוס שלום בשביל לנצח.",
      desirable: "שיקול דעת.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 39,
      chapterId: 4,
      text: "אם אין דרך ששני הצדדים יקבלו בדיוק מה שהם רוצים?",
      sampleAnswer: "ננסה להבין מה חשוב לכל אחד ונמצא פתרון ששנינו יכולים לחיות איתו.",
      desirable: "יצירתיות ושיתוף פעולה במבוי סתום.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 40,
      chapterId: 4,
      text: "איך אתה מגיב כשלא מקבלים את דעתך?",
      sampleAnswer: "אני יכול להתווכח ולהסביר, אבל אני לא רוצה שהמחלוקת עצמה תהפוך למלחמה.",
      desirable: "יכולת להכיל מחלוקת בכבוד.",
      toCheck: null,
      redFlag: null,
      followUp: null,
      isGolden: true,
      goldenNumber: 7
    },

    // פרק ה׳ — רגישות, חסד ועין טובה
    {
      id: 41,
      chapterId: 5,
      text: "חבר עובר תקופה קשה אבל לא מבקש עזרה. מה תעשה?",
      sampleAnswer: "אם אני שם לב, אנסה לשאול בעדינות אם הוא צריך משהו, בלי ללחוץ עליו.",
      desirable: "רגישות ויוזמה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 42,
      chapterId: 5,
      text: "איך אתה יודע שמישהו לידך לא מרגיש טוב?",
      sampleAnswer: "אני משתדל לשים לב לשינויים בהתנהגות ולא רק למה שאומרים לי.",
      desirable: "אמפתיה וערנות לזולת.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 43,
      chapterId: 5,
      text: "מישהו מספר לך משהו ואתה חושב שהוא מגזים. מה תעשה?",
      sampleAnswer: "אני קודם אקשיב. אולי אני לא מבין את כל התמונה.",
      desirable: "הקשבה ועין טובה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 44,
      chapterId: 5,
      text: "מה תעשה אם תראה אדם מבוגר שמתקשה?",
      sampleAnswer: "אם אני יכול לעזור, אציע.",
      desirable: "חוש חסד טבעי ודרך ארץ.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 45,
      chapterId: 5,
      text: "האם אתה מסוגל לשנות תוכניות כדי לעזור למישהו?",
      sampleAnswer: "אם זו עזרה משמעותית, כן. אבל גם צריך לדעת מתי אי אפשר.",
      desirable: "חסד לצד גבולות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 46,
      chapterId: 5,
      text: "האם אתה שם לב כשמישהו נשאר לבד בחברה?",
      sampleAnswer: "אני משתדל. לפעמים אנשים לא יגידו שהם מרגישים לבד.",
      desirable: "עין בוחנת לצער הזולת וחמימות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 47,
      chapterId: 5,
      text: "אדם קרוב נפגע ממך בלי שהתכוונת.",
      sampleAnswer: "אני אסביר שלא התכוונתי, אבל קודם אנסה להבין למה הוא נפגע.",
      desirable: "הכרה ברגש של האחר.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 48,
      chapterId: 5,
      text: "האם חשוב לך שאנשים סביבך ירגישו בנוח?",
      sampleAnswer: "כן. אני חושב שבית במיוחד צריך להיות מקום שבו אפשר להרגיש בטוח.",
      desirable: "אווירת ביטחון ושלווה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 49,
      chapterId: 5,
      text: "מה תעשה כשמישהו מתקשה לבקש עזרה?",
      sampleAnswer: "אציע משהו קונקרטי במקום לחכות שהוא יבקש.",
      desirable: "תבונה ועדינות בהגשת סיוע.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 50,
      chapterId: 5,
      text: "האם אתה אדם עם עין טובה?",
      sampleAnswer: "אני משתדל. אני לא תמיד מצליח, אבל אני יודע שאני צריך להיזהר לא לפרש אנשים לרעה.",
      desirable: "לימוד זכות כדרך חיים.",
      toCheck: null,
      redFlag: null,
      followUp: "תן לי דוגמה למקרה כזה."
    },

    // פרק ו׳ — יחס לחלשים ולנותני שירות
    {
      id: 51,
      chapterId: 6,
      text: "מלצר טעה בהזמנה שלך. איך תגיב?",
      sampleAnswer: "אני אגיד לו בצורה מכבדת. טעות יכולה לקרות.",
      desirable: "סבלנות, כבוד ואנושיות.",
      toCheck: null,
      redFlag: "השפלה, צעקות או 'אני משלם ולכן מותר לי'.",
      followUp: null
    },
    {
      id: 52,
      chapterId: 6,
      text: "מוכר בחנות נותן שירות גרוע?",
      sampleAnswer: "אני יכול להתלונן אם צריך, אבל אין סיבה להשפיל אותו.",
      desirable: "אסרטיביות מכבדת ללא פגיעה בכבוד האדם.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 53,
      chapterId: 6,
      text: "נהג טעה בדרך.",
      sampleAnswer: "אנסה לפתור את הבעיה בלי להתפרץ.",
      desirable: "רוגע בשעת תסכול.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 54,
      chapterId: 6,
      text: "איך אתה מדבר על אנשים שעובדים תחתיך?",
      sampleAnswer: "גם אם אני מנהל, אני חושב שצריך לדבר בכבוד.",
      desirable: "ענווה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 55,
      chapterId: 6,
      text: "איך אתה מתייחס לאדם שאין לך ממנו שום תועלת?",
      sampleAnswer: "באותו כבוד שהייתי רוצה לקבל בעצמי.",
      desirable: "כבוד פנימי לאדם באשר הוא אדם, ללא אינטרס.",
      toCheck: null,
      redFlag: null,
      followUp: null,
      isGolden: true,
      goldenNumber: 11
    },
    {
      id: 56,
      chapterId: 6,
      text: "אדם פשוט מצליח יותר ממך.",
      sampleAnswer: "אני יכול להרגיש קנאה, אבל אין סיבה לזלזל בו. אולי אפילו יש לי מה ללמוד ממנו.",
      desirable: "הכרה בערך הזולת ללא עליונות מעמדית.",
      toCheck: null,
      redFlag: null,
      followUp: null,
      isGolden: true,
      goldenNumber: 10
    },
    {
      id: 57,
      chapterId: 6,
      text: "האם מעמד משנה את הכבוד שמגיע לאדם?",
      sampleAnswer: "מעמד יכול לשנות את אופן ההתנהלות, אבל לא את הכבוד הבסיסי.",
      desirable: "יושר מוסרי ויראת שמים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 58,
      chapterId: 6,
      text: "האם עזרת פעם לאדם ואף אחד לא ידע?",
      sampleAnswer: "כן. אני חושב שזה אפילו יותר פשוט כשלא מחכים למחמאה.",
      desirable: "מתן בסתר ונקיות מחיפוש כבוד.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 59,
      chapterId: 6,
      text: "אדם חלש ממך מתנגד לך.",
      sampleAnswer: "העובדה שאני חזק ממנו לא נותנת לי זכות להשפיל אותו.",
      desirable: "איפוק של כוח וצדק.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 60,
      chapterId: 6,
      text: "איך אתה מדבר על אנשים שאינם בחדר?",
      sampleAnswer: "אני משתדל לא לדבר בצורה שלא הייתי אומר אם האדם היה יושב לידי.",
      desirable: "זהירות בכבוד הזולת.",
      toCheck: null,
      redFlag: null,
      followUp: null,
      isGolden: true,
      goldenNumber: 16
    },

    // פרק ז׳ — נדיבות
    {
      id: 61,
      chapterId: 7,
      text: "מה זה אדם נדיב בעיניך?",
      sampleAnswer: "לא רק כסף. גם זמן, הקשבה, עזרה ומחשבה על האחר.",
      desirable: "תפיסה רחבה ועמוקה של נתינה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 62,
      chapterId: 7,
      text: "חבר מבקש ממך טובה גדולה.",
      sampleAnswer: "אבדוק אם אני יכול לעזור. אם לא, אגיד בכנות ולא אעשה טובה שאחר כך אצטער עליה.",
      desirable: "נתינה עם גבולות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 63,
      chapterId: 7,
      text: "האם קשה לך להוציא כסף על אחרים?",
      sampleAnswer: "אני אוהב לתת, אבל חשוב לי גם להיות אחראי כלכלית.",
      desirable: "איזון בין נדיבות לאחריות כלכלית.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 64,
      chapterId: 7,
      text: "האם אתה אוהב לארח?",
      sampleAnswer: "כן, אני אוהב שאנשים מרגישים בבית, אבל אני לא חושב שצריך להיכנס ללחץ כדי להרשים.",
      desirable: "הכנסת אורחים מלב חם ולא מתוך ראוותנות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 65,
      chapterId: 7,
      text: "נתת הרבה ולא העריכו.",
      sampleAnswer: "זה יכול לפגוע, אבל אני משתדל לא להפוך כל נתינה לחוב שהאדם חייב לי.",
      desirable: "נתינה לשם שמיים ללא תלות בתמורה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 66,
      chapterId: 7,
      text: "האם אתה זוכר טובות שעשית?",
      sampleAnswer: "אני משתדל לא לנהל פנקס.",
      desirable: "לב פתוח ללא חשבונאות.",
      toCheck: null,
      redFlag: "אני זוכר הכול, אנשים חייבים לי.",
      followUp: null
    },
    {
      id: 67,
      chapterId: 7,
      text: "האם אתה יודע להגיד לא?",
      sampleAnswer: "כן. לפעמים דווקא להגיד לא בצורה מכבדת מאפשר לי לעזור במקומות שבאמת אפשר.",
      desirable: "גבולות ברורים המאפשרים נתינה בריאה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 68,
      chapterId: 7,
      text: "האם אתה מצפה לקבל בחזרה?",
      sampleAnswer: "אני שמח כשיש הדדיות, אבל לא רוצה שכל טובה תהיה עסקה.",
      desirable: "הדדיות בריאה ללא מסחור של יחסים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 69,
      chapterId: 7,
      text: "מתי לאחרונה עשית משהו טוב בלי לספר עליו?",
      sampleAnswer: "לתת דוגמה אמיתית ולא הצהרה כללית.",
      desirable: "צניעות בעשייה ומעשי חסד נסתרים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 70,
      chapterId: 7,
      text: "מה יותר חשוב — כמה נתת או איך האדם הרגיש?",
      sampleAnswer: "איך האדם הרגיש. נתינה שלא מתאימה לצורך של האדם לא תמיד באמת עוזרת.",
      desirable: "רגישות לצורך האמיתי של המקבל.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },

    // פרק ח׳ — קנאה ופרגון
    {
      id: 71,
      chapterId: 8,
      text: "חבר קיבל משהו שאתה מאוד רוצה.",
      sampleAnswer: "יכול להיות שאקנא קצת, וזה טבעי. אבל אני רוצה להיות מסוגל לשמוח בשבילו ולא להקטין אותו.",
      desirable: "כנות ושליטה בקנאה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 72,
      chapterId: 8,
      text: "האם קל לך לפרגן?",
      sampleAnswer: "כן, אבל אני חושב שזה משהו שצריך לעשות גם כשלא מרגישים את זה באופן טבעי.",
      desirable: "פרגון כעבודה מודעת ועקבית.",
      toCheck: null,
      redFlag: null,
      followUp: "תן דוגמה."
    },
    {
      id: 73,
      chapterId: 8,
      text: "מה אתה מרגיש כשמישהו אחר מקבל יותר תשומת לב?",
      sampleAnswer: "לפעמים זה יכול להציק, אבל אני לא רוצה שהצורך בתשומת לב ינהל אותי.",
      desirable: "ביטחון עצמי שאינו תלוי בזרקור.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 74,
      chapterId: 8,
      text: "אם בן/בת הזוג מצליחים יותר ממך?",
      sampleAnswer: "אני רוצה להרגיש שההצלחה שלהם היא גם משהו שאני יכול לשמוח בו.",
      desirable: "שותפות ולא תחרות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 75,
      chapterId: 8,
      text: "האם אתה משווה את עצמך לאחרים?",
      sampleAnswer: "לפעמים. אני משתדל להשתמש בזה כדי להשתפר ולא כדי למדוד את הערך שלי.",
      desirable: "ערך עצמי פנימי.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 76,
      chapterId: 8,
      text: "האם חשוב לך שאנשים ידעו על ההישגים שלך?",
      sampleAnswer: "נעים לקבל הערכה, אבל אני לא רוצה להיות תלוי בזה.",
      desirable: "ענווה ושחרור מתלות במחיאות כפיים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 77,
      chapterId: 8,
      text: "מישהו מקבל מחמאה ואתה לא.",
      sampleAnswer: "אין סיבה שהמחמאה שלו תגרע ממני.",
      desirable: "שלמות פנימית ועין טובה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 78,
      chapterId: 8,
      text: "האם אתה יכול לפרגן למישהו שאתה מתחרה איתו?",
      sampleAnswer: "כן. תחרות לא אומרת שאני צריך לשנוא אותו.",
      desirable: "אצילות נפש.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 79,
      chapterId: 8,
      text: "האם אתה שמח כשחבר מתקדם בחיים?",
      sampleAnswer: "כן. לפעמים צריך לעבוד על הקנאה, אבל אני רוצה שהשמחה תהיה אמיתית.",
      desirable: "שמחה בטובתו של הזולת.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 80,
      chapterId: 8,
      text: "מה גורם לך להרגיש מוערך?",
      sampleAnswer: "מילים טובות, הכרת תודה והרגשה שרואים את ההשקעה שלי.",
      desirable: "צורך אנושי בהערכה, בלי תלות מוחלטת באישור.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },

    // פרק ט׳ — כבוד, אגו ושליטה
    {
      id: 81,
      chapterId: 9,
      text: "מה גורם לך להרגיש שמכבדים אותך?",
      sampleAnswer: "שמקשיבים לי, שמתחשבים בדעה שלי ושאפשר לדבר איתי בכבוד.",
      desirable: "הגדרה בריאה של כבוד הדדי.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 82,
      chapterId: 9,
      text: "מה מבחינתך נחשב זלזול?",
      sampleAnswer: "השפלה או התעלמות מכוונת. לא כל אי-הסכמה היא זלזול.",
      desirable: "פרופורציה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 83,
      chapterId: 9,
      text: "מה אתה עושה כשאתה מרגיש שלא מכבדים אותך?",
      sampleAnswer: "אני מעדיף להגיד מה הפריע לי במקום לנקום או להחזיר.",
      desirable: "תקשורת בוגרת ללא נקמנות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 84,
      chapterId: 9,
      text: "האם חשוב לך שהמילה האחרונה תהיה שלך?",
      sampleAnswer: "לא. אם הבעיה נפתרה, לא משנה לי מי אמר את המשפט האחרון.",
      desirable: "ענווה ושחרור מהצורך לנצח.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 85,
      chapterId: 9,
      text: "בן הזוג צודק מול אנשים ואתה טעית.",
      sampleAnswer: "אני לא חושב שצריך להסתיר את האמת כדי לשמור על האגו שלי.",
      desirable: "יושר ואמת מעל אגו אישי.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 86,
      chapterId: 9,
      text: "האם אתה מסוגל להגיד 'אני לא יודע'?",
      sampleAnswer: "כן. אני מעדיף להגיד שאני לא יודע מאשר להמציא.",
      desirable: "ענווה אינטלקטואלית.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 87,
      chapterId: 9,
      text: "האם אתה מסוגל לשנות את דעתך?",
      sampleAnswer: "כן, אם אני מבין שיש סיבה טובה.",
      desirable: "גמישות מחשבתית ופתיחות לאמת.",
      toCheck: null,
      redFlag: null,
      followUp: null,
      isGolden: true,
      goldenNumber: 14
    },
    {
      id: 88,
      chapterId: 9,
      text: "מה קורה כשמישהו לא מקבל את הסמכות שלך?",
      sampleAnswer: "תלוי בהקשר. אני רוצה להסביר ולא לכפות סתם.",
      desirable: "הבדלה בין סמכות לבין שליטה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 89,
      chapterId: 9,
      text: "מה חשוב יותר — שיסכימו איתך או שיגידו לך את האמת?",
      sampleAnswer: "האמת. גם אם לא תמיד נעים לשמוע.",
      desirable: "חיפוש אמת ולא חנופה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 90,
      chapterId: 9,
      text: "מה חשוב יותר — לנצח בוויכוח או לפתור את הבעיה?",
      sampleAnswer: "לפתור את הבעיה. אין משמעות לניצחון אם היחסים נפגעו.",
      desirable: "הבנת מהות הזוגיות והקשר.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },

    // פרק י׳ — אמינות ואחריות
    {
      id: 91,
      chapterId: 10,
      text: "אמרת שתעשה משהו ושכחת.",
      sampleAnswer: "אני מתנצל, לא מתרץ, ומנסה למצוא דרך שלא אשכח בפעם הבאה.",
      desirable: "לקיחת אחריות מיידית ומניעת הישנות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 92,
      chapterId: 10,
      text: "מה אתה עושה כשאתה מאחר?",
      sampleAnswer: "אני מעדכן מראש ומתנצל.",
      desirable: "כבוד לזמנם של אחרים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 93,
      chapterId: 10,
      text: "התחייבת למשהו ואתה כבר לא רוצה.",
      sampleAnswer: "אני לא פשוט נעלם. אני מדבר על זה ומנסה להבין מה נכון לעשות.",
      desirable: "אמינות ויושרה בהתחייבויות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 94,
      chapterId: 10,
      text: "ספר/י על הבטחה שלא הצלחת לקיים.",
      sampleAnswer: "הייתה פעם שלא הצלחתי. הייתי צריך לעדכן מוקדם יותר.",
      desirable: "אחריות ולא תירוצים.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 95,
      chapterId: 10,
      text: "אם אף אחד לא יידע שעשית טעות, האם תספר?",
      sampleAnswer: "אם הטעות משפיעה על מישהו או על אחריות שלי — כן.",
      desirable: "יושר פנימי גם כשאיש אינו רואה.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 96,
      chapterId: 10,
      text: "האם אנשים יכולים לסמוך על המילה שלך?",
      sampleAnswer: "אני משתדל שכן. ואם אני לא יכול לעמוד במשהו, אני אומר.",
      desirable: "נאמנות למילה וזהירות בהבטחות.",
      toCheck: null,
      redFlag: null,
      followUp: "תן לי דוגמה."
    },
    {
      id: 97,
      chapterId: 10,
      text: "האם אתה מחזיר דברים בזמן?",
      sampleAnswer: "אני משתדל. אם אני יודע שאתעכב, אני מודיע.",
      desirable: "זהירות בממון הזולת וכבוד לרכושו.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 98,
      chapterId: 10,
      text: "מה אתה עושה כשאתה לא יכול לעמוד בהתחייבות?",
      sampleAnswer: "אני מודיע ולא מחכה שהאדם יגלה לבד.",
      desirable: "יוזמה ואחריות מול אי-עמידה ביעד.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 99,
      chapterId: 10,
      text: "האם אתה נוטה לדחות דברים?",
      sampleAnswer: "כן, לפעמים. אני עובד עם רשימות ותזכורות.",
      desirable: "לא שלמות — אלא פתרונות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 100,
      chapterId: 10,
      text: "איך אתה מגיב כשאומרים לך שאתה לא עומד במילה שלך?",
      sampleAnswer: "אני בודק אם זה נכון. אם כן, אני צריך לקחת אחריות.",
      desirable: "התייחסות עניינית לביקורת מהותית.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },

    // פרק י״א — חריצות, התמדה והתמודדות
    {
      id: 101,
      chapterId: 11,
      text: "מה גורם לך לעשות משהו שאתה לא רוצה לעשות?",
      sampleAnswer: "אם זה חשוב, אני משתדל לא לתת למצב הרוח להחליט בשבילי.",
      desirable: "משמעת עצמית.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 102,
      chapterId: 11,
      text: "ספר/י על משהו קשה שהתמדת בו.",
      sampleAnswer: "סיפור קונקרטי על תקופה שבה המשיך למרות קושי.",
      desirable: "כוח רצון ונחישות לאורך זמן.",
      toCheck: "האם הסיפור אמיתי ומפורט.",
      redFlag: null,
      followUp: null
    },
    {
      id: 103,
      chapterId: 11,
      text: "מה קורה כשאתה לא מצליח בפעם הראשונה?",
      sampleAnswer: "אני מנסה להבין למה נכשלתי ואז מנסה שוב, או משנה גישה.",
      desirable: "למידה מכישלון וחוסר ייאוש.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 104,
      chapterId: 11,
      text: "האם אתה דוחה דברים?",
      sampleAnswer: "לפעמים. אני יודע שזה קורה לי בעיקר כשמשימה לא ברורה, אז אני מחלק אותה לשלבים.",
      desirable: "מודעות לדחיינות וכלים מעשיים להתגברות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 105,
      chapterId: 11,
      text: "מה גורם לך לוותר?",
      sampleAnswer: "אם אני מבין שהמטרה לא נכונה או שהדרך לא נכונה. אבל לא רק בגלל שקשה.",
      desirable: "שיקול דעת ענייני ולא עזיבה מתוך עצלות או פחד.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 106,
      chapterId: 11,
      text: "איך אתה מגיב לכישלון?",
      sampleAnswer: "קודם קשה לי, אבל אני משתדל ללמוד ולחזור לפעולה.",
      desirable: "חוסן.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 107,
      chapterId: 11,
      text: "אתה אדם של תוכניות או ספונטני?",
      sampleAnswer: "אני אוהב תכנון, אבל יודע שהחיים לא תמיד עובדים לפי התוכנית.",
      desirable: "שילוב בריא של סדר וגמישות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 108,
      chapterId: 11,
      text: "מה קורה כשהתוכנית משתבשת?",
      sampleAnswer: "אני מנסה למצוא תוכנית חדשה במקום להיתקע על מה שהיה אמור לקרות.",
      desirable: "התמקדות בפתרונות במקום בתלונות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 109,
      chapterId: 11,
      text: "האם אתה יודע לבקש עזרה?",
      sampleAnswer: "כן. פעם היה לי קשה, היום אני מבין שלפעמים זו הדרך האחראית יותר.",
      desirable: "ענווה, בגרות והכרה במגבלות.",
      toCheck: null,
      redFlag: null,
      followUp: null,
      isGolden: true,
      goldenNumber: 13
    },
    {
      id: 110,
      chapterId: 11,
      text: "איך אתה מתפקד בתקופה עמוסה?",
      sampleAnswer: "אני משתדל לקבוע סדרי עדיפויות ולדבר עם האנשים סביבי במקום להיעלם.",
      desirable: "ניהול עצמי ותקשורת גם בעומס.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },

    // פרק י״ב — זוגיות ובניית הבית
    {
      id: 111,
      chapterId: 12,
      text: "מה לדעתך בן זוג חייב לבן הזוג שלו?",
      sampleAnswer: "כבוד, נאמנות, אחריות, הקשבה, אמון ורצון להתחשב.",
      desirable: "הבנה שנישואין הם אחריות הדדית ולא רק קבלת זכויות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 112,
      chapterId: 12,
      text: "מה אתה מוכן לתת לבן הזוג גם כשקשה לך?",
      sampleAnswer: "כבוד. גם כשאני כועס אני לא רוצה להפוך את האדם שמולי לאויב.",
      desirable: "שמירה על כבוד בסיסי גם בשעת משבר.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 113,
      chapterId: 12,
      text: "איך אתה מראה הערכה לאדם שאתה אוהב?",
      sampleAnswer: "אני משתדל גם לומר במילים וגם לעשות דברים שמקלים עליו.",
      desirable: "ביטוי מעשי ומילולי של אהבה והכרת הטוב.",
      toCheck: "האם האדם יודע להביע הערכה ולא רק להרגיש אותה.",
      redFlag: null,
      followUp: null
    },
    {
      id: 114,
      chapterId: 12,
      text: "מה לדעתך שומר על זוגיות לאורך שנים?",
      sampleAnswer: "כבוד, נאמנות, תקשורת, יכולת לבקש סליחה, עבודת המידות ורצון משותף להשקיע.",
      desirable: "תפיסה מעמיקה של עבודה זוגית מתמדת.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 115,
      chapterId: 12,
      text: "מה לדעתך הורס זוגיות?",
      sampleAnswer: "זלזול, חוסר נאמנות, שקרים, חוסר תקשורת, צבירת טינה וחוסר רצון לעבוד על עצמנו.",
      desirable: "מודעות למלכודות זוגיות והתרחקות מהן.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 116,
      chapterId: 12,
      text: "אם בן הזוג פגע בך אבל באמת מתחרט?",
      sampleAnswer: "אני חושב שצריך לתת מקום לסליחה ולתיקון, אבל גם להבין מה גרם לזה ואיך מונעים שזה יחזור.",
      desirable: "סליחה לצד גבולות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 117,
      chapterId: 12,
      text: "אם אתה פגעת בבן הזוג?",
      sampleAnswer: "אני צריך להקשיב, לקחת אחריות, להתנצל ולנסות לתקן במעשה.",
      desirable: "התנצלות כנה ותיקון מעשי ללא התקרבנות.",
      toCheck: null,
      redFlag: null,
      followUp: null
    },
    {
      id: 118,
      chapterId: 12,
      text: "איזו תכונה שלך בן הזוג יצטרך ללמוד להתמודד איתה?",
      sampleAnswer: "כשאני בלחץ אני נהיה מאוד ממוקד במשימה ופחות שם לב למה שקורה סביבי. אני צריך לזכור לעצור.",
      desirable: "מודעות עצמית אמיתית.",
      toCheck: null,
      redFlag: null,
      followUp: null,
      isGolden: true,
      goldenNumber: 18
    },
    {
      id: 119,
      chapterId: 12,
      text: "מה הכי חשוב לך שיהיה בבית שלך מבחינת האווירה?",
      sampleAnswer: "שיהיה בית של תורה ויראת שמים, אבל גם בית שמח, רגוע, מכבד וחם, שבו הילדים מרגישים אהובים ושאפשר לדבר.",
      desirable: "חזון לבית שמח ומכבד, לצד עולם הערכים המשותף.",
      toCheck: null,
      redFlag: null,
      followUp: "מה לדעתך עושים כשיש בבית מתח או מחלוקת?"
    },
    {
      id: 120,
      chapterId: 12,
      text: "אם אשאל את שלושת האנשים שמכירים אותך הכי טוב — במה הם יגידו שאתה אדם טוב ובמה אתה צריך להשתפר?",
      sampleAnswer: "הם כנראה יגידו שאני נאמן ואפשר לסמוך עליי, ושאני משתדל לעזור. מצד שני, הם יגידו שלפעמים אני עקשן כשאני חושב שאני צודק, וזה משהו שאני באמת צריך לעבוד עליו.",
      desirable: "פער קטן בין האופן שבו האדם רואה את עצמו לבין האופן שבו אנשים קרובים אליו מכירים אותו.",
      toCheck: "האם החולשה שהוא בחר אמיתית או 'חולשה שהיא בעצם מחמאה'.",
      redFlag: "אין להם שום דבר להגיד עליי.",
      followUp: "מה אתה עושה בפועל כדי לעבוד על הנקודה הזאת?",
      externalInquiry: "זו אחת השאלות החשובות ביותר לבירור אצל אנשים שמכירים אותו היטב.",
      isGolden: true,
      goldenNumber: 20
    },

    // שאלות חימום והיכרות ראשונית (121–150)
    {
      id: 121,
      chapterId: 0,
      isWarmup: true,
      text: "איך נראה יום שישי האידיאלי שלך כשאת/ה רוצה להתרענן ולהתכונן בנחת לשבת?",
      sampleAnswer: "להתחיל מוקדם, לשמוע ניגונים או שירים שקטים ברקע, להכין משהו טעים ולא להיות בלחץ של הרגע האחרון, כדי לקבל את השבת בנחת.",
      desirable: "שלווה פנימית, חיבור לשבת, יכולת לתכנן אווירה רגועה בבית.",
      toCheck: "האם יש רצון לרוגע ושמחה בהכנות לשבת.",
      followUp: "איזה שיר או ניגון הכי מחבר אותך ליום שישי?"
    },
    {
      id: 122,
      chapterId: 0,
      isWarmup: true,
      text: "איזה ספר, שיר או רעיון ששמעת לאחרונה השאיר עליך רושם עמוק?",
      sampleAnswer: "שמעתי רעיון על כך שאדם צריך לראות את הנקודה הטובה בכל מצב, וזה גרם לי לעצור ולחשוב על איך אני מגיב לאתגרים ביומיום.",
      desirable: "עולם פנימי עשיר, סקרנות אינטלקטואלית והפנמת מסרים לחיים.",
      toCheck: "האם הדברים נוגעים במעשה ולא רק תיאורטיים.",
      followUp: "מה בזה דיבר אליך במיוחד?"
    },
    {
      id: 123,
      chapterId: 0,
      isWarmup: true,
      text: "מה הדבר שהכי מצחיק אותך או מעלה לך חיוך ברגע?",
      sampleAnswer: "סיטואציות יומיומיות מצחיקות עם חברים או אחיינים, או הומור עצמי כשאני עושה פדיחה קטנה ויודע לצחוק על זה.",
      desirable: "הומור בריא, שמחת חיים, יכולת לצחוק על עצמו ללא כבדות.",
      toCheck: "הומור שאינו ציני או פוגעני באחרים.",
      followUp: "אתה טיפוס שאוהב לספר בדיחות או יותר לצחוק מאחרים?"
    },
    {
      id: 124,
      chapterId: 0,
      isWarmup: true,
      text: "אם היה לך יום חופשי שלם בלי שום מחויבויות — איך היית בוחר/ת לבלות אותו?",
      sampleAnswer: "משלב בין טיול רגוע בטבע עם קפה טוב, זמן של קריאה או לימוד בלי לחץ של שעון, ומפגש חם עם אנשים שאני אוהב.",
      desirable: "איזון בין מנוחה, חיבור לטבע וקשרים אנושיים.",
      toCheck: "מה באמת ממלא את האדם כשהוא משוחרר ממטלות.",
      followUp: "מה החלק שהכי היה מטעין אותך ביום כזה?"
    },
    {
      id: 125,
      chapterId: 0,
      isWarmup: true,
      text: "איזה מנהג או הווי משפחתי מבית ההורים היית רוצה להמשיך גם בבית שלך?",
      sampleAnswer: "אצלנו נהגו שבסעודת שבת כל אחד משתף במשהו טוב שקרה לו השבוע. זו הייתה דרך נהדרת להקשיב ולהתחבר.",
      desirable: "הערכה למשפחת המקור לצד רצון לבנות מסורת חמה משותפת.",
      toCheck: "קשר חיובי לשורשים וראיית ערך במשפחתיות.",
      followUp: "איך היית רוצה לעצב את זה ביחד כזוג?"
    },
    {
      id: 126,
      chapterId: 0,
      isWarmup: true,
      text: "מה המאכל או הקינוח שאת/ה הכי אוהב/ת להכין או לאכול כשרוצים לפנק?",
      sampleAnswer: "חלה חמה עם מטבוחה ביתית ביום שישי, או מרק עשיר בחורף — משהו שמביא תחושה של בית וחמימות.",
      desirable: "חיבור פשוט, חם ואוהב להנאות החיים הקטנות.",
      toCheck: null,
      followUp: "אתה יותר נהנה מהבישול וההכנה או מהאכילה המשותפת?"
    },
    {
      id: 127,
      chapterId: 0,
      isWarmup: true,
      text: "ספר/י לי על מקום מיוחד בארץ שבו את/ה מרגיש/ה שלווה וחיבור.",
      sampleAnswer: "הכותל בשעות הלילה המאוחרות, או מצוק מול הים בשקיעה. מקום שבו הרעש של העולם נעצר ויש מקום לנשום.",
      desirable: "חיבור עמוק, יכולת להתבונן ולהתחבר לנשמה ולרוח.",
      toCheck: null,
      followUp: "מתי בפעם האחרונה יצא לך להיות שם?"
    },
    {
      id: 128,
      chapterId: 0,
      isWarmup: true,
      text: "מה היה התחביב האהוב עליך כילד/ה, והאם יש משהו ממנו שנשאר איתך עד היום?",
      sampleAnswer: "מאוד אהבתי לצייר ולבנות דברים בידיים. עד היום אני אוהב פרויקטים של עשייה ועיצוב, זה מרגיע אותי.",
      desirable: "רציפות אישית, אותנטיות וחיבור לתחביבים בריאים.",
      toCheck: null,
      followUp: "זה משהו שהיית רוצה להמשיך לפתח?"
    },
    {
      id: 129,
      chapterId: 0,
      isWarmup: true,
      text: "איזה סוג של מוזיקה או פלייליסט מלווה אותך כשאת/ה רוצה להירגע או בנסיעה?",
      sampleAnswer: "שילוב של מוזיקה יהודית עמוקה, ניגוני חב״ד שקטים, וגם מוזיקה ישראלית אקוסטית שנעים לשמוע בדרך.",
      desirable: "טעם מוזיקלי, רגישות ופתיחות לנפש.",
      toCheck: null,
      followUp: "יש שיר מסוים שליווה אותך בתקופה משמעותית?"
    },
    {
      id: 130,
      chapterId: 0,
      isWarmup: true,
      text: "מה הדבר שהכי ממלא אותך באנרגיה והתלהבות אחרי יום ארוך?",
      sampleAnswer: "שיחה טובה מלב אל לב עם אדם קרוב, או לעשות משהו קטן ומועיל למען מישהו אחר — זה מחזיר לי כוחות ברגע.",
      desirable: "מקורות אנרגיה חיוביים ומבוססי קשר אנושי ונתינה.",
      toCheck: null,
      followUp: "ואיך אתה מעדיף להירגע כשאתה מרוקן לגמרי?"
    },
    {
      id: 131,
      chapterId: 0,
      isWarmup: true,
      text: "אם היית יכול/ה ללמוד מיומנות או כישרון חדש לגמרי תוך יום אחד — מה היית בוחר/ת?",
      sampleAnswer: "לנגן על כלי נגינה כמו פסנתר או גיטרה, או ללמוד שפה נוספת כדי לתקשר עם עוד אנשים בעולם.",
      desirable: "שאיפה להתפתחות, יצירתיות ורצון ללמוד.",
      toCheck: null,
      followUp: "למה דווקא התחום הזה מושך אותך?"
    },
    {
      id: 132,
      chapterId: 0,
      isWarmup: true,
      text: "איזו חוויה מצחיקה, מפתיעה או בלתי צפויה קרתה לך לאחרונה?",
      sampleAnswer: "התבלבלתי באוטובוס והגעתי למקום אחר לגמרי ממה שתכננתי, אבל בסוף פגשתי חבר שלא ראיתי שנים והיה ערב מדהים.",
      desirable: "זרימה, עין טובה, ראיית השגחה פרטית ויכולת לקבל הפתעות בחיים.",
      toCheck: "האם האדם מתעצבן מכל שיבוש או רואה את החצי המלא.",
      followUp: "איך הגבת באותו רגע שגילית שהשתבשה התוכנית?"
    },
    {
      id: 133,
      chapterId: 0,
      isWarmup: true,
      text: "מה הדבר הקטן בבוקר שעושה לך התחלה טובה של יום?",
      sampleAnswer: "תפילה בנחת, כוס קפה חמה בכמה דקות של שקט לפני שכל ההודעות והטלפונים מתחילים.",
      desirable: "התחלת יום מתוך יישוב הדעת ושלווה.",
      toCheck: null,
      followUp: "אתה טיפוס שקם בקלות או צריך כמה שעונים מעוררים?"
    },
    {
      id: 134,
      chapterId: 0,
      isWarmup: true,
      text: "איך את/ה אוהב/ת לפתוח את השבוע במוצאי שבת — מלווה מלכה חגיגית, מנוחה שקטה או שיחה עם חברים?",
      sampleAnswer: "אני אוהב להאריך קצת את מוצאי שבת, לשמוע הבדלה יפה, לשבת עם משהו קל ולא למהר מיד לתוך הלחץ של יום ראשון.",
      desirable: "חיבור לקדושת השבת והמשכת השלווה לתוך ימי החול.",
      toCheck: null,
      followUp: "יש מנהג מיוחד שאתם עושים במוצאי שבת?"
    },
    {
      id: 135,
      chapterId: 0,
      isWarmup: true,
      text: "מי הדמות מהסביבה הקרובה או מהמשפחה שהשפיעה עליך במיוחד ומה למדת ממנה?",
      sampleAnswer: "סבא שלי, שתמיד קיבל כל אדם בחיוך ובסבר פנים יפות, גם כשהיה לו קשה. למדתי ממנו שהמאור פנים שלך הוא מתנה לאחרים.",
      desirable: "הכרת הטוב, יכולת לזהות מעלות אצל אחרים ורצון לאמץ מידות טובות.",
      toCheck: null,
      followUp: "איזו עצה שלו את/ה זוכר/ת במיוחד?"
    },
    {
      id: 136,
      chapterId: 0,
      isWarmup: true,
      text: "ספר/י על טיול, מסלול טבע או נוף בארץ שזכור לך במיוחד לטובה.",
      sampleAnswer: "טיול מעיינות בצפון באביב — המים הזורמים והירוק עשו לי טוב על הלב. אני מאוד אוהב מרחבים וטבע.",
      desirable: "אהבת הארץ, הנאה מבריאת העולם ויכולת לשתף בחוויות חיוביות.",
      toCheck: null,
      followUp: "אתה מעדיף מסלולי מים זורמים או נופי הרים פתוחים?"
    },
    {
      id: 137,
      chapterId: 0,
      isWarmup: true,
      text: "מה המחמאה הכי מרגשת, כנה או מדויקת שקיבלת אי פעם?",
      sampleAnswer: "מישהו אמר לי: 'כשאתה מדבר איתי, אני מרגיש שאתה באמת מקשיב ולא רק מחכה לתורך לדבר'. זה ממש חימם לי את הלב כי חשוב לי להקשיב.",
      desirable: "ענווה, כנות והערכה לתכונות פנימיות ולא רק למחמאות חיצוניות.",
      toCheck: null,
      followUp: "ומה המחמאה שאתה הכי אוהב לתת לאחרים?"
    },
    {
      id: 138,
      chapterId: 0,
      isWarmup: true,
      text: "את/ה יותר טיפוס של בוקר עם עשייה ומרץ, או של שעות הלילה השקטות?",
      sampleAnswer: "אני יותר טיפוס של בוקר, אבל מעריך מאוד את השקט של הלילה כשצריך לחשוב או ללמוד בלי הפרעות.",
      desirable: "מודעות למקצבי החיים האישיים, איזון והתחשבות בקצב של האחר.",
      toCheck: null,
      followUp: "ואיך אתה מסתדר כשצריך להתגמש?"
    },
    {
      id: 139,
      chapterId: 0,
      isWarmup: true,
      text: "איזו מחווה קטנה שמישהו עשה עבורך גרמה לך להרגיש שבאמת אכפת לו ממך?",
      sampleAnswer: "חבר זכר שהיה לי מבחן או פגישה חשובה ושלח לי הודעה קצרה של ברכה והתעניינות. הדברים הקטנים האלה הם הכי משמעותיים.",
      desirable: "רגישות לפרטים, הכרת הטוב והבנה שכוח הקשר טמון במחוות קטנות ועקביות.",
      toCheck: null,
      followUp: "איך את/ה אוהב/ת להראות לאנשים קרובים שאת/ה חושב/ת עליהם?"
    },
    {
      id: 140,
      chapterId: 0,
      isWarmup: true,
      text: "מה הדבר הראשון שאת/ה אוהב/ת לעשות כשאת/ה נכנס/ת לבית בסוף יום ארוך?",
      sampleAnswer: "לנשום עמוק, להחליף לבגדים נוחים, לשתות משהו חם ולומר תודה על היום שעבר.",
      desirable: "יכולת לפרוק מתח, רוגע והערכה לביתיות חמה.",
      toCheck: null,
      followUp: "בית עבורך הוא יותר מקום לפגוש אנשים או מקום של שקט?"
    },
    {
      id: 141,
      chapterId: 0,
      isWarmup: true,
      text: "איזה נושא או תחום עניין גורם לך לדבר עליו שעות בעיניים נוצצות?",
      sampleAnswer: "חינוך, נפש האדם, או חסד מעשי — כל מה שקשור ללהבין אנשים לעומק ולעזור להם לצמוח.",
      desirable: "תשוקה פנימית, חיבור לערכים ועניין עמוק.",
      toCheck: "האם יש לאדם עולם תוכן שמלהיב אותו.",
      followUp: "איך הגעת להתעניין בתחום הזה?"
    },
    {
      id: 142,
      chapterId: 0,
      isWarmup: true,
      text: "ספר/י על מקרה שבו למדת על עצמך משהו חדש שהפתיע אותך לטובה.",
      sampleAnswer: "הייתי במצב של חוסר ודאות וחשבתי שאיבהל, אבל גיליתי שיש בי יותר קור רוח ויכולת התמודדות ממה שחשבתי.",
      desirable: "חוסן נפשי, ביטחון עצמי בריא וגילוי כוחות פנימיים.",
      toCheck: null,
      followUp: "מה עזר לך להרגיש ככה באותו רגע?"
    },
    {
      id: 143,
      chapterId: 0,
      isWarmup: true,
      text: "אם היית מעביר/ה שיעור, סדנה או הרצאה קצרה בנושא שאת/ה אוהב/ת — מה היה הנושא?",
      sampleAnswer: "על חשיבות הראייה החיובית והדיבור המעצים בין אנשים — איך מילה טובה אחת יכולה לבנות עולם שלם.",
      desirable: "רצון להשפיע טוב, תוכן פנימי חיובי וחשיבה על תיקון עולם.",
      toCheck: null,
      followUp: "מי האדם שהכי היית רוצה שישב בשורה הראשונה?"
    },
    {
      id: 144,
      chapterId: 0,
      isWarmup: true,
      text: "מה הרגע האהוב עליך ביותר במהלך השבת — הדלקת נרות, שולחן השבת, הלימוד או ההבדלה?",
      sampleAnswer: "שולחן השבת בליל שבת — הזמן שבו יושבים כולם יחד בלי מסכים והסחות דעת, שרים ומשוחחים בנחת.",
      desirable: "חום משפחתי, אהבת השבת ותפיסה עמוקה של שולחן השבת כמקום של חיבור.",
      toCheck: null,
      followUp: "איזה שיר שבת הכי מרגש אותך בשולחן?"
    },
    {
      id: 145,
      chapterId: 0,
      isWarmup: true,
      text: "איזה אירוע משמח או שמחה של חבר/ה קרוב/ה ריגשו אותך במיוחד לאחרונה?",
      sampleAnswer: "חתונה של חבר שליוויתי תקופה ארוכה. לראות אותו תחת החופה מאושר ממש מילא אותי בשמחה טהורה.",
      desirable: "שמחה בשמחת הזולת, פירגון אמיתי ונאמנות לחברים.",
      toCheck: "יכולת לשמוח בטובת האחר מכל הלב.",
      followUp: "אתה טיפוס שרוקד ומרים בשמחות או יותר מתרגש בשקט?"
    },
    {
      id: 146,
      chapterId: 0,
      isWarmup: true,
      text: "איפה המקום המועדף עליך לקרוא בו ספר, לנוח או לחשוב בשקט?",
      sampleAnswer: "פינה שקטה בסלון ליד חלון עם אור טבעי, או בגינה ציבורית שקטה בערב עם רוח נעימה.",
      desirable: "הערכה לשקט, יישוב הדעת ורוגע פנימי.",
      toCheck: null,
      followUp: "איזה ספר שקראת לאחרונה היית ממליץ עליו?"
    },
    {
      id: 147,
      chapterId: 0,
      isWarmup: true,
      text: "ספר/י על חוויה או דבר חדש שניסית בפעם הראשונה בשנה האחרונה.",
      sampleAnswer: "התחלתי להתאמן או לרוץ בבקרים, או שהשתתפתי בהתנדבות חדשה שלא הכרתי. זה פתח לי אנרגיות חדשות.",
      desirable: "פתיחות לחוויות חיוביות, יציאה מאזור הנוחות ורצון להתחדש.",
      toCheck: null,
      followUp: "איך הרגשת בהתחלה לפני שניסית?"
    },
    {
      id: 148,
      chapterId: 0,
      isWarmup: true,
      text: "איזו מידה טובה את/ה הכי מעריך/ה אצל חברים קרובים שמקיפים אותך?",
      sampleAnswer: "נאמנות ודיבור ישיר ועדין. אנשים שנעים להיות לידם, שלא צריך לשים מולם מסכות.",
      desirable: "כנות, פשטות, ביטחון בקשרים והעדפת עומק על פני פוזה.",
      toCheck: "איזה טיפוס של אנשים המועמד בוחר סביבו.",
      followUp: "מה גורם לך להרגיש שאת/ה יכול/ה להיות 100% עצמך ליד מישהו?"
    },
    {
      id: 149,
      chapterId: 0,
      isWarmup: true,
      text: "מה היעד או החלום הקטן שהיית רוצה להגשים בשנה הקרובה?",
      sampleAnswer: "להמשיך לבנות את עצמי, להתקדם בעבודה או בלימודים, ולמצוא את האדם שאיתו אבנה בית חם ושמח.",
      desirable: "ראייה קדימה, אופטימיות, בשלות ורצון אמיתי לבניין הבית.",
      toCheck: null,
      followUp: "ומה הצעד הבא שלך בדרך לשם?"
    },
    {
      id: 150,
      chapterId: 0,
      isWarmup: true,
      text: "אם היית צריך/ה לתאר את האווירה הכללית שאת/ה מביא/ה איתך בשתי מילים — מה הן היו?",
      sampleAnswer: "אולי 'חום ורוגע' או 'שמחה ואכפתיות'. חשוב לי שאנשים סביבי ירגישו בנוח ובטוחים.",
      desirable: "מודעות עצמית חיובית, כוונה להאיר לאחרים ורצון ליצור אווירה טובה.",
      toCheck: null,
      followUp: "ומה אנשים שמכירים אותך הכי טוב יגידו על זה?"
    }
  ],

  // פרק י״ג — בירור חיצוני של המידות (40 שאלות לבירור אצל מכרים)
  externalQuestions: [
    "איך היית מתאר/ת את האופי שלו בשלוש מילים?",
    "מה המעלה הכי גדולה שלו?",
    "מה החיסרון המרכזי שלו?",
    "איך הוא מגיב כשמעירים לו?",
    "האם הוא יודע להודות בטעות?",
    "האם הוא יודע לבקש סליחה?",
    "האם אפשר לסמוך עליו?",
    "האם הוא עומד במילה שלו?",
    "איך הוא מתנהג כשהוא כועס?",
    "איך הוא מתנהג כשהוא עייף?",
    "איך הוא מתנהג בתקופות לחץ?",
    "האם הוא נוטה להיעלב?",
    "האם הוא שומר טינה?",
    "האם הוא יודע לסלוח?",
    "האם הוא אדם שמוותר?",
    "האם הוא נוטה לשלוט באחרים?",
    "האם הוא גמיש?",
    "האם הוא מקבל דעות שונות משלו?",
    "האם הוא יודע להקשיב?",
    "האם הוא אדם סבלני?",
    "האם הוא נדיב?",
    "האם הוא נותן בלי לצפות לתמורה?",
    "האם הוא מפרגן לאחרים?",
    "האם הוא נוטה לקנא?",
    "האם הוא שמח בהצלחת אחרים?",
    "איך הוא מתייחס לאנשים חלשים ממנו?",
    "איך הוא מתייחס לעובדי שירות?",
    "איך הוא מדבר על אנשים שאינם נמצאים?",
    "איך הוא מתייחס להורים שלו?",
    "איך הוא מתייחס לילדים?",
    "האם הוא חרוץ?",
    "האם הוא אחראי?",
    "האם הוא מסודר?",
    "האם הוא נוטה לדחות דברים?",
    "האם הוא יציב?",
    "האם הוא יודע לבקש עזרה?",
    "האם הוא שומר סודות?",
    "האם אפשר לספר לו דבר אישי?",
    "האם הוא אדם שמח?",
    "האם יש משהו שחשוב לדעת עליו לפני נישואין שלא שאלתי?"
  ],

  // פרק י״ד — שאלות בירור עמוקות
  deepProbes: {
    instruction: "כאשר מקבלים תשובה כללית, לא צריך להפוך את השיחה לחקירה. פשוט להשתמש באחת מארבע שאלות:",
    probes: [
      { text: "“תן/י לי דוגמה.”", desc: "מעביר מדיון מופשט למקרה מוחשי מהחיים" },
      { text: "“מתי זה קרה לאחרונה?”", desc: "בודק האם זו תכונה פעילה או זיכרון רחוק" },
      { text: "“איך הגבת בפועל?”", desc: "בוחן את המעשה ולא רק את הרצון הפנימי" },
      { text: "“ומה עשית אחרי זה?”", desc: "חושף את השלב השני: הפקת לקחים, תיקון או התבצרות" }
    ],
    examples: [
      {
        claim: "אני אדם סבלני.",
        tip: "לא מסתפקים בזה. שואלים:",
        ask: "“תן לי דוגמה למצב שבו היית צריך הרבה סבלנות.”"
      },
      {
        claim: "אני יודע לוותר.",
        tip: "לא מסתפקים בזה. שואלים:",
        ask: "“ספר לי על משהו שרצית מאוד ובסוף ויתרת עליו.”"
      }
    ],
    conclusion: "כך אפשר להבחין בין תיאור עצמי לבין התנהגות בפועל."
  },

  // פרק ט״ו — מפת מידות אישית
  characterMatrix: [
    { trait: "ענווה", category: "מודעות וענווה", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "מודעות עצמית", category: "מודעות וענווה", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "סבלנות", category: "שליטה ורוגע", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "שליטה עצמית", category: "שליטה ורוגע", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "התמודדות עם כעס", category: "שליטה ורוגע", options: ["טובה", "בינונית", "דורשת בירור"] },
    { trait: "ויתור", category: "גמישות", options: ["גבוה", "בינוני", "דורש בירור"] },
    { trait: "גמישות", category: "גמישות", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "רגישות", category: "חסד ובין אדם לחברו", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "חסד", category: "חסד ובין אדם לחברו", options: ["גבוה", "בינוני", "דורש בירור"] },
    { trait: "עין טובה", category: "חסד ובין אדם לחברו", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "פרגון", category: "חסד ובין אדם לחברו", options: ["גבוה", "בינוני", "דורש בירור"] },
    { trait: "קנאה (אי-קנאה / שחרור מקנאה)", category: "חסד ובין אדם לחברו", options: ["נמוכה", "בינונית", "דורשת בירור"] },
    { trait: "כבוד", category: "בין אדם לחברו", options: ["גבוה", "בינוני", "דורש בירור"] },
    { trait: "קבלת ביקורת", category: "מודעות וענווה", options: ["טובה", "בינונית", "דורשת בירור"] },
    { trait: "אמינות", category: "אחריות ויציבות", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "אחריות", category: "אחריות ויציבות", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "חריצות", category: "התמדה ועשייה", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "התמדה", category: "התמדה ועשייה", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "תקשורת", category: "זוגיות וחיבור", options: ["טובה", "בינונית", "דורשת בירור"] },
    { trait: "הקשבה", category: "זוגיות וחיבור", options: ["טובה", "בינונית", "דורשת בירור"] },
    { trait: "שמירת סוד", category: "אחריות ויציבות", options: ["טובה", "בינונית", "דורשת בירור"] },
    { trait: "כיבוד הורים", category: "בין אדם לחברו", options: ["טוב", "בינוני", "דורש בירור"] },
    { trait: "יחס לחלשים", category: "בין אדם לחברו", options: ["טוב", "בינוני", "דורש בירור"] },
    { trait: "שמחת חיים", category: "נפש ורוח", options: ["גבוהה", "בינונית", "דורשת בירור"] },
    { trait: "יציבות", category: "אחריות ויציבות", options: ["גבוהה", "בינונית", "דורשת בירור"] }
  ],

  // 20 שאלות הזהב
  goldenQuestionsList: [
    { num: 1, text: "ספר/י על טעות משמעותית שעשית.", qId: 1 },
    { num: 2, text: "מה קורה לך כשאתה כועס?", qId: 12 },
    { num: 3, text: "איך אתה מגיב לביקורת?", qId: 4 },
    { num: 4, text: "איזו ביקורת שקיבלת הייתה נכונה?", qId: 4 },
    { num: 5, text: "מתי בפעם האחרונה ביקשת סליחה?", qId: 2 },
    { num: 6, text: "מה אנשים קרובים אומרים שקשה אצלך?", qId: 3 },
    { num: 7, text: "מה קורה כשלא מסכימים איתך?", qId: 40 },
    { num: 8, text: "איך אתה מגיב כשאומרים לך 'לא'?", qId: 40 },
    { num: 9, text: "ספר/י על פעם שוויתרת על משהו חשוב.", qId: 31 },
    { num: 10, text: "איך אתה מגיב כשמישהו מצליח יותר ממך?", qId: 56 },
    { num: 11, text: "איך אתה מתייחס לאדם שאין לך ממנו שום תועלת?", qId: 55 },
    { num: 12, text: "איך אתה מתנהג כשאתה עייף ולחוץ?", qId: 20 },
    { num: 13, text: "האם אתה יודע לבקש עזרה?", qId: 109 },
    { num: 14, text: "האם אתה מסוגל לשנות את דעתך?", qId: 87 },
    { num: 15, text: "איך אתה מתייחס להורים כשאינך מסכים איתם?", qId: null },
    { num: 16, text: "איך אתה מדבר על אנשים שאינם נמצאים?", qId: 60 },
    { num: 17, text: "איזו מידה אתה רוצה לתקן בעצמך?", qId: 8 },
    { num: 18, text: "מה בן הזוג יצטרך ללמוד עליך?", qId: 118 },
    { num: 19, text: "מה לדעתך יהיה הדבר שהכי קשה לחיות איתך?", qId: 118 },
    { num: 20, text: "אם אשאל את האנשים שמכירים אותך הכי טוב — מה הם יספרו לי?", qId: 120 }
  ],

  // משחק דייטים אינטראקטיבי: קלפי עומק וחיבור
  gameConfig: {
    tiers: [
      {
        id: 'tier1',
        title: 'רמה 1: חימום ושבירת קרח',
        subtitle: 'שאלות קלילות, נדיבות, חסד והיכרות חמה',
        color: 'emerald',
        badge: '🌱 חימום והיכרות',
        questionIds: [
          121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
          131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
          141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
          9, 10, 24, 25, 41, 44, 46, 48, 50, 55, 61, 64, 69, 72, 76, 80, 107
        ]
      },
      {
        id: 'tier2',
        title: 'רמה 2: ערכים, סבלנות ומידות בפועל',
        subtitle: 'התמודדות עם לחץ, ויתור, כעס, ענווה וגמישות',
        color: 'amber',
        badge: '⚖️ מידות והתמודדות',
        questionIds: [1, 2, 3, 4, 6, 8, 11, 12, 13, 14, 16, 17, 19, 21, 22, 26, 28, 31, 32, 35, 37, 56, 71, 84, 87, 91, 96, 101, 103, 109]
      },
      {
        id: 'tier3',
        title: 'רמה 3: לב אל לב — בית, חזון וזוגיות',
        subtitle: 'שאיפות לעתיד, כבוד במשברים, מחילה ובניית קשר איתן',
        color: 'rose',
        badge: '🏡 בית וזוגיות',
        questionIds: [7, 15, 33, 36, 38, 74, 85, 90, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]
      },
      {
        id: 'all',
        title: 'מסלול מעורב: כל 150 השאלות',
        subtitle: 'שילוב עשיר ומגוון מכל פרקי החוברת והחימום',
        color: 'indigo',
        badge: '🎲 שילוב מלא',
        questionIds: [] // handled dynamically
      }
    ],

    // קלפי הפתעה ומשימות זוגיות המופיעים במהלך המשחק
    wildcards: [
      {
        id: 'w1',
        type: 'compliment',
        icon: '💖',
        title: 'קלף פירגון כנה',
        instruction: 'עצרו רגע: שתף/י את בן/בת הזוג ב-2 דברים חיוביים שהבחנת בהם במהלך הפגישה (חיוך, עדינות, הקשבה, דרך ארץ).'
      },
      {
        id: 'w2',
        type: 'mirror',
        icon: '🪞',
        title: 'קלף מראה: שאלת מראה!',
        instruction: 'אותה שאלה בדיוק! עכשיו תור השואל/ת לענות גם הוא/היא על השאלה האחרונה. שיתוף הדדי יוצר קרבה אמיתית.'
      },
      {
        id: 'w3',
        type: 'listen',
        icon: '🤫',
        title: 'קלף הקשבה נקייה',
        instruction: 'בשאלה הבאה: השואל/ת מחויב/ת להקשיב בריכוז מלא במשך 60 שניות — בלי לקטוע, להתווכח או לתת עצות. רק להקשיב בעיניים טובות.'
      },
      {
        id: 'w4',
        type: 'deepen',
        icon: '🔍',
        title: 'קלף עומק: שאלה חופרת בעדינות',
        instruction: 'חובה להשתמש באחת מארבע שאלות המפתח: “תוכל/י לתת לי דוגמה מוחשית לכך מהחיים?” או “איך הגבת בפועל כשזה קרה?”'
      },
      {
        id: 'w5',
        type: 'immunity',
        icon: '🛡️',
        title: 'קלף חסינות והחלפה',
        instruction: 'אם השאלה כבדה, מוקדמת מדי או לא מתאימה להערב — לוחצים על “החלף שאלה” וממשיכים הלאה בחיוך, בלי לחץ.'
      },
      {
        id: 'w6',
        type: 'shabbat',
        icon: '🕯️',
        title: 'קלף חזון השבת',
        instruction: 'שתפו אחד את השנייה: איך נראה בעיני רוחכם שולחן שבת אידיאלי בבית שלכם בעתיד? שירים, דברי תורה, שיחות חופשיות או אורחים?'
      },
      {
        id: 'w7',
        type: 'cheers',
        icon: '☕',
        title: 'קלף הפסקת נשימה',
        instruction: 'קחו שלוק מהשתייה, נשימה עמוקה וחיוך. אתם מנהלים שיחה עמוקה ובונה שלא כל זוג זוכה להגיע אליה!'
      }
    ],

    // תגובות מהירות לאחר מענה
    reactions: [
      { id: 'inspire', emoji: '🌟', label: 'תשובה מעוררת השראה', points: 3 },
      { id: 'honest', emoji: '💚', label: 'כנות מרגשת ומקרבת', points: 3 },
      { id: 'insight', emoji: '💡', label: 'נקודה מעניינת למחשבה', points: 2 },
      { id: 'relate', emoji: '🤝', label: 'מזדהה לחלוטין', points: 2 }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SHIDDUCH_DATA;
}
