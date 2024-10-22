import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    langNow: localStorage.getItem('ourLangauge') || 'En',
    mapbranche: "shubra",
    showHeader: true,
    lan: {
      Ar: {
        
        // boxProduct info "used"
        askByWats:"اطلب عبر الواتساب",
        detailsProduct:"التفاصيل",
        detailsOfProduct:"تفاصيل المنتج",
        relatedOfProduct:"شاهد ايضا",

        // nav section "used"
        home: "الرئيسية",
        about: "من نحن",
        service: "خداماتنا",
        contact: "تواصل معنا ",

        // background section "used"
        textBackground: " نبتكر حلولًا مخصصة لمشاريع الديكور الأنيقة" ,
        textBackgroundDown: ".نحن ملتزمون بتقديم حلول تصميم أنيقة ومخصصة لمشاريع الديكور، مع التركيز على بناء علاقات دائمة ومتميزة مع عملائنا الكرام",
        lastestProjects:"الاطلاع على اخر الاعمال",
        branches: "الفروع",
        service: "الخدمات",
        catalog:"كاتلوج",
        serviceUnder: ": نمتلك خبرات كبيرة فى عدة خدمات ",
        catalogUnder:"يمكنك الاطلاع على الكاتلوج وعمل فلترة للخدمة التى تهتم بها",
        
        // unused data 
        placeholder:"ادخل رقم الطلب الخاص بك ",
        packageDel: "تم تسليم الطرد",
        HappyClinnts: "عملاء سعداء",
        ReviewStar: "تقييمات 5 نجوم",
        track: "تتبع الشحنة ",

        // about section "used"
        aboutContent: ".نحن شركة متخصصة في مجال الديكورات، نقدم حلولاً مبتكرة وفريدة من نوعها لتلبية احتياجات العملاء من الكرانيش وبديل الرخام بفضل فريق عمل متميز يلتزم بأعلى معايير الجودة",
        message: "رسالتنا",
        ourMessageContent: "هدف شركتنا هو أن تكون الرائدة في مجال الديكور الداخلي والخارجي وتقديم تصاميم متميزة تضيف قيمة وجمال لكل مشروع",
        through: "من خلالنا",
        throughContent: " تقديم خدمات تصميم وتنفيذ تغطي معظم أنحاء الجمهورية وتتميز بأعلى مستويات الجودة- الاستثمار في موظفينا ومنحهم الصلاحيات التي تساعدهم على أداء مهامهم بكفاءة وإبداع",
        Quality: "سياسة الجودة",
        QualityContent: "تلتزم إدارتنا بتقديم خدمات تتميز بأعلى مستويات الجودة لعملائنا، مع السعي الدائم لتجاوز توقعاتهم من خلال تحسين مستمر في الأداء وتقديم خدمات مهنية وفعالة من حيث التكلفة باستخدام أحدث الأساليب",
        means: "وسائل",
        meansContent: "الجودة في شركتنا هي مسؤولية شخصية لكل موظف. لضمان الحفاظ على مستويات الجودة والأداء، نوفر كافة الوسائل اللازمة والتدريب المستمر والدعم. هذا يساهم في خلق بيئة عمل مثالية تحفز الموظفين على الإبداع والتفاني. قيمنا تشمل: المبادرة، الجودة، الشفافية، التعاون، والولاء",
      
        // Commitments section "used"
    Commitments: "التزاماتنا",
    CommitmentsContent: "نحن ملتزمون بتقديم أفضل الخدمات في مجال الديكور، ونضمن رضا عملائنا من خلال الالتزام بأعلى معايير الجودة والاحترافية. عملاؤنا هم محور اهتمامنا، ونسعى دائماً لتقديم حلول مخصصة تلبي احتياجاتهم الفريدة.",
    tow: "هدفنا",
    towContent: "نسعى لبناء علاقات طويلة الأمد مع عملائنا من خلال تقديم خدمات متميزة تلبي احتياجاتهم وتفوق توقعاتهم",
    three: "معايير الجودة",
    threeContent: "نؤمن بأن الجودة هي مفتاح النجاح، لذلك نحرص على اتباع أعلى معايير الجودة في جميع مراحل العمل",
    four: "الابتكار",
    fourContent: "نسعى دائماً لتقديم حلول مبتكرة تلبي احتياجات العملاء وتتماشى مع أحدث الاتجاهات في مجال الديكور",
    five: "التواصل المستمر",
    fiveContent: "نحرص على التواصل المستمر مع عملائنا لضمان تحقيق رؤيتهم وتصميماتهم بأفضل شكل ممكن",
    six: "خدمات ما بعد البيع",
    sixContent: "نحن ملتزمون بتقديم خدمات ما بعد البيع لدعم عملائنا وضمان رضاهم التام عن خدماتنا",
    siven: "الالتزام بالمواعيد",
    sivenContent: "ندرك أهمية الالتزام بالمواعيد النهائية ونسعى لتحقيق ذلك في جميع مشاريعنا",


        // comman between Commitments and about section "used"
        seeMore: "المزيد",
        seeLess: "اقل",

        // how To Send Your Order "used"
        howToSendYourOrder: "كيف تقوم بارسال طلبك",
        placeOrder: "قم بالتواصل ",
        orderDescription: "قم بالتواصل معنا عن طريق الواتس  واطلب المعاينه ",
        waitForArrival: "انتظر الرد",
        arrivalDescription: "انتظر الرد وسيتم التواصل معك  سريعا وتحديد معاد المعاينه",
        finishAndRate: "انهاء العمل وتقييمنا",
        finishAndRateDescription: "يتم انجاز العمل بدقة واحترافيه من قبل فنين مدربين على اعلى مستوى ",

  
        //reviews  "used" but we wanna change data
        reviews: "التقييمات",
        review1: "تسلموا يا جماعة على الشغل الجامد في الكرانيش،   معمول بحب كده.",
        review1Author: "فارس كمال",
        review1Role: "عميل",
        review1Text: "الشغل اتعمل بسرعة وباحترافية، ومواعيدكم مضبوطة. ربنا يوفقكم.",
        review2: "العمالة جدعان وبيساعدوا جدًا، والشركة منظمين أوي.",
        review2Author: "محسن جلال",
        review2Role: "عميل",
        review3: "الصنيعى  الى جه ادى للشغل حقه، كل حاجة اتقفلت صح.",
        review3Author: "شذى أحمد",
        review3Role: "عميل",
        review4: "شركة محترمة تلتزم بالمواعيد، الشغل كان تمام ولذيذ.",
        review4Author: "محمد حسام",
        review4Role: "عميل",
        review5: "شغل احترافي بجد، خدوا حقهم في كل حاجة.",
        review5Author: "أبو نواف",
        review5Role: "عميل",
        review6: "تحية ليكم على التنظيم الجميل والتفاصيل الدقيقة.",
        review6Author: "صادق علي",
        review6Role: "عميل",
        
        // footer info "used" but we wanna change the data
        contactUs: "التواصل معنا",
        contactUsText: "اتصل بنا",
        contactUsEmail: "Example@gmail.com",
        contactUsPhone: "010 32247975",
        quickLinks: "روابط سريعة",
        quickLinksHome: "الرئيسية",
        quickLinksServices: "الخدمات",
        quickLinksAbout: "حول",
        quickLinksBranches: "الفروع",
        location: "الموقع",
        locationMainCenter: "المركز الرئيسي: القاهرة -  شبرا",
        locationHours: "09:00 صباحًا - 06:00 مساءً",
        copyright: "احمد لتكنولوجيا المعلومات وتطوير المواقع — 2024 © - 01152449706" ,

        // branchesInfo "used" but we wanna change the data
        branchesInfo: "الفروع",
        shubra: {
          name: "شبرا",
          phone: "010 32247975",
          phone1: "010 32247975",
          phone2: "",
          map: "https://maps.app.goo.gl/pikdB9iQVrQkwtNv7",
          address: "شبرا الخيمة",
          schedule: "  من الساعه التاسعه الى السادسه مساء ",
        },
        

        
      },
      En: {
        // boxProduct info "used"
        detailsProduct:"details",
        askByWats:"ask by whats",
        detailsOfProduct:"Product Details",
        relatedOfProduct:"related products",

        
        // unused data
        catalog:"catalog",
        placeholder:"enter your order for search",
        packageDel: "package delivered",
        HappyClinnts: "Happy clients",
        ReviewStar: "5 stars Reviews",
        track: "Track Order",
        
        // nav section "used"
        home: "home",
        about: "about",
        service: "service",
        contact: " contact us",

        // background section "used"
        textBackground: "Creating tailored solutions for elegant décor projects.",
        textBackgroundDown: "We’re dedicated to delivering elegant design solutions and building lasting customer relationships.",
        lastestProjects:"Check out our latest projects",
        branches: "branches",
        service: "service",
        serviceUnder: " we have a great export in multi service :",
        catalogUnder: " you can see our catalog and make filtring for your interest :",
        
        // about section "used"
        aboutContent: "We are a specialized company in décor, providing innovative and unique solutions to meet the needs of our customers in cornices and marble alternatives through a dedicated team committed to the highest quality standards.",
        message: "Our Message",
        ourMessageContent: "Our goal is to be the leader in interior and exterior décor, offering distinguished designs that add value and beauty to every project.",
        through: "Through Us",
        throughContent: "1- Providing design and implementation services that cover most regions of the Republic with the highest quality standards.\n2- Investing in our employees and empowering them to perform their duties with efficiency and creativity.",
        Quality: "Quality Policy",
        QualityContent: "Our management is fully committed to providing services characterized by the highest quality standards to our clients, continually striving to exceed their expectations through continuous improvement in performance and offering professional and cost-effective services using the latest methods.",
        means: "Means",
        meansContent: "Quality in our company is a personal responsibility for every employee. To ensure maintaining quality and performance levels, we provide all necessary means, continuous training, and support. This contributes to creating an ideal work environment that motivates employees to be creative and dedicated. Our values include: Initiative, Quality, Transparency, Cooperation, and Loyalty.",
        
        // Commitments section "used"
        Commitments: "Our Commitments",
        CommitmentsContent: "We are committed to providing the best services in the field of décor, ensuring customer satisfaction through adherence to the highest standards of quality and professionalism. Our clients are our top priority, and we always strive to deliver customized solutions that meet their unique needs.",
        tow: "Our Goal",
        towContent: "We aim to build long-term relationships with our clients by providing exceptional services that meet their needs and exceed their expectations.",
        three: "Quality Standards",
        threeContent: "We believe that quality is the key to success, and therefore we adhere to the highest quality standards at all stages of our work.",
        four: "Innovation",
        fourContent: "We always strive to provide innovative solutions that meet the needs of our clients and align with the latest trends in the décor field.",
        five: "Continuous Communication",
        fiveContent: "We ensure continuous communication with our clients to realize their vision and designs in the best possible way.",
        six: "After-Sales Services",
        sixContent: "We are committed to providing after-sales services to support our clients and ensure their complete satisfaction with our services.",
        siven: "Timely Delivery",
        sivenContent: "We recognize the importance of meeting deadlines and strive to achieve this in all our projects.",
        
        // comman between Commitments and about section "used"
        seeMore: "see more",
        seeLess: "see less",

        // how To Send Your Order section "used"
        howToSendYourOrder: "How to send your order",
        placeOrder: "Place your order",
        orderDescription: "Contact us via WhatsApp and request an inspection",
        waitForArrival: "Wait for a response",
        arrivalDescription: "Wait for a response, and we will contact you shortly to schedule the inspection",
        finishAndRate: "Finish and rate us",
        finishAndRateDescription: "The work will be completed with precision and professionalism ",

        
       // branches section "used" but we wanna change the data  
        branchesInfo: "BRANCHES",
        shubra: {
          name: "shubra",
          phone: "010 32247975",
          phone1: "010 32247975",
          phone2: "",
          map: "https://maps.app.goo.gl/pikdB9iQVrQkwtNv7",
          address: "shubra el khima ",
          schedule: "From 9 AM to 6 PM",
        },
        // reviews section "used" but we wanna change the data  
        reviews: "Reviews",
        review1: "Thank you for the excellent cornice work, the quality is top-notch.",
        review1Author: "Faras Kanaan",
        review1Role: "Client",
        review1Text: "A professional company, well-organized in their work. I hope this won’t be our last project together. God bless you.",
        review2: "The workers are very helpful, and the company is highly organized.",
        review2Author: "Mohsen Rajeh",
        review2Role: "Client",
        review3: "The installer was extremely polite. This company is very organized and trustworthy.",
        review3Author: "Shatha Hamad",
        review3Role: "Client",
        review4: "A respectable company that meets deadlines. This won’t be my last project with them, God willing.",
        review4Author: "Mohamed Saeed",
        review4Role: "Client",
        review5: "Polite service and an honest, professional company.",
        review5Author: "Abu Nawaf",
        review5Role: "Client",
        review6: "Great organization, kudos to you for this level of work.",
        review6Author: "Sadiq Ahmed",
        review6Role: "Client",


        // footer section "used" but we wanna change the data  
        contactUs: "CONTACT WITH US",
        contactUsText: "Contact us",
        contactUsEmail: "Example@gmail.com",
        contactUsPhone: "010 32247975",
        quickLinks: "Quick links",
        quickLinksHome: "HOME",
        quickLinksServices: "SERVICES",
        quickLinksAbout: "ABOUT",
        quickLinksBranches: "BRANCHES",
        location: "Location",
        locationMainCenter: "Main center: cairo - shubra",
        locationHours: "09:00 AM - 06:00 PM",
        copyright: "Ahmed for information technology—2024 © - 01152449706"
      }
    }
  },
  mutations: {
    setShowHeader(state, value) {
      state.showHeader = value;
    },
    changeTheLang(state, lang) {
      localStorage.setItem("ourLangauge", lang);
      state.langNow = lang;
    },
    changeMapbranche(state, bran) {
      //localStorage.setItem("branche", bran);
      state.mapbranche = bran;
    },
    changeToarabicFormat(state) {
      console.log("its changed ")
      if(state.langNow =="Ar"){
        console.log("its changed to arabic")

        //spicial classes "add to single element"
          //document.querySelector(".imageBranches").classList.add("imageBranchesAr")
        
        //spicial classes "add to parent of elements"
           //document.querySelector(".textBranches").classList.add("textBranchesAr")
          //document.querySelector(".footer").classList.add("footerAr")
        
        


        //                  no changeing in header

        //document.querySelector("ul").classList.add("ulForArabic")          
       // document.querySelector(".logo-cont").classList.add("logocontulForArabic")              
        //document.querySelector(".contLang").classList.add("lcontLangForArabic") 
        
        //                   anchint without class
        //document.querySelector("ul").style.cssText = "order:2 ;";              
        //document.querySelector(".logo-cont").style.cssText = "order:1 ;";              
        //document.querySelector("header > div:nth-child(3)").style.cssText = "order:3 ;"; 
        


        //global classes "add to some of elements" => to change dirction  "with classes its more organizied"
           //document.querySelectorAll('.lanDir').forEach(function(e) {
          // e.classList.add("alinPadding")
         //});

        //global classes "add to some of elements" => to change dirction  "with classes its more organizied"
            //document.querySelectorAll('.howtOsEnd >div:nth-child(2) >div >div:nth-child(2)').forEach(function(e) {
           //e.classList.add("howP")
          //});
            
              
        //spicial classes "add to parent of elements" and "add to some of elements" also"
           // document.querySelectorAll('.componnent').forEach(function(e) {
            //e.classList.add("componnentAr")
             // });
            
      } else{
        console.log("its changed to english")

        //spicial classes "add to single element"
          //document.querySelector(".imageBranches").classList.remove("imageBranchesAr")

         //spicial classes "remove to up of elements"
           //document.querySelector(".textBranches").classList.remove("textBranchesAr")
           //document.querySelector(".footer").classList.remove("footerAr")


        //                   no changeing in header
           
        //document.querySelector("ul").classList.remove("ulForArabic")          
       // document.querySelector(".logo-cont").classList.remove("logo-contulForArabic")              
        //document.querySelector(".contLang").classList.remove("lcontLangForArabic") 
       
        //                     anchint without class
       
         //document.querySelector("ul").style.cssText = "order:2 ;";              
        //document.querySelector(".logo-cont").style.cssText = "order:1 ;";              
       //document.querySelector("header > div:nth-child(3)").style.cssText = "order:3 ;"; 
        
          //global classes "add to some of elements" => to change dirction "with classes its more organizied"
            //document.querySelectorAll('.lanDir').forEach(function(e) {
           //e.classList.remove("alinPadding")
          //});

               //global classes "add to some of elements" => to change dirction  "with classes its more organizied"
              // document.querySelectorAll('.howtOsEnd >div:nth-child(2) >div >div:nth-child(2)').forEach(function(e) {
             //e.classList.remove("howP")
            //});

          //spicial classes "add to parent of elements" and "add to some of elements" also"
            //document.querySelectorAll('.componnent').forEach(function(e) {
            //e.classList.remove("componnentAr")
           //});
        
      }
 },  
 

  },
  getters: {
    catchLang(state) {
      if (state.langNow === "En") {
        return state.lan.En;
      } else if (state.langNow === "Ar") {
        return state.lan.Ar;
      }
    },
    myLanguage(state) {
      if (state.langNow === "En") {
        return "En";
      } else if (state.langNow === "Ar") {
        return  "Ar";
      }
    },
  },
 
  actions: {
    
    updateShowHeader({ commit }, value) {
      commit('setShowHeader', value);
    }
  }
  
})