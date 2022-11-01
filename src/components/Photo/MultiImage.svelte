<script lang="ts">
  import Photo from "./Photo.svelte";

  export let src: string | string[];
  export let alt: string;
  export let position: "top" | "active" | "bottom" = "active";
  export let delay: number = 4000;

  let photos: [string, string] = Array.isArray(src)
    ? [src[0], src[0]]
    : [src, ""];
  let activePhoto = 0;

  const getRandomImage = (src: string[]) => {
    const randomIndex = Math.floor(Math.random() * src.length);
    return src[randomIndex];
  };

  setInterval(() => {
    if (Array.isArray(src) && position === "active") {
      photos[1 - activePhoto] = getRandomImage(src);
      setTimeout(() => {
        activePhoto = 1 - activePhoto;
      }, delay * 0.8);
    }
  }, delay);
</script>

{#if Array.isArray(src)}
  <Photo src={photos[0]} {alt} {position} active={activePhoto === 0} />
  <Photo src={photos[1]} {alt} {position} active={activePhoto === 1} />
{:else}
  <Photo src={photos[0]} {alt} {position} />
{/if}
