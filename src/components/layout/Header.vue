<template>
  <header id="header" class="header toolbar-shadow">
    <div class="header-wrap">
      <a href="#" id="menu-open" class="menu-open header-btn i-menu hide-after-lg"></a>
      <div class="header-logo">
        <a class="header-logo-link" href="http://hi-cord.com" target="_blank">
          <img src="../../assets/img/logo3.png" alt="Site Logo">
        </a>
      </div>

      <nav class="header-navigation">
        <ul class="header-navigation-wrap u-unstyled hide-before-lg">
          <li>
            <a href="http://vuejsexamples.com/" class="navigation-link ">메인</a>
          </li>
          <li>
            <a href="http://vuejsexamples.com/tag/calendar/" class="navigation-link ">주요기능</a>
          </li>
          <li>
            <a href="http://vuejsexamples.com/tag/table/" class="navigation-link ">고객스토리</a>
          </li>
          <li>
            <router-link :to="'blog'" class="navigation-link">가격</router-link>
          </li>
          <li>
            <router-link :to="'blog'" class="navigation-link">가이드</router-link>
          </li>
          <li>
            <router-link :to="'blog'" class="navigation-link">블로그</router-link>
          </li>
          <li>
            <router-link :to="{ path: 'register', query: { plan: 'private' }}" class="navigation-link">회원가입</router-link>
          </li>
        </ul>
      </nav>

      <form id="header-search" class="header-search hide-before-md">
        <div id="searchbox" class="searchbox">
          <input id="searchbox-input" placeholder="Search" class="search-field" name="q" value="" autocomplete="off">
          <span class="search-icon i-search"></span>
        </div>

        <div class="search-popout closed">
          <div id="search-results" class="search-suggest-results" style="display:none"></div>
        </div>
      </form>

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


