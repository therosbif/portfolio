<script lang="ts">
  import { styles } from "@/utils/styles";
  import ImageCarousel from "../Photo/Carousel.svelte";
  import MenuItem from "./MenuItem.svelte";
  import type { Item } from "./types";
  import type { Photo } from "../Photo/types";
  import { theme } from "@/store";

  export let items: Item[];
  export let defaultImage: Photo;

  let active = 0;
  let hover = false;
</script>

<div
  class="flex content-center w-screen h-screen"
  use:styles={{ active: `${active}` }}
>
  <div
    class="z-20 flex flex-col justify-center flex-1 pl-6 align-top transition-all lg:pl-40 peer"
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
  >
    <h1
      use:styles={{ delay: "0s" }}
      class="p-1 m-1 mb-20 text-4xl duration-[2s] dark:text-yellow-100 text-emerald-300 typewriter-text lg:text-8xl transition-colors"
    >
      jack <br /> goodall
    </h1>
    <nav class="group" on:mouseleave={() => (active = 0)}>
      {#each items as item, i}
        <MenuItem
          order={i + 1}
          on:mouseenter={() => {
            active = i + 1;
            theme.set(i % 2 === 0 ? "dark" : "light");
          }}
        >
          {item.label}
        </MenuItem>
      {/each}
    </nav>
  </div>
  <div class="flex-1 invisible w-full lg:visible">
    <ImageCarousel
      images={[defaultImage, ...items.map((i) => i.image)]}
      {active}
    />
  </div>
  <div
    id="menu-background-image"
    class="absolute top-0 left-0 z-10 w-screen h-screen transition-colors duration-1000"
    use:styles={{
      size: hover ? "11vmin 11vmin" : "12vmin 12vmin",
      bgColor: $theme === "dark" ? "#3f3f46" : "#52525b",
    }}
  />
</div>

<style>
  #menu-background-image {
    background-image: radial-gradient(var(--bgColor) 9%, transparent 9%);
    background-size: var(--size);
    transition: opacity 800ms ease, background-size 800ms ease,
      background-position 800ms ease;
    background-position: center calc(65% - (var(--active) * 15%));
  }
</style>
