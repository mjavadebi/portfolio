(() => {
  'use strict';
  const copy = {
    fa: {
      skip: 'رفتن به محتوای اصلی', brandName: 'جواد ابراهیمی', brandAria: 'جواد ابراهیمی، صفحه اصلی', navAria: 'منوی اصلی',
      navWork: 'پروژه‌ها', navStory: 'یک داستان', navApproach: 'روش کار', navAbout: 'درباره من', navContact: 'بیا گپ بزنیم',
      menuOpen: 'باز کردن منو', menuClose: 'بستن منو', languageAria: 'Switch to English',
      heroEyebrow: 'دفتر محصول / جواد ابراهیمی', heroLine1: 'از مسئله،', heroLine2: 'تا محصولی که', heroLine3: 'کار می‌کند.',
      heroDesc: 'سلام، من جوادم. کنار آدم‌ها و تیم‌ها می‌ایستم تا مسئله‌های پیچیده، به تجربه‌های ساده و قابل استفاده تبدیل شوند.',
      heroPrimary: 'پروژه‌ها رو ببین', heroSecondary: 'بیشتر درباره من', heroFootnote: 'مدیریت محصول · تجربه مشتری · تحویل',
      heroArtAria: 'تصویرسازی جواد ابراهیمی', portraitAlt: 'تصویرسازی وکتوری جواد ابراهیمی', scroll: 'کمی پایین‌تر',
      workKicker: 'کارهای منتخب', workTitle1: 'چند تا از چیزهایی که', workTitle2: 'با هم ساختیم.',
      workIntro: 'از فروش آنلاین تا تجربه‌ی مالکیت خودرو؛ چند نمونه از محصولاتی که در مسیر ساخت و تحویلشان همراه تیم‌ها بودم.',
      projectTypePlatform: 'پلتفرم B2C', projectTypeApp: 'تجربه‌ی مشتری',
      clickDesc: 'سکوی دیجیتال فروش و خدمات مشتریان؛ جایی که مسیرهای مختلف مشتری به هم می‌رسند.',
      mvmDesc: 'تجربه‌ای دیجیتال برای ارتباط مشتریان MVM با خدمات برند.',
      fownixDesc: 'یک تجربه‌ی دیجیتال دیگر در کنار مشتریان برند فونیکس.',
      xtrimDesc: 'همراهی در تحویل تجربه‌ی دیجیتال مشتریان برند اکستریم.',
      preview: 'پیش‌نمایش زنده', visit: 'ورود به سایت', openClick: 'باز کردن Modiran Click در تب جدید', openMvm: 'باز کردن اپلیکیشن MVM در تب جدید',
      openFownix: 'باز کردن اپلیکیشن Fownix در تب جدید', openXtrim: 'باز کردن اپلیکیشن XTRIM در تب جدید',
      impactKicker: 'در یک نگاه', impactTitle: 'اثر کار، توی جزئیات پیداست.', metricUsers: 'فروش بیمه در ماه اول بهره‌برداری', metricRequests: 'نمایندگی استفاده‌کننده از ماژول سرنخ', weeksShort: 'هفته', metricWeeks: 'تا تحویل بک‌آفیس بیمه', metricPolicies: 'افزایش سرنخ‌های فروش با یک قابلیت',
      storyKicker: 'یک داستان واقعی', storyTitle1: 'جلسه‌ی کیک‌آف تموم شد.', storyTitle2: 'بعدش جنگ شروع شد.',
      storyIntro: 'قطعی اینترنت دی‌ماه و جنگ ۱۲ روزه، ما را به فکر سیستمی انداخته بود که فرایندهای بیمه در شرایط اختلال متوقف نشوند. تازه جلسه‌ی کیک‌آف را برگزار کرده بودیم که دوباره جنگ شروع شد.',
      storyEnd: 'این بار کار را رها نکردیم. در سه هفته، بک‌آفیس بیمه را به مرحله‌ی بهره‌برداری رساندیم؛ محصولی که بعدتر به فروش آنلاین هم رسید.',
      storyLink: 'درباره‌ی این تجربه بپرس', storyCardText: 'از یک مسئله‌ی واقعی تا محصولی که تیم بتواند با آن کار کند.', storyStepsAria: 'مراحل داستان',
      step1: 'مسئله', step2: 'ساخت', step3: 'تحویل',
      stepTexts: ['چطور کار بیمه را در روزهای اختلال ادامه بدهیم؟', 'نیازها را روشن کردیم و همراه تیم، راه‌حل را ساختیم.', 'در سه هفته، محصول به مرحله‌ی بهره‌برداری رسید.'],
      approachKicker: 'روش کار من', approachTitle1: 'اول خوب می‌پرسم.', approachTitle2: 'بعد با هم می‌سازیم.',
      approachIntro: 'برای من، مدیریت محصول یعنی کنار هم نشاندن آدم‌ها، فهمیدن مسئله و پیگیری مسیر تا نتیجه.',
      approach1Title: 'گوش می‌دهم.', approach1Body: 'قبل از راه‌حل، سراغ آدم‌ها، فرایندها و خود مسئله می‌روم.',
      approach2Title: 'مسیر را روشن می‌کنم.', approach2Body: 'نیازهای پراکنده را به اولویت‌ها و تصمیم‌های قابل اجرا تبدیل می‌کنم.',
      approach3Title: 'تا نتیجه می‌مانم.', approach3Body: 'کنار تیم‌ها می‌مانم تا محصول فقط ساخته نشود؛ واقعاً به کار بیاید.',
      aboutKicker: 'کمی درباره من', aboutTitle1: 'سلام، من', aboutTitle2: 'جوادم.',
      aboutP1: 'دانشجوی مهندسی کامپیوتر دانشگاه تهران و فعال حوزه‌ی مدیریت محصولم. از بازاریابی و محتوا شروع کردم و بعدتر به جایی رسیدم که بیشتر از هر چیز دوستش دارم: ساختن محصول، با آدم‌ها.',
      aboutP2: 'در تاپ‌تک، در مسیر تحویل محصولات B2C، بیمه، فروش و ارتباط با مشتری کنار تیم‌های مختلف بوده‌ام. از سؤال‌های خوب، مسئله‌های مبهم و دیدن نتیجه‌ی واقعی کار لذت می‌برم.', photoAlt: 'جواد ابراهیمی',
      contactKicker: 'بیا ارتباط بگیریم', contactTitle1: 'یه مسئله‌ی خوب', contactTitle2: 'برای حل کردن داری؟',
      contactDesc: 'برای فرصت‌های همکاری در مدیریت محصول و گفت‌وگو درباره‌ی ساختن چیزهای بهتر، خوشحال می‌شم ازت بشنوم.', emailMe: 'بهم ایمیل بزن',
      footerName: 'جواد ابراهیمی', footerNote: 'ساخته‌شده با کنجکاوی، برای آدم‌ها.', backTop: 'برگشت به بالا',
      dialogEyebrow: 'پیش‌نمایش زنده', closePreview: 'بستن پیش‌نمایش', openNew: 'باز کردن در تب جدید',
      previewNote: 'اگر پیش‌نمایش بارگذاری نشد، از لینک بالا برای باز کردن سایت در تب جدید استفاده کن.', frameTitle: 'پیش‌نمایش زنده',
      title: 'جواد ابراهیمی | دفتر محصول', description: 'پورتفولیوی جواد ابراهیمی؛ مدیریت محصول، تجربه مشتری و تحویل محصولات دیجیتال.'
    },
    en: {
      skip: 'Skip to content', brandName: 'Javad Ebrahimi', brandAria: 'Javad Ebrahimi, home', navAria: 'Main navigation',
      navWork: 'Work', navStory: 'A story', navApproach: 'Approach', navAbout: 'About', navContact: 'Let’s talk',
      menuOpen: 'Open menu', menuClose: 'Close menu', languageAria: 'تغییر زبان به فارسی',
      heroEyebrow: 'PRODUCT FIELD NOTES / JAVAD EBRAHIMI', heroLine1: 'From a problem,', heroLine2: 'to a product', heroLine3: 'that works.',
      heroDesc: 'Hi, I’m Javad. I work with people and teams to turn complicated problems into experiences that feel simple and useful.',
      heroPrimary: 'Explore the work', heroSecondary: 'A little about me', heroFootnote: 'Product management · customer experience · delivery',
      heroArtAria: 'Illustration of Javad Ebrahimi', portraitAlt: 'Vector-style illustration of Javad Ebrahimi', scroll: 'Scroll a little',
      workKicker: 'Selected work', workTitle1: 'A few things we', workTitle2: 'built together.',
      workIntro: 'From online sales to the car ownership experience: a selection of products I helped teams bring to life.',
      projectTypePlatform: 'B2C platform', projectTypeApp: 'Customer experience',
      clickDesc: 'A digital sales and customer services platform, bringing different customer journeys together.',
      mvmDesc: 'A digital experience connecting MVM customers with the brand’s services.',
      fownixDesc: 'Another digital experience serving Fownix customers.',
      xtrimDesc: 'Helping deliver the digital customer experience for the XTRIM brand.',
      preview: 'Live preview', visit: 'Visit site', openClick: 'Open Modiran Click in a new tab', openMvm: 'Open the MVM app in a new tab',
      openFownix: 'Open the Fownix app in a new tab', openXtrim: 'Open the XTRIM app in a new tab',
      impactKicker: 'At a glance', impactTitle: 'The details tell the story.', metricUsers: 'insurance sales in the first month of operation', metricRequests: 'dealerships using the leads module', weeksShort: 'weeks', metricWeeks: 'to deliver insurance back office', metricPolicies: 'increase in sales leads from one feature',
      storyKicker: 'A true story', storyTitle1: 'The kickoff ended.', storyTitle2: 'Then the war began.',
      storyIntro: 'After internet disruptions and the 12-day war, we began thinking about an insurance system that could keep organizational processes going through disruption. We had just held the kickoff when war began again.',
      storyEnd: 'This time, we kept going. In three weeks, we brought the insurance back office into operation; online sales followed later.',
      storyLink: 'Ask me about this project', storyCardText: 'From a real problem to a product the team could actually use.', storyStepsAria: 'Story stages',
      step1: 'Problem', step2: 'Build', step3: 'Deliver',
      stepTexts: ['How could insurance operations keep moving during disruption?', 'We clarified the needs and built the solution together.', 'In three weeks, the product was ready for operations.'],
      approachKicker: 'How I work', approachTitle1: 'First, ask better.', approachTitle2: 'Then build together.',
      approachIntro: 'To me, product management means bringing people together, understanding the problem and staying with it through to a result.',
      approach1Title: 'I listen.', approach1Body: 'Before jumping to a solution, I get to know the people, the process and the problem.',
      approach2Title: 'I find the path.', approach2Body: 'I turn scattered needs into clear priorities and decisions a team can act on.',
      approach3Title: 'I stay for the outcome.', approach3Body: 'I work alongside teams until the product is useful in the real world.',
      aboutKicker: 'A little about me', aboutTitle1: 'Hi, I’m', aboutTitle2: 'Javad.',
      aboutP1: 'I study computer engineering at the University of Tehran and work in product management. I started in marketing and content, and found what I love most: building products with people.',
      aboutP2: 'At TopTec, I worked with different teams delivering B2C products across insurance, sales and customer relationships. I enjoy good questions, ambiguous problems and seeing real outcomes.', photoAlt: 'Javad Ebrahimi',
      contactKicker: 'Get in touch', contactTitle1: 'Have a good problem', contactTitle2: 'to solve?',
      contactDesc: 'I’d love to hear from you about product opportunities or a conversation about building something better.', emailMe: 'Email me',
      footerName: 'Javad Ebrahimi', footerNote: 'Made with curiosity, for people.', backTop: 'Back to top',
      dialogEyebrow: 'Live preview', closePreview: 'Close preview', openNew: 'Open in a new tab',
      previewNote: 'If the preview does not load, use the link above to open the site in a new tab.', frameTitle: 'Live preview',
      title: 'Javad Ebrahimi | Product Field Notes', description: 'Javad Ebrahimi’s portfolio: product management, customer experience and digital product delivery.'
    }
  };

  const projects = {
    modiran: { name: 'Modiran Click', url: 'https://modiran.click' },
    mvm: { name: 'My MVM', url: 'https://app.mvmco.ir' },
    fownix: { name: 'Fownix', url: 'https://app.fownix.com' },
    xtrim: { name: 'XTRIM', url: 'https://app.xtrimcars.com' }
  };
  const root = document.documentElement;
  const languageButton = document.getElementById('language-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const dialog = document.getElementById('preview-dialog');
  const frame = document.getElementById('preview-frame');
  const previewTitle = document.getElementById('preview-title');
  const previewDomain = document.getElementById('preview-domain');
  const previewOpen = document.getElementById('preview-open');
  const stepDescription = document.getElementById('step-description');
  const stepButtons = [...document.querySelectorAll('.story-step')];
  const storyCounter = document.querySelector('.story-card-footer span:last-child');
  let lang = 'fa';
  let currentStep = 0;
  let currentProject = null;
  let returnFocus = null;

  try { if (localStorage.getItem('javad-portfolio-language') === 'en') lang = 'en'; } catch (_) { /* Persian remains the default. */ }

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
    if (currentProject) frame.title = `${strings.frameTitle}: ${currentProject.name}`;
    setMenu(false);
    try { localStorage.setItem('javad-portfolio-language', lang); } catch (_) { /* Site works without storage. */ }
  }

  languageButton.addEventListener('click', () => applyLanguage(lang === 'fa' ? 'en' : 'fa'));
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });

  stepButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentStep = index;
      stepButtons.forEach((item, i) => {
        item.classList.toggle('is-active', i === index);
        item.setAttribute('aria-pressed', String(i === index));
      });
      stepDescription.textContent = copy[lang].stepTexts[index];
      storyCounter.textContent = `0${index + 1} / 03`;
    });
  });

  function openPreview(id, trigger) {
    const project = projects[id];
    if (!project) return;
    currentProject = project;
    returnFocus = trigger;
    previewTitle.textContent = project.name;
    previewDomain.textContent = new URL(project.url).hostname;
    previewOpen.href = project.url;
    frame.title = `${copy[lang].frameTitle}: ${project.name}`;
    frame.src = project.url;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    document.getElementById('preview-close').focus();
  }
  function closePreview() {
    if (typeof dialog.close === 'function' && dialog.open) dialog.close();
    else dialog.removeAttribute('open');
    frame.removeAttribute('src');
    currentProject = null;
    if (returnFocus) returnFocus.focus();
  }
  document.querySelectorAll('[data-preview]').forEach(button => button.addEventListener('click', () => openPreview(button.dataset.preview, button)));
  document.getElementById('preview-close').addEventListener('click', closePreview);
  dialog.addEventListener('click', event => { if (event.target === dialog) closePreview(); });
  dialog.addEventListener('close', () => { frame.removeAttribute('src'); currentProject = null; });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    reveals.forEach(item => observer.observe(item));
  } else reveals.forEach(item => item.classList.add('is-visible'));

  applyLanguage(lang);
})();
