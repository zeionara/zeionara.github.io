<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="global-footer">
        © 2025 Zeio Nara. Все права защищены. Подпишись на <a href="https://t.me/zeioch" target="_blank">мой тг канал</a>.
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
