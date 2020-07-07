<template>
  <nav class="mt-10">
    <div class="scrollbar overflow-x-scroll">
      <div class="flex">
        <nuxt-link
          to="/category/todayPhoto"
          class="whitespace-no-wrap p-6 text-gray-300 hover:opacity-75 hover:text-black"
        >今日のワンコ</nuxt-link>
        <nuxt-link
          to="/category/discipline"
          class="whitespace-no-wrap p-6 text-gray-300 hover:text-black"
        >しつけ・飼い方</nuxt-link>
        <nuxt-link
          to="/users/sample2"
          class="whitespace-no-wrap text-gray-300 hover:text-black"
        >トリミング・手入れ</nuxt-link>
        <nuxt-link to="/" class="whitespace-no-wrap p-6 text-gray-300 hover:text-black">性格</nuxt-link>
        <nuxt-link
          to="/users/sample2"
          class="whitespace-no-wrap p-6 text-gray-300 hover:text-black"
        >食べ物</nuxt-link>
        <nuxt-link
          to="/users/sample"
          class="whitespace-no-wrap p-6 text-gray-300 hover:text-black"
        >健康・病気</nuxt-link>
        <nuxt-link
          to="/users/sample"
          class="whitespace-no-wrap p-6 text-gray-300 hover:text-black"
        >保険</nuxt-link>
        <nuxt-link
          to="/users/sample"
          class="whitespace-no-wrap p-6 text-gray-300 hover:text-black"
        >散歩</nuxt-link>
        <nuxt-link
          to="/users/sample"
          class="whitespace-no-wrap p-6 text-gray-300 hover:text-black"
        >服・グッズ</nuxt-link>
        <nuxt-link
          to="/users/sample"
          class="whitespace-no-wrap p-6 text-gray-300 hover:text-black"
        >お出かけ</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* ナビゲーション */
nav {
  display: flex;
  align-items: center;
  padding: 0 1rem 0 1rem;
  border-top: solid 1px #c8c7cc;
  border-bottom: solid 1px #c8c7cc;
}
nav a {
  display: block;
  padding: 1.75rem 0 0.5rem 0;
  line-height: 1em;
  text-decoration: none;
  margin: 0 1rem 0 1rem;
}

/* アクティブなリンク */
.nuxt-link-exact-active {
  color: black;
  border-bottom: solid 4px #31c5d2;
}
</style>
