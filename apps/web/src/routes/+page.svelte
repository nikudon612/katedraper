<script lang="ts">
  import { useQuery } from "@sanity/svelte-loader";
  import type { PageData } from "./$types";

  export let data: PageData;
  const q = useQuery(data);

  // Prefer explicitly curated "featuredProjects", else fall back to posts
  $: ({ data: payload } = $q);
  $: rawProjects = payload?.home?.featuredProjects?.length
    ? payload.home.featuredProjects
    : (payload?.posts ?? []);

  const pickImg = (p: any) =>
    p?.coverImage?.asset?.url ??
    p?.mainImage?.asset?.url ??
    p?.image?.asset?.url ??
    p?.imageUrl ?? "";

  $: projects = (rawProjects ?? [])
    .slice(0, 3)
    .map((p: any) => ({
      title: p?.title ?? "Untitled",
      slug: p?.slug?.current ?? p?.slug ?? "#",
      image: pickImg(p),
      alt: p?.image?.alt ?? p?.coverImage?.alt ?? p?.mainImage?.alt ?? p?.title ?? "Project"
    }))
    .filter((p: any) => p.image && p.slug);
</script>

<!-- Just the three-image strip; layout provides sidebar, tagline, and footer -->
<div class="grid gap-6 md:grid-cols-3 md:gap-8 lg:gap-12 items-start justify-between">
  {#each projects as p}
    <a class="block group" href={`/projects/${p.slug}`} aria-label={p.title}>
      <div class="overflow-hidden">
        <img
          src={p.image}
          alt={p.alt}
          class="h-[420px] w-full object-cover md:h-[520px] lg:h-[560px] group-hover:opacity-95 transition"
          loading="eager"
          decoding="async"
        />
      </div>
    </a>
  {/each}
</div>
