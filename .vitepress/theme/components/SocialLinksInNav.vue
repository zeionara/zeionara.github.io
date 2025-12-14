<script setup lang="ts">
import { useData } from 'vitepress'
import VPSocialLink from 'vitepress/dist/client/theme-default/components/VPSocialLink.vue'

type Icon =
  | string
  | { svg: string }

type LinkItem = {
  icon: Icon
  link: string
  ariaLabel?: string
}

type DividerItem = {
  type: 'divider'
}

type Item = LinkItem | DividerItem

const { theme } = useData()
const items = (theme.value as any).socialLinksGrouped as Item[] || []
</script>

<template>
  <div class="MySocialLinks">
    <template v-for="(item, i) in items" :key="i">
      <span
        v-if="(item as any).type === 'divider'"
        class="MySocialDivider"
        aria-hidden="true"
      />
      <VPSocialLink
        v-else
        class="MySocialLink"
        :link="(item as LinkItem).link"
        :icon="(item as LinkItem).icon"
        :aria-label="(item as LinkItem).ariaLabel"
      />
    </template>
  </div>
</template>
