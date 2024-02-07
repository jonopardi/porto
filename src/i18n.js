import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          about_me: `I\'m a recent graduate from Universitas Atma Jaya Yogyakarta with a
            degree in Informatics, proudly maintaining a GPA of 3.58. My journey
            into the world of coding began around 2019-2020. My specialization
            lies in Javascript, especially React JS, and I\'ve been learning a
            lot about JavaScript to become a fullstack developer. Despite being
            a fresh graduate, I\'ve already undertaken various projects,
            showcasing my dedication and passion for coding. While I may lack
            formal work experience, my enthusiasm and commitment are evident in
            the projects I\'ve successfully completed.`,
          about_me_title: `A Quick Glimpse Into Who I Am`,
          key_features: `Key Features`,
          features: `Features`,
          built_with: `Built with`,
          // here we will place our translations...
        },
      },
      id: {
        translation: {
          about_me: `Saya fresh graduate dari Universitas Atma Jaya Yogyakarta dengan gelar S. Kom dan memperoleh IPK sebesar 3,58. Saya terjun di dunia pemrograman sejak tahun 2019. Bidang yang saya dalami atau spesialisasi saya adalah pengembangan web atau Fullstack Web Development. Bahasa pemrograman yang sering saya gunakan dalam mengembangkan web adalah Javascript. Walau saya lulusan baru, saya sudah melibatkan diri dalam berbagai proyek, menunjukkan dedikasi dan passion saya dalam dunia pemrograman. Meskipun saya mungkin kurang memiliki pengalaman kerja formal, antusiasme dan komitmen saya tercermin dalam proyek-proyek yang telah saya selesaikan dengan sukses.`,
          about_me_title: `Sekilas Mengenai Saya`,
          key_features: `Fitur-Fitur Utama`,
          features: `Fitur`,
          built_with: `Dibuat menggunakan`,
        },
      },
    },
  });

export default i18n;
