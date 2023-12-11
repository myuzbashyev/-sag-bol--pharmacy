export const useMedicine = () =>
  useState("medicine", () => [
    {
      title: "Trimol ger. # 100",
      price: "1",
      characteristics: {
        substance: "Propifenazon, kofein, parasetamol",
        country: "Hindistan",
        manufacturer: "“Ajanta Pharma Limited”",
        prescription: "Hawa",
        form: "Gerdejikler",
      },
      instructions:
        "Bir gerdejkde bar işjeň maddalar parasetamol 250.0 mg, kofein suwsuz 30.0 mg, propifenazon 150.0 mg, alyjylar krahmal, metil paraben, propil paraben, jelatin, dibasik kalsiý fosfat dihidrat, etil sellýuloza, izopropil alkogoly, arassalanan suw, çalgylar mikrokristal sellýuloza sellýuloza sellýuloz sellýulisi , natriý krahmal glikolat, dibazik kalsiý fosfat dihidrat.",

      id: "001",
      img: "/items/menu-medicine.svg",
      pharmacy: "Şypaly Çomuç",

      category: "painkillers",
      queryes: [{ title: "trimol" }, { title: "painkiller" }],
    },
    {
      title: "Askorutin ger. # 10 (Navbahor senagaty)",
      price: "1",
      characteristics: {
        active: "Askorbin kislotasy",
        country: "Özbegistan",
        dosage: "5mg/50mg",
        manufacturer: "Navbahor-Sanoat",
        prescription: "Yok",
        form: "Gerdejikler",
      },
      instructions:
        "Öňüni almak we bejermek• gipo- we witamin ýetmezçiligi P we C;• gytaklaýyn antikoagulantlary we salisilatlary ulanmak bilen baglanyşykly kapilýar zeperlenmeler.Damar geçirijiliginiň bozulmagy bilen bilelikde keselleriň çylşyrymly bejergisi• gemorragiki diatez;• retinadaky gan akmalar;• kapillarotoksikoz;• radiasiýa keseli;• septiki endokardit;• revmatizm;• glomerulonefrit;• arahnoidit;• allergiki keseller;• gyzamyk;• gyrmyzy gyzzyrma;• tif;• trombositopenik maksat.Doza rejimi Belli bir dermany dolandyrmagyň usuly we dozasy, goýberiliş görnüşine we beýleki faktorlara baglydyr. Iň amatly dozany lukman kesgitleýär. Belli bir dermanyň doza görnüşiniň ulanylyş we dozalar düzgünlerine laýyk gelişine berk gözegçilik etmek zerurdyr.Içerde, 1 planşet ulanyň. Günde 2-3 gezek. Bejerginiň dowamlylygy - 3-4 hepde (dowamlylygy keseliň tebigatyna we bejerginiň netijeliligine bagly). Ters täsiriAllergiki täsirler, dispeptiki näsazlyklar, kelle agyry.",

      id: "002",
      img: "/items/menu-medicine.svg",
      pharmacy: "Tebip",

      category: "vitamins",
      queryes: [{ title: "ascorbic-acid" }, { title: "vitamins" }],
    },
    {
      title: "Antigrippin ger. efferent (Greýfrut) No.10",
      price: "1",
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
      id: "003",
      img: "/items/menu-medicine.svg",
      pharmacy: "Mähirli ýol",

      category: "flu",
      queryes: [{ title: "Antigrippin" }, { title: "flu" }],
    },
  ]);
