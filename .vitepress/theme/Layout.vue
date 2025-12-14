<script setup>
import DefaultTheme from 'vitepress/theme'
import SocialLinksInNav from './components/SocialLinksInNav.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>

    <template #nav-bar-content-before>
      <div class="SocialLinksSlot DesktopSocialLinksSlot">
        <SocialLinksInNav class="SocialLinksInNav"/>
      </div>
    </template>

    <template #nav-screen-content-before>
      <div class="MobileSocialLinksSlot">
        <SocialLinksInNav class="SocialLinksInMenu" />
      </div>
    </template>

    <template #layout-bottom>
      <footer class="global-footer">
        © 2025 Zeio Nara. Все права защищены.
        <!--Подпишись на <a href="https://t.me/zeioch" target="_blank">мой тг канал</a>.-->
      </footer>
    </template>

  </Layout>
</template>

<style>
.global-footer {
  padding: 20px 0;
  text-align: center;
  opacity: .7;
  font-size: 14px;
}
.global-footer a {
  text-decoration: underline !important;
}
</style>
