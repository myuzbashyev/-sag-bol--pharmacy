export const useAllItems = defineStore("allItems", {
  state: () => ({
    items: [
      {
        label: "Saglyk we derman",
        title: "Trimol ger. #100",
        characteristics: {
          substance: "Propifenazon, kofein, parasetamol",
          country: "Hindistan",
          manufacturer: "“Ajanta Pharma Limited”",
          prescription: "Hawa",
          form: "Gerdejikler",
        },

        instructions:
          "Bir gerdejkde bar işjeň maddalar parasetamol 250.0 mg, kofein suwsuz 30.0 mg, propifenazon 150.0 mg, alyjylar krahmal, metil paraben, propil paraben, jelatin, dibasik kalsiý fosfat dihidrat, etil sellýuloza, izopropil alkogoly, arassalanan suw, çalgylar mikrokristal sellýuloza sellýuloza sellýuloz sellýulisi , natriý krahmal glikolat, dibazik kalsiý fosfat dihidrat.",
        img: "/items/menu-medicine.svg",
        category: "medicine",
        subcategory: "painkiller",
        price: Math.ceil(Math.random() * 100),
        id: 1,
        isFav: false,
        pharmacy: "Şypaly Çomuç",
        queries: ["trimol", "Trimol", "тримол", "Тримол"],
      },
      {
        label: "Saglyk we derman",

        title: "Askorutin ger. # 10 (Navbahor senagaty)",
        characteristics: {
          substance: "Askorbin kislotasy",
          country: "Özbegistan",
          dosage: "5mg/50mg",
          manufacturer: "Navbahor-Sanoat",
          prescription: "Yok",
          form: "Gerdejikler",
        },
        instructions:
          "Öňüni almak we bejermek• gipo- we witamin ýetmezçiligi P we C;• gytaklaýyn antikoagulantlary we salisilatlary ulanmak bilen baglanyşykly kapilýar zeperlenmeler.Damar geçirijiliginiň bozulmagy bilen bilelikde keselleriň çylşyrymly bejergisi• gemorragiki diatez;• retinadaky gan akmalar;• kapillarotoksikoz;• radiasiýa keseli;• septiki endokardit;• revmatizm;• glomerulonefrit;• arahnoidit;• allergiki keseller;• gyzamyk;• gyrmyzy gyzzyrma;• tif;• trombositopenik maksat.Doza rejimi Belli bir dermany dolandyrmagyň usuly we dozasy, goýberiliş görnüşine we beýleki faktorlara baglydyr. Iň amatly dozany lukman kesgitleýär. Belli bir dermanyň doza görnüşiniň ulanylyş we dozalar düzgünlerine laýyk gelişine berk gözegçilik etmek zerurdyr.Içerde, 1 planşet ulanyň. Günde 2-3 gezek. Bejerginiň dowamlylygy - 3-4 hepde (dowamlylygy keseliň tebigatyna we bejerginiň netijeliligine bagly). Ters täsiriAllergiki täsirler, dispeptiki näsazlyklar, kelle agyry.",
        img: "/items/menu-medicine.svg",

        category: "medicine",
        subcategory: "vitamins",
        price: Math.ceil(Math.random() * 100),
        id: 2,
        isFav: false,
        pharmacy: "Tebip",
        queries: ["askorutin", "Askorutin", "аскорутин", "Аскорутин"],
      },
      {
        label: "Saglyk we derman",

        title: "Antigrippin ger. efferent (Greýfrut) No.10",
        characteristics: {
          substance:
            "Askorbin kislotasy, parasetamol, kalsiý glýukonat, difenhidramin",
          country: "Polşa",
          manufacturer: "Natur Product Pharma Sp. z o.o.",
          prescription: "Hawa",
          form: "Gerdejikler",
        },
        instructions:
          "Greýfrut tagamly täsirli planşetler tegelek, tekiz, kesilen gyrasy we bir tarapynda gol çyzygy, ak, ak ýa-da krem-ak reňkli, zordan görnüp duran mermerli, belli bir sitrus ysy bar. FARMAKOTERAPEUTIK GROUP, ýiti dem alyş ýokançlyklarynyň we “sowuklamalaryň” (analjezik däl neşe serişdesi + witamin + H1-gistamin reseptor blokatory) alamatlaryny ýok etmek üçin diýmekdir. ATC kody [N02BE51] FARMAKOLOGIK MÜMKINÇILIK Kombinirlenen derman. Parasetamolyň analjezik we antipiretiki täsiri bar; kelleagyry we beýleki agyry görnüşlerini ýok edýär, gyzgyny peseldýär. Askorbin kislotasy (C witamini) redoks proseslerini, uglewod çalşygyny kadalaşdyrmaga gatnaşýar we bedeniň garşylygyny ýokarlandyrýar. Hlorfenamin H1-gistamin reseptorlaryny bloklaýjydyr, antiallergiki täsire eýe bolup, burnuň üsti bilen dem almagy ýeňilleşdirýär, burun dykylmagyny, asgyrmagy, lakrimasiýa, gyjytmagy we gözüň gyzarmagyny peseldýär. Ulanyş üçin görkezmeler feverokanç we çişme keselleri (ARVI, dümew), gyzzyrma, sowuklama, kelle agyry, bogun we myşsa agyrylary, burun dykylmagy we bokurdak we sinuslarda agyry. GÖRNÜŞLER Parasetamola, askorbin kislotasyna, hlorfenamin ýa-da dermanyň başga bir bölegine aşa duýgurlyk.",
        img: "/items/menu-medicine.svg",

        category: "medicine",
        subcategory: "flu",
        price: Math.ceil(Math.random() * 100),
        id: 3,
        isFav: false,
        pharmacy: "Mähirli ýollar",
        queries: ["antigrippin", "Antigrippin ", "антигриппин", "Антигриппин"],
      },
      {
        label: "Saglyk we derman",

        title: "Trimol ger. #100",
        characteristics: {
          substance: "Propifenazon, kofein, parasetamol",
          country: "Hindistan",
          manufacturer: "“Ajanta Pharma Limited”",
          prescription: "Hawa",
          form: "Gerdejikler",
        },
        instructions:
          "Bir gerdejkde bar işjeň maddalar parasetamol 250.0 mg, kofein suwsuz 30.0 mg, propifenazon 150.0 mg, alyjylar krahmal, metil paraben, propil paraben, jelatin, dibasik kalsiý fosfat dihidrat, etil sellýuloza, izopropil alkogoly, arassalanan suw, çalgylar mikrokristal sellýuloza sellýuloza sellýuloz sellýulisi , natriý krahmal glikolat, dibazik kalsiý fosfat dihidrat.",
        img: "/items/menu-medicine.svg",

        category: "medicine",
        subcategory: "painkiller",
        price: Math.ceil(Math.random() * 100),
        id: 1,
        isFav: false,
        pharmacy: "Tebip",
        queries: ["trimol", "Trimol", "тримол", "Тримол"],
      },
      {
        label: "Saglyk we derman",

        title: "Askorutin ger. # 10 (Navbahor senagaty)",
        characteristics: {
          substance: "Askorbin kislotasy",
          country: "Özbegistan",
          dosage: "5mg/50mg",
          manufacturer: "Navbahor-Sanoat",
          prescription: "Yok",
          form: "Gerdejikler",
        },
        instructions:
          "Öňüni almak we bejermek• gipo- we witamin ýetmezçiligi P we C;• gytaklaýyn antikoagulantlary we salisilatlary ulanmak bilen baglanyşykly kapilýar zeperlenmeler.Damar geçirijiliginiň bozulmagy bilen bilelikde keselleriň çylşyrymly bejergisi• gemorragiki diatez;• retinadaky gan akmalar;• kapillarotoksikoz;• radiasiýa keseli;• septiki endokardit;• revmatizm;• glomerulonefrit;• arahnoidit;• allergiki keseller;• gyzamyk;• gyrmyzy gyzzyrma;• tif;• trombositopenik maksat.Doza rejimi Belli bir dermany dolandyrmagyň usuly we dozasy, goýberiliş görnüşine we beýleki faktorlara baglydyr. Iň amatly dozany lukman kesgitleýär. Belli bir dermanyň doza görnüşiniň ulanylyş we dozalar düzgünlerine laýyk gelişine berk gözegçilik etmek zerurdyr.Içerde, 1 planşet ulanyň. Günde 2-3 gezek. Bejerginiň dowamlylygy - 3-4 hepde (dowamlylygy keseliň tebigatyna we bejerginiň netijeliligine bagly). Ters täsiriAllergiki täsirler, dispeptiki näsazlyklar, kelle agyry.",
        img: "/items/menu-medicine.svg",

        category: "medicine",
        subcategory: "vitamins",
        price: Math.ceil(Math.random() * 100),
        id: 2,
        isFav: false,
        pharmacy: "Mähirli ýollar",
        queries: ["askorutin", "Askorutin", "аскорутин", "Аскорутин"],
      },
      {
        label: "Saglyk we derman",

        title: "Antigrippin ger. efferent (Greýfrut) No.10",
        characteristics: {
          substance:
            "Askorbin kislotasy, parasetamol, kalsiý glýukonat, difenhidramin",
          country: "Polşa",
          manufacturer: "Natur Product Pharma Sp. z o.o.",
          prescription: "Hawa",
          form: "Gerdejikler",
        },
        instructions:
          "Greýfrut tagamly täsirli planşetler tegelek, tekiz, kesilen gyrasy we bir tarapynda gol çyzygy, ak, ak ýa-da krem-ak reňkli, zordan görnüp duran mermerli, belli bir sitrus ysy bar. FARMAKOTERAPEUTIK GROUP, ýiti dem alyş ýokançlyklarynyň we “sowuklamalaryň” (analjezik däl neşe serişdesi + witamin + H1-gistamin reseptor blokatory) alamatlaryny ýok etmek üçin diýmekdir. ATC kody [N02BE51] FARMAKOLOGIK MÜMKINÇILIK Kombinirlenen derman. Parasetamolyň analjezik we antipiretiki täsiri bar; kelleagyry we beýleki agyry görnüşlerini ýok edýär, gyzgyny peseldýär. Askorbin kislotasy (C witamini) redoks proseslerini, uglewod çalşygyny kadalaşdyrmaga gatnaşýar we bedeniň garşylygyny ýokarlandyrýar. Hlorfenamin H1-gistamin reseptorlaryny bloklaýjydyr, antiallergiki täsire eýe bolup, burnuň üsti bilen dem almagy ýeňilleşdirýär, burun dykylmagyny, asgyrmagy, lakrimasiýa, gyjytmagy we gözüň gyzarmagyny peseldýär. Ulanyş üçin görkezmeler feverokanç we çişme keselleri (ARVI, dümew), gyzzyrma, sowuklama, kelle agyry, bogun we myşsa agyrylary, burun dykylmagy we bokurdak we sinuslarda agyry. GÖRNÜŞLER Parasetamola, askorbin kislotasyna, hlorfenamin ýa-da dermanyň başga bir bölegine aşa duýgurlyk.",
        img: "/items/menu-medicine.svg",

        category: "medicine",
        subcategory: "flu",
        price: Math.ceil(Math.random() * 100),
        id: 3,
        isFav: false,
        pharmacy: "Şypaly Çomuç",
        queries: ["antigrippin", "Antigrippin ", "антигриппин", "Антигриппин"],
      },
      {
        label: "Lukmançylyk enjamlary",
        title: "Lukmançylyk fonendoskop stetoskop CS-404",
        instructions:
          "Тип стетофонендоскоп, Назначение неонатальный, Акустическая головка двусторонняя, Звукопроводящая трубка одноканальная Материал ПВХ",
        img: "/items/doctor-1.svg",

        category: "doctor",
        subcategory: "fonendoskop",
        price: Math.ceil(Math.random() * 100),
        id: 4,
        isFav: false,
        pharmacy: "Şypaly Çomuç",
        queries: ["fonendoskop", "Fonendoskop", "фонендоскоп", "Фонендоскоп"],
      },
      {
        label: "Lukmançylyk enjamlary",

        title: "Lukmançylyk simapsyz termometr - beden termometri",
        instructions:
          "Lukmançylyk termometri (lukmançylyk termometri) lukmançylyk edaralarynda-da, öýde-de bedeniň gyzgynlygyny ölçemek üçin ulanylýan lukmançylyk enjamydyr. Merkuri ýok. Measokary ölçeg takyklygy (0,1 ° ýalňyşlyk). Simplönekeýlik we ulanmagyň aňsatlygy. Temperatura 35-den 42C◦ aralygynda. Dezinfeksiýa edip bolýar (erginli gapda dezinfeksiýa). Mehaniki zeperlerden goramak üçin termometr korpus bilen üpjün edilýär. Aýratynlyklary: Material: aýna, plastmassa Goragly plastmassa gap, ýokary hilli gaplama! Termometr size howpsuz we sagdyn ýeter.",
        img: "/items/doctor-1.svg",

        category: "doctor",
        subcategory: "termometr",
        price: Math.ceil(Math.random() * 100),
        id: 5,
        isFav: false,
        pharmacy: "Tebip",
        queries: ["termometr", "Termometr", "Термометр", "термометр"],
      },
      {
        label: "Lukmançylyk enjamlary",

        title:
          "Gan basyşyny we impuls ELECTRONIC RAK 289 ölçemek üçin goluňyza awtomatiki elektron tonometr",
        instructions:
          "Awtomatiki gan basyşynyň monitory Elektron RAK 289, gan basyşyny, gan basyşyny we impulsyny ölçemek üçin enjamdyr. Ykjam tonometr kän ýer tutmaz. Reňk şkalasy basyş derejesini görkezýär. Aritmiýa görkezijisi - ýürek ritminiň bozulmalaryny ir ýüze çykarmak. El şekilli çeňňek amatly we takyk ölçemegi kepillendirýär. Dürli gurluşykly adamlar üçin uniwersal çeňňek, ululygy 22-32 sm. 30 ölçeg ýady, elektron basyş gündeligi. Eger bar bolsa, awtotonometr gerek däl: Aritmiýa, ýokary gan basyşy. Öňüni almak we ýagdaýyň ýaramazlaşmagynyň öňüni almak üçin gan basyşyňyzy yzygiderli gözegçilikde saklamaly. - Basyşyň ölçeg aralygy, 20 - 280 mmHg. Sungat. - Heartürek urmasynyň ölçeg aralygy, 40 - 199 urgy",
        img: "/items/doctor-1.svg",

        category: "doctor",
        subcategory: "tonometr",
        price: Math.ceil(Math.random() * 100),
        id: 6,
        isFav: false,
        pharmacy: "Mähirli ýollar",
        queries: ["tonometr", "Tonometr", "Тонометр", "тонометр"],
      },
      {
        label: "Lukmançylyk enjamlary",

        title: "Lukmançylyk fonendoskop stetoskop CS-404",
        instructions:
          "Тип стетофонендоскоп, Назначение неонатальный, Акустическая головка двусторонняя, Звукопроводящая трубка одноканальная Материал ПВХ",
        img: "/items/doctor-1.svg",

        category: "doctor",
        subcategory: "fonendoskop",
        price: Math.ceil(Math.random() * 100),
        id: 7,
        isFav: false,
        pharmacy: "Tebip",
        queries: ["fonendoskop", "Fonendoskop", "фонендоскоп", "Фонендоскоп"],
      },
      {
        label: "Lukmançylyk enjamlary",

        title: "Lukmançylyk simapsyz termometr - beden termometri",
        instructions:
          "Lukmançylyk termometri (lukmançylyk termometri) lukmançylyk edaralarynda-da, öýde-de bedeniň gyzgynlygyny ölçemek üçin ulanylýan lukmançylyk enjamydyr. Merkuri ýok. Measokary ölçeg takyklygy (0,1 ° ýalňyşlyk). Simplönekeýlik we ulanmagyň aňsatlygy. Temperatura 35-den 42C◦ aralygynda. Dezinfeksiýa edip bolýar (erginli gapda dezinfeksiýa). Mehaniki zeperlerden goramak üçin termometr korpus bilen üpjün edilýär. Aýratynlyklary: Material: aýna, plastmassa Goragly plastmassa gap, ýokary hilli gaplama! Termometr size howpsuz we sagdyn ýeter.",
        img: "/items/doctor-1.svg",

        category: "doctor",
        subcategory: "termometr",
        price: Math.ceil(Math.random() * 100),
        id: 8,
        isFav: false,
        pharmacy: "Mähirli ýollar",
        queries: ["termometr", "Termometr", "Термометр", "термометр"],
      },
      {
        label: "Lukmançylyk enjamlary",

        title:
          "Gan basyşyny we impuls ELECTRONIC RAK 289 ölçemek üçin goluňyza awtomatiki elektron tonometr",
        instructions:
          "Awtomatiki gan basyşynyň monitory Elektron RAK 289, gan basyşyny, gan basyşyny we impulsyny ölçemek üçin enjamdyr. Ykjam tonometr kän ýer tutmaz. Reňk şkalasy basyş derejesini görkezýär. Aritmiýa görkezijisi - ýürek ritminiň bozulmalaryny ir ýüze çykarmak. El şekilli çeňňek amatly we takyk ölçemegi kepillendirýär. Dürli gurluşykly adamlar üçin uniwersal çeňňek, ululygy 22-32 sm. 30 ölçeg ýady, elektron basyş gündeligi. Eger bar bolsa, awtotonometr gerek däl: Aritmiýa, ýokary gan basyşy. Öňüni almak we ýagdaýyň ýaramazlaşmagynyň öňüni almak üçin gan basyşyňyzy yzygiderli gözegçilikde saklamaly. - Basyşyň ölçeg aralygy, 20 - 280 mmHg. Sungat. - Heartürek urmasynyň ölçeg aralygy, 40 - 199 urgy",
        img: "/items/doctor-1.svg",

        category: "doctor",
        subcategory: "tonometr",
        price: Math.ceil(Math.random() * 100),
        id: 9,
        isFav: false,
        pharmacy: "Şypaly Çomuç",
        queries: ["tonometr", "Tonometr", "Тонометр", "тонометр"],
      },
      {
        label: "Maýyplar üçin enjamlar",
        title: "Tigirli oturgyç BARRY LTD Barry W5",
        instructions:
          "Maksat - ähliumumy, Gurluşyň görnüşi - bukulma, Iň ýokary ýük - 100 kg, çarçuwaly material - polat, uzynlygy - 1000 mm, ini - 640, beýikligi - 880 mm",
        img: "/items/wheelchair-1.svg",

        category: "disabilities",
        subcategory: "wheelchairs",
        price: Math.ceil(Math.random() * 100),
        id: 10,
        isFav: false,
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
        instructions:
          "Aksil taýaklary saýlanyňyzda iki parametr göz öňünde tutulmalydyr: taýagyň poldan ok okuna çenli beýikligi we tutawajyň ýagdaýy. Näsag häzirki wagtda özbaşdak durup bilmeýän bolsa, taýaklaryň takmynan beýikligini beýikliginden 40 sm aýyrmak bilen hasaplap bolýar. Şeýle-de bolsa, taýaklary synap, ölçeglerine görä sazlamak has gowudyr, ýagny adamyň duran ýerinde we adaty aýakgaplaryny geýeninde fiziki parametrlerine laýyklykda. Kauçuk aýagyňyzdan 15-20 sm uzaklykda bolar ýaly, taýagy döşüňize ýerleşdirip başlaň. Bu ýagdaýda 2-3 barmak oklar bilen goltugyň arasynda erkin geçmeli (bu takmynan 4-5 sm). Tutagyň dogry ýerini kesgitlemek üçin eliňizi erkin aşak egiň, takmynan 30 dereje egiň we ýumruklaň.",
        img: "/items/wheelchair-1.svg",

        category: "disabilities",
        subcategory: "crutches",
        price: Math.ceil(Math.random() * 100),
        id: 11,
        isFav: false,
        pharmacy: "Tebip",
        queries: ["pişek", "Pişek", "костыли", "Костыли"],
      },
      {
        label: "Maýyplar üçin enjamlar",

        title: "Eşidiş enjamy Zinbest HAP-20F 3",
        instructions:
          "Zinbest HAP20F eşidiş enjamymyz (ses güýçlendiriji) eşidiş taýdan kemçilikli adamlar üçin ýaşlar we garrylar üçin ajaýyp. Ulanylan ilkinji günlerden soň, söhbetdeşiň düşünmezligi ýa-da haýsydyr bir signal (duýduryş, siren, taýmer) eşidip bilmezlik ýaly köp problemanyň ýitip gitjekdigini görersiňiz. Zarýad beriji bilen eşidiş kömegi (batareýa gerek däl!). Bej plastmassa gapdan ýasalan, ulanylanda görünmeýär diýen ýaly. Eşidiş enjamy gulagyň aňyrsyndadyr, gönüden-göni aurikada berkidilen we simleri ýok. Ses güýçlendiriji, iň ýokary göwrümi 50 dB bolan daşarky ses we ýoýulmazdan açyk ses berýär. Onuň derejesi bedendäki tigir bilen sazlanyp bilner. Nauşnikiň özi ýumşak silikondan ýasalan gulak ujy",
        img: "/items/wheelchair-1.svg",

        category: "disabilities",
        subcategory: "hearing_aid",
        price: Math.ceil(Math.random() * 100),
        id: 12,
        isFav: false,
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
        instructions:
          "Maksat - ähliumumy, Gurluşyň görnüşi - bukulma, Iň ýokary ýük - 100 kg, çarçuwaly material - polat, uzynlygy - 1000 mm, ini - 640, beýikligi - 880 mm",
        img: "/items/wheelchair-1.svg",

        category: "disabilities",
        subcategory: "wheelchairs",
        price: Math.ceil(Math.random() * 100),
        id: 13,
        isFav: false,
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
        instructions:
          "Aksil taýaklary saýlanyňyzda iki parametr göz öňünde tutulmalydyr: taýagyň poldan ok okuna çenli beýikligi we tutawajyň ýagdaýy. Näsag häzirki wagtda özbaşdak durup bilmeýän bolsa, taýaklaryň takmynan beýikligini beýikliginden 40 sm aýyrmak bilen hasaplap bolýar. Şeýle-de bolsa, taýaklary synap, ölçeglerine görä sazlamak has gowudyr, ýagny adamyň duran ýerinde we adaty aýakgaplaryny geýeninde fiziki parametrlerine laýyklykda. Kauçuk aýagyňyzdan 15-20 sm uzaklykda bolar ýaly, taýagy döşüňize ýerleşdirip başlaň. Bu ýagdaýda 2-3 barmak oklar bilen goltugyň arasynda erkin geçmeli (bu takmynan 4-5 sm). Tutagyň dogry ýerini kesgitlemek üçin eliňizi erkin aşak egiň, takmynan 30 dereje egiň we ýumruklaň.",
        img: "/items/wheelchair-1.svg",

        category: "disabilities",
        subcategory: "crutches",
        price: Math.ceil(Math.random() * 100),
        id: 14,
        isFav: false,
        pharmacy: "Mähirli ýollar",
        queries: ["pişek", "Pişek", "костыли", "Костыли"],
      },
      {
        label: "Maýyplar üçin enjamlar",

        title: "Eşidiş enjamy Zinbest HAP-20F 3",
        instructions:
          "Zinbest HAP20F eşidiş enjamymyz (ses güýçlendiriji) eşidiş taýdan kemçilikli adamlar üçin ýaşlar we garrylar üçin ajaýyp. Ulanylan ilkinji günlerden soň, söhbetdeşiň düşünmezligi ýa-da haýsydyr bir signal (duýduryş, siren, taýmer) eşidip bilmezlik ýaly köp problemanyň ýitip gitjekdigini görersiňiz. Zarýad beriji bilen eşidiş kömegi (batareýa gerek däl!). Bej plastmassa gapdan ýasalan, ulanylanda görünmeýär diýen ýaly. Eşidiş enjamy gulagyň aňyrsyndadyr, gönüden-göni aurikada berkidilen we simleri ýok. Ses güýçlendiriji, iň ýokary göwrümi 50 dB bolan daşarky ses we ýoýulmazdan açyk ses berýär. Onuň derejesi bedendäki tigir bilen sazlanyp bilner. Nauşnikiň özi ýumşak silikondan ýasalan gulak ujy",
        img: "/items/wheelchair-1.svg",

        category: "disabilities",
        subcategory: "hearing_aid",
        price: Math.ceil(Math.random() * 100),
        id: 15,
        isFav: false,
        pharmacy: "Şypaly Çomuç",
        queries: [
          "eşidiş enjam",
          "Eşidiş enjam",

          "Слуховой аппарат",
          "слуховой аппарат",
        ],
      },
    ],
    shoppingCart: [],
    search: [],
  }),
  getters: {
    searchItems(): Array {
      return this.search;
    },
    medicine(): object {
      return this.items.filter((item: any) => item.category === "medicine");
    },
    doctor(): object {
      return this.items.filter((item: any) => item.category === "doctor");
    },
    disabilities(): object {
      return this.items.filter((item: any) => item.category === "disabilities");
    },
    favItems(): object {
      return this.items.filter((item: any) => item.isFav === true);
    },
    sum(): number {
      return this.shoppingCart
        .map((item: any) => item.price)
        .reduce((a, b) => a + b, 0);
    },
  },
  actions: {
    toggleFav(id: number) {
      const favItem = this.items.find((item) => item.id === id);
      if (favItem) favItem.isFav = !favItem.isFav;
    },
    addToShoppingCart(id: number) {
      const shoppingItem = this.items.find((item) => item.id === id);
      this.shoppingCart.push(shoppingItem);
    },
    deleteFromShoppingCart(id: number) {
      this.shoppingCart = this.shoppingCart.filter(
        (item: any) => item.id !== id
      );
    },
    increasePrice(id: number, input: number) {
      const shItem = this.items.find((item) => item.id === id);
      if (shItem) shItem.price = shItem.price * input;
    },
    decreasePrice(id: number, input: number) {
      const shItem = this.items.find((item) => item.id === id);
      if (shItem) shItem.price = shItem.price / input;
    },
    clearShoppingCart() {
      this.shoppingCart = [];
    },
    searchByInput(input: string) {
      if (input !== "") {
        let searchItem = this.items.filter((item) =>
          item.queries.includes(input)
        );
        searchItem !== undefined
          ? (this.search = [...searchItem])
          : (searchItem = "");
      } else {
        this.search = [];
      }
    },
  },
});
