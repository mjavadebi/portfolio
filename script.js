(() => {
  'use strict';
  const copy = {
    fa: {
      skip:'رفتن به محتوای اصلی', loadingNote:'یه لحظه، دارم همه‌چیز رو کنار هم می‌چینم.', homeAria:'جواد ابراهیمی، صفحه اصلی', cv:'رزومه', navAria:'منوی اصلی', menuOpen:'باز کردن منو', menuClose:'بستن منو', languageAria:'Switch to English', navAbout:'درباره من', navWork:'پروژه‌ها', navApproach:'طرز فکر', navContact:'ارتباط',
      heroBig:'جواد ابراهیمی', heroKicker:'سلام، من', heroName:'جواد ابراهیمی‌ام.', heroRole:'مدیر محصول؛ کنجکاوِ حرفه‌ای.', heroFoot1:'محصول × آدم‌ها × داده', heroScroll:'داستان از اینجا شروع می‌شه',
      aboutLabel:'آشنایی', introEyebrow:'سلام، من جوادم.', introTitle:'اگه چیزی درست کار نکنه، دلم می‌خواد بفهمم چرا.', introBody1:'از اون سؤال‌ها که جوابشون معمولا توی یک تیکت جا نمی‌شه. باید با آدم‌ها حرف زد، مسیر رو از نزدیک دید، داده‌ها رو زیر و رو کرد و گاهی تا لاگ‌ها پیش رفت تا خود مسئله پیداش بشه.', introBody2:'از مهندسی کامپیوتر دانشگاه تهران و تجربه بازاریابی به مدیریت محصول رسیدم؛ جایی که می‌شه هم به آدم‌ها نزدیک بود، هم رفت زیر پوست سیستم‌ها.', introLink:'بیشتر از طرز فکرم', introFoot:'دنبال جوابم؛ نه فقط دنبال تسک بعدی.', scaleUsers:'کاربر در سبد محصولات B2C', scaleRequests:'درخواست روزانه در محصولات', scaleClients:'شرکت مشتری با اولویت‌های متفاوت',
      workLabel:'چند تا از کارهام', workTitleA:'پشت هر محصول،', workTitleB:'یه عالمه داستانه.', workIntro:'این‌ها چند تا از مسیرهاییه که کنار تیم‌ها و کسب‌وکارها ساختم؛ با مسئله‌ها، تصمیم‌ها و نتیجه‌های واقعی‌شون.',
      clickCoverAria:'مشاهده داستان مدیران کلیک', clickAlt:'نمای کامل صفحه اصلی مدیران کلیک', clickTitle:'مدیران کلیک', clickHeadline:'یک پورتال خدماتی، کم‌کم تبدیل شد به جایی برای ساختن ارتباط بعدی با مشتری.', clickBody:'مدیران کلیک رو زمانی تحویل گرفتم که بیشتر با خدمات پس از فروش شناخته می‌شد. در کنار تیم، از ریبرندینگ تا اضافه شدن مسیرهای فروش و بازاریابی دیجیتال پیش رفتیم؛ طوری که محصول بتونه قبل و بعد از خرید، به کار مشتری بیاد.', clickBody2:'از بررسی رفتار کاربران تا هماهنگی با تیم‌های فروش، خدمات و فنی، دنبال این بودم که مسیرها فقط روی کاغذ خوب نباشن؛ توی آمار هم خودشون رو نشون بدن.', visit:'دیدن وب‌سایت', clickStat1:'لید هدفمند در ماه، با یک قابلیت جذب', clickStat2:'موفقیت کاربران تازه‌ثبت‌نام‌شده در ثبت درخواست', clickStat3:'نرخ موفقیت پرداخت',
      insuranceCoverAria:'مشاهده داستان بیمه', insuranceAlt:'صفحه اصلی وب‌سایت بیمکو', officeAlt:'نمای ورود به بک‌آفیس بیمه', insuranceTitle:'بیمه، از پشت صحنه تا ویترین', insuranceHeadline:'اول باید کارها راه می‌افتاد؛ بعد نوبت این بود که مشتری‌ها راه‌شون رو پیدا کنن.', insuranceBody:'ماجرا از دل یک نیاز عملیاتی شروع شد: ساختن بک‌آفیسی که کارهای بیمه رو سر و سامان بده و حتی در شرایط اختلال اینترنت هم به ادامه کار کمک کنه. قطعی اینترنت و جنگ ۱۲روزه، اهمیت این نیاز رو برای تیم جدی‌تر کرده بود.', insuranceBody2:'بعدتر بیمکو رو برای جذب سرنخ ساختیم و قدم بعدی، فروش مستقیم بیمه در مدیران کلیک بود؛ سه تکه از یک مسیر که هر کدوم مسئله متفاوتی رو حل می‌کرد.', visitBimco:'دیدن بیمکو', phase1:'بک‌آفیس و عملیات', phase2:'بیمکو و جذب مشتری', phase3:'فروش در مدیران کلیک',
      appsCoverAria:'مشاهده داستان اپلیکیشن‌های مشتریان', appsAlt:'سه اپلیکیشن مشتریان با اطلاعات حساب پوشانده‌شده', appsTitle:'سه برند، هزاران تجربه روزمره', appsHeadline:'ارتباط مشتری با خودرو، بعد از خرید تازه شکل دیگه‌ای می‌گیره.', appsBody:'اپلیکیشن‌های MVM، Fownix و XTRIM دروازه‌ای به خدمات مشتریان هستن. کار من در این مسیر، پیش بردن نیازهای B2C و کنار هم نگه داشتن تصویر بزرگ تجربه مشتری بود؛ در حالی که هر برند و هر تیم، نیازهای خودش رو داشت.', appsStat:'کاربر فعال در مجموع سه اپلیکیشن',
      sahandAria:'مشاهده پروژه وب‌سایت سهند خودرو', sahandAlt:'نمای کامل بخش محصولات وب‌سایت سهند خودرو', sahandTitle:'سهند خودرو', sahandBody:'یک ویترین دیجیتال برای معرفی محصولات و ماشین‌آلات سهند خودرو؛ جایی که تجربه وب با دنیای صنعتی روبه‌رو می‌شه.', kouroshAria:'مشاهده پروژه کوروش موتور', kouroshAlt:'نمای وب‌سایت شرکتی کوروش موتور', kouroshShopAlt:'نمای فروشگاه کوروش موتور', kouroshTitle:'کوروش موتور', kouroshBody:'دو بخش از حضور آنلاین یک کسب‌وکار صنعتی: معرفی شرکت و یک فضای جدا برای نمایش و فروش محصولات.',
      approachLabel:'طرز کار من', approachTitle:'از سؤال خوب تا نتیجه‌ای که بشه دید.', approach1Title:'اول، کشف.', approach1Body:'معمولا پشت یک درخواست ساده، چند تا داستان پیچیده خوابیده. کار من از پرسیدن، دیدن و پیدا کردن مسئله اصلی شروع می‌شه.', approach2Title:'بعد، وصل کردن نقطه‌ها.', approach2Body:'وقتی بیش از ۱۰ شرکت، تیم‌های مختلف و فرایندهایی از کارخانه تا فروش کنار هم قرار می‌گیرن، تصمیم خوب نیاز به دیدن تصویر بزرگ داره.', approach3Title:'و بعد از لانچ؟ تازه می‌فهمیم.', approach3Body:'برای من موفقیت رو انتشار اعلام نمی‌کنه؛ رفتار کاربر و عددها نشونش می‌دن. از API و لاگ گرفته تا داشبورد، هر سرنخی کمک می‌کنه بهتر تصمیم بگیریم.', punch:'سبز شدن داشبورد، یه حس دیگه داره. ✳',
      contactLabel:'آخرش هم سلام!', contactTitle1:'یه مسئله جالب', contactTitle2:'توی ذهنته؟', contactBody:'اگه فکر می‌کنی می‌تونیم کنار هم محصول بهتری بسازیم، یا حتی فقط می‌خوای درباره یه ایده گپ بزنیم، من هستم.', contactMail:'بهم ایمیل بزن', cvFull:'رزومه (PDF فارسی)', footerName:'جواد ابراهیمی / مدیر محصول', backTop:'برگردیم بالا',
      title:'جواد ابراهیمی — مدیر محصول', description:'جواد ابراهیمی، مدیر محصول؛ از پیدا کردن سؤال درست تا دیدن نتیجه در دنیای واقعی.'
    },
    en: {
      skip:'Skip to main content', loadingNote:'One moment. Connecting a few dots.', homeAria:'Javad Ebrahimi, home', cv:'Résumé', navAria:'Main navigation', menuOpen:'Open menu', menuClose:'Close menu', languageAria:'تغییر زبان به فارسی', navAbout:'About', navWork:'Work', navApproach:'Approach', navContact:'Contact',
      heroBig:'Javad Ebrahimi', heroKicker:'Hello, I’m', heroName:'Javad Ebrahimi.', heroRole:'Product manager. Professionally curious.', heroFoot1:'PRODUCT × PEOPLE × DATA', heroScroll:'The story starts here',
      aboutLabel:'A LITTLE INTRODUCTION', introEyebrow:'HELLO, I’M JAVAD.', introTitle:'When something doesn’t work, I want to know why.', introBody1:'The answer usually doesn’t fit neatly into a ticket. It takes conversations, a closer look at the journey, some digging through data and occasionally a trip into the logs to find the real problem.', introBody2:'Computer engineering at the University of Tehran and experience in marketing led me to product management: a place to stay close to people and get under the hood of the systems they use.', introLink:'More about how I work', introFoot:'Here for the answers, not just the next task.', scaleUsers:'users across the B2C portfolio', scaleRequests:'daily requests across the products', scaleClients:'client companies with different priorities',
      workLabel:'SOME OF MY WORK', workTitleA:'Every product', workTitleB:'has a story.', workIntro:'A few journeys I’ve shared with teams and businesses, with the real problems, decisions and outcomes that came with them.',
      clickCoverAria:'Explore the Modiran Click story', clickAlt:'The full Modiran Click home page', clickTitle:'Modiran Click', clickHeadline:'A service portal became a place to build the next connection with the customer.', clickBody:'When I took it on, Modiran Click was known mostly for after-sales service. Together, the team took it through a rebrand and introduced sales and digital marketing journeys, making it useful to customers before and after a purchase.', clickBody2:'From looking at user behaviour to aligning sales, service and engineering, I wanted our journeys to work beyond a presentation and show up in the numbers.', visit:'Visit website', clickStat1:'qualified leads per month, from one acquisition feature', clickStat2:'newly registered users successfully submitting a request', clickStat3:'successful payments',
      insuranceCoverAria:'Explore the insurance story', insuranceAlt:'Mybimco home page', officeAlt:'Insurance back-office sign-in screen', insuranceTitle:'Insurance, from back office to storefront', insuranceHeadline:'First we had to keep operations moving. Then we helped customers find their way in.', insuranceBody:'It started with an operational need: a back office that could bring insurance workflows together and help the organisation keep working during internet disruptions. Internet outages and the 12-day war made that need feel immediate.', insuranceBody2:'Next came Mybimco for capturing leads, followed by direct insurance sales through Modiran Click. Three pieces of one journey, each solving a different problem.', visitBimco:'Visit Mybimco', phase1:'Back office & operations', phase2:'Mybimco & lead capture', phase3:'Sales through Modiran Click',
      appsCoverAria:'Explore the customer apps story', appsAlt:'Three customer apps with account information concealed', appsTitle:'Three brands, thousands of everyday moments', appsHeadline:'The relationship with a car takes on a different shape after the purchase.', appsBody:'The MVM, Fownix and XTRIM apps connect customers to their services. My role was to move B2C needs forward while keeping the larger customer journey in view, across brands and teams with priorities of their own.', appsStat:'active users across the three apps',
      sahandAria:'Explore the Sahand Khodro website project', sahandAlt:'Full product section of the Sahand Khodro website', sahandTitle:'Sahand Khodro', sahandBody:'A digital showcase for Sahand Khodro’s products and machinery, where the web meets an industrial world.', kouroshAria:'Explore the Kourosh Motor project', kouroshAlt:'Kourosh Motor corporate website', kouroshShopAlt:'Kourosh Motor online store', kouroshTitle:'Kourosh Motor', kouroshBody:'Two parts of an industrial business’s online presence: a corporate introduction and a dedicated space for product sales.',
      approachLabel:'HOW I WORK', approachTitle:'From a good question to an outcome you can see.', approach1Title:'First, discover.', approach1Body:'A straightforward request often hides a more complicated story. I start by asking, observing and looking for the real problem.', approach2Title:'Then, connect the dots.', approach2Body:'With more than 10 companies, different teams and workflows from factory to sales, good decisions start with seeing the bigger picture.', approach3Title:'And after launch? That’s when we learn.', approach3Body:'Shipping doesn’t announce success; users and numbers do. From APIs and logs to dashboards, each clue helps us make a better decision.', punch:'A green dashboard just hits different. ✳',
      contactLabel:'SAY HELLO', contactTitle1:'Have an interesting', contactTitle2:'problem in mind?', contactBody:'If you think we could make a better product together, or just want to talk through an idea, I’d love to hear from you.', contactMail:'Send me an email', cvFull:'Résumé (Persian PDF)', footerName:'JAVAD EBRAHIMI / PRODUCT MANAGER', backTop:'Back to top',
      title:'Javad Ebrahimi — Product Manager', description:'Javad Ebrahimi, product manager: from asking the right question to seeing results in the real world.'
    }
  };
  const root=document.documentElement;
  const languageButton=document.getElementById('language-toggle');
  const menuButton=document.getElementById('menu-toggle');
  const menu=document.getElementById('site-menu');
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  let lang='fa';
  try { if(localStorage.getItem('javad-portfolio-language')==='en') lang='en'; } catch (_) {}
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
    setMenu(false);
    try { localStorage.setItem('javad-portfolio-language',lang); } catch (_) {}
  }
  const header=document.getElementById('site-header');
  const syncHeader=()=>header.classList.toggle('is-scrolled',window.scrollY>window.innerHeight*.65);
  window.addEventListener('scroll',syncHeader,{passive:true});syncHeader();
  languageButton.addEventListener('click',()=>applyLanguage(lang==='fa'?'en':'fa'));
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
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
    reveals.forEach(el=>observer.observe(el));
  }else reveals.forEach(el=>el.classList.add('is-visible'));

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
