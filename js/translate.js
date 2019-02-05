var content = {

    tanatos: {
        en: "Tanatos",
        ar: "تناتوس ",
    },
    studio: {
        en: "Studio",
        ar: "ستوديو"
    },
    translate: {
        t: {
            en: "T",
            ar: ""
        },
        ranslate:
        {
            en: "ranslate",
            ar: "ترجم "
        },
    },
    h1: {
        style:
        {
            en: "",
            ar: ""
        },
        we:
        {
            en: "we design",
            ar: " بنصمم"
        },
        things:
        {
            en: " things",
            ar: "  حاجة"
        }
    },
    headerp:
    {
        en:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ar:""
    },
    hire: {
        en: "hire us",
        ar: "أطلب حاجه"
    },
    ourwork: {
        en: "our works",
        ar: "أعمالنا"
    },
    print: {
        en: "print design",
        ar: "تصميم مطبوعات"
    },
    web: {
        en: "web design",
        ar: "تصميم مواقع"
    },
    app: {
        en: "app design",
        ar: "تصميم تطبيقات موبايل"
    },
    logo: {
        en: "logo design",
        ar: " تصميم شعارات"
    },
    sub: {
        en: "subscribe",
        ar: "إشترك"
    },
    ourworks: {
        our:
        {
            en: "our ",
            ar: "أعمالنا"
        },
        works:
        {
            en: "Works",
            ar: ""
        }
    },
    show:{
        en: "show more...",
        ar: "المزيـــد"
    }
}

var translate = function (lang) {

    var tonatos = document.getElementById("tanatos");

    tonatos.childNodes[0].nodeValue = content.tanatos[lang];

    document.getElementById("studio").childNodes[0].nodeValue = content.studio[lang];

    // document.getElementById("translate").innerText = content.translate[lang];

    document.getElementById("translate").childNodes[0].nodeValue = content.translate.t[lang];

    document.getElementById("translate").childNodes[1].childNodes[0].nodeValue = content.translate.ranslate[lang];

    document.getElementById("h1").childNodes[0].nodeValue = content.h1.we[lang];

    document.getElementById("h1").childNodes[1].childNodes[0].nodeValue = content.h1.things[lang];
    
    document.getElementById("header-p").childNodes[0].nodeValue = content.headerp[lang];

    document.getElementById("hire").childNodes[0].nodeValue = content.hire[lang];
    document.getElementById("ourwork").childNodes[0].nodeValue = content.ourwork[lang];

    document.getElementById("print").childNodes[0].nodeValue = content.print[lang];
    document.getElementById("web").childNodes[0].nodeValue = content.web[lang];
    document.getElementById("app").childNodes[0].nodeValue = content.app[lang];
    document.getElementById("logo").childNodes[0].nodeValue = content.logo[lang];

    document.getElementById("sub").childNodes[0].nodeValue = content.sub[lang];

    document.getElementById("ourworks").childNodes[0].nodeValue = content.ourworks.our[lang];
    document.getElementById("ourworks").childNodes[1].childNodes[0].nodeValue = content.ourworks.works[lang];

    document.getElementById("show").childNodes[0].nodeValue = content.show[lang];


}
// localStorage.setItem(lang);
// debugger
// for(var i=0 ; i< tonatos.childNodes.length ; i++) {

//     if(tonatos.childNodes[i].id === "studio") {
//         tonatos.childNodes[i].innerText = content.studio[lang];
//     }
// }


// window.onload = function () {
//     translate("en");
// };



var lan = "Eng";
function Change() {
    if (lan === "Eng") {
        Arb();
        lan = "Arb"
    }
    else if (lan === "Arb") {
        Eng();
        lan = "Eng"
    }
}

function Arb() {
    var x = document.getElementsByClassName("float-left");
    for (var i = 0; i < x.length; i++) {
        x[i].style.float = "right";
        x[i].style.direction = "rtl";
    }
    var z = document.getElementsByClassName("float-right");
    for (var i = 0; i < z.length; i++) {
        z[i].style.float = "left";
        z[i].style.direction = "rtl";
    }
    fontSize("h1","100px");
    fontFamily("h1","arab-font");
    // fontSize("header-p","0px");
    fontSize("hire","20px");
    fontFamily("hire","arab-font");
    fontSize("ourwork","20px");
    fontFamily("ourwork","arab-font");

    fontSize("ourworks","35px");

    fontSize("show","20px");
    fontFamily("show","arab-font");
    
}

function Eng() {
    var x = document.getElementsByClassName("float-left");
    for (var i = 0; i < x.length; i++) {
        x[i].style.float = "left";
        x[i].style.direction = "ltr";
    }
    var z = document.getElementsByClassName("float-right");
    for (var i = 0; i < z.length; i++) {
        z[i].style.float = "right";
        z[i].style.direction = "ltr";
    }
    fontSize("h1","50px");
    fontFamily("h1","OpenSans-ExtraBold");
    fontSize("header-p","16px");
    fontSize("hire","14px");
    fontFamily("hire","OpenSans-Regular");
    fontSize("ourwork","14px");
    fontFamily("ourwork","OpenSans-Regular");
    fontSize("ourworks","35px");
    fontFamily("ourworks","OpenSans-ExtraBold");
    fontSize("show","14px");
}

function fontSize(id,fontSize) {
    var h = document.getElementById(id)
    h.style.fontSize=fontSize;
}
function fontFamily(id,family) {
    var h = document.getElementById(id)
    h.style.fontFamily=family;
}