<template>
  <footer class="footer u-contrast padding-10">
    <div class="container">
      <div class="Row u-flexCenter">
        <div class="Column-6@small Column-4@medium Column-2@large">
          <h4 class="Footer-header">Company</h4>
          <ul class="u-list u-listSpace u-textSmall">
            <li><a href="/company/about/">About</a></li>
            <li><a href="/company/blog/">Blog</a></li>
            <li><a href="/company/careers/">Careers</a></li>
            <li><a href="/company/press/">Press</a></li>
            <li><a href="/legal/terms/">Legal</a></li>
          </ul>
        </div>
        <div class="col">
          <h4 class="Footer-header">Products</h4>
          <ul class="u-list u-listSpace u-textSmall">
            <li><a href="/products/compute/">Compute</a></li>
            <li><a href="/products/storage/">Storage</a></li>
            <li><a href="/products/networking/">Networking</a></li>
            <li><a href="/products/load-balancer/">Load Balancer</a></li>
            <li><a href="/products/monitoring/">Monitoring</a></li>
            <li><a href="/products/one-click-apps/">Apps</a></li>
            <li><a href="/products/teams/">Teams</a></li>
          </ul>
        </div>
      </div>
      <div class="u-textCenter u-textSmall u-mt--large Footer-droplets" data-js="dropletCountContainer">
        <p class="u-mb--remove"><span data-js="dropletCount">59,648,269</span> Droplets Launched</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer-menu'
  }
</script>

<style lang="sass">
  @import "../../assets/scss/layout/footer"
</style>


