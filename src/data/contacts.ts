export const contactsData = {
  meta: {
    title: "Контакты — ГУРТ",
    description:
      "Контакты предприятия ГУРТ. г. Могилёв, ул. Промышленная, 15. Телефон, email, Telegram, Viber. Схема проезда.",
  },
  hero: {
    eyebrow: "Связь с нами",
    title: "Контакты",
    subtitle:
      "Работаем с 8:00 до 17:00 по будням. Ответим на вопрос или рассчитаем стоимость детали в течение 1 рабочего дня.",
  },

  company: {
    name: 'ООО "ГУРТ"',
    unp: "490291234",
    address: "212030, Республика Беларусь, г. Могилёв, ул. Промышленная, д. 15",
    addressShort: "г. Могилёв, ул. Промышленная, 15",
    workingHours: "Пн–Пт: 08:00–17:00, Сб–Вс: выходные",
    bankDetails: {
      bank: 'ОАО "БПС-Сбербанк"',
      account: "BY12BPSB30121234567890000000",
      bic: "BPSBBY2X",
    },
  },

  contacts: [
    {
      type: "phone",
      label: "Телефон",
      value: "+375 (29) 123-45-67",
      href: "tel:+375291234567",
      note: "Вызов, SMS, WhatsApp",
    },
    {
      type: "phone2",
      label: "Телефон (офис)",
      value: "+375 (0222) 23-45-67",
      href: "tel:+375222234567",
      note: "Стационарный",
    },
    {
      type: "email",
      label: "Email",
      value: "info@gurt-machining.by",
      href: "mailto:info@gurt-machining.by",
      note: "Для заявок и чертежей",
    },
    {
      type: "telegram",
      label: "Telegram",
      value: "@gurt_by",
      href: "https://t.me/gurt_by",
      note: "Быстрый ответ",
    },
    {
      type: "viber",
      label: "Viber",
      value: "+375 (29) 123-45-67",
      href: "viber://chat?number=%2B375291234567",
      note: "Чат и файлы",
    },
  ],

  map: {
    lat: 53.9045,
    lng: 30.3408,
    zoom: 15,
    address: "ул. Промышленная, 15, Могилёв",
  },

  directions: [
    "От ж/д вокзала: автобус №12 до остановки «Промышленная», затем 5 минут пешком",
    "Автомобилем: со стороны Минска по Брестскому шоссе, поворот на ул. Промышленную",
    "Есть парковка для автомобилей и грузовых фургонов",
  ],

  form: {
    title: "Отправить запрос",
    subtitle: "Прикрепите чертёж или опишите задачу. Ответим с расчётом стоимости.",
    fields: [
      { name: "name", label: "Ваше имя", type: "text", required: true },
      { name: "company", label: "Компания", type: "text", required: false },
      { name: "phone", label: "Телефон", type: "tel", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "message", label: "Описание задачи / чертёж", type: "textarea", required: true },
    ],
    submitButton: "Отправить запрос",
    note: "Принимаем файлы DWG, DXF, STEP, PDF, JPG до 10 МБ",
  },
} as const;
