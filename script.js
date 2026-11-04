(() => {
  'use strict';
  const copy = {
    fa: {
      skip:'رفتن به محتوای اصلی', brandAria:'جواد ابراهیمی، صفحه اصلی', brandName:'جواد ابراهیمی', navAria:'منوی اصلی',
      navApproach:'طرز فکر من', navStory:'یک داستان', navWork:'پروژه‌ها', navAbout:'درباره من', navContact:'بیا گپ بزنیم',
      menuOpen:'باز کردن منو', menuClose:'بستن منو', languageAria:'Switch to English',
      heroEyebrow:'جواد ابراهیمی / مدیر محصول', heroLine1:'محصول ساختن رو', heroLine2:'دوست دارم.', heroAfterthought:'عنوانش؟ قابل مذاکره‌ست.',
      heroDesc:'سلام، من جوادم. از بازاریابی شروع کردم و رسیدم به ساختن محصول؛ از فروش و بیمه تا اپلیکیشن‌های مشتریان. هم از فهمیدن مسئله خوشم میاد، هم از این‌که ببینم آخرش واقعا کار می‌کنه.',
      heroPrimary:'بیا بیشتر آشنا شیم', heroSecondary:'مستقیم برو سراغ کارهام', heroFootnote:'مدیریت محصول · B2C · رشد · تحویل', heroArtAria:'تصویرسازی جواد ابراهیمی', portraitAlt:'تصویرسازی جواد ابراهیمی', scroll:'داستان از اینجا شروع می‌شه',
      chapterKicker:'یک آشنایی کوتاه', chapterTitle1:'سه سؤال برای', chapterTitle2:'شناختن من.', chapterIntro:'اگه بخوام بگم توی کار چطورم، احتمالا از این سه تا سؤال شروع می‌کنم.', chaptersAria:'مراحل آشنایی',
      chapterNav1:'از کجا شروع می‌کنم؟', chapterNav2:'وسط مسیر چه می‌کنم؟', chapterNav3:'کی کار تموم می‌شه؟',
      question1:'از کجا شروع می‌کنم؟', answer1:'از «چرا؟»', answerBody1:'معمولا اولین چیزی که می‌شنوم یه راه‌حله. من دوست دارم یه قدم عقب‌تر برم و بفهمم اصلا چه مشکلی داریم، برای کی و چرا حل کردنش مهمه.', answerNote1:'کنجکاوی، قبل از فیچر. همیشه.',
      question2:'وسط مسیر چه می‌کنم؟', answer2:'آدم‌ها و تکه‌ها رو به هم وصل می‌کنم.', answerBody2:'با تیم فنی درباره API و محدودیت‌ها حرف می‌زنم، با کسب‌وکار درباره نیازها و با طراحی درباره تجربه. بعد کمک می‌کنم تصمیم‌ها به اولویت و کاری که بشه ساخت تبدیل بشن.', answerNote2:'محصول، کار یک نفر نیست.',
      question3:'کی کار تموم می‌شه؟', answer3:'وقتی نتیجه رو ببینیم.', answerBody3:'لانچ برای من خط پایان نیست. به بازخورد و عددها برمی‌گردم تا بفهمم چیزی که ساختیم واقعا گرهی باز کرده یا هنوز باید بهترش کنیم.', answerNote3:'کار کردن محصول، مهم‌تر از صرفا ساخته شدنه.',
      impactKicker:'چند عدد از مسیر', impactTitle:'حالا کمی از حرف، به نتیجه.', metricUsers:'کاربر در سبد محصولات B2C', metricRequests:'درخواست روزانه در سبد محصولات', metricLeads:'رشد سرنخ‌های روزانه در مسیر بهبود جذب و فروش', weeksShort:'هفته', metricWeeks:'تا تحویل بک‌آفیس بیمه', impactContext:'این‌ها نتیجه کار تیم‌هایی است که در ساخت و پیشبرد محصولاتشان نقش داشته‌ام.',
      storyKicker:'یک داستان واقعی', storyTitle1:'کیک‌آف رو رفتیم.', storyTitle2:'بوم؛ دوباره جنگ شد.',
      storyIntro:'قطعی اینترنت دی‌ماه و جنگ ۱۲ روزه ما رو به فکر یک سیستم جدید برای بیمه انداخته بود؛ سیستمی که حتی وقت اختلال اینترنت، کار سازمان و آدم‌هاش متوقف نشه. تازه جلسه کیک‌آف رو رفته بودیم و دیاگرام‌های اول درآمده بود که دوباره جنگ شد.',
      storyEnd:'این بار ول نکردیم. با تیم، توی سه هفته بک‌آفیس بیمه رو به بهره‌برداری رسوندیم. هشت ماه بعد، فروش آنلاینش هم در مدیران کلیک راه افتاد.', myRole:'نقش من:', storyRole:'از تحلیل فرایند و تعریف نیازمندی‌ها تا هماهنگی تیم‌ها و استقرار محصول.', storyLink:'درباره این تجربه بپرس',
      storyCardText:'از یک مسئله واقعی تا محصولی که تیم بیمه بتواند با آن کار کند.', storyStepsAria:'مراحل داستان', step1:'مسئله', step2:'ساخت', step3:'نتیجه',
      stepTexts:['چطور کار بیمه رو در روزهای اختلال ادامه بدیم؟','نیازمندی‌ها، فرایندها و تیم‌ها رو برای تحویل یک بک‌آفیس کنار هم گذاشتیم.','سه هفته تا بهره‌برداری؛ بیش از ۱٬۵۰۰ فروش در ماه اول.'],
      workKicker:'چیزهایی که رویشان کار کرده‌ام', workTitle1:'محصول‌ها.', workTitle2:'و قصه پشتشان.', workIntro:'چند نمونه از محصولاتی که در تاپ‌تک، کنار تیم‌های مختلف برای مشتریان مدیران خودرو پیش بردم.',
      clickType:'سکوی فروش و خدمات دیجیتال', clickDesc:'از خرید خودرو تا بیمه و خدمات مشتری؛ مدیران کلیک جایی است که چندین سرویس و مسیر مشتری به هم می‌رسند.', clickRole:'تعریف و اولویت‌بندی نیازها، هماهنگی تیم‌ها و پیشبرد قابلیت‌های فروش و بیمه تا تحویل.', openClick:'باز کردن مدیران کلیک در تب جدید', visitProduct:'رفتن به محصول', readCase:'قصه بیمه را بخوان',
      appsType:'تجربه مشتری / سه اپلیکیشن', appsTitle1:'سه برند.', appsTitle2:'یک دغدغه مشترک.', appsDesc:'مشتری بعد از خرید خودرو تازه وارد یک مسیر طولانی می‌شود. این اپلیکیشن‌ها بخشی از ارتباط او با خدمات برندهای MVM، فونیکس و اکستریم هستند.', appsRole:'پیشبرد نیازها، هماهنگی توسعه و نگهداشت تجربه مشتری در کنار تیم‌ها.', appsScale:'کاربر فعال در مجموع سه اپلیکیشن', appDirectoryAria:'لینک اپلیکیشن‌ها', appDirectoryTitle:'محصول‌ها رو ببین', directoryNote:'هر لینک، محصول اصلی رو در یک تب جدید باز می‌کنه.',
      aboutKicker:'کمی شخصی‌تر', aboutTitle1:'من فقط از مسیر', aboutTitle2:'محصول نیومدم.', photoAlt:'جواد ابراهیمی',
      aboutP1:'از محتوا و بازاریابی شروع کردم، مهندسی کامپیوتر می‌خونم و کم‌کم جذب جایی شدم که تکنولوژی، آدم‌ها و کسب‌وکار به هم می‌رسن.',
      aboutP2:'یکی از هم‌بنیان‌گذارهای DanAI بودم؛ استارتاپی در حوزه یادگیری. اون تجربه به موفقیتی که می‌خواستیم نرسید، ولی برای من بخشی از مسیر یاد گرفتن ساختن بود.',
      aboutP3:'من از مسئله‌های مبهم فرار نمی‌کنم؛ دوست دارم بفهمم داستان از چه قراره و کمک کنم بالاخره یه قدم جلو بریم.',
      contactKicker:'بیا ارتباط بگیریم', contactTitle1:'یه مسئله خوب', contactTitle2:'برای حل کردن داری؟', contactDesc:'برای فرصت‌های مدیریت محصول، همکاری یا حتی یک گفت‌وگوی خوب درباره ساختن محصول، خوشحال می‌شم ازت بشنوم.', emailMe:'بهم ایمیل بزن', footerName:'جواد ابراهیمی', footerNote:'همیشه کنجکاو. همیشه در حال ساختن.', backTop:'برگشت به بالا',
      title:'جواد ابراهیمی | مدیر محصول', description:'جواد ابراهیمی، مدیر محصول؛ از مسئله‌های پیچیده تا محصولاتی که به کار آدم‌ها می‌آیند.'
    },
    en: {
      skip:'Skip to content', brandAria:'Javad Ebrahimi, home', brandName:'Javad Ebrahimi', navAria:'Main navigation',
      navApproach:'How I think', navStory:'A story', navWork:'Work', navAbout:'About', navContact:'Let’s talk',
      menuOpen:'Open menu', menuClose:'Close menu', languageAria:'تغییر زبان به فارسی',
      heroEyebrow:'JAVAD EBRAHIMI / PRODUCT MANAGER', heroLine1:'I like to build', heroLine2:'products.', heroAfterthought:'The title is negotiable.',
      heroDesc:'Hi, I’m Javad. I started in marketing and found my way to product: from sales and insurance to customer apps. I like figuring out the problem, and seeing what we build actually work.',
      heroPrimary:'Get to know me', heroSecondary:'Skip to my work', heroFootnote:'Product management · B2C · growth · delivery', heroArtAria:'Illustration of Javad Ebrahimi', portraitAlt:'Illustration of Javad Ebrahimi', scroll:'The story starts here',
      chapterKicker:'A short introduction', chapterTitle1:'Three questions', chapterTitle2:'to get to know me.', chapterIntro:'If you want to know how I work, these three questions are a good place to start.', chaptersAria:'Introduction chapters',
      chapterNav1:'Where do I start?', chapterNav2:'What happens in between?', chapterNav3:'When is the work done?',
      question1:'Where do I start?', answer1:'With “why?”', answerBody1:'Often the first thing I hear is a solution. I like to take a step back and understand the problem, who has it and why solving it matters.', answerNote1:'Curiosity before features. Always.',
      question2:'What happens in between?', answer2:'I connect the people and the pieces.', answerBody2:'I talk APIs and constraints with engineers, needs with the business, and experience with design. Then I help turn those conversations into priorities and work a team can build.', answerNote2:'Product is never a one-person job.',
      question3:'When is the work done?', answer3:'When we see the outcome.', answerBody3:'Launch isn’t the finish line for me. I go back to feedback and the numbers to see whether what we built actually helped, or whether it needs another iteration.', answerNote3:'A product that works beats one that merely ships.',
      impactKicker:'A few numbers along the way', impactTitle:'A little less talk. A little more impact.', metricUsers:'users across the B2C product portfolio', metricRequests:'daily requests across the portfolio', metricLeads:'daily leads as acquisition and sales journeys improved', weeksShort:'weeks', metricWeeks:'to deliver the insurance back office', impactContext:'These are outcomes of teams and products I helped build and move forward.',
      storyKicker:'A true story', storyTitle1:'We had the kickoff.', storyTitle2:'Boom. War started again.',
      storyIntro:'The January internet outage and the 12-day war had us thinking about a new insurance system: one that could keep work moving through an internet disruption. We had just held the kickoff and drawn the first diagrams when war started again.',
      storyEnd:'This time we didn’t stop. Together, we got the insurance back office into operation in three weeks. Eight months later, its online sales launched on Modiran Click.', myRole:'My role:', storyRole:'From process analysis and requirements to team coordination and product rollout.', storyLink:'Ask me about this project',
      storyCardText:'From a real problem to a product the insurance team could use.', storyStepsAria:'Story stages', step1:'Problem', step2:'Build', step3:'Outcome',
      stepTexts:['How could insurance work keep moving during disruption?','We brought the requirements, processes and teams together to deliver a back office.','Three weeks to operation; over 1,500 sales in the first month.'],
      workKicker:'Things I’ve worked on', workTitle1:'The products.', workTitle2:'And the stories behind them.', workIntro:'A selection of products I helped move forward at TopTec, alongside teams serving Modiran Khodro customers.',
      clickType:'Digital sales and services platform', clickDesc:'From buying a car to insurance and customer services: Modiran Click brings together multiple services and customer journeys.', clickRole:'Defining and prioritising needs, coordinating teams and moving sales and insurance capabilities through to delivery.', openClick:'Open Modiran Click in a new tab', visitProduct:'Visit the product', readCase:'Read the insurance story',
      appsType:'Customer experience / three apps', appsTitle1:'Three brands.', appsTitle2:'One shared challenge.', appsDesc:'Buying a car is only the beginning of the customer journey. These apps are part of how MVM, Fownix and XTRIM owners connect with their brands’ services.', appsRole:'Moving requirements forward, coordinating development and maintaining the customer experience with the teams.', appsScale:'active users across the three apps', appDirectoryAria:'App links', appDirectoryTitle:'Explore the products', directoryNote:'Each link opens the original product in a new tab.',
      aboutKicker:'A little more personal', aboutTitle1:'I didn’t start', aboutTitle2:'out in product.', photoAlt:'Javad Ebrahimi',
      aboutP1:'I started in content and marketing and study computer engineering. Along the way, I found the place where technology, people and business meet.',
      aboutP2:'I also co-founded DanAI, a learning startup. It didn’t reach the success we hoped for, but it was part of how I learned to build.',
      aboutP3:'I don’t shy away from ambiguous problems. I like understanding what’s really going on and helping a team find a way forward.',
      contactKicker:'Let’s connect', contactTitle1:'Have a good problem', contactTitle2:'to solve?', contactDesc:'I’d love to hear from you about product opportunities, collaboration, or simply a good conversation about building products.', emailMe:'Email me', footerName:'Javad Ebrahimi', footerNote:'Always curious. Always building.', backTop:'Back to top',
      title:'Javad Ebrahimi | Product Manager', description:'Javad Ebrahimi: product management, B2C, growth, and making complicated problems useful.'
    }
  };

  const root = document.documentElement;
  const languageButton = document.getElementById('language-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const stepDescription = document.getElementById('step-description');
  const stepButtons = [...document.querySelectorAll('.story-step')];
  const storyCounter = document.getElementById('story-counter');
  let lang = 'fa';
  let currentStep = 0;
  try { if (localStorage.getItem('javad-portfolio-language') === 'en') lang = 'en'; } catch (_) { /* Persian is the default. */ }

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', copy[lang][open ? 'menuClose' : 'menuOpen']);
  }
  function applyLanguage(next) {
    lang = next === 'en' ? 'en' : 'fa';
    const strings = copy[lang];
    root.lang = lang;
    root.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = strings[el.dataset.i18n];
      if (typeof value === 'string') el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const value = strings[el.dataset.i18nAria];
      if (typeof value === 'string') el.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const value = strings[el.dataset.i18nAlt];
      if (typeof value === 'string') el.alt = value;
    });
    document.title = strings.title;
    document.querySelector('meta[name="description"]').content = strings.description;
    document.querySelector('meta[property="og:title"]').content = strings.title;
    document.querySelector('meta[property="og:description"]').content = strings.description;
    languageButton.innerHTML = lang === 'fa' ? 'EN <span aria-hidden="true">↗</span>' : 'فا <span aria-hidden="true">↗</span>';
    languageButton.setAttribute('aria-label', strings.languageAria);
    stepDescription.textContent = strings.stepTexts[currentStep];
    setMenu(false);
    try { localStorage.setItem('javad-portfolio-language', lang); } catch (_) { /* The page works without storage. */ }
  }
  languageButton.addEventListener('click', () => applyLanguage(lang === 'fa' ? 'en' : 'fa'));
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
  stepButtons.forEach((button, index) => button.addEventListener('click', () => {
    currentStep = index;
    stepButtons.forEach((item, i) => {
      item.classList.toggle('is-active', i === index);
      item.setAttribute('aria-pressed', String(i === index));
    });
    stepDescription.textContent = copy[lang].stepTexts[index];
    storyCounter.textContent = `0${index + 1} / 03`;
  }));

  const chapters = [...document.querySelectorAll('[data-chapter]')];
  const chapterLinks = [...document.querySelectorAll('[data-chapter-link]')];
  let ticking = false;
  function syncChapter() {
    ticking = false;
    const marker = window.innerHeight * 0.48;
    let active = chapters[0];
    chapters.forEach(chapter => { if (chapter.getBoundingClientRect().top <= marker) active = chapter; });
    chapterLinks.forEach(link => {
      if (link.dataset.chapterLink === active.dataset.chapter) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
  }
  function requestChapterSync() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(syncChapter); }
  }
  window.addEventListener('scroll', requestChapterSync, { passive: true });
  window.addEventListener('resize', requestChapterSync);
  applyLanguage(lang);
  syncChapter();
})();
