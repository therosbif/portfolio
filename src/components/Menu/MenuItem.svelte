<script lang="ts">
  import { styles } from "@/utils/styles";

  export let order: number = 0;
</script>

<div
  use:styles={{ delay: `${order * 700}ms` }}
  class="typewriter-text cursor-pointer p-2 text-yellow-200 text-7xl group-hover:opacity-30 hover:!opacity-100"
  on:mouseenter
>
  <slot />
</div>
