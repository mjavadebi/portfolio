(() => {
  'use strict';
  const copy = {
    fa: {
      skip:'رفتن به محتوای اصلی', loadingNote:'جواد همین دور و براست، صداش کنم بیاد…', homeAria:'جواد ابراهیمی، صفحه اصلی', cv:'رزومه', navAria:'منوی اصلی', menuOpen:'باز کردن منو', menuClose:'بستن منو', languageAria:'Switch to English', navAbout:'درباره من', navSkills:'مهارت‌ها', navWork:'پروژه‌ها', navApproach:'طرز فکر', navContact:'ارتباط',
      heroKicker:'جواد ابراهیمی / مدیر محصول', heroLine1:'لانچ شد؟', heroLine2:'حالا ببینیم', heroLine3:'کار کرد یا نه.', heroLede:'از پیدا کردن مسئله تا وقتی که نتیجه رو توی رفتار آدم‌ها و عددها ببینیم، پای کارم.', heroPrimary:'بیا کارهام رو ببین', heroSecondary:'بیشتر درباره من', heroPhotoAlt:'پرتره جواد ابراهیمی',
      aboutLabel:'آشنایی', introEyebrow:'سلام، من جوادم.', introTitle:'اگه چیزی درست کار نکنه، دلم می‌خواد بفهمم چرا.', introBody1:'وقتی با یه مسئله روبه‌رو می‌شم، دوست دارم اول بفهمم واقعا از کجا میاد. با آدم‌ها حرف می‌زنم، فرایند رو از نزدیک بررسی می‌کنم و سراغ داده‌ها و لاگ‌ها می‌رم تا راه‌حل مناسب‌تری پیدا کنم.', introBody2:'از مهندسی کامپیوتر دانشگاه تهران و تجربه بازاریابی به مدیریت محصول رسیدم؛ جایی که می‌شه هم به آدم‌ها نزدیک بود، هم رفت زیر پوست سیستم‌ها.', introBody3:'برای من، مسئولیت نتیجه از شناخت بیزینس و هدفش شروع می‌شه. دوست دارم در تصمیم‌های استراتژیک نقش داشته باشم و با اختیار متناسب، مسیر رسیدن به هدف رو طراحی کنم و تا نتیجه دنبالش باشم.', introLink:'بیشتر از طرز فکرم', introFoot:'دنبال جوابم؛ نه فقط دنبال تسک بعدی.', scaleUsers:'کاربر در سبد محصولات B2C', scaleRequests:'درخواست روزانه در محصولات', scaleClients:'بیزینس با اولویت‌های متفاوت',
      skillAriaProduct:'مهارت‌های محصول', skillAriaDesign:'مهارت‌های طراحی', skillAriaData:'مهارت‌های داده', skillAriaTech:'مهارت‌های فنی', skillAriaPeople:'مهارت‌های کار با آدم‌ها', skillAriaAi:'مهارت‌های هوش مصنوعی',
      leanLabel:'الهام از تفکر Lean Startup', leanBody:'بزرگ‌ترین چیزی که از ساختن استارتاپم یاد گرفتم، تفکر لین بود: فرضیه‌ها رو زود آزمایش کنم، از داده و بازخورد یاد بگیرم و بر اساسش قدم بعدی رو بردارم.', leanHypothesis:'فرضیه', leanBuild:'ساختن', leanMeasure:'سنجیدن', leanLearn:'یاد گرفتن',
      skillsLabel:'جعبه‌ابزار من', skillsKicker:'چند زاویه، یک مسیر', skillsTitle1:'از فیگما تا لاگ،', skillsTitle2:'از مذاکره تا کوئری.', skillsIntro:'من جنرالیستم؛ دوست دارم هم از بیزینس و تجربه کاربر سر دربیارم، هم با تیم فنی هم‌زبان باشم و هر جا لازم بود خودم هم دست‌به‌کار بشم.',
      skillProductTitle:'کشف و راهبری محصول', skillProductBody:'از شناخت مسئله و مدل‌کردن فرایند تا اولویت‌بندی، نوشتن یوزر استوری و هماهنگی انتشار، مسیر محصول رو به کارهای قابل اجرا تبدیل می‌کنم.', skillDesignTitle:'طراحی و تجربه کاربر', skillDesignBody:'با فیگما فلو و وایرفریم می‌سازم و کنار تیم طراحی، مسیر کاربر رو از ایده تا تجربه قابل استفاده پیش می‌برم.', skillDataTitle:'داده و تصمیم‌گیری', skillDataBody:'با کوئری، تحلیل قیف و داشبورد دنبال نشونه‌ها می‌گردم؛ اینکه کاربر کجا گیر کرده و بعد از هر تغییر چه اتفاقی افتاده.', skillTechTitle:'زیر پوست محصول', skillTechBody:'کمی کد می‌زنم، API رو با Postman تست می‌کنم، لاگ‌ها رو می‌خونم و با مفاهیم DevOps و Kubernetes هم آشنایی دارم.', skillPeopleTitle:'آدم‌ها و هم‌مسیر شدن', skillPeopleBody:'از مذاکره و گوش دادن تا مدیریت ذی‌نفع‌ها و هم‌مسیر کردن تیم‌های محصول، فنی و بیزینس، دنبال ساختن فهم مشترک و رسیدن به تصمیمم. مدیریت تیم رو هم تجربه کردم.', skillAiTitle:'هوش مصنوعی در جریان کار', skillAiBody:'پرامپت می‌نویسم، ابزارهای AI رو در مسیر تحقیق، ایده‌پردازی و نمونه‌سازی هدایت می‌کنم و خروجی‌ها رو ارزیابی و اصلاح می‌کنم.', skillsNote:'برای من جنرالیست بودن یعنی بلد باشم بین تخصص‌ها پل بزنم.',
      workLabel:'چند تا از کارهام', workTitleA:'پشت هر محصول،', workTitleB:'یه عالمه داستانه.', workIntro:'این‌ها چند تا از مسیرهاییه که کنار تیم‌ها و کسب‌وکارها ساختم؛ با مسئله‌ها، تصمیم‌ها و نتیجه‌های واقعی‌شون.',
      clickCoverAria:'مشاهده داستان مدیران کلیک', clickAlt:'نمای کامل صفحه اصلی مدیران کلیک', clickTitle:'مدیران کلیک', clickHeadline:'از یک پورتال خدماتی تا سکویی برای مشتری و شرکای تجاری.', clickBody:'مدیران کلیک رو وقتی تحویل گرفتم که بیشتر با خدمات پس از فروش شناخته می‌شد. کنار تیم، مسیر ریبرندینگ و توسعه پلتفرمی رو پیش بردیم که برای فروش، بیمه و همکاری با شرکای تجاری مدیران خودرو هم جا داشته باشه.', clickBody2:'با تحقیق روی تجربه کاربری و ساده‌تر کردن ثبت‌نام و احراز هویت، به کاربران تازه‌ثبت‌نام‌شده کمک کردیم راحت‌تر درخواستشون رو ثبت کنن؛ نرخ موفقیت این مسیر از ۶۵٪ به ۹۲٪ رسید.', clickPayment:'برای پرداخت اولیه بعد از قرعه‌کشی هم امکان تقسیم حواله به مبلغ‌های کوچک‌تر رو اضافه کردیم تا مشتری بتونه از چند حساب پرداخت کنه. نرخ موفقیت پرداخت از ۷۰٪ به ۸۶٪ رسید.', visit:'دیدن وب‌سایت', clickStat1:'لید هدفمند در ماه، با یک قابلیت جذب', clickStat2:'موفقیت کاربران تازه‌ثبت‌نام‌شده در ثبت درخواست', clickStat3:'نرخ موفقیت پرداخت اولیه پس از قرعه‌کشی',
      insuranceStatsAria:'دستاوردهای محصول بیمه', insuranceStatUsers:'کاربر حقیقی و حقوقی بک‌آفیس', insuranceStatPolicies:'بیمه‌نامه صادرشده در شش ماه', insuranceStatTime:'دقیقه از ثبت تا صدور؛ میانگین قبلی یک ساعت', insuranceCoverAria:'مشاهده داستان بیمه', insuranceAlt:'صفحه اصلی وب‌سایت بیمکو', officeAlt:'نمای ورود به بک‌آفیس بیمه', insuranceTitle:'بیمه، از پشت صحنه تا ویترین', insuranceHeadline:'برای بهتر شدن یک فرایند، اول باید وسط همون کار ایستاد.', insuranceBody:'قبل از ساخت بک‌آفیس، وارد دل سازمان شدم و با مدیرها و کارشناس‌ها حرف زدم تا بفهمم کارها واقعا چطور پیش می‌رن. با کمک خودشون فرایند ثبت تا صدور رو طراحی و پیاده کردیم.', insuranceBody2:'قطعی اینترنت و جنگ ۱۲روزه هم ادامه کار در شرایط اختلال رو به بخشی از مسئله تبدیل کرده بود. نتیجه بازطراحی فرایند، کاهش زمان ثبت تا صدور از میانگین یک ساعت به ۱۰ دقیقه بود.', insuranceBody3:'بعد از بک‌آفیس، بیمکو رو برای جذب سرنخ ساختیم و قدم بعدی، فروش مستقیم بیمه در مدیران کلیک بود؛ سه بخش از یک مسیر، با مسئله‌های متفاوت.', visitBimco:'دیدن بیمکو', phase1:'بک‌آفیس و عملیات', phase2:'بیمکو و جذب مشتری', phase3:'فروش در مدیران کلیک',
      appsCoverAria:'مشاهده داستان اپلیکیشن‌های مشتریان', appsAlt:'سه اپلیکیشن مشتریان با اطلاعات حساب پوشانده‌شده', appsTitle:'از اپلیکیشن تا خودروی متصل', appsHeadline:'سه برند، تجربه امروز؛ قدم اول برای خودروی متصل.', appsBody:'اپلیکیشن‌های MVM، Fownix و XTRIM راه دسترسی مشتری‌ها به خدمات هستن. من نیازهای B2C رو در کنار تیم‌های مختلف پیش می‌بردم و حواسم به تجربه مشتری در هر سه برند بود.', appsIov:'در کنار اون، شروع پروژه اینترنت خودرو (IoV) رو دنبال کردم؛ با تامین‌کننده‌های چینی به انگلیسی در ارتباط بودم و در بخشی از هماهنگی‌ها از سمت کارفرما نقش داشتم.', appsStat:'کاربر فعال ماهانه در مجموع سه اپلیکیشن',
      sahandAria:'مشاهده پروژه وب‌سایت سهند خودرو', sahandAlt:'نمای کامل بخش محصولات وب‌سایت سهند خودرو', sahandTitle:'سهند خودرو', sahandBody:'پنجشنبه خبر رسید قطعی اینترنت، ارتباط سایت با سرورش رو از بین برده؛ درست وقتی قرار بود فروش شنبه باز بشه. جمعه کنار تیم، زیرساخت و روش استقرار رو تغییر دادیم تا سایت برای شروع فروش آماده باشه.', kouroshAria:'مشاهده پروژه کوروش موتور', kouroshAlt:'نمای وب‌سایت شرکتی کوروش موتور', kouroshShopAlt:'نمای فروشگاه کوروش موتور', kouroshTitle:'کوروش موتور', kouroshBody:'نیاز این پروژه به اندازه‌ای پیچیده نبود که توسعه اختصاصی و صرف منابع تیم توجیه داشته باشه. به‌جای درگیر کردن تیم توسعه با هزینه بیشتر، با یک تامین‌کننده بیرونی و وردپرس راه‌حلی متناسب با نیاز ساختیم.',
      approachLabel:'طرز کار من', approachTitle:'از سؤال خوب تا نتیجه‌ای که بشه دید.', approach1Title:'اول، کشف.', approach1Body:'معمولا پشت یک درخواست ساده، چند تا داستان پیچیده خوابیده. کار من از پرسیدن، دیدن و پیدا کردن مسئله اصلی شروع می‌شه.', approach2Title:'بعد، وصل کردن نقطه‌ها.', approach2Body:'وقتی بیش از ۱۰ بیزینس، تیم‌های مختلف و فرایندهایی از کارخانه تا فروش کنار هم قرار می‌گیرن، تصمیم خوب نیاز به دیدن تصویر بزرگ داره.', approach3Title:'و بعد از لانچ؟ تازه می‌فهمیم.', approach3Body:'برای من موفقیت رو انتشار اعلام نمی‌کنه؛ رفتار کاربر و عددها نشونش می‌دن. از API و لاگ گرفته تا داشبورد، هر سرنخی کمک می‌کنه بهتر تصمیم بگیریم.', punch:'سبز شدن داشبورد، یه حس دیگه داره. ✳',
      copyEmail:'کپی ایمیل', copyEmailAria:'کپی کردن آدرس ایمیل', emailCopied:'ایمیل کپی شد.', emailCopyManual:'آدرس رو انتخاب و کپی کن.', quotePortraitAlt:'تصویرسازی چهره جواد ابراهیمی', personalQuote:'من می‌خوام محصول بسازم؛ عنوان شغلی برام قابل مذاکره‌ست.', quoteName:'جواد ابراهیمی', contactLabel:'آخرش هم سلام!', contactTitle1:'شاید این شروع', contactTitle2:'یه همکاری خوب باشه.', contactBody:'دنبال یه مدیر محصول برای تیمت هستی یا پروژه‌ای داری که می‌خوای درباره‌ش حرف بزنیم؟ خوشحال می‌شم ازت بشنوم.', contactMail:'بهم ایمیل بزن', cvFull:'رزومه (PDF فارسی)', footerName:'جواد ابراهیمی / مدیر محصول', backTop:'برگردیم بالا',
      title:'جواد ابراهیمی — مدیر محصول', description:'جواد ابراهیمی، مدیر محصول؛ از پیدا کردن سؤال درست تا دیدن نتیجه در دنیای واقعی.'
    },
    en: {
      skip:'Skip to main content', loadingNote:'Javad’s around here somewhere. Let me get him…', homeAria:'Javad Ebrahimi, home', cv:'Résumé', navAria:'Main navigation', menuOpen:'Open menu', menuClose:'Close menu', languageAria:'تغییر زبان به فارسی', navAbout:'About', navSkills:'Skills', navWork:'Work', navApproach:'Approach', navContact:'Contact',
      heroKicker:'JAVAD EBRAHIMI / PRODUCT MANAGER', heroLine1:'It’s live.', heroLine2:'Now the question:', heroLine3:'did it work?', heroLede:'From finding the real problem to seeing the result in people’s behaviour and the numbers, I’m in it for the whole journey.', heroPrimary:'Explore my work', heroSecondary:'More about me', heroPhotoAlt:'Portrait of Javad Ebrahimi',
      aboutLabel:'A LITTLE INTRODUCTION', introEyebrow:'HELLO, I’M JAVAD.', introTitle:'When something doesn’t work, I want to know why.', introBody1:'When I encounter a problem, I want to understand where it comes from first. I talk to the people involved, look closely at the process and dig into data and logs to find a better solution.', introBody2:'Computer engineering at the University of Tehran and experience in marketing led me to product management: a place to stay close to people and get under the hood of the systems they use.', introBody3:'For me, responsibility for an outcome starts with understanding the business and its goals. I want to contribute to strategic decisions and have the authority to shape the path to those goals and see the results through.', introLink:'More about how I work', introFoot:'Here for the answers, not just the next task.', scaleUsers:'users across the B2C portfolio', scaleRequests:'daily requests across the products', scaleClients:'businesses with different priorities',
      skillAriaProduct:'Product skills', skillAriaDesign:'Design skills', skillAriaData:'Data skills', skillAriaTech:'Technical skills', skillAriaPeople:'People skills', skillAriaAi:'AI skills',
      leanLabel:'INSPIRED BY LEAN STARTUP', leanBody:'The biggest lesson I took from building my startup was Lean thinking: test assumptions early, learn from data and feedback, and use that learning to decide what comes next.', leanHypothesis:'Hypothesis', leanBuild:'Build', leanMeasure:'Measure', leanLearn:'Learn',
      skillsLabel:'MY TOOLKIT', skillsKicker:'A few angles, one journey', skillsTitle1:'From Figma to logs,', skillsTitle2:'from negotiations to queries.', skillsIntro:'I’m a generalist. I like understanding the business and the user experience, speaking the same language as engineers and getting hands-on when it helps.',
      skillProductTitle:'Product discovery & direction', skillProductBody:'From understanding the problem and mapping processes to prioritisation, user stories and release coordination, I turn product intent into work a team can build.', skillDesignTitle:'Design & user experience', skillDesignBody:'I use Figma to make flows and wireframes, working with designers to move a user journey from an idea towards a usable experience.', skillDataTitle:'Data & decisions', skillDataBody:'I use queries, funnel analysis and dashboards to look for clues: where users get stuck and what changes after we make a decision.', skillTechTitle:'Under the hood', skillTechBody:'I write a little code, test APIs with Postman, read logs and work with an understanding of DevOps and Kubernetes concepts.', skillPeopleTitle:'People & alignment', skillPeopleBody:'From negotiation and listening to stakeholder management and aligning product, engineering and business teams, I work towards shared understanding and decisions. I’ve managed teams, too.', skillAiTitle:'AI in the workflow', skillAiBody:'I write prompts and direct AI tools for research, ideation and prototyping, then evaluate and refine what they produce.', skillsNote:'For me, being a generalist means being able to connect the specialists.',
      workLabel:'SOME OF MY WORK', workTitleA:'Every product', workTitleB:'has a story.', workIntro:'A few journeys I’ve shared with teams and businesses, with the real problems, decisions and outcomes that came with them.',
      clickCoverAria:'Explore the Modiran Click story', clickAlt:'The full Modiran Click home page', clickTitle:'Modiran Click', clickHeadline:'From a service portal to a platform for customers and business partners.', clickBody:'When I took it on, Modiran Click was mainly an after-sales portal. With the team, I helped rebrand and expand it into a platform with room for sales, insurance and value for Modiran Khodro’s business partners.', clickBody2:'Through UX research and simpler sign-up and identity verification, we helped newly registered users complete their requests more successfully: the rate rose from 65% to 92%.', clickPayment:'For initial payments after the sales draw, we introduced a way to split a large payment order into smaller amounts so customers could pay from multiple accounts. Payment success rose from 70% to 86%.', visit:'Visit website', clickStat1:'qualified leads per month, from one acquisition feature', clickStat2:'newly registered users successfully submitting a request', clickStat3:'initial payment success after the sales draw',
      insuranceStatsAria:'Insurance product outcomes', insuranceStatUsers:'back-office users, including individuals and businesses', insuranceStatPolicies:'insurance policies issued over six months', insuranceStatTime:'minutes from registration to issuance; previous average: one hour', insuranceCoverAria:'Explore the insurance story', insuranceAlt:'Mybimco home page', officeAlt:'Insurance back-office sign-in screen', insuranceTitle:'Insurance, from back office to storefront', insuranceHeadline:'To improve a process, first you have to see how the work really happens.', insuranceBody:'Before building the back office, I went into the organisation and spoke with managers and specialists to understand how their work actually flowed. Together, we designed and implemented the process from registration to issuance.', insuranceBody2:'Internet disruptions and the 12-day war also made continuity part of the problem. The redesigned process reduced registration-to-issuance time from a previous average of one hour to 10 minutes.', insuranceBody3:'After the back office came Mybimco for capturing leads, followed by direct insurance sales through Modiran Click: three parts of one journey, each solving a different problem.', visitBimco:'Visit Mybimco', phase1:'Back office & operations', phase2:'Mybimco & lead capture', phase3:'Sales through Modiran Click',
      appsCoverAria:'Explore the customer apps story', appsAlt:'Three customer apps with account information concealed', appsTitle:'From customer apps to connected cars', appsHeadline:'Three brands today. A first step toward connected vehicles.', appsBody:'The MVM, Fownix and XTRIM apps connect customers to services. I worked across teams to move B2C needs forward while keeping the customer experience in view for all three brands.', appsIov:'Alongside this, I helped initiate an Internet of Vehicles (IoV) project, communicating in English with Chinese suppliers and representing the client side in some discussions.', appsStat:'monthly active users across the three apps',
      sahandAria:'Explore the Sahand Khodro website project', sahandAlt:'Full product section of the Sahand Khodro website', sahandTitle:'Sahand Khodro', sahandBody:'On Thursday, we learned that internet disruptions had cut the website off from its server, just before sales were due to open on Saturday. On Friday, the team and I changed the infrastructure and deployment approach to get the site ready.', kouroshAria:'Explore the Kourosh Motor project', kouroshAlt:'Kourosh Motor corporate website', kouroshShopAlt:'Kourosh Motor online store', kouroshTitle:'Kourosh Motor', kouroshBody:'The need was not complex enough to justify custom development and the cost of tying up the internal team. We worked with an external supplier and WordPress to deliver a solution suited to the need.',
      approachLabel:'HOW I WORK', approachTitle:'From a good question to an outcome you can see.', approach1Title:'First, discover.', approach1Body:'A straightforward request often hides a more complicated story. I start by asking, observing and looking for the real problem.', approach2Title:'Then, connect the dots.', approach2Body:'With more than 10 businesses, different teams and workflows from factory to sales, good decisions start with seeing the bigger picture.', approach3Title:'And after launch? That’s when we learn.', approach3Body:'Shipping doesn’t announce success; users and numbers do. From APIs and logs to dashboards, each clue helps us make a better decision.', punch:'A green dashboard just hits different. ✳',
      copyEmail:'Copy email', copyEmailAria:'Copy email address', emailCopied:'Email copied.', emailCopyManual:'Select and copy the address.', quotePortraitAlt:'Illustrated portrait of Javad Ebrahimi', personalQuote:'I want to build products; the job title is negotiable.', quoteName:'Javad Ebrahimi', contactLabel:'SAY HELLO', contactTitle1:'Let’s make', contactTitle2:'something meaningful.', contactBody:'Looking for a product manager to join your team, or have a project in mind? I’d love to hear from you.', contactMail:'Send me an email', cvFull:'Résumé (Persian PDF)', footerName:'JAVAD EBRAHIMI / PRODUCT MANAGER', backTop:'Back to top',
      title:'Javad Ebrahimi — Product Manager', description:'Javad Ebrahimi, product manager: from asking the right question to seeing results in the real world.'
    }
  };
  const root=document.documentElement;
  const languageButton=document.getElementById('language-toggle');
  const menuButton=document.getElementById('menu-toggle');
  const menu=document.getElementById('site-menu');
  const copyEmailButton=document.getElementById('copy-email');
  const emailCopyStatus=document.getElementById('email-copy-status');
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  // The URL is authoritative: links to /en/ must work regardless of saved preferences.
  const englishRoute=/\/en(?:\/index\.html)?\/?$/i;
  const languageFromPath=()=>englishRoute.test(window.location.pathname)?'en':'fa';
  let lang=languageFromPath();
  // Make relative assets stable when history changes the current route in-place.
  document.querySelectorAll('[href],[src]').forEach(el=>{
    const attribute=el.hasAttribute('href')?'href':'src';
    const value=el.getAttribute(attribute);
    if(value&&/^\.{1,2}\//.test(value))el.setAttribute(attribute,new URL(value,window.location.href).href);
  });
  function basePath(){
    const path=window.location.pathname;
    if(englishRoute.test(path))return path.replace(englishRoute,'/');
    if(path.endsWith('/index.html'))return path.slice(0,-'index.html'.length);
    return path.endsWith('/')?path:path+'/';
  }
  function changeLanguage(next){
    const url=new URL(window.location.href);
    url.pathname=basePath()+(next==='en'?'en/':'');
    try{window.history.pushState({},'',url.pathname+url.search+url.hash);applyLanguage(next);}
    catch(_){window.location.assign(url.href);}
  }
  function setMenu(open){
    menu.classList.toggle('is-open',open);
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.setAttribute('aria-label',copy[lang][open?'menuClose':'menuOpen']);
  }
  function applyLanguage(next){
    lang=next==='en'?'en':'fa';
    const strings=copy[lang];
    root.lang=lang;root.dir=lang==='fa'?'rtl':'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el=>{const value=strings[el.dataset.i18n];if(typeof value==='string')el.textContent=value;});
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>{const value=strings[el.dataset.i18nAria];if(typeof value==='string')el.setAttribute('aria-label',value);});
    document.querySelectorAll('[data-i18n-alt]').forEach(el=>{const value=strings[el.dataset.i18nAlt];if(typeof value==='string')el.alt=value;});
    document.title=strings.title;
    document.querySelector('meta[name="description"]').content=strings.description;
    document.querySelector('meta[property="og:title"]').content=strings.title;
    document.querySelector('meta[property="og:description"]').content=strings.description;
    languageButton.textContent=lang==='fa'?'EN':'فا';
    languageButton.setAttribute('aria-label',strings.languageAria);
    emailCopyStatus.textContent='';
    setMenu(false);
  }
  const header=document.getElementById('site-header');
  const syncHeader=()=>header.classList.toggle('is-scrolled',window.scrollY>window.innerHeight*.65);
  window.addEventListener('scroll',syncHeader,{passive:true});syncHeader();
  languageButton.addEventListener('click',()=>changeLanguage(lang==='fa'?'en':'fa'));
  window.addEventListener('popstate',()=>applyLanguage(languageFromPath()));
  copyEmailButton.addEventListener('click',async()=>{
    const address=document.getElementById('email-address').textContent.trim();
    let copied=false;
    if(navigator.clipboard&&window.isSecureContext){
      try{await navigator.clipboard.writeText(address);copied=true;}catch(_){}
    }
    if(!copied){
      const helper=document.createElement('textarea');
      helper.value=address;helper.setAttribute('readonly','');helper.style.cssText='position:fixed;top:-9999px;left:0;';
      document.body.appendChild(helper);helper.select();
      try{copied=document.execCommand('copy');}catch(_){}
      helper.remove();copyEmailButton.focus({preventScroll:true});
    }
    emailCopyStatus.textContent=copy[lang][copied?'emailCopied':'emailCopyManual'];
    if(!copied){
      const selection=window.getSelection();const range=document.createRange();
      range.selectNodeContents(document.getElementById('email-address'));
      if(selection){selection.removeAllRanges();selection.addRange(range);}
    }
  });
  menuButton.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('click',event=>{if(!menu.contains(event.target)&&!menuButton.contains(event.target))setMenu(false);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){setMenu(false);finishLoader();}});
  applyLanguage(lang);

  const loader=document.getElementById('loader');
  const loadFill=document.getElementById('loader-fill');
  const loadCount=document.getElementById('loader-count');
  const loadLine=document.getElementById('loader-line');
  let loaderDone=false;
  function finishLoader(){
    if(loaderDone)return;
    loaderDone=true;
    loadFill.style.setProperty('--load','100%');loadCount.textContent='100';loadLine.style.transform='scaleX(1)';
    loader.classList.add('is-leaving');root.classList.remove('is-loading');
    window.setTimeout(()=>loader.classList.add('is-finished'),reduce.matches?0:900);
  }
  if(reduce.matches){finishLoader();}else{
    root.classList.add('is-loading');
    const start=performance.now();
    const duration=2050;
    function tick(now){
      if(loaderDone)return;
      const t=Math.min((now-start)/duration,1);
      const eased=1-Math.pow(1-t,2.1);
      const count=Math.round(eased*100);
      loadCount.textContent=String(count).padStart(2,'0');
      loadFill.style.setProperty('--load',`${count}%`);loadLine.style.transform=`scaleX(${count/100})`;
      if(t<1)requestAnimationFrame(tick);else finishLoader();
    }
    requestAnimationFrame(tick);
    window.setTimeout(finishLoader,3500);
  }

  const reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!reduce.matches){
    try{
      const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
      root.classList.add('motion-ready');
      reveals.forEach(el=>observer.observe(el));
    }catch(_){root.classList.remove('motion-ready');reveals.forEach(el=>el.classList.add('is-visible'));}
  }else reveals.forEach(el=>el.classList.add('is-visible'));

  // Start outcomes at their real values in the HTML; animate only when visible.
  if('IntersectionObserver' in window&&!reduce.matches){
    try {
      const countObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        const number=entry.target;
        countObserver.unobserve(number);
        const target=Number(number.dataset.count);
        const suffix=number.dataset.suffix||'';
        const precision=Number(number.dataset.precision||0);
        const finalText=number.textContent;
        if(!Number.isFinite(target))return;
        const start=performance.now(), duration=1400;
        function countFrame(now){
          const progress=Math.min((now-start)/duration,1);
          if(progress>=1){number.textContent=finalText;return;}
          const value=target*(1-Math.pow(1-progress,3));
          number.textContent=(precision?value.toFixed(precision):Math.floor(value).toLocaleString('en-US'))+suffix;
          requestAnimationFrame(countFrame);
        }
        requestAnimationFrame(countFrame);
      }),{threshold:0.35});
      document.querySelectorAll('[data-count]').forEach(number=>countObserver.observe(number));
    } catch (_) { /* Original values remain visible. */ }
  }

  if(window.matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduce.matches){
    let activeCover=null, pointerX=0, pointerY=0, frame=0;
    function positionPointer(){
      frame=0;
      if(!activeCover)return;
      const rect=activeCover.getBoundingClientRect();
      activeCover.style.setProperty('--x',`${pointerX-rect.left}px`);
      activeCover.style.setProperty('--y',`${pointerY-rect.top}px`);
      activeCover.style.setProperty('--rx',`${((pointerY-rect.top)/rect.height-.5)*-3}deg`);
      activeCover.style.setProperty('--ry',`${((pointerX-rect.left)/rect.width-.5)*3}deg`);
    }
    function schedulePointer(){if(!frame)frame=requestAnimationFrame(positionPointer);}
    document.querySelectorAll('.case-cover').forEach(cover=>{
      cover.addEventListener('pointerenter',event=>{activeCover=cover;pointerX=event.clientX;pointerY=event.clientY;cover.classList.add('is-pointer');schedulePointer();});
      cover.addEventListener('pointerleave',()=>{cover.classList.remove('is-pointer');if(activeCover===cover)activeCover=null;});
      cover.addEventListener('pointermove',event=>{pointerX=event.clientX;pointerY=event.clientY;schedulePointer();},{passive:true});
    });
    window.addEventListener('scroll',schedulePointer,{passive:true});
  }
})();
