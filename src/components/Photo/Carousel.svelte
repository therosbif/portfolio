<script lang="ts">
  import MultiImage from "./MultiImage.svelte";
  import type { Photo } from "./types";

  export let active: number = 0;
  export let images: Photo[];
</script>

<div class="relative w-full h-screen">
  {#each images as { src, alt }, i}
    <MultiImage
      {src}
      {alt}
      position={active < i ? "top" : active > i ? "bottom" : "active"}
    />
  {/each}
</div>

<style>
</style>
