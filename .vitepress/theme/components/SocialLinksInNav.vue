<script setup lang="ts">
import { computed } from 'vue'
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

const groups = computed(() => {
  const out: LinkItem[][] = [[]]
  for (const it of items) {
    if ((it as any).type === 'divider') out.push([])
    else out[out.length - 1].push(it as LinkItem)
  }
  return out.filter(g => g.length)
})
// v-if="gi < groups.length - 1"
</script>

<template>
  <div class="MySocialLinks">
    <template v-for="(g, gi) in groups" :key="gi">
      <div class="MySocialGroup">
        <template v-for="(item, i) in g" :key="i">
          <VPSocialLink
            class="MySocialLink"
            :link="(item as LinkItem).link"
            :icon="(item as LinkItem).icon"
            :aria-label="(item as LinkItem).ariaLabel"
          />
        </template>
      </div>
      <span
        class="MySocialDivider"
        aria-hidden="true"
      />
    </template>
  </div>
</template>
