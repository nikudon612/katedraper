<script lang="ts">
	export let data;
	$: console.log('page data:', data);
	const projects = [...data.projects].sort((a, b) => a.order - b.order);
    $: console.log('sorted projects:', projects);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6">
	{#each projects as project}
		<a href={`/projects/${project.slug}`} class="relative group aspect-square overflow-hidden">
			<img
				src={project.imageUrl}
				alt={project.title}
				class="w-full h-full object-cover transition-transform duration-300"
			/>

			<!-- Hover overlay -->
			<div
				class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
			>
				<span class="text-white text-lg font-semibold tracking-wide text-center px-2">
					{project.title}
				</span>
			</div>
		</a>
	{/each}
</div>
