export const categories = () =>
  useState("categories", () => [
    {
      label: "Saglyk we derman",
      category: "category/medicine",
      icon: "/menu/menu-medicine.svg",

      items: [
        { title: "Agyry aýyryjy", subcategory: "painkiller" },
        { title: "Witaminler", subcategory: "vitamins" },
        { title: "Dümew", subcategory: "flu" },
      ],
    },
    {
      label: "Lukmançylyk enjamlary",
      category: "category/doctor",
      icon: "/menu/doctor-1.svg",

      items: [
        { title: "Stetoskop", subcategory: "fonendoskop" },
        { title: "Gan basyşyňy ölçeýän ejnam", subcategory: "tonometr" },
        { title: "Termometr", subcategory: "termometr" },
      ],
    },
    {
      label: "Maýýyplar üçin enjamlar",
      category: "category/disabilities",
      icon: "/menu/wheelchair-1.svg",

      items: [
        { title: "Maýyplar üçin otyrgyçlar", subcategory: "wheelchairs" },
        { title: "Eşidiş enjamlar", subcategory: "hearing_aid" },
        { title: "Pişek", subcategory: "crutches" },
      ],
    },
  ]);
