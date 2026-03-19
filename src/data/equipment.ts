export const equipmentData = {
  meta: {
    title: "Парк оборудования — ГУРТ",
    description:
      "15+ единиц ЧПУ и универсальных станков. Токарные, фрезерные и шлифовальные станки для обработки деталей любой сложности.",
  },
  hero: {
    eyebrow: "Производство",
    title: "Парк оборудования",
    subtitle:
      "15+ единиц современного и универсального оборудования. Производительность и точность для любых задач — от опытного образца до серийного производства.",
  },

  stats: [
    { value: "15+", label: "Станков" },
    { value: "8", label: "Единиц ЧПУ" },
    { value: "500", unit: "мм", label: "Макс. диаметр (точение)" },
    { value: "2024", label: "Последнее обновление парка" },
  ],

  categories: [
    {
      id: "turning",
      name: "Токарные станки",
      items: [
        {
          model: "DMTG CKE6150Z",
          manufacturer: "DMTG (Китай)",
          type: "Токарный ЧПУ",
          cnc: true,
          specs: [
            { label: "Макс. диаметр обработки", value: "Ø 500 мм" },
            { label: "Длина обработки", value: "1500 мм" },
            { label: "Мощность шпинделя", value: "15 кВт" },
            { label: "ЧПУ", value: "Fanuc 0i-TF" },
          ],
        },
        {
          model: "DMTG CDE6250Z",
          manufacturer: "DMTG (Китай)",
          type: "Токарный ЧПУ",
          cnc: true,
          specs: [
            { label: "Макс. диаметр обработки", value: "Ø 500 мм" },
            { label: "Длина обработки", value: "2000 мм" },
            { label: "Мощность шпинделя", value: "18.5 кВт" },
            { label: "ЧПУ", value: "Fanuc 0i-TF" },
          ],
        },
        {
          model: "ТВ-320",
          manufacturer: "Завод Красный Пролетарий",
          type: "Токарный универсальный",
          cnc: false,
          specs: [
            { label: "Макс. диаметр над суппортом", value: "Ø 200 мм" },
            { label: "Длина обработки", value: "750 мм" },
            { label: "Конус шпинделя", value: "Морзе 4" },
            { label: "Число оборотов", value: "20–2000 об/мин" },
          ],
        },
        {
          model: "ДИП-500",
          manufacturer: "Рязанский СЗ",
          type: "Токарный универсальный",
          cnc: false,
          specs: [
            { label: "Макс. диаметр над станиной", value: "Ø 800 мм" },
            { label: "Длина обработки", value: "3000 мм" },
            { label: "Мощность", value: "22 кВт" },
            { label: "Класс точности", value: "П (повышенный)" },
          ],
        },
      ],
    },
    {
      id: "milling",
      name: "Фрезерные станки",
      items: [
        {
          model: "VMC850",
          manufacturer: "DMTG (Китай)",
          type: "Фрезерный ЧПУ (ВМЦ)",
          cnc: true,
          specs: [
            { label: "Рабочее поле X×Y×Z", value: "850×500×500 мм" },
            { label: "Шпиндель (макс.)", value: "8000 об/мин" },
            { label: "Мощность шпинделя", value: "11 кВт" },
            { label: "ЧПУ", value: "Siemens 828D" },
          ],
        },
        {
          model: "VMC650",
          manufacturer: "DMTG (Китай)",
          type: "Фрезерный ЧПУ (ВМЦ) с 4 осью",
          cnc: true,
          specs: [
            { label: "Рабочее поле X×Y×Z", value: "650×400×450 мм" },
            { label: "Ось A (поворотная)", value: "0–360°" },
            { label: "Шпиндель (макс.)", value: "6000 об/мин" },
            { label: "ЧПУ", value: "Fanuc 0i-MF" },
          ],
        },
        {
          model: "6Р12",
          manufacturer: "Горьковский СЗ",
          type: "Вертикально-фрезерный",
          cnc: false,
          specs: [
            { label: "Размер стола", value: "320×1250 мм" },
            { label: "Ход стола X / Y / Z", value: "800 / 250 / 420 мм" },
            { label: "Конус шпинделя", value: "ISO40" },
            { label: "Мощность", value: "7.5 кВт" },
          ],
        },
      ],
    },
    {
      id: "grinding",
      name: "Шлифовальные станки",
      items: [
        {
          model: "3М151",
          manufacturer: "Завод «Красный Борец»",
          type: "Круглошлифовальный",
          cnc: false,
          specs: [
            { label: "Макс. диаметр", value: "Ø 200 мм" },
            { label: "Длина шлифования", value: "700 мм" },
            { label: "Шероховатость Ra", value: "0.32 мкм" },
            { label: "Класс точности станка", value: "В (высокий)" },
          ],
        },
        {
          model: "3Г71",
          manufacturer: "Оршанский СЗ",
          type: "Плоскошлифовальный",
          cnc: false,
          specs: [
            { label: "Размер стола", value: "200×630 мм" },
            { label: "Точность плоскостности", value: "0.005 мм" },
            { label: "Шероховатость Ra", value: "0.16 мкм" },
            { label: "Магнитный патрон", value: "Электромагнитный" },
          ],
        },
      ],
    },
    {
      id: "special",
      name: "Специализированное оборудование",
      items: [
        {
          model: "5К32А",
          manufacturer: "Егорьевский СЗ",
          type: "Зубофрезерный",
          cnc: false,
          specs: [
            { label: "Макс. диаметр нарезаемой шестерни", value: "Ø 320 мм" },
            { label: "Макс. модуль", value: "m=6" },
            { label: "Угол наклона зубьев", value: "до 60°" },
            { label: "Класс точности", value: "6–9 степень" },
          ],
        },
        {
          model: "CMM TESA",
          manufacturer: "TESA (Швейцария)",
          type: "Координатно-измерительная машина",
          cnc: false,
          specs: [
            { label: "Рабочая зона", value: "500×500×450 мм" },
            { label: "Погрешность измерения", value: "±0.002 мм" },
            { label: "Тип зондирования", value: "Контактное (Renishaw)" },
            { label: "Программное обеспечение", value: "PC-DMIS" },
          ],
        },
      ],
    },
  ],
} as const;
