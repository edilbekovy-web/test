/* ===== STIG ROCK v2 — i18n + form ===== */

const REFERRAL_URL = "https://app.stigrock.com/user/register?reference=petermac";
const REDIRECT_DELAY_MS = 1600;

const I18N = {
  en: {
    "hero.eyebrow":"STIG ROCK",
    "hero.title1":"The new standard for",
    "hero.title2":"transparency in diamond trading",
    "hero.sub":"REAL DIAMOND ASSETS. CLEAR OWNERSHIP. INTERNATIONAL STRUCTURE.",
    "hero.lead":"Real assets with modern structure, professional management and transparent organisation — from day one.",

    "form.title":"Request personal access",
    "form.sub":"Leave your details — our team will contact you personally.",
    "form.name":"Name",
    "form.contact":"Telegram / WhatsApp",
    "form.email":"Email",
    "form.phone":"Phone",
    "form.consent":"I agree to be contacted regarding my request.",
    "form.submit":"Request access",
    "form.sending":"Sending…",
    "form.ok":"Thank you! We will contact you shortly. Redirecting…",
    "form.err":"Something went wrong. Please try again.",
    "form.invalid":"Please fill in all fields correctly.",

    "pill.1":"Ownership from day one",
    "pill.2":"Certified storage",
    "pill.3":"International structure",

    "footer.rights":"© 2026 STIG ROCK. All rights reserved.",
  },
  ru: {
    "hero.eyebrow":"STIG ROCK",
    "hero.title1":"Новый стандарт",
    "hero.title2":"прозрачности в торговле бриллиантами",
    "hero.sub":"РЕАЛЬНЫЕ АКТИВЫ. ЧИСТОЕ ПРАВО СОБСТВЕННОСТИ. МЕЖДУНАРОДНАЯ СТРУКТУРА.",
    "hero.lead":"Реальные активы с современной структурой, профессиональным управлением и прозрачной организацией — с первого дня.",

    "form.title":"Оставьте заявку",
    "form.sub":"Оставьте свои данные — наша команда свяжется с вами лично.",
    "form.name":"Имя",
    "form.contact":"Telegram / WhatsApp",
    "form.email":"Email",
    "form.phone":"Телефон",
    "form.consent":"Согласен(а) на обработку данных и обратную связь.",
    "form.submit":"Получить доступ",
    "form.sending":"Отправка…",
    "form.ok":"Спасибо! Мы свяжемся с вами в ближайшее время. Перенаправление…",
    "form.err":"Что-то пошло не так. Пожалуйста, попробуйте ещё раз.",
    "form.invalid":"Пожалуйста, заполните все поля корректно.",

    "pill.1":"Собственность с первого дня",
    "pill.2":"Сертифицированное хранение",
    "pill.3":"Международная структура",

    "footer.rights":"© 2026 STIG ROCK. Все права защищены.",
  },
};

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

async function submitLead(form){
  const data = new FormData(form);
  data.append("page_lang", currentLang());
  data.append("page_url", location.href);

  const accessKey = (data.get("access_key") || "").toString();
  const useWeb3 = accessKey && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY";

  if (!useWeb3){
    console.info("[stigrock-lead]", Object.fromEntries(data.entries()));
    await new Promise(r => setTimeout(r, 500));
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

    const result = await submitLead(form);

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

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initForm();
});
