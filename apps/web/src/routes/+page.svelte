<script lang="ts">
	// This page receives only { home } from +page.server.ts
	export let data: {
		home: {
			tagline?: string;
			copyright?: string;
			featured?: Array<{
				id: string;
				title?: string;
				slug?: string | { current?: string } | null;
				imageUrl?: string;
				alt?: string;
				mainImage?: { asset?: { url?: string } };
				image?: { asset?: { url?: string }; alt?: string };
				coverImage?: { asset?: { url?: string }; alt?: string };
			}>;
		};
	};

	// Declare locals up front so they exist before logs
	let rawProjects: any[] = [];
	let projects: Array<{ title: string; slugOrId: string; image: string; alt: string }> = [];

	// DEBUG: see what the page actually got (server->client)
	console.log('page data.home.featured:', data?.home?.featured);

	// Assign immediately so the first paint has data (no race with $:)
	rawProjects = data?.home?.featured ?? [];

	// utility: pick first available image field
	const pickImg = (p: any) =>
		p?.imageUrl ??
		p?.coverImage?.asset?.url ??
		p?.mainImage?.asset?.url ??
		p?.image?.asset?.url ??
		'';

	// Build the 3 tiles. Use id as a fallback when slug is missing.
	const getSlugOrId = (p: any) =>
		typeof p?.slug === 'string' ? p.slug : (p?.slug?.current ?? p?.slug ?? p?.id ?? '');

	// compute once from rawProjects
	projects = (rawProjects ?? [])
		.slice(0, 3)
		.map((p: any) => {
			const title = p?.title ?? 'Untitled';
			return {
				title,
				slugOrId: getSlugOrId(p),
				image: pickImg(p),
				alt: p?.alt ?? p?.image?.alt ?? p?.coverImage?.alt ?? p?.mainImage?.alt ?? title
			};
		})
		// keep items that have an image AND either a slug or an id
		.filter((p) => p.image && p.slugOrId);
</script>

{#if !rawProjects.length}
	<p class="text-yellow-700">No featured projects configured on the Homepage doc.</p>
{:else if !projects.length}
	<p class="text-yellow-700">
		Featured projects are missing slugs; using ids as fallback links. Add a slug field to the
		<code>project</code> schema and republish to get pretty URLs.
	</p>
{/if}

<!-- Mobile: single column with true full-width images.
     Desktop: unchanged (3 columns, gaps, fixed heights). -->
<div class="grid w-full gap-1 md:grid-cols-3 md:gap-3 lg:gap-4 items-start">
	{#each projects as p}
		<a class="block w-full group" href={`/projects/${p.slugOrId}`} aria-label={p.title}>
			<div class="overflow-hidden w-full">
				<img
					src={p.image}
					alt={p.alt}
					class="block w-full h-auto object-cover
                 md:h-[520px] lg:h-[560px]
                 transition group-hover:opacity-95"
					loading="eager"
					decoding="async"
				/>
			</div>
		</a>
	{/each}
</div>
