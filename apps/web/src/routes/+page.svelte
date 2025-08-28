<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: posts } = $q);
</script>

<section>
	{#if posts.length}
		{#each posts as post}
			<p class="text-2xl font-bold text-black">TEST</p>

			<Card {post} />
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>
