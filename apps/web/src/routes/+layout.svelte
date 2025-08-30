<script lang="ts">
	import '../app.css';
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	// import LiveMode from '../components/LiveMode.svelte';
	import { onMount } from 'svelte';
	export let data: { projects: any[]; home: any };

	onMount(() => {
		console.log('layout projects:', data.projects);
		console.log('layout home:', data.home);
	});

	$: currentProjects = data.projects;
	$: home = data.home;

	// ✅ keep your active/hover logic exactly the same
	$: currentPath = $page.url.pathname;

	function isActive(href: string) {
		if (href === '/') return currentPath === '/';
		return currentPath === href || currentPath.startsWith(href + '/');
	}
</script>

{#if $isPreviewing}
	<a href={`/preview/disable?redirect=${$page.url.pathname}`} class="preview-toggle">
		<span>Preview Enabled</span>
		<span>Disable Preview</span>
	</a>
{/if}

<!-- Full-bleed wrapper -->
<div class="min-h-screen w-full bg-[#e8e2d7] text-[#7b170f] flex flex-col">
	<!-- 2-col frame: sidebar + content -->
	<div
		class="flex-1 grid gap-8 py-10 md:grid-cols-[260px_1fr] md:gap-12 lg:grid-cols-[300px_1fr] px-4 md:px-6 lg:px-8"
	>
		<!-- Left sidebar -->
		<aside class="md:sticky md:top-10">
			<a href="/" class="inline-block">
				<h1 class="leading-tight tracking-[0.18em] text-[22px] md:text-2xl font-semibold uppercase">
					Kate Draper<br />Design
				</h1>
			</a>

			<nav class="mt-10">
				<ul class="space-y-5 text-[13px] tracking-[0.18em]">
					<li class="uppercase">
						<a
							href="/"
							class="transition hover:text-[#7b170f]"
							class:text-[#7b170f]={isActive('/')}
							class:text-[#a08f84]={!isActive('/')}
							aria-current={isActive('/') ? 'page' : undefined}>Home</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/projects"
							class="transition hover:text-[#7b170f]"
							class:text-[#7b170f]={isActive('/projects')}
							class:text-[#a08f84]={!isActive('/projects')}
							aria-current={isActive('/projects') ? 'page' : undefined}>Projects</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/about"
							class="transition hover:text-[#7b170f]"
							class:text-[#7b170f]={isActive('/about')}
							class:text-[#a08f84]={!isActive('/about')}
							aria-current={isActive('/about') ? 'page' : undefined}>About</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/services"
							class="transition hover:text-[#7b170f]"
							class:text-[#7b170f]={isActive('/services')}
							class:text-[#a08f84]={!isActive('/services')}
							aria-current={isActive('/services') ? 'page' : undefined}>Services</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/testimonials"
							class="transition hover:text-[#7b170f]"
							class:text-[#7b170f]={isActive('/testimonials')}
							class:text-[#a08f84]={!isActive('/testimonials')}
							aria-current={isActive('/testimonials') ? 'page' : undefined}>Testimonials</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/contact"
							class="transition hover:text-[#7b170f]"
							class:text-[#7b170f]={isActive('/contact')}
							class:text-[#a08f84]={!isActive('/contact')}
							aria-current={isActive('/contact') ? 'page' : undefined}>Contact</a
						>
					</li>
				</ul>
			</nav>
		</aside>

		<!-- Page slot -->
		<main class="relative">
			<slot {data} />

			<div class="mt-8 flex justify-end md:mt-6">
				<span class="text-xs tracking-[0.35em] uppercase text-[#a08f84]">
					Diversity in Design
				</span>
			</div>
		</main>
	</div>

	<!-- Footer -->
	<footer class="pb-10 pt-8">
		<p class="text-center text-[12px] text-[#a08f84]">
			©{new Date().getFullYear()} Kate Draper Design. All Rights Reserved.
		</p>
	</footer>
</div>

{#if $isPreviewing}
	<VisualEditing />
	<LiveMode />
{/if}

<style>
	:global(html, body, #svelte) {
		/* background: #e8e2d7; */
		background: #ddd8cc;
		height: 100%;
	}
	:global(body) {
		border-radius: 0;
		min-height: 100vh;
	}
	.preview-toggle {
		backdrop-filter: blur(12px);
		border-radius: 0.25rem;
		bottom: 1rem;
		right: 1rem;
		position: fixed;
		z-index: 50;
		display: block;
		text-align: center;
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1rem;
		padding: 0.5rem 0.75rem;
		color: #1f2937;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}
	.preview-toggle:hover {
		background: #ef4444;
		color: #fff;
	}
	.preview-toggle span:first-child {
		display: block;
	}
	.preview-toggle:hover span:first-child {
		display: none;
	}
	.preview-toggle span:last-child {
		display: none;
	}
	.preview-toggle:hover span:last-child {
		display: block;
	}
</style>
