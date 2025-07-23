---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
---

<style src="/.vitepress/theme/untils/nav.css"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>

# coco快捷导航pro max！（吗？）
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>