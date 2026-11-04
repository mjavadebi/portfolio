(() => {
  'use strict';
  const copy = {
    fa: {
      skip:'رفتن به محتوا', homeAria:'جواد ابراهیمی، صفحه اصلی', brandName:'جواد ابراهیمی', navAria:'منوی اصلی', navAbout:'درباره من', navWork:'پروژه‌ها', navApproach:'طرز فکر', navContact:'ارتباط', resumeShort:'رزومه', menuOpen:'باز کردن منو', menuClose:'بستن منو', languageAria:'Switch to English',
      heroPhotoAria:'پرتره جواد ابراهیمی', heroIntro:'سلام، من', heroFirst:'جواد', heroLast:'ابراهیمی', heroRole:'مدیر محصول · عاشق کشف کردن', heroMeta:'محصول / داده / آدم‌ها', heroScroll:'بیا آشنا بشیم',
      aboutLabel:'کمی درباره من', aboutTitle1:'من عاشق', aboutTitle2:'کشف کردنم.', aboutLead:'دوست دارم بفهمم فرایندها چطور کار می‌کنن، با کمک دیتا بهشون فکر کنم و برای مسئله‌های واقعی راه‌حل پیدا کنم.', aboutDetail1:'کارم از یک درخواست شروع می‌شه، ولی به انتشار فیچر ختم نمی‌شه. از شناخت کسب‌وکار و کنار هم آوردن تیم‌ها تا جایی جلو می‌رم که نتیجه رو توی داده‌ها ببینیم.', aboutDetail2:'پیشینه مهندسی کامپیوتر باعث شده با دنیای فنی هم راحت باشم؛ از تست API در Postman تا سر زدن به لاگ‌های Grafana و وضعیت سیستم در Zabbix.', aboutLink:'بیشتر درباره طرز فکرم',
      numbersAria:'مقیاس کار', numberUsers:'کاربر در سبد محصولات B2C', numberRequests:'درخواست روزانه در محصولات', numberClients:'شرکت مشتری، با اولویت‌های متفاوت', numberNote:'مقیاس بزرگ یعنی مسئله‌های متفاوت، تصمیم‌های بیشتر و کلی چیز تازه برای فهمیدن.',
      workLabel:'کارهای منتخب', workTitle1:'محصول‌ها،', workTitle2:'از نزدیک.', workIntro:'چند تا از محصولاتی که کنار تیم‌ها و مشتری‌ها از مسئله تا نتیجه پیش بردم.',
      clickTag:'فروش · رشد · تجربه مشتری', clickImageAlt:'صفحه اصلی مدیران کلیک', clickDetailAlt:'نمایی از مسیر فروش مدیران کلیک', clickSubtitle:'از پورتال خدمات تا سکوی فروش.', clickBody:'وقتی این محصول رو تحویل گرفتم، با نام customer.mvmco.ir بیشتر برای خدمات پس از فروش شناخته می‌شد. در مدت حضور من، کنار تیم‌ها یک ریبرندینگ بزرگ رو پیش بردیم و مسیر محصول رو به سمت فروش و بازاریابی دیجیتال گسترش دادیم.', clickRole:'روی شناخت فرایندها، اولویت‌بندی نیازها، هماهنگی تیم‌ها و بهبود تجربه ثبت درخواست و پرداخت کار کردم.', visitSite:'رفتن به سایت', clickMetric1:'لید هدفمند در ماه، با یک قابلیت جذب', clickMetric2:'موفقیت متقاضیان جدید در ثبت درخواست', clickMetric3:'موفقیت پرداخت',
      insuranceTag:'اتوماسیون · بیمه · فروش آنلاین', bimcoImageAlt:'صفحه اصلی فروش آنلاین بیمکو', insuranceImageAlt:'صفحه ورود سامانه بک‌آفیس بیمه', insuranceTitle:'اکوسیستم بیمه ↗', insuranceSubtitle:'از عملیات داخلی تا فروش آنلاین.', insuranceBody:'هدف ما فقط راه‌اندازی یک وب‌سایت نبود. می‌خواستیم فرایندهای داخلی بیمه رو خودکار کنیم و بعد، مسیرهای جدیدی برای فروش بسازیم.', insuranceRole:'از تحلیل فرایندها و تعریف نیازمندی‌ها تا هماهنگی تیم‌ها و استقرار، کنار محصول بودم. ایده بعد از قطعی اینترنت دی‌ماه و جنگ ۱۲روزه شکل گرفت و پس از کیک‌آف، در میانه جنگ بعدی کار رو ادامه دادیم.', visitBimco:'رفتن به بیمکو', phase1Title:'بک‌آفیس بیمه', phase1Body:'اتوماسیون فرایندهای داخلی؛ نسخه عملیاتی در سه هفته.', phase2Title:'وب‌سایت بیمکو', phase2Body:'ساخت یک مسیر آنلاین برای از دست ندادن سرنخ‌ها.', phase3Title:'مدیران کلیک', phase3Body:'فروش مستقیم بیمه برای مشتریان مدیران خودرو.',
      appsTag:'اپلیکیشن · خدمات · تجربه مشتری', appsImageAlt:'نمایی از سه اپلیکیشن مشتریان، با اطلاعات حساب پوشانده‌شده', appsTitle:'سه اپ، یک مسیر ↗', appsSubtitle:'تجربه مشتری بعد از خرید.', appsBody:'تجربه مشتری با تحویل خودرو تموم نمی‌شه. اپلیکیشن‌های MVM، Fownix و XTRIM بخشی از ارتباط او با خدمات و محصولات برند هستن.', appsRole:'مسئولیت من پیشبرد نیازهای B2C و هماهنگی توسعه و نگهداشت این تجربه‌ها در کنار تیم‌ها بود.', appsMetric:'کاربر فعال در مجموع سه اپلیکیشن',
      moreTitle:'چند مسیر دیگر.', moreIntro:'پروژه‌های B2C و وب‌سایت‌هایی برای کسب‌وکارها و مشتریان متفاوت.', industrialAlt:'نمای محصولات یک سایت ماشین‌آلات صنعتی', industrialLinkAria:'باز کردن سایت SKPIG', industrialBody:'تجربه وب برای معرفی محصولات و کسب‌وکار خودرویی.', kouroshAlt:'وب‌سایت شرکتی کوروش موتور', kouroshShopAlt:'نمای فروشگاه کوروش موتور', kouroshBody:'حضور دیجیتال شرکتی و فروشگاه محصولات.',
      approachLabel:'طرز فکر من', approachTitle1:'سبز شدن', approachTitle2:'داشبورد مهمه.', approachLead:'برای من تحویل یک فیچر وقتیه که داده‌ها نشون بدن اون فیچر موفق بوده؛ نه فقط وقتی که پابلیش شده.', approachBody:'از شناخت فرایندهای فروش، کارخانه، انبار و خدمات پس از فروش تا کار با تیم فنی، سعی می‌کنم تصویر بزرگ رو ببینم. وقتی چند کسب‌وکار با اولویت‌های متفاوت پای میز هستن، ساختن یک مسیر مشترک هم بخشی از خود محصوله.', toolsAria:'ابزارها و موضوعات مورد علاقه', manifesto:'عاشق دیدن رنگ سبز روی داشبوردم؛ نه فقط وضعیت سبز اپلیکیشن روی کوبر.',
      contactLabel:'بیا ارتباط بگیریم', contactTitle1:'یه مسئله خوب', contactTitle2:'برای حل کردن داری؟', contactBody:'برای فرصت‌های مدیریت محصول، همکاری و گفت‌وگو درباره ساختن محصول، خوشحال می‌شم ازت بشنوم.', emailMe:'بهم ایمیل بزن', resumeFull:'دانلود رزومه (PDF فارسی)', footerName:'جواد ابراهیمی', footerNote:'با کنجکاوی، برای ساختن.', backTop:'برگشت به بالا',
      title:'جواد ابراهیمی | مدیر محصول', description:'جواد ابراهیمی؛ مدیر محصول با علاقه به کشف مسئله، داده و ساختن تجربه‌های دیجیتال.'
    },
    en: {
      skip:'Skip to content', homeAria:'Javad Ebrahimi, home', brandName:'Javad Ebrahimi', navAria:'Main navigation', navAbout:'About', navWork:'Work', navApproach:'Approach', navContact:'Contact', resumeShort:'CV', menuOpen:'Open menu', menuClose:'Close menu', languageAria:'تغییر زبان به فارسی',
      heroPhotoAria:'Portrait of Javad Ebrahimi', heroIntro:'Hi, I’m', heroFirst:'Javad', heroLast:'Ebrahimi', heroRole:'Product manager · endlessly curious', heroMeta:'Product / Data / People', heroScroll:'Get to know me',
      aboutLabel:'A little about me', aboutTitle1:'I love', aboutTitle2:'figuring things out.', aboutLead:'I like understanding how processes work, thinking through them with data and finding solutions to real problems.', aboutDetail1:'My work can start with a request, but it doesn’t end when a feature ships. I stay with the problem, the business and the team until we can see the outcome in the data.', aboutDetail2:'My computer engineering background means I’m comfortable getting into the technical layers too: testing APIs in Postman, reading Grafana logs and checking system health in Zabbix.', aboutLink:'More about how I think',
      numbersAria:'The scale of the work', numberUsers:'users across the B2C portfolio', numberRequests:'daily requests across the products', numberClients:'client companies, each with different priorities', numberNote:'A bigger scale means different problems, more decisions and a lot more to discover.',
      workLabel:'Selected work', workTitle1:'Products,', workTitle2:'up close.', workIntro:'A few products I helped move from problem to outcome, alongside teams and clients.',
      clickTag:'SALES · GROWTH · CUSTOMER EXPERIENCE', clickImageAlt:'Modiran Click home page', clickDetailAlt:'A detail from the Modiran Click sales journey', clickSubtitle:'From a service portal to a sales platform.', clickBody:'When I took it on, customer.mvmco.ir was primarily known for after-sales services. During my time, we worked across teams on a major rebrand and expanded the product toward sales and digital marketing.', clickRole:'I worked on understanding processes, prioritising needs, aligning teams and improving the request and payment journeys.', visitSite:'Visit the site', clickMetric1:'qualified leads per month, from one acquisition feature', clickMetric2:'new applicants successfully submitting a request', clickMetric3:'successful payments',
      insuranceTag:'OPERATIONS · INSURANCE · ONLINE SALES', bimcoImageAlt:'Mybimco online insurance home page', insuranceImageAlt:'Insurance back-office sign-in page', insuranceTitle:'Insurance ecosystem ↗', insuranceSubtitle:'From internal operations to online sales.', insuranceBody:'Our goal was bigger than launching a website. We wanted to automate internal insurance processes and create new ways to sell.', insuranceRole:'I stayed with the product from process analysis and requirements through team coordination and rollout. The idea followed January’s internet outage and the 12-day war; after kickoff, we kept working through the war that followed.', visitBimco:'Visit Mybimco', phase1Title:'Insurance back office', phase1Body:'Automating internal processes; an operational version in three weeks.', phase2Title:'Mybimco website', phase2Body:'An online path to capture leads we might otherwise lose.', phase3Title:'Modiran Click', phase3Body:'Direct insurance sales for Modiran Khodro customers.',
      appsTag:'APPS · SERVICE · CUSTOMER EXPERIENCE', appsImageAlt:'Three customer apps with account information concealed', appsTitle:'Three apps, one journey ↗', appsSubtitle:'The customer experience after purchase.', appsBody:'The customer journey doesn’t end when a car is delivered. The MVM, Fownix and XTRIM apps connect owners with brand services and products.', appsRole:'I helped move B2C needs forward and coordinated development and maintenance of these experiences with the teams.', appsMetric:'active users across the three apps',
      moreTitle:'A few more paths.', moreIntro:'B2C projects and websites for different businesses and customers.', industrialAlt:'Products on an industrial machinery website', industrialLinkAria:'Open the SKPIG website', industrialBody:'A web experience for an automotive and machinery business.', kouroshAlt:'Kourosh Motor corporate website', kouroshShopAlt:'Kourosh Motor online store', kouroshBody:'A corporate digital presence and product store.',
      approachLabel:'How I think', approachTitle1:'The dashboard', approachTitle2:'should go green.', approachLead:'For me, a feature is delivered when its data shows it’s successful—not simply when it has been published.', approachBody:'From sales, factory, warehouse and after-sales processes to working alongside engineers, I try to understand the bigger picture. When several businesses have competing priorities, finding a shared path is part of the product work too.', toolsAria:'Tools and interests', manifesto:'I love seeing green on the dashboard—not just a green app status in Kubernetes.',
      contactLabel:'Let’s connect', contactTitle1:'Have a good problem', contactTitle2:'to solve?', contactBody:'I’d love to hear from you about product opportunities, collaboration or a conversation about building products.', emailMe:'Email me', resumeFull:'Download CV (Persian PDF)', footerName:'Javad Ebrahimi', footerNote:'Curious enough to build.', backTop:'Back to top',
      title:'Javad Ebrahimi | Product Manager', description:'Javad Ebrahimi: product manager, curious about problems, data and building digital experiences.'
    }
  };
  const root=document.documentElement;
  const languageButton=document.getElementById('language-toggle');
  const menuButton=document.getElementById('menu-toggle');
  const nav=document.getElementById('main-nav');
  const header=document.getElementById('site-header');
  const progress=document.getElementById('scroll-progress-bar');
  let lang='fa';
  try { if(localStorage.getItem('javad-portfolio-language')==='en') lang='en'; } catch (_) {}
  function setMenu(open){
    nav.classList.toggle('is-open',open);
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.setAttribute('aria-label',copy[lang][open?'menuClose':'menuOpen']);
  }
  function applyLanguage(next){
    lang=next==='en'?'en':'fa';
    const strings=copy[lang];
    root.lang=lang; root.dir=lang==='fa'?'rtl':'ltr';
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
  languageButton.addEventListener('click',()=>applyLanguage(lang==='fa'?'en':'fa'));
  menuButton.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false);});
  let ticking=false;
  function updateScroll(){
    ticking=false;
    const distance=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    progress.style.transform=`scaleX(${Math.min(1,Math.max(0,window.scrollY/distance))})`;
    header.classList.toggle('is-scrolled',window.scrollY>32);
  }
  function requestScrollUpdate(){if(!ticking){ticking=true;window.requestAnimationFrame(updateScroll);}}
  window.addEventListener('scroll',requestScrollUpdate,{passive:true});
  window.addEventListener('resize',requestScrollUpdate);
  applyLanguage(lang);updateScroll();
})();
