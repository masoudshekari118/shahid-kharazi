// ==================== داده‌های فیلم ====================
// hash: کد ویدیو در آپارات (بعد از /v/ در لینک آپارات یا داخل embed)
// مثلاً: https://www.aparat.com/v/hxgc84y → hash = "hxgc84y"
// category: documentary | interview | speech | others
// poster: آدرس عکس شاخص (می‌تونی از آپارات کپی کنی یا در img/videos بذاری)

const videoItems = [
  {
    id: 1,
    title: "مستند «آستین خالی» — روایتی از شهید حاج حسین خرازی",
    desc: "مستند «آستین خالی»، روایتی از شهید حاج حسین خرازی از زبان دوستان و هم‌رزمان کمتر دیده‌شده‌اش مثل بی‌سیم‌چی‌ها و رانندگان و کسانی که ارتباط نزدیکی با شهید خرازی داشته‌اند.",
    hash: "hxgc84y",
    category: "documentary",
    poster: "https://static.cdn.asset.aparat.com/avt/63390079-6734-l__5740.jpg?width=900&quality=90&secret=Oo-3pOTOXWJoKbHpJmPA_w",
    test: false
  },
  {
    id: 2,
    title: "شوخی شهید حاج حسین خرازی با رزمنده سمیرمی",
    desc: "لحظاتی کوتاه و دیدنی از شوخی و مزاح شهید حاج حسین خرازی با یکی از رزمندگان سمیرمی. این کلیپ گوشه‌ای از روحیه شاد و صمیمی فرمانده لشکر ۱۴ امام حسین (ع) را نشان می‌دهد.",
    hash: "Y5dkJ",
    category: "interview",
    poster: "https://static.cdn.asset.aparat.com/avt/10317315-4769-l__4612.jpg?width=900&quality=90&secret=KHgwLauUvPQIax_ywyDHwA",
    test: false
  },
  {
    id: 3,
    title: "سخنان شهید حاج حسین خرازی در کنار رود اروند",
    desc: "سخنان شهید خرازی در کنار رود اروند، ساعت‌هایی قبل از شروع عملیات والفجر هشت. این سخنان ارزشمند، اوج معنویت و آمادگی شهید را برای شهادت نشان می‌دهد.",
    hash: "p3EBG",
    category: "speech",
    poster: "https://static.cdn.asset.aparat.com/avt/50677297-7226-l__8339.jpg?width=900&quality=90&secret=fw7JPmtsYV4zRQsdkvt_vA",
    test: false
  },
  {
    id: 4,
    title: "سخنرانی و گریستن سپهبد شهید حاج قاسم سلیمانی در وصف شهید خرازی",
    desc: "سخنرانی سپهبد شهید حاج قاسم سلیمانی با چشمانی اشکبار در کنگره هشت هزار شهید استان گیلان، درباره خصوصیات دفاع مقدس و نقل خاطره‌ای از سردار شهید حاج حسین خرازی، فرمانده لشکر ۱۴ امام حسین (ع) در جنگ تحمیلی — همراه با زیرنویس عربی.",
    hash: "j0343k5",
    category: "others",
    poster: "https://static.cdn.asset.aparat.com/avt/24322929-4088-l__1270.jpg?width=900&quality=90&secret=_x5RBWIBW5AgtXxSLlwUPg",
    test: false
  },
  {
    id: 5,
    title: "مستند روایت فتح (ویژه شهید حاج حسین خرازی)",
    desc: "«حاج حسین خرازی» فرمانده لشکر امام حسین (ع) طی «عملیات کربلای ۵»، در هشتم اسفند ماه ۱۳۶۵، به شهادت رسید. این مستند روایت فتح، به زندگی و شهادت این فرمانده دلاور می‌پردازد.",
    hash: "qBM3d",
    category: "documentary",
    poster: "https://static.cdn.asset.aparat.com/avt/40468539-7865-l__4862.jpg?width=900&quality=90&secret=jnIjh0UNi2ndDcSpOmGpOg",
    test: false
  }
];
