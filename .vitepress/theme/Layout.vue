<script setup>
import DefaultTheme from 'vitepress/theme'
import SocialLinkGroups from './components/SocialLinkGroups.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>

    <template #nav-bar-content-before>
      <div class="SocialLinkGroupsSlot desktop">
        <SocialLinkGroups/>
      </div>
    </template>

    <template #nav-screen-content-after>
      <div class="SocialLinkGroupsSlot mobile">
        <SocialLinkGroups/>
      </div>
    </template>

    <template #layout-bottom>
      <footer class="global-footer">
        © 2025 Zeio Nara. Все права защищены.
        <!--Подпишись на <a href="https://t.me/zeioch" target="_blank">мой тг канал</a>.--!>
      </footer>
    </template>

  </Layout>
</template>
