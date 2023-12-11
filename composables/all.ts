export const useAll = () =>
  useState("all", () => [
    {
      label: "Saglyk we derman",
      title: "Trimol ger. #100",
      img: "/items/menu-medicine.svg",
      category: "medicine",
      subcategory: "painkiller",
      price: Math.ceil(Math.random() * 100),
      id: 1,
      pharmacy: "Şypaly Çomuç",
      queries: ["trimol", "Trimol", "тримол", "Тримол"],
    },
    {
      label: "Saglyk we derman",

      title: "Askorutin ger. # 10 (Navbahor senagaty)",
      img: "/items/menu-medicine.svg",

      category: "medicine",
      subcategory: "vitamins",
      price: Math.ceil(Math.random() * 100),
      id: 2,
      pharmacy: "Tebip",
      queries: ["askorutin", "Askorutin", "аскорутин", "Аскорутин"],
    },
    {
      label: "Saglyk we derman",

      title: "Antigrippin ger. efferent (Greýfrut) No.10",
      img: "/items/menu-medicine.svg",

      category: "medicine",
      subcategory: "flu",
      price: Math.ceil(Math.random() * 100),
      id: 3,
      pharmacy: "Mähirli ýollar",
      queries: ["antigrippin", "Antigrippin ", "антигриппин", "Антигриппин"],
    },
    {
      label: "Saglyk we derman",

      title: "Trimol ger. #100",
      img: "/items/menu-medicine.svg",

      category: "medicine",
      subcategory: "painkiller",
      price: Math.ceil(Math.random() * 100),
      id: 1,
      pharmacy: "Tebip",
      queries: ["trimol", "Trimol", "тримол", "Тримол"],
    },
    {
      label: "Saglyk we derman",

      title: "Askorutin ger. # 10 (Navbahor senagaty)",
      img: "/items/menu-medicine.svg",

      category: "medicine",
      subcategory: "vitamins",
      price: Math.ceil(Math.random() * 100),
      id: 2,
      pharmacy: "Mähirli ýollar",
      queries: ["askorutin", "Askorutin", "аскорутин", "Аскорутин"],
    },
    {
      label: "Saglyk we derman",

      title: "Antigrippin ger. efferent (Greýfrut) No.10",
      img: "/items/menu-medicine.svg",

      category: "medicine",
      subcategory: "flu",
      price: Math.ceil(Math.random() * 100),
      id: 3,
      pharmacy: "Şypaly Çomuç",
      queries: ["antigrippin", "Antigrippin ", "антигриппин", "Антигриппин"],
    },
    {
      label: "Lukmançylyk enjamlary",
      title: "Lukmançylyk fonendoskop stetoskop CS-404",
      img: "/items/doctor-1.svg",

      category: "doctor",
      subcategory: "fonendoskop",
      price: Math.ceil(Math.random() * 100),
      id: 4,
      pharmacy: "Şypaly Çomuç",
      queries: ["fonendoskop", "Fonendoskop", "фонендоскоп", "Фонендоскоп"],
    },
    {
      label: "Lukmançylyk enjamlary",

      title: "Lukmançylyk simapsyz termometr - beden termometri",
      img: "/items/doctor-1.svg",

      category: "doctor",
      subcategory: "termometr",
      price: Math.ceil(Math.random() * 100),
      id: 5,
      pharmacy: "Tebip",
      queries: ["termometr", "Termometr", "Термометр", "термометр"],
    },
    {
      label: "Lukmançylyk enjamlary",

      title:
        "Gan basyşyny we impuls ELECTRONIC RAK 289 ölçemek üçin goluňyza awtomatiki elektron tonometr",
      img: "/items/doctor-1.svg",

      category: "doctor",
      subcategory: "tonometr",
      price: Math.ceil(Math.random() * 100),
      id: 6,
      pharmacy: "Mähirli ýollar",
      queries: ["tonometr", "Tonometr", "Тонометр", "тонометр"],
    },
    {
      label: "Lukmançylyk enjamlary",

      title: "Lukmançylyk fonendoskop stetoskop CS-404",
      img: "/items/doctor-1.svg",

      category: "doctor",
      subcategory: "fonendoskop",
      price: Math.ceil(Math.random() * 100),
      id: 7,
      pharmacy: "Tebip",
      queries: ["fonendoskop", "Fonendoskop", "фонендоскоп", "Фонендоскоп"],
    },
    {
      label: "Lukmançylyk enjamlary",

      title: "Lukmançylyk simapsyz termometr - beden termometri",
      img: "/items/doctor-1.svg",

      category: "doctor",
      subcategory: "termometr",
      price: Math.ceil(Math.random() * 100),
      id: 8,
      pharmacy: "Mähirli ýollar",
      queries: ["termometr", "Termometr", "Термометр", "термометр"],
    },
    {
      label: "Lukmançylyk enjamlary",

      title:
        "Gan basyşyny we impuls ELECTRONIC RAK 289 ölçemek üçin goluňyza awtomatiki elektron tonometr",
      img: "/items/doctor-1.svg",

      category: "doctor",
      subcategory: "tonometr",
      price: Math.ceil(Math.random() * 100),
      id: 9,
      pharmacy: "Şypaly Çomuç",
      queries: ["tonometr", "Tonometr", "Тонометр", "тонометр"],
    },
    {
      label: "Maýyplar üçin enjamlar",
      title: "Tigirli oturgyç BARRY LTD Barry W5",
      img: "/items/wheelchair-1.svg",

      category: "disabilities",
      subcategory: "wheelchairs",
      price: Math.ceil(Math.random() * 100),
      id: 10,
      pharmacy: "Şypaly Çomuç",
      queries: [
        "tigirli otyrgyç",
        "Inýalid kolýaska",
        "коляска",
        "инвалидная коляска",
      ],
    },
    {
      label: "Maýyplar üçin enjamlar",

      title:
        "Pişek ulular we garrylar üçin 134-154 sm sazlanyp bilinýän beýikligi 10023",
      img: "/items/wheelchair-1.svg",

      category: "disabilities",
      subcategory: "crutches",
      price: Math.ceil(Math.random() * 100),
      id: 11,
      pharmacy: "Tebip",
      queries: ["pişek", "Pişek", "костыли", "Костыли"],
    },
    {
      label: "Maýyplar üçin enjamlar",

      title: "Eşidiş enjamy Zinbest HAP-20F 3",
      img: "/items/wheelchair-1.svg",

      category: "disabilities",
      subcategory: "hearing_aid",
      price: Math.ceil(Math.random() * 100),
      id: 12,
      pharmacy: "Mähirli ýollar",
      queries: [
        "eşidiş enjam",
        "Eşidiş enjam",
        "Слуховой аппарат",
        "слуховой аппарат",
      ],
    },
    {
      label: "Maýyplar üçin enjamlar",

      title: "Tigirli oturgyç BARRY LTD Barry W5",
      img: "/items/wheelchair-1.svg",

      category: "disabilities",
      subcategory: "wheelchairs",
      price: Math.ceil(Math.random() * 100),
      id: 13,
      pharmacy: "Tebip",
      queries: [
        "tigirli otyrgyç",
        "Inýalid kolýaska",
        "коляска",
        "инвалидная коляска",
      ],
    },
    {
      label: "Maýyplar üçin enjamlar",

      title:
        "Pişek ulular we garrylar üçin 134-154 sm sazlanyp bilinýän beýikligi 10023",
      img: "/items/wheelchair-1.svg",

      category: "disabilities",
      subcategory: "crutches",
      price: Math.ceil(Math.random() * 100),
      id: 14,
      pharmacy: "Mähirli ýollar",
      queries: ["pişek", "Pişek", "костыли", "Костыли"],
    },
    {
      label: "Maýyplar üçin enjamlar",

      title: "Eşidiş enjamy Zinbest HAP-20F 3",
      img: "/items/wheelchair-1.svg",

      category: "disabilities",
      subcategory: "hearing_aid",
      price: Math.ceil(Math.random() * 100),
      id: 15,
      pharmacy: "Şypaly Çomuç",
      queries: [
        "eşidiş enjam",
        "Eşidiş enjam",
        "Слуховой аппарат",
        "слуховой аппарат",
      ],
    },
  ]);
