import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Categories = () => {
  const categories = [
    {
      name_tm: "Menyu",
      name_ru: "Menyu",
      slug: "/Categories/test",
      type: null,
      icon: "http://95.142.37.39:8080/assets/images/defaults/category.png",
      categories: [
        {
          id: 90,
          slug: "gyz-gelin-3487",
          name_tm: "Menyu",
          name_ru: "Menyu",
          type: null,
          categories: [
            {
              id: 100,
              slug: "/Categories/test",
              name_tm: "Sub menyu",
              name_ru: "Sub menyu",
              type: null,
              categories: [],
            },
            {
              id: 100,
              slug: "/Categories/test",
              name_tm: "Sub menyu 2",
              name_ru: "Sub menyu 2",
              type: null,
              categories: [],
            },
          ],
        },
      ],
    },
  ];
  // const categories = [
  //   {
  //     name_tm: "Zenan",
  //     name_ru: "Женский",
  //     slug: "zenan",
  //     type: null,
  //     icon: "http://95.142.37.39:8080/assets/images/defaults/category.png",
  //     categories: [
  //       {
  //         id: 90,
  //         slug: "gyz-gelin-3487",
  //         name_tm: "Gyz-gelin",
  //         name_ru: "Женщинам",
  //         type: null,
  //         categories: [
  //           {
  //             id: 100,
  //             slug: "koynekler-we-sarafanlar-1158",
  //             name_tm: "Köýnekler we sarafanlar",
  //             name_ru: "Платья и сарафаны",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 101,
  //             slug: "kombinezon-9500",
  //             name_tm: "Kombinezon",
  //             name_ru: "Комбинезон",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 103,
  //             slug: "bluzka-we-tunika-4000",
  //             name_tm: "Bluzka we Tunika",
  //             name_ru: "Блузка и туник",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 104,
  //             slug: "futbolka-we-mayka-6058",
  //             name_tm: "Futbolka we maýka",
  //             name_ru: "Футболка и майки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 105,
  //             slug: "jeans-9903",
  //             name_tm: "Jeans",
  //             name_ru: "Джинсы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 107,
  //             slug: "balak-2428",
  //             name_tm: "Balak",
  //             name_ru: "Брюки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 116,
  //             slug: "sortik-we-bermuda-2527",
  //             name_tm: "Şortik we Bermuda",
  //             name_ru: "Шортик и Бермуды",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 117,
  //             slug: "koynek-5280",
  //             name_tm: "Köýnek",
  //             name_ru: "Рубашки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 119,
  //             slug: "losina-4547",
  //             name_tm: "Losina",
  //             name_ru: "Лосины",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 120,
  //             slug: "yubka-5666",
  //             name_tm: "Ýubka",
  //             name_ru: "Юбки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 124,
  //             slug: "ziletka",
  //             name_tm: "Žiletka",
  //             name_ru: "Жилетка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 161,
  //             slug: "topik-5636",
  //             name_tm: "Topik",
  //             name_ru: "Топ",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 190,
  //             slug: "jinsowka-3306",
  //             name_tm: "Jinsowka",
  //             name_ru: "Джинсовка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 219,
  //             slug: "penjek-7597",
  //             name_tm: "Penjek",
  //             name_ru: "Пиджак",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 228,
  //             slug: "kofta-2853",
  //             name_tm: "Kofta",
  //             name_ru: "Кофта",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 108,
  //         slug: "gys-esik-3821",
  //         name_tm: "Gyş Eşik",
  //         name_ru: "Зимняя одежда",
  //         type: null,
  //         categories: [
  //           {
  //             id: 30,
  //             slug: "plas-9053",
  //             name_tm: "Plaş",
  //             name_ru: "Плаш",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 109,
  //             slug: "kurtka-we-puhowik",
  //             name_tm: "Kurtka we puhowik",
  //             name_ru: "Куртка и пуховик",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 118,
  //             slug: "switer-5631",
  //             name_tm: "Switer",
  //             name_ru: "Свитеры",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 122,
  //             slug: "zempir",
  //             name_tm: "Žempir",
  //             name_ru: "Джемпер",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 123,
  //             slug: "kardigan-4687",
  //             name_tm: "Kardigan",
  //             name_ru: "Кардиган",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 129,
  //             slug: "wetrowka-4395",
  //             name_tm: "Wetrowka",
  //             name_ru: "Ветровка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 175,
  //             slug: "tolstowka-6297",
  //             name_tm: "Tolstowka",
  //             name_ru: "Толстовки",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 125,
  //         slug: "sport",
  //         name_tm: "Sport",
  //         name_ru: "Спорт",
  //         type: null,
  //         categories: [
  //           {
  //             id: 126,
  //             slug: "sport-topik-9726",
  //             name_tm: "Sport topik",
  //             name_ru: "Спортивный топ",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 196,
  //             slug: "sport-balak-3795",
  //             name_tm: "Sport balak",
  //             name_ru: "Спортивные брюки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 220,
  //             slug: "sortik-7234",
  //             name_tm: "Şortik",
  //             name_ru: "Шорты",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 130,
  //         slug: "icki-esik",
  //         name_tm: "Içki eşik",
  //         name_ru: "Нижнее белье",
  //         type: null,
  //         categories: [
  //           {
  //             id: 121,
  //             slug: "pijama-we-gijelik-5112",
  //             name_tm: "Pijama we Gijelik",
  //             name_ru: "Ночное белье и пижамы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 131,
  //             slug: "byustgalter-8827",
  //             name_tm: "Býustgalter",
  //             name_ru: "Бюстгальтер",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 132,
  //             slug: "trusy-1521",
  //             name_tm: "Trusy",
  //             name_ru: "Трусы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 134,
  //             slug: "jorap-3904",
  //             name_tm: "Jorap",
  //             name_ru: "Носки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 183,
  //             slug: "kolgotka-9816",
  //             name_tm: "Kolgotka",
  //             name_ru: "Колготки",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 193,
  //         slug: "aksessuarlar-3919",
  //         name_tm: "Aksessuarlar",
  //         name_ru: "Аксессуары",
  //         type: null,
  //         categories: [
  //           {
  //             id: 142,
  //             slug: "sumka-9283",
  //             name_tm: "Sumka",
  //             name_ru: "Сумка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 143,
  //             slug: "aynek-8500",
  //             name_tm: "Äýnek",
  //             name_ru: "Очки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 144,
  //             slug: "gapjyk-5890",
  //             name_tm: "Gapjyk",
  //             name_ru: "Кошелек",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 145,
  //             slug: "yaglyk-we-sarf-5649",
  //             name_tm: "Ýaglyk we şarf",
  //             name_ru: "Платок и шарфы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 146,
  //             slug: "sapka-8853",
  //             name_tm: "Şapka",
  //             name_ru: "Шапки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 147,
  //             slug: "gusak-1349",
  //             name_tm: "Guşak",
  //             name_ru: "Ремни",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 148,
  //             slug: "sac-aksessuarlary-5429",
  //             name_tm: "Saç aksessuarlary",
  //             name_ru: "Аксессуары для волос",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 149,
  //             slug: "braslet-1078",
  //             name_tm: "Braslet",
  //             name_ru: "Браслеты",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 150,
  //             slug: "kolye-2751",
  //             name_tm: "Kolýe",
  //             name_ru: "Колье",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 151,
  //             slug: "yuzuk-5219",
  //             name_tm: "Ýüzük",
  //             name_ru: "Кольцо",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 152,
  //             slug: "gulakhalka-8937",
  //             name_tm: "Gulakhalka",
  //             name_ru: "Серёжки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 153,
  //             slug: "duhi-7191",
  //             name_tm: "Duhi",
  //             name_ru: "Духи",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 229,
  //             slug: "slyapa-3086",
  //             name_tm: "Şlýapa",
  //             name_ru: "Шляпа",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 221,
  //         slug: "gozellik-6752",
  //         name_tm: "Gözellik",
  //         name_ru: "Для красоты",
  //         type: null,
  //         categories: [
  //           {
  //             id: 222,
  //             slug: "parfyumeriya-1877",
  //             name_tm: "Parfýumeriýa",
  //             name_ru: "Парфюмерия",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 224,
  //             slug: "pomada-6774",
  //             name_tm: "Pomada",
  //             name_ru: "Помада",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 225,
  //         slug: "plyaz-geyimleri-7926",
  //         name_tm: "Plýaž geýimleri",
  //         name_ru: "Пляжные одежды",
  //         type: null,
  //         categories: [
  //           {
  //             id: 113,
  //             slug: "kupalnik-1011",
  //             name_tm: "Kupalnik",
  //             name_ru: "Купальники",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name_tm: "Erkek",
  //     name_ru: "Мужской",
  //     slug: "erkek-4173",
  //     type: null,
  //     icon: "http://95.142.37.39:8080/assets/images/defaults/category.png",
  //     categories: [
  //       {
  //         id: 1,
  //         slug: "egin-esikler-9240",
  //         name_tm: "Egin eşikler",
  //         name_ru: "Одежды",
  //         type: null,
  //         categories: [
  //           {
  //             id: 5,
  //             slug: "penjek-1008",
  //             name_tm: "Penjek",
  //             name_ru: "Пиджак",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 7,
  //             slug: "balak-5255",
  //             name_tm: "Balak",
  //             name_ru: "Брюки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 8,
  //             slug: "kastyum-balak-1735",
  //             name_tm: "Kastýum Balak",
  //             name_ru: "Костюм и брюки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 9,
  //             slug: "jaket-2083",
  //             name_tm: "Jaket",
  //             name_ru: "Жакет",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 11,
  //             slug: "futbolka-9164",
  //             name_tm: "Futbolka",
  //             name_ru: "Футболки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 13,
  //             slug: "kardigan-3763",
  //             name_tm: "Kardigan",
  //             name_ru: "Кардиган",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 20,
  //             slug: "jeans-2770",
  //             name_tm: "Jeans",
  //             name_ru: "Джинсы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 168,
  //             slug: "koynek-3413",
  //             name_tm: "Köýnek",
  //             name_ru: "Рубашка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 172,
  //             slug: "ziletka-3452",
  //             name_tm: "Žiletka",
  //             name_ru: "Жилетка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 173,
  //             slug: "batnik-6698",
  //             name_tm: "Batnik",
  //             name_ru: "Батник",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 177,
  //             slug: "jinsowka-8261",
  //             name_tm: "Jinsowka",
  //             name_ru: "Джинсовка",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         slug: "ayakgap-4208",
  //         name_tm: "Aýakgap",
  //         name_ru: "Обувь",
  //         type: null,
  //         categories: [
  //           {
  //             id: 26,
  //             slug: "klassika",
  //             name_tm: "Klassika",
  //             name_ru: "Классика",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 27,
  //             slug: "sypbyk-5362",
  //             name_tm: "Şypbyk",
  //             name_ru: "Шлёпки",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 3,
  //         slug: "gysgy-geyim",
  //         name_tm: "Gyşgy geýim",
  //         name_ru: "Зимние одежды",
  //         type: null,
  //         categories: [
  //           {
  //             id: 15,
  //             slug: "tolstowka-6367",
  //             name_tm: "Tolstowka",
  //             name_ru: "Толстовки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 28,
  //             slug: "kurtka-5920",
  //             name_tm: "Kurtka",
  //             name_ru: "Куртки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 29,
  //             slug: "palto-6340",
  //             name_tm: "Palto",
  //             name_ru: "Пальто",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 182,
  //             slug: "switer-5625",
  //             name_tm: "Switer",
  //             name_ru: "Свитеры",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 170,
  //         slug: "sport-5293",
  //         name_tm: "Sport",
  //         name_ru: "Спорт",
  //         type: null,
  //         categories: [
  //           {
  //             id: 16,
  //             slug: "sortik-1825",
  //             name_tm: "Şortik",
  //             name_ru: "Шортик",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 171,
  //             slug: "balak-4272",
  //             name_tm: "Balak",
  //             name_ru: "Брюки",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 178,
  //         slug: "icki-esik-2610",
  //         name_tm: "Içki eşik",
  //         name_ru: "Нижнее белье",
  //         type: null,
  //         categories: [
  //           {
  //             id: 179,
  //             slug: "jorap-9100",
  //             name_tm: "Jorap",
  //             name_ru: "Носки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 186,
  //             slug: "bokser-2355",
  //             name_tm: "Bokser",
  //             name_ru: "Трусы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 192,
  //             slug: "mayka-6743",
  //             name_tm: "Maýka",
  //             name_ru: "Майки",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 204,
  //         slug: "aksessuarlar-1761",
  //         name_tm: "Aksessuarlar",
  //         name_ru: "Аксессуары",
  //         type: null,
  //         categories: [
  //           {
  //             id: 205,
  //             slug: "sarf-4014",
  //             name_tm: "Şarf",
  //             name_ru: "Шарф",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 206,
  //             slug: "duhi-4672",
  //             name_tm: "Duhi",
  //             name_ru: "Духи",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 207,
  //             slug: "bilezik-9779",
  //             name_tm: "Bilezik",
  //             name_ru: "Браслеты",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 208,
  //             slug: "gol-iligi-7935",
  //             name_tm: "Gol iligi",
  //             name_ru: "Запонки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 209,
  //             slug: "gapjyk-8227",
  //             name_tm: "Gapjyk",
  //             name_ru: "Кошелек",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 210,
  //             slug: "gusak-7827",
  //             name_tm: "Guşak",
  //             name_ru: "Ремни",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 211,
  //             slug: "yaglyk-we-sarf-1964",
  //             name_tm: "Ýaglyk we şarf",
  //             name_ru: "Плоток и шарфы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 212,
  //             slug: "galstuk-2868",
  //             name_tm: "Galstuk",
  //             name_ru: "Галстук",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 216,
  //             slug: "cemodan-3298",
  //             name_tm: "Çemodan",
  //             name_ru: "Чемоданы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 217,
  //             slug: "butonerka-2834",
  //             name_tm: "Butonerka",
  //             name_ru: "Бутоньерка",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name_tm: "Çaga",
  //     name_ru: "Детский",
  //     slug: "caga-8025",
  //     type: null,
  //     icon: "http://95.142.37.39:8080/assets/images/categories/Çaga.webp",
  //     categories: [
  //       {
  //         id: 137,
  //         slug: "egin-esik-6966",
  //         name_tm: "Egin eşik",
  //         name_ru: "Одежда",
  //         type: null,
  //         categories: [
  //           {
  //             id: 21,
  //             slug: "leggins-3837",
  //             name_tm: "Leggins",
  //             name_ru: "Легинсы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 138,
  //             slug: "balak-4197",
  //             name_tm: "Balak",
  //             name_ru: "Брюки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 139,
  //             slug: "koynekler-4939",
  //             name_tm: "Köýnekler",
  //             name_ru: "Рубашки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 140,
  //             slug: "futbolka-4073",
  //             name_tm: "Futbolka",
  //             name_ru: "Футболка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 160,
  //             slug: "sortik-5254",
  //             name_tm: "Şortik",
  //             name_ru: "Шорты",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 169,
  //             slug: "kombinezon-4533",
  //             name_tm: "Kombinezon",
  //             name_ru: "Комбинезон",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 174,
  //             slug: "kardigan-4289",
  //             name_tm: "Kardigan",
  //             name_ru: "Кардиган",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 176,
  //             slug: "jinsowka-7758",
  //             name_tm: "Jinsowka",
  //             name_ru: "Джинсовка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 180,
  //             slug: "gyz-yubka-6451",
  //             name_tm: "Gyz ýubka",
  //             name_ru: "Юбка для девочек",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 185,
  //             slug: "mayka-5355",
  //             name_tm: "Maýka",
  //             name_ru: "Майка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 189,
  //             slug: "kupalnik-3130",
  //             name_tm: "Kupalnik",
  //             name_ru: "Купальники",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 194,
  //             slug: "bluzka-8081",
  //             name_tm: "Bluzka",
  //             name_ru: "Блузка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 195,
  //             slug: "jinsy-1639",
  //             name_tm: "Jinsy",
  //             name_ru: "Джинсы",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 227,
  //             slug: "bodi-2551",
  //             name_tm: "Bodi",
  //             name_ru: "Боди",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 230,
  //             slug: "batnik-6489",
  //             name_tm: "Batnik",
  //             name_ru: "Батник",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 158,
  //         slug: "gysky-esik-3919",
  //         name_tm: "Gyşky eşik",
  //         name_ru: "Zimniy",
  //         type: null,
  //         categories: [
  //           {
  //             id: 159,
  //             slug: "tolstowka-5882",
  //             name_tm: "Tolstowka",
  //             name_ru: "Tolstowka",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 181,
  //             slug: "switer-5246",
  //             name_tm: "Switer",
  //             name_ru: "Свитеры",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 214,
  //             slug: "kurtka-9917",
  //             name_tm: "Kurtka",
  //             name_ru: "Куртки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 215,
  //             slug: "sapka-4455",
  //             name_tm: "Şapka",
  //             name_ru: "Шапки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 226,
  //             slug: "palto-5796",
  //             name_tm: "Palto",
  //             name_ru: "Пальто",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //       {
  //         id: 197,
  //         slug: "aksessuarlar-3689",
  //         name_tm: "Aksessuarlar",
  //         name_ru: "Аксессуары",
  //         type: null,
  //         categories: [
  //           {
  //             id: 133,
  //             slug: "jorap-4674",
  //             name_tm: "Jorap",
  //             name_ru: "Носки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 198,
  //             slug: "galstuk-9023",
  //             name_tm: "Galstuk",
  //             name_ru: "Галстук",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 199,
  //             slug: "sac-aksessuarlary-2038",
  //             name_tm: "Saç aksessuarlary",
  //             name_ru: "Для волос",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 200,
  //             slug: "kepka-1668",
  //             name_tm: "Kepka",
  //             name_ru: "Кепка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 201,
  //             slug: "slyapa-6872",
  //             name_tm: "Şlýapa",
  //             name_ru: "Шляпа",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 202,
  //             slug: "aynek-6818",
  //             name_tm: "Äýnek",
  //             name_ru: "Очки",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 213,
  //             slug: "sumka-4521",
  //             name_tm: "Sumka",
  //             name_ru: "Сумка",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 231,
  //             slug: "onluk-9217",
  //             name_tm: "Öňlük",
  //             name_ru: "Слюнявчики",
  //             type: null,
  //             categories: [],
  //           },
  //           {
  //             id: 232,
  //             slug: "parfyumeriya-6777",
  //             name_tm: "Parfýumeriýa",
  //             name_ru: "Парфюмерия",
  //             type: null,
  //             categories: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const route = useRouter();
  return (
    // <nav className="border-t">
    //   <div className="my-5 border-b flex overflow-x-auto">
    //     <CategoryMenu image="/categories/1.jpg" name="Dining room" />
    //     <CategoryMenu image="/categories/2.jpg" name="Bedrom" />
    //     <CategoryMenu image="/categories/3.jpg" name="Living room" />
    //     <CategoryMenu image="/categories/4.jpg" name="Teen room" />
    //     <CategoryMenu image="/categories/1.jpg" name="Corner sets" />
    //     <CategoryMenu image="/categories/2.jpg" name="Bed & Bedrom set" />
    //     <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
    //     <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
    //     <CategoryMenu image="/categories/1.jpg" name="Room merge" />
    //     <CategoryMenu image="/categories/2.jpg" name="Big data" />
    //     <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
    //     <CategoryMenu image="/categories/2.jpg" name="Bed & Bedrom set" />
    //     <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
    //     <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
    //     <CategoryMenu image="/categories/1.jpg" name="Room merge" />
    //     <CategoryMenu image="/categories/2.jpg" name="Big data" />
    //     <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
    //   </div>
    // </nav>

    <aside className="navbar">
      <nav>
        {categories &&
          categories.map((cat) => {
            return (
              <ul key={cat.id} className="text-center px-0 mx-0">
                <li>
                  <div className=" font-bold px-0 nav__link cursor-pointer">
                    {route.locale == "ru" ? cat.name_ru : cat.name_tm}
                  </div>
                  <ul className="text-left">
                    <div className="grid grid-cols-12 pt-2 border-b">
                      <div
                        // content-between
                        className="col-span-12 flex flex-col overflow-y-auto max-h-96 flex-wrap "
                      >
                        {cat.categories &&
                          cat.categories.map((sub) => {
                            return (
                              <li
                                key={sub.name_tm}
                                className="col-span-3 xl:col-span-2 mx-2"
                              >
                                <div className="font-bold">
                                  {sub.type == "market" ? (
                                    <a className="p-0">
                                      {route.locale == "ru"
                                        ? sub.name_ru
                                        : sub.name_tm}
                                    </a>
                                  ) : (
                                    <Link href={`${sub.slug}` || "/"}>
                                      <a className="p-0">
                                        {route.locale == "ru"
                                          ? sub.name_ru
                                          : sub.name_tm}
                                      </a>
                                    </Link>
                                  )}
                                </div>
                                {sub.categories &&
                                  sub.categories.map((sub) => {
                                    return (
                                      <li
                                        key={sub.name_tm}
                                        className="col-span-3 xl:col-span-3 p-0 m-0"
                                      >
                                        <a
                                          className="font-normal p-0 m-0"
                                          href={
                                            sub.type == "market"
                                              ? "/market/" + sub.slug
                                              : "" + sub.slug
                                          }
                                        >
                                          <a className="p-0">
                                            {route.locale == "ru"
                                              ? sub.name_ru
                                              : sub.name_tm}
                                          </a>
                                        </a>
                                      </li>
                                    );
                                  })}
                              </li>
                            );
                          })}
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>
            );
          })}
      </nav>
    </aside>
  );
};

export default Categories;

// import { Swiper, SwiperSlide } from "swiper/react";
// import CategoryMenu from "./CategoryMenu";

// const Categories = () => {
//   return (
//     <nav className="border-t">
//       <div className="my-5 border-b">
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={5}
//           breakpoints={{
//             480: {
//               slidesPerView: 4,
//             },
//             640: {
//               slidesPerView: 6,
//             },
//             960: {
//               slidesPerView: 8,
//             },
//             1200: {
//               slidesPerView: 9,
//             },
//             1400: {
//               slidesPerView: 10,
//             },
//           }}
//         >
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Dining room" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Bedrom" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Living room" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Teen room" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Corner sets" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Bed & Bedrom set" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Room merge" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Big data" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Room merge" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Big data" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/1.jpg" name="Room merge" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/2.jpg" name="Big data" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/3.jpg" name="Toyota Corollo" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <CategoryMenu image="/categories/4.jpg" name="Mercedes benz" />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </nav>
//   );
// };

// export default Categories;
