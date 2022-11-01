<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "@/supabaseClient";
  import type { AuthSession } from "@supabase/supabase-js";
  import Menu from "@/components/Menu/Menu.svelte";
  import type { Item } from "./components/Menu/types";

  let session: AuthSession;

  let photos: string[] = [];
  let errorMsg: string | null = null;

  onMount(async () => {
    supabase.auth.getSession().then(({ data }) => {
      session = data.session;
    });

    supabase.auth.onAuthStateChange((_event, _session) => {
      session = _session;
    });
    getPhotos();
  });

  const getPhotos = async () => {
    const { data, error } = await supabase.storage.from("photos").list("full");
    if (error) {
      errorMsg = error.message;
      console.error(errorMsg);
      return;
    }
    photos = data.map((file) => {
      const { data } = supabase.storage
        .from("photos")
        .getPublicUrl(`full/${file.name}`);
      return data.publicUrl;
    });
  };

  $: items = [
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
  <Menu bind:items {defaultImage} />
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
