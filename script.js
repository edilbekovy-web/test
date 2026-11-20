/* ===== STIG ROCK landing — i18n + form ===== */

const REFERRAL_URL = "https://app.stigrock.com/user/register?reference=petermac";
const REDIRECT_DELAY_MS = 1800;

/* ---------- translations ---------- */
const I18N = {
  en: {
    "nav.system":"The System",
    "nav.about":"About",
    "nav.security":"Security",
    "nav.faq":"FAQ",
    "nav.cta":"Get access",

    "hero.eyebrow":"THE NEW STANDARD IN DIAMOND TRADING",
    "hero.title1":"Real diamond assets.",
    "hero.title2":"Clear ownership.",
    "hero.title3":"International structure.",
    "hero.lead":"STIG ROCK combines real assets with modern structure, professional management and transparent organisation. Security, clarity and defined processes — from day one.",
    "hero.cta1":"Request access",
    "hero.cta2":"How it works →",

    "badge1.title":"Ownership & Security",
    "badge1.text":"Purchase contract, invoice and certified storage — ownership from day one.",
    "badge2.title":"International Structure",
    "badge2.text":"Clear contractual structures and professional organisation at international standard.",
    "badge3.title":"Digital Overview",
    "badge3.text":"Transparent processes and a digital dashboard — traceable any time.",

    "system.eyebrow":"THE SYSTEM",
    "system.title":"A system built on clarity and structure",
    "system.p1":"STIG ROCK is a transparently structured concept in which clients acquire diamond carats through clearly defined solution plans. The system combines documented processes, professional management and a modern overview in a structured environment.",
    "system.p2":"Each step — from contract to certified storage — is documented and verifiable. You hold ownership. We hold the structure.",
    "system.link":"Join the partner programme →",

    "about.eyebrow":"ABOUT THE COMPANY",
    "about.title":"International structure. Clear vision.",
    "about.p1":"STIG ROCK was founded to make the diamond market more transparent, modern and client-oriented — with a focus on trust, security and long-term structure.",
    "about.li1":"Certified independent storage",
    "about.li2":"Transparent fee and contract terms",
    "about.li3":"Dedicated client support",
    "about.li4":"International community & events",

    "sec.eyebrow":"SECURITY",
    "sec.title":"Security as a foundation",
    "sec.p1":"Professional storage, documented processes and traceable structures ensure the highest level of trust and clarity. Each client receives purchase documentation, certified storage confirmation and access to a personal digital overview.",

    "join.eyebrow":"JOIN STIG ROCK",
    "join.title":"Request your personal access",
    "join.lead":"Leave your details — our team will contact you personally and guide you through the next steps, transparently and structured.",
    "join.li1":"Personal onboarding",
    "join.li2":"No obligation",
    "join.li3":"Data handled confidentially",

    "form.name":"Name",
    "form.contact":"Telegram / WhatsApp",
    "form.email":"Email",
    "form.phone":"Phone",
    "form.consent":"I agree to be contacted regarding my request.",
    "form.submit":"Send request",
    "form.sending":"Sending…",
    "form.ok":"Thank you! We will contact you shortly. Redirecting…",
    "form.err":"Something went wrong. Please try again.",
    "form.invalid":"Please fill in all fields correctly.",

    "faq.eyebrow":"FREQUENTLY ASKED",
    "faq.title":"Questions & answers",
    "faq.q1":"How do I get started with STIG ROCK?",
    "faq.a1":"Leave your contact details in the form above. A personal advisor will reach out and guide you through onboarding.",
    "faq.q2":"Who owns the diamond I purchase?",
    "faq.a2":"You do — ownership is documented via purchase contract and invoice from day one, with certified independent storage.",
    "faq.q3":"Where is my diamond stored?",
    "faq.a3":"In professional certified storage with full documentation and traceability.",
    "faq.q4":"How is a fair purchase price ensured?",
    "faq.a4":"Prices follow documented market valuations and are transparently stated in your contract.",
    "faq.q5":"How can I contact the team?",
    "faq.a5":"Submit the form above — a member of our team will respond personally.",

    "footer.rights":"© 2026 STIG ROCK. All rights reserved.",
    "footer.note":"Information on this page is for general purposes only and does not constitute a financial offer.",
  },
  ru: {
    "nav.system":"Система",
    "nav.about":"О компании",
    "nav.security":"Безопасность",
    "nav.faq":"Вопросы",
    "nav.cta":"Получить доступ",

    "hero.eyebrow":"НОВЫЙ СТАНДАРТ В ТОРГОВЛЕ БРИЛЛИАНТАМИ",
    "hero.title1":"Реальные активы.",
    "hero.title2":"Чистое право собственности.",
    "hero.title3":"Международная структура.",
    "hero.lead":"STIG ROCK объединяет реальные активы, современную структуру, профессиональное управление и прозрачную организацию. Безопасность, ясность и выстроенные процессы — с первого дня.",
    "hero.cta1":"Оставить заявку",
    "hero.cta2":"Как это работает →",

    "badge1.title":"Собственность и безопасность",
    "badge1.text":"Договор купли-продажи, инвойс и сертифицированное хранение — собственность с первого дня.",
    "badge2.title":"Международная структура",
    "badge2.text":"Прозрачные договорные условия и международная профессиональная организация.",
    "badge3.title":"Цифровой обзор",
    "badge3.text":"Прозрачные процессы и личный цифровой кабинет — доступ в любой момент.",

    "system.eyebrow":"СИСТЕМА",
    "system.title":"Система, построенная на ясности и структуре",
    "system.p1":"STIG ROCK — это прозрачно выстроенная концепция, в которой клиенты приобретают караты бриллиантов по чётко определённым планам. Система сочетает документированные процессы, профессиональное управление и современный обзор в структурированной среде.",
    "system.p2":"Каждый шаг — от договора до сертифицированного хранения — задокументирован и проверяем. Собственность — у вас. Структура — у нас.",
    "system.link":"Присоединиться к партнёрской программе →",

    "about.eyebrow":"О КОМПАНИИ",
    "about.title":"Международная структура. Чёткое видение.",
    "about.p1":"STIG ROCK был основан, чтобы сделать рынок бриллиантов более прозрачным, современным и ориентированным на клиента — с акцентом на доверие, безопасность и долгосрочную структуру.",
    "about.li1":"Сертифицированное независимое хранение",
    "about.li2":"Прозрачные условия договора и комиссии",
    "about.li3":"Персональная клиентская поддержка",
    "about.li4":"Международное сообщество и события",

    "sec.eyebrow":"БЕЗОПАСНОСТЬ",
    "sec.title":"Безопасность как основа",
    "sec.p1":"Профессиональное хранение, задокументированные процессы и прослеживаемая структура обеспечивают высокий уровень доверия. Каждый клиент получает документы, подтверждение сертифицированного хранения и доступ к личному цифровому кабинету.",

    "join.eyebrow":"ВСТУПИТЬ В STIG ROCK",
    "join.title":"Оставьте заявку на персональный доступ",
    "join.lead":"Оставьте свои данные — наша команда свяжется с вами лично и проведёт через следующие шаги прозрачно и структурированно.",
    "join.li1":"Персональная поддержка",
    "join.li2":"Без обязательств",
    "join.li3":"Данные обрабатываются конфиденциально",

    "form.name":"Имя",
    "form.contact":"Telegram / WhatsApp",
    "form.email":"Email",
    "form.phone":"Телефон",
    "form.consent":"Согласен(а) на обработку данных и обратную связь.",
    "form.submit":"Отправить заявку",
    "form.sending":"Отправка…",
    "form.ok":"Спасибо! Мы свяжемся с вами в ближайшее время. Перенаправление…",
    "form.err":"Что-то пошло не так. Пожалуйста, попробуйте ещё раз.",
    "form.invalid":"Пожалуйста, заполните все поля корректно.",

    "faq.eyebrow":"ЧАСТЫЕ ВОПРОСЫ",
    "faq.title":"Вопросы и ответы",
    "faq.q1":"С чего начать работу со STIG ROCK?",
    "faq.a1":"Оставьте контакты в форме выше. Персональный консультант свяжется с вами и проведёт через онбординг.",
    "faq.q2":"Кому принадлежит купленный бриллиант?",
    "faq.a2":"Вам. Собственность подтверждается договором и инвойсом с первого дня, с сертифицированным независимым хранением.",
    "faq.q3":"Где хранится мой бриллиант?",
    "faq.a3":"В профессиональном сертифицированном хранилище с полной документацией и прослеживаемостью.",
    "faq.q4":"Как обеспечивается справедливая цена?",
    "faq.a4":"Цены основаны на документированной рыночной оценке и прозрачно указаны в договоре.",
    "faq.q5":"Как связаться с командой?",
    "faq.a5":"Отправьте форму выше — наш сотрудник свяжется лично.",

    "footer.rights":"© 2026 STIG ROCK. Все права защищены.",
    "footer.note":"Информация на странице носит общий характер и не является финансовым предложением.",
  },
};

/* ---------- i18n apply ---------- */
function applyLang(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });
  try { localStorage.setItem("stig_lang", lang); } catch(_) {}
}

function initLang(){
  let lang = "en";
  try { lang = localStorage.getItem("stig_lang") || "en"; } catch(_) {}
  if (!I18N[lang]) lang = "en";
  applyLang(lang);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}

/* ---------- form submission ---------- */
function currentLang(){
  const active = document.querySelector(".lang-btn.is-active");
  return active ? active.dataset.lang : "en";
}
function t(key){
  const d = I18N[currentLang()] || I18N.en;
  return d[key] || key;
}

function validateForm(form){
  if (!form.checkValidity()) return false;
  const email = form.elements.email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
  return true;
}

async function submitLead(form, statusEl, btn){
  const data = new FormData(form);
  data.append("page_lang", currentLang());
  data.append("page_url", location.href);

  const accessKey = (data.get("access_key") || "").toString();
  const useWeb3 = accessKey && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY";

  if (!useWeb3){
    // No backend configured yet: show success locally and redirect anyway.
    // Lead details are logged so the owner can grab them from console during testing.
    console.info("[stigrock-lead]", Object.fromEntries(data.entries()));
    await new Promise(r => setTimeout(r, 600));
    return { ok:true };
  }

  try{
    const res = await fetch("https://api.web3forms.com/submit", {
      method:"POST",
      headers:{ "Accept":"application/json" },
      body:data,
    });
    const json = await res.json().catch(() => ({}));
    return { ok: res.ok && json.success !== false, data: json };
  } catch(err){
    return { ok:false, error:err };
  }
}

function initForm(){
  const form = document.getElementById("leadForm");
  const statusEl = document.getElementById("formStatus");
  const btn = form.querySelector('button[type="submit"]');
  const btnLabel = btn.querySelector(".btn-label");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "";
    statusEl.className = "form-status";

    // honeypot
    if (form.elements.botcheck && form.elements.botcheck.checked) return;

    if (!validateForm(form)){
      statusEl.textContent = t("form.invalid");
      statusEl.classList.add("is-err");
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    btn.classList.add("is-loading");
    btn.disabled = true;
    btnLabel.textContent = t("form.sending");

    const result = await submitLead(form, statusEl, btn);

    btn.classList.remove("is-loading");
    btnLabel.textContent = t("form.submit");

    if (result.ok){
      statusEl.textContent = t("form.ok");
      statusEl.classList.add("is-ok");
      form.reset();
      setTimeout(() => {
        window.location.href = REFERRAL_URL;
      }, REDIRECT_DELAY_MS);
    } else {
      btn.disabled = false;
      statusEl.textContent = t("form.err");
      statusEl.classList.add("is-err");
    }
  });
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initForm();
});
