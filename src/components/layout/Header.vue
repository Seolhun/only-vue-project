<template>
  <header id="header container" class="header toolbar-shadow">
    <div class="header-wrap row">
      <a href="#" id="menu-open" class="menu-open header-btn i-menu hide-after-lg"></a>
      <div class="header-logo">
        <router-link :to="'/'" class="header-logo-link">
          <img src="../../assets/img/logo3.png" alt="Site Logo">
        </router-link>
      </div>

      <nav class="header-navigation">
        <ul class="header-navigation-wrap u-unstyled hide-before-lg">
          <li>
            <router-link :to="'blog'" class="navigation-link">블로그</router-link>
          </li>
          <li>
            <router-link :to="'blog'" class="navigation-link">블로그</router-link>
          </li>
          <li>
            <router-link :to="{ path: 'register', query: { plan: 'private' }}" class="navigation-link">
              회원가입
            </router-link>
          </li>
        </ul>
      </nav>

      <a href="#" id="search-btn" class="search-btn header-btn hide-after-md i-close i-search"></a>

      <div class="header-social hide-before-lg">

      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header-menu'
  }
</script>

<style lang="sass">
  @import "../../assets/scss/layout/header"
</style>


