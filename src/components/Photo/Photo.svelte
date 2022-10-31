<script lang="ts">
  export let src: string;
  export let position: "top" | "active" | "bottom" = "active";
  export let alt: string;
  export let active: boolean = true;
</script>

<img
  {src}
  class="transition-all absolute z-20 object-cover duration-700 ease-in-out -translate-x-1/2 {position ===
  'bottom'
    ? '-top-[100vh]'
    : position === 'top'
    ? 'top-[200vh]'
    : 'top-1/2 -translate-y-1/2 duration-1000'}  rounded-3xl min-h-[16rem] h-[32rem] max-h-[90%] max-w-[80%] left-1/2 image {!active
    ? 'left-[200vw]'
    : ''}"
  {alt}
/>
