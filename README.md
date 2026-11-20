# STIG ROCK — Landing (petermac)

Статичный лендинг в стиле stigrock.com с формой захвата. После отправки формы пользователь редиректится на реферальную ссылку `https://app.stigrock.com/user/register?reference=petermac`.

## Файлы

- `index.html` — разметка
- `styles.css` — стили (dark, премиум, кремово-золотой акцент)
- `script.js` — переключатель EN/RU и обработка формы

## Как запустить локально

Просто откройте `index.html` в браузере (двойной клик). Или:

```powershell
# Из папки проекта:
Start-Process .\index.html
```

## Куда приходят заявки

Сейчас форма работает в **тестовом режиме**: показывает «Спасибо» и редиректит на реф-ссылку, а данные выводит в консоль браузера (F12 → Console) под тегом `[stigrock-lead]`.

### Чтобы заявки приходили на почту (когда создашь домен + email):

1. Зарегистрируйся на [web3forms.com](https://web3forms.com) (бесплатно, без кода).
2. Укажи туда свою почту → получишь **Access Key** (строка типа `abc12345-...`).
3. В `index.html` найди строку:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
   ```
   и подставь свой ключ вместо `YOUR_WEB3FORMS_ACCESS_KEY`.

Всё — заявки начнут падать на почту (имя, Telegram/WhatsApp, email, телефон, язык страницы).

Если хочешь другого провайдера (Formspree, Getform, свой скрипт) — логика в `script.js` → функция `submitLead()`, замени на свой fetch.

## Куда залить

Любой статический хостинг:
- **Cloudflare Pages / Netlify / Vercel** — перетащить папку, получить домен за минуту.
- **Свой VPS / хостинг** — положить все 3 файла в корень домена.

Домен подключишь в панели выбранного хостинга.

## Что внутри

- Hero с крупным заголовком и 3 бейджами (Ownership / Structure / Overview).
- Секции: The System, About, Security.
- Форма захвата с полями **Name / Telegram–WhatsApp / Email / Phone** + чекбокс согласия + honeypot от ботов.
- FAQ (5 вопросов).
- Футер.
- Переключатель **EN / RU** (сохраняется в localStorage).
- Адаптив под мобильные.
