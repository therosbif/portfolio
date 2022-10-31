<script lang="ts">
  import Menu from "@/components/Menu/Menu.svelte";

  let nbPhotos = 57;
  let photos = [];
  for (let i = 0; i < nbPhotos; i++) {
    photos.push(`/assets/photos/${i}.jpg`);
  }

  const items = [
    {
      label: ".dev",
      href: "/def",
      image: {
        src: "/assets/photos/54.jpg",
        alt: "Jack Goodall",
      },
    },
    {
      label: ".img",
      href: "/img",
      image: {
        src: photos,
        alt: "Jack Goodall",
      },
    },
  ];

  const defaultImage = {
    src: "/assets/pfp.jpeg",
    alt: "Jack Goodall",
  };
</script>

<svelte:head>
  <title>jack goodall</title>
</svelte:head>

<main class="p-0 m-0 bg-zinc-900 overscroll-none overflow-none">
  <Menu {items} {defaultImage} />
</main>

<style>
  :global(.typewriter-text) {
    font-family: "Ibarra Real Nova", serif;
    transition: opacity 400ms ease;
    width: 0;
    padding-bottom: 0.75rem;
    overflow-x: hidden;
    white-space: nowrap;
    text-decoration: none;
    animation: typewriter 700ms steps(13) forwards alternate var(--delay),
      blink 500ms steps(13) infinite normal;
  }

  @keyframes -global-typewriter {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  @keyframes -global-blink {
    from {
      border-color: white;
    }
    to {
      border-color: transparent;
    }
  }
</style>
