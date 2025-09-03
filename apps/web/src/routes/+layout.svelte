<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { goto, afterNavigate } from '$app/navigation';

	// Optional Sanity preview — lazy so it can't crash hydration if incompatible
	let VisualEditingComp: any = null;
	let previewStore: any = null;

	onMount(async () => {
		try {
			const mod = await import('@sanity/visual-editing/svelte');
			VisualEditingComp = mod.VisualEditing;
			previewStore = mod.isPreviewing;
		} catch (e) {
			console.warn('Sanity visual editing unavailable (skipping):', e);
		}
	});

	export let data: { projects: any[]; home: any };

	$: currentProjects = data.projects;
	$: home = data.home;
	$: console.log('current projects:', currentProjects);
	$: console.log('current home:', home);

	// Active link logic (unchanged)
	$: currentPath = $page.url.pathname;
	// function isActive(href: string) {
	// 	if (href === '/') return currentPath === '/';
	// 	return currentPath === href || currentPath.startsWith(href + '/');
	// }

	/* --- Mobile menu state --- */
	let mobileOpen = false;

	function lockScroll(shouldLock: boolean) {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = shouldLock ? 'hidden' : '';
	}

	function openMobile() {
		mobileOpen = true;
		lockScroll(true);
	}

	function closeMobile() {
		mobileOpen = false;
		lockScroll(false);
	}

	function toggleMobile() {
		mobileOpen ? closeMobile() : openMobile();
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') closeMobile();
	}

	// Seamless nav helper: close, then goto
	function nav(href: string) {
		closeMobile();
		queueMicrotask(() => goto(href));
	}

	// Safety net: if route changes from any cause, ensure menu is closed + body unlocked
	afterNavigate(() => {
		if (mobileOpen) {
			mobileOpen = false;
			lockScroll(false);
		}
	});

	function norm(path: string) {
		if (!path) return '/';
		const p = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
		return p || '/';
	}

	function isActive(href: string) {
		const path = norm($page.url.pathname);
		const base = norm(href);
		return path === base || path.startsWith(base + '/');
	}

	function activeClass(href: string) {
		return isActive(href) ? 'text-brand' : 'text-muted';
	}
</script>

<svelte:window on:keydown={onKeydown} />

{#if previewStore && $previewStore}
	<a href={`/preview/disable?redirect=${$page.url.pathname}`} class="preview-toggle">
		<span>Preview Enabled</span>
		<span>Disable Preview</span>
	</a>
{/if}

<!-- Full-bleed wrapper -->
<div class="h-dvh w-full bg-[#e8e2d7] text-[#7b170f] flex flex-col overflow-hidden">
	<!-- 🔽 Mobile top bar (hidden on desktop) -->
	<div class="md:hidden flex items-center justify-between px-4 py-4 relative z-[1010]">
		<a href="/" class="inline-block">
			<h1 class="leading-tight tracking-[0.18em] text-[18px] font-semibold uppercase">
				Kate Draper<br />Design
			</h1>
		</a>

		<!-- Hamburger / Close (animated morph) -->
		<button
			type="button"
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
			aria-controls="mobile-overlay"
			class="h-10 w-10 grid place-items-center active:scale-95 transition"
			on:click={toggleMobile}
		>
			<div class="relative h-5 w-6">
				<span class="hambar top {mobileOpen ? 'open' : ''}"></span>
				<span class="hambar mid {mobileOpen ? 'open' : ''}"></span>
				<span class="hambar bot {mobileOpen ? 'open' : ''}"></span>
			</div>
		</button>
	</div>

	<!-- 2-col frame: sidebar + content -->
	<div
		class="flex-1 grid gap-8 py-10 md:grid-cols-[260px_1fr] md:gap-12 lg:grid-cols-[300px_1fr] px-4 md:px-6 lg:px-8"
	>
		<!-- Left sidebar (desktop only — unchanged) -->
		<aside class="md:sticky md:top-10 hidden md:block">
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
							class={`transition hover:text-[#7b170f] ${activeClass('/')}`}
							aria-current={isActive('/') ? 'page' : undefined}>Home</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/projects"
							class={`transition hover:text-[#7b170f] ${activeClass('/projects')}`}
							aria-current={isActive('/projects') ? 'page' : undefined}>Projects</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/about"
							class={`transition hover:text-[#7b170f] ${activeClass('/about')}`}
							aria-current={isActive('/about') ? 'page' : undefined}>About</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/services"
							class={`transition hover:text-[#7b170f] ${activeClass('/services')}`}
							aria-current={isActive('/services') ? 'page' : undefined}>Services</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/testimonials"
							class={`transition hover:text-[#7b170f] ${activeClass('/testimonials')}`}
							aria-current={isActive('/testimonials') ? 'page' : undefined}>Testimonials</a
						>
					</li>

					<li class="uppercase">
						<a
							href="/contact"
							class={`transition hover:text-[#7b170f] ${activeClass('/contact')}`}
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

<!-- 🔽 Fullscreen mobile overlay — no scrolling -->
{#if mobileOpen}
	<div
		id="mobile-overlay"
		class="fixed inset-0 z-[1100] md:hidden h-[100dvh] w-screen overflow-hidden bg-[#e8e2d7]"
		role="dialog"
		aria-modal="true"
		aria-label="Mobile navigation"
		transition:fade={{ duration: 220 }}
	>
		<!-- Backdrop button (behind content) -->
		<button
			type="button"
			class="absolute inset-0 z-[1100] opacity-0"
			on:click={closeMobile}
			aria-label="Close menu backdrop"
		></button>

		<!-- Content wrapper above backdrop -->
		<div class="relative z-[1110] h-full w-full flex items-center justify-center">
			<!-- Close button (top-right) -->
			<button
				type="button"
				class="absolute right-4 top-4 z-[1120] h-10 w-10 grid place-items-center rounded-full"
				aria-label="Close menu"
				on:click={closeMobile}
				in:fade={{ duration: 180, delay: 80 }}
			>
				<span class="relative block h-5 w-5">
					<span class="absolute inset-0 m-auto h-[2px] w-5 rotate-45 bg-[#7b170f]"></span>
					<span class="absolute inset-0 m-auto h-[2px] w-5 -rotate-45 bg-[#7b170f]"></span>
				</span>
			</button>

			<nav
				class="w-full max-w-[520px] px-8"
				on:click|stopPropagation
				in:fly={{ y: 8, duration: 220 }}
				out:fade={{ duration: 200 }}
				aria-label="Mobile"
			>
				<ul class="space-y-6 text-base tracking-[0.18em] uppercase text-center">
					<li>
						<a
							href="/"
							sveltekit:prefetch
							on:click|preventDefault={() => nav('/')}
							class="inline-block py-2 transition hover:text-[#7b170f] {isActive('/')
								? 'text-[#7b170f]'
								: 'text-[#a08f84]'}"
							aria-current={isActive('/') ? 'page' : undefined}>Home</a
						>
					</li>
					<li>
						<a
							href="/projects"
							sveltekit:prefetch
							on:click|preventDefault={() => nav('/projects')}
							class="inline-block py-2 transition hover:text-[#7b170f] {isActive('/projects')
								? 'text-[#7b170f]'
								: 'text-[#a08f84]'}"
							aria-current={isActive('/projects') ? 'page' : undefined}>Projects</a
						>
					</li>
					<li>
						<a
							href="/about"
							sveltekit:prefetch
							on:click|preventDefault={() => nav('/about')}
							class="inline-block py-2 transition hover:text-[#7b170f] {isActive('/about')
								? 'text-[#7b170f]'
								: 'text-[#a08f84]'}"
							aria-current={isActive('/about') ? 'page' : undefined}>About</a
						>
					</li>
					<li>
						<a
							href="/services"
							sveltekit:prefetch
							on:click|preventDefault={() => nav('/services')}
							class="inline-block py-2 transition hover:text-[#7b170f] {isActive('/services')
								? 'text-[#7b170f]'
								: 'text-[#a08f84]'}"
							aria-current={isActive('/services') ? 'page' : undefined}>Services</a
						>
					</li>
					<li>
						<a
							href="/testimonials"
							sveltekit:prefetch
							on:click|preventDefault={() => nav('/testimonials')}
							class="inline-block py-2 transition hover:text-[#7b170f] {isActive('/testimonials')
								? 'text-[#7b170f]'
								: 'text-[#a08f84]'}"
							aria-current={isActive('/testimonials') ? 'page' : undefined}>Testimonials</a
						>
					</li>
					<li>
						<a
							href="/contact"
							sveltekit:prefetch
							on:click|preventDefault={() => nav('/contact')}
							class="inline-block py-2 transition hover:text-[#7b170f] {isActive('/contact')
								? 'text-[#7b170f]'
								: 'text-[#a08f84]'}"
							aria-current={isActive('/contact') ? 'page' : undefined}>Contact</a
						>
					</li>
				</ul>
			</nav>
		</div>
	</div>
{/if}

{#if previewStore && $previewStore && VisualEditingComp}
	<svelte:component this={VisualEditingComp} />
{/if}

<style>
	:global(html, body, #svelte) {
		background: #ddd8cc;
		height: 100%;
	}
	:global(body) {
		border-radius: 0;
		min-height: 100vh;
	}

	/* Preview toggle */
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

	/* Hamburger morph */
	.hambar {
		position: absolute;
		left: 0;
		right: 0;
		height: 2px;
		width: 100%;
		background: #7b170f;
		border-radius: 2px;
		transform-origin: center;
		transition:
			transform 200ms ease,
			opacity 150ms ease,
			top 200ms ease;
	}
	.hambar.top {
		top: 0;
	}
	.hambar.mid {
		top: 50%;
		transform: translateY(-50%);
	}
	.hambar.bot {
		top: 100%;
		transform: translateY(-100%);
	}

	/* Open state → X */
	.hambar.top.open {
		top: 50%;
		transform: translateY(-50%) rotate(45deg);
	}
	.hambar.mid.open {
		opacity: 0;
	}
	.hambar.bot.open {
		top: 50%;
		transform: translateY(-50%) rotate(-45deg);
	}
</style>
