<template>
  <div class="w-10/12 mx-auto mt-10 flex flex-col gap-10">
    <section class="flex">
      <img src="../../asset/avator.jpg" alt="avator" class="max-w-[220px] h-full mx-10 rounded-3xl" />
      <div class="flex flex-col gap-5 flex-1 items-center">
        <span class="text-4xl font-extrabold">羅浩恩</span>
        <div class="flex gap-4 text-gray-500 text-lg">
          <a href="https://www.facebook.com/HowNLuo/" class="hover:text-primary-500">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a href="https://www.instagram.com/luohaoen1229/?hl=zh-tw" class="hover:text-primary-500">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="https://line.me/ti/p/0t-3nLcwLo" class="hover:text-primary-500">
            <font-awesome-icon :icon="['fab', 'line']" />
          </a>
          <a href="mailto:xji6cl4p@gmail.com" class="hover:text-primary-500">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
          <a href="https://github.com/HowNLuo" class="hover:text-primary-500">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
        <span class="text-primary-500 text-xl font-medium"> 東吳大學 | 網頁前端工程師 | 台北台灣 </span>
        <div class="text-gray-700 text-base tracking-wide font-medium">
          <div class="block mb-2">
            我是羅浩恩，畢業於東吳大學財務工程與精算數學系。於2021年10月轉職為前端工程師。目前累積了三間公司的工作經驗。
          </div>
          <div class="block mb-2">
            我熟悉前端介面開發、串接API及RWD切版，擅長使用BootStrap、tailwind、element-ui加速網頁開發，精通Vue和Angular技術，並具備使用Cypress進行測試的能力。
          </div>
          在這些工作經歷中，我參與了多個專案，從設計到實作，提升了技術能力與實戰經驗。我擁有良好的團隊合作能力和溝通技巧，致力於開發出優質的使用者介面，並不斷學習新技術以追求卓越。
        </div>
      </div>
    </section>
    <section>
      <h2 class="text-4xl font-extrabold text-primary-600 mb-10">專業技能</h2>
      <div class="flex justify-between w-full gap-5">
        <div v-for="skill in skills" class="w-full bg-white shadow-lg h-[220px] rounded-2xl p-3">
          <h3 class="text-2xl font-bold text-center text-primary-400">{{ skill.title }}</h3>
          <div class="flex gap-2 justify-center text-xl mt-3 mb-5">
            <font-awesome-icon v-for="icon in skill.icons" :icon="[icon.type, icon.icon]" :class="icon.color" />
          </div>
          <div class="flex gap-2 flex-wrap">
            <el-tag v-for="tag in skill.tags" type="info" color="#E2E2E2" size="large">{{ tag }}</el-tag>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="text-4xl font-extrabold text-primary-600 mb-10">過往歷程</h2>
      <div class="flex flex-col gap-10">
        <div class="flex" v-for="experience in experiences">
          <div class="w-[200px] text-2xl text-primary-400 font-semibold text-end">{{ experience.time }}</div>
          <div class="mx-10 text-2xl border-2 border-solid rounded-full h-10 w-10 text-center leading-9 bg-slate-300">
            <font-awesome-icon :icon="[experience.icon.type, experience.icon.icon]" />
          </div>
          <div class="flex-1 h-full border-l-4 border-solid border-gray-300 pl-6">
            <h3 class="text-3xl font-semibold text-primary-400 mb-5">{{ experience.title }}</h3>
            <div class="text-base tracking-wide">{{ experience.content }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const skills = [
  {
    title: '前端基礎技能',
    icons: [
      {
        type: 'fab',
        icon: 'html5',
        color: 'text-orange-500',
      },
      {
        type: 'fab',
        icon: 'css3-alt',
        color: 'text-primary-500',
      },
      {
        type: 'fab',
        icon: 'js',
        color: 'text-yellow-500',
      },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'DOM'],
  },
  {
    title: '前端框架和工具',
    icons: [
      {
        type: 'fab',
        icon: 'angular',
        color: 'text-red-500',
      },
      {
        type: 'fab',
        icon: 'vuejs',
        color: 'text-green-500',
      },
      {
        type: 'fab',
        icon: 'react',
        color: 'text-primary-300',
      },
    ],
    tags: ['Angular', 'Vue', 'React', 'TailwindCss', 'BootStrap', 'Element-UI', 'Webpack', 'Vite', 'SCSS', 'Cypress'],
  },
  {
    title: '其他重要技能',
    icons: [
      {
        type: 'fab',
        icon: 'git-alt',
        color: 'text-orange-600',
      },
      {
        type: 'fas',
        icon: 'screwdriver-wrench',
        color: 'text-primary-600',
      },
      {
        type: 'fas',
        icon: 'toolbox',
        color: 'text-red-500',
      },
    ],
    tags: ['Git', 'API', 'ESLint', 'Prettier'],
  },
];
const experiences = [
  {
    time: '2023年08月',
    icon: {
      type: 'fas',
      icon: 'building',
    },
    title: '任職於殷富資訊股份有限公司：前端工程師',
    content:
      '我目前在殷富資訊股份有限公司擔任前端工程師，參與了多個專案的開發。其中，我參與了集保的實境測試專案，雖然目前進度較慢，但我負責使用Angular框架刻畫共用元件，暫時支持專案進行。同時，公司內部的產品成功銷售給玉山銀行，我有幸也參與了這個專案，並在玉山銀行駐點。在此期間，我與客戶合作，根據其需求進行客製化處理，確保產品滿足客戶的期望。為了滿足不同專案的需求，我學習了Vue 3框架的使用方式，並掌握了Cypress專案測試和Tailwind CSS等相關技術，支援公司內部的其他專案。此外，在閒暇時間，我也持續學習React框架，以擴展我的技術能力和視野。',
  },
  {
    time: '2022年07月',
    icon: {
      type: 'fas',
      icon: 'building',
    },
    title: '任職於三竹資訊股份有限公司：前端工程師',
    content:
      '我在安聯人壽專案中擔任Angular工程師一職，負責開發及維護一套保單簽約系統。在這個專案中，我廣泛使用了Angular9框架，並深入學習了Angular的響應式表單應用和Angular Material的使用方法。這讓我能夠開發出符合設計需求的現代化、具有互動性的前端界面。此外，我與APP開發部門合作，設計了行動裝置上可以操作的頁面，進一步擴展了對不同平台的開發經驗。在工作過程中，我進一步學習了RxJS的使用，這讓我能夠更有效地管理和處理應用中的異步數據流。除了技術方面，我也開始接觸一些設計模式的學習，這讓我更好地理解和設計複雜系統的結構和邏輯。',
  },
  {
    time: '2021年11月',
    icon: {
      type: 'fas',
      icon: 'building',
    },
    title: '任職於匯鉅科技有限公司：前端工程師',
    content:
      '剛開始時，我的技術尚不成熟，但在8個月的時間內，我成功打好了Angular的基礎，並進一步摸索了Docker等相關技術。在公司，我參與了中華電信帳單整合專案，這讓我對微服務架構有了基本的了解。在我的工作中，我與後端工程師緊密合作，進行溝通與協作。我有實際的經驗，能夠成功串接API，確保前端與後端系統的順暢連接。透過這些實際的專案經驗，我不斷提升自己的技能，並努力將其應用於公司的各種專案中。',
  },
  {
    time: '2021年02月',
    icon: {
      type: 'fas',
      icon: 'book',
    },
    title: '自學前端程式語言，轉職為前端工程師',
    content:
      '由於我渴望迎接更具挑戰性的工作，我決定轉職成為一名前端工程師。我購買了線上課程，並花費了八個月的時間在家自學及累積作品，最後在11月成功進入第一間科技公司。',
  },
  {
    time: '2020年04月',
    icon: {
      type: 'fas',
      icon: 'building',
    },
    title: '任職於玉山銀行：行政助理',
    content:
      '在玉山銀行的基金科，我擔任工作人員，主要負責處理基金款項的整理，確保款項流程順暢並符合相關法規要求。此外，我也負責處理信託繼承手續，以協助客戶進行信託相關事務。在我的職責範圍內，我負責統整每個月的基金交易單位數，以協助監控基金業務的運作情況。同時，我也積極參與專業資格的考取，取得了信託業務人員證照、壽險業務員證照以及投信投顧相關法規的資格，包括自律規範等相關科目。透過我的工作和專業資格的獲得，我不僅具備了處理基金業務的能力，也為客戶提供了更專業的服務和支援。',
  },
];
</script>
