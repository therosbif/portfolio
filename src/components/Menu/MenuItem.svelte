<script lang="ts">
  import { styles } from "@/utils/styles";

  export let order: number = 0;
</script>

<div
  use:styles={{ delay: `${order * 700}ms` }}
  class="typewriter-text cursor-pointer p-2 duration-[2s] text-teal-200 dark:text-yellow-200 text-7xl group-hover:opacity-30 hover:!opacity-100 transition-colors"
  on:mouseenter
>
  <slot />
</div>
