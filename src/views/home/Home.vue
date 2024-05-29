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
        </div>
        <span class="text-primary-500 text-xl font-medium">
          東吳大學 | 網頁前端工程師 | 台北台灣
        </span>
        <p class="text-gray-700 text-base tracking-wide font-medium">
        <div class="block mb-2">我是羅浩恩，畢業於東吳大學財務工程與精算數學系。於2021年10月轉職為前端工程師。目前累積了三間公司的工作經驗。</div>
        <div class="block mb-2">
          我熟悉前端介面開發、串接API及RWD切版，擅長使用BootStrap、tailwind、element-ui加速網頁開發，精通Vue和Angular技術，並具備使用Cypress進行測試的能力。</div>
        在這些工作經歷中，我參與了多個專案，從設計到實作，提升了技術能力與實戰經驗。我擁有良好的團隊合作能力和溝通技巧，致力於開發出優質的使用者介面，並不斷學習新技術以追求卓越。
        </p>
      </div>
    </section>
    <section>
      <h2 class="text-4xl font-extrabold text-primary-600 mb-5">專業技能</h2>
      <div class="flex justify-between w-full gap-5" >
        <div v-for="skill in skills" class="w-full bg-white shadow-lg h-[200px] rounded-2xl p-3">
          <h3 class="text-2xl font-bold text-center text-primary-400">{{skill.title}}</h3>
          <div class="flex gap-2 justify-center text-xl mt-3 mb-5">
            <font-awesome-icon v-for="icon in skill.icons" :icon="[icon.type, icon.icon]" :class="icon.color" />
          </div>
          <div class="flex gap-2 flex-wrap">
            <el-tag v-for="tag in skill.tags" type="info" color="#E2E2E2" size="large">{{tag}}</el-tag>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="text-4xl font-extrabold text-primary-600 mb-5">工作經歷</h2>
      
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
        color: 'text-orange-500'
      },
      {
        type: 'fab',
        icon: 'css3-alt',
        color: 'text-primary-500'
      },
      {
        type: 'fab',
        icon: 'js',
        color: 'text-yellow-500',
      },
    ],
    tags: ['HTML','CSS','JavaScript','DOM']
  },
  {
    title: '前端框架和工具',
    icons: [
      {
        type: 'fab',
        icon: 'angular',
        color: 'text-red-500'
      },
      {
        type: 'fab',
        icon: 'vuejs',
        color: 'text-green-500'
      },
      {
        type: 'fab',
        icon: 'react',
        color: 'text-primary-300',
      },
    ],
    tags: ['Angular','Vue','React','TailwindCss','BootStrap','Element-UI','Webpack','Vite','SCSS','Cypress']
  },
  {
    title: '其他重要技能',
    icons: [
      {
        type: 'fab',
        icon: 'git-alt',
        color: 'text-orange-600'
      },
      {
        type: 'fas',
        icon: 'screwdriver-wrench',
        color: 'text-primary-600'
      },
      {
        type: 'fas',
        icon: 'toolbox',
        color: 'text-red-500',
      },
    ],
    tags: ['Git','API','ESLint','Prettier']
  },
]
</script>