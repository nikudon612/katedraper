<script lang="ts">
	// About page: page itself does NOT scroll; only the text section scrolls.
	// Reserved space for left menu from layout using a CSS variable.
</script>

<div class="h-dvh w-full flex justify-center overflow-hidden text-[#4b171a]" style="--sidebar-w: 220px;">
	<div class="h-full pr-6 md:pr-10 flex justify-center">
		<main class="flex h-full w-full items-start justify-center">
			<section
				class="prose prose-neutral max-w-[760px] w-full h-full overflow-y-auto px-6 py-10 md:px-12 md:py-14 text-left [--tw-prose-body:#4b171a] [--tw-prose-headings:#4b171a] [--tw-prose-links:#7a3a34] no-scrollbar"
				role="region"
				aria-label="About Kate Draper Design"
				tabindex="0"
			>
				<h2 class="tracking-wider uppercase text-[18px] leading-6 font-semibold">
					Company Profile: Diversity in Design
				</h2>

				<p class="!mt-6 text-[15px] leading-7">
					Kate Draper Design, LLC is a full-service "client centric" Interior Design Company for
					high-end residential and commercial spaces in New York City and nearby areas.
				</p>

				<p class="text-[15px] leading-7">
					Established in 1995, the company's priority is to listen to and understand each client's
					vision and needs. Along with careful evaluation of the project space and architecture, we
					customize sophisticated, tasteful, and above all, honestly livable homes and work
					environments. Embracing all the diversity of styles and personalities that her many
					clients present, whether for a full renovation or a small-scale design project, Kate
					Draper Design prides itself on being personable, expedient, and budget conscious.
				</p>

				<p class="italic text-[15px] leading-7">
					"I believe the ability to integrate aesthetic & design expertise with good people skills,
					reliable service and project management is imperative in this field."
				</p>

				<p class="text-[15px] leading-7">
					We are pleased to collaborate with clients' architects & contractors for detailed and
					satisfying results.
				</p>

				<h3 class="tracking-wider uppercase text-[16px] leading-6 font-semibold !mt-12 !mb-6">
					Bio & Background
				</h3>

				<p class="text-[15px] leading-7">
					Raised in New York City, Kate Draper attended Spence School and majored in both Music and
					Art at Bard College. Her father was the celebrated tap dancer, Paul Draper, and great
					aunts included monologist, Ruth Draper and renowned interior decorator, Dorothy Draper.
				</p>

				<p class="text-[15px] leading-7">
					Kate appeared in the original cast of the Tony award-winning musical, "A Day In Hollywood,
					a Night in The Ukraine" directed by Tommy Tune. She illustrated the children's book, "The
					Giraffe who Sounded Like Ol' Blue Eyes" — a humorous book about a talented giraffe written
					by "Annie" creator, Martin Charnin which Frank Sinatra called, "an absolute delight" — and
					created and hand-painted "Teddywear," the clothing "created" by Sela Ward's character on
					the NBC-TV show, "Sisters." She worked as a decorative painter and muralist for
					photographers and residential clients before launching her Interior Design company.
				</p>

				<p class="text-[15px] leading-7">
					On larger projects, Kate often collaborates with Interior Designer & colleague, Coco
					Arnesen.<br />
					<a
						href="https://www.cocoarnesendesign.com"
						target="_blank"
						class="underline text-[#7a3a34] hover:text-[#4b171a]">www.cocoarnesendesign.com</a
					><br />
					As a team they are known as "Kate & Coco."
				</p>

				<div class="h-16"></div>
			</section>
		</main>
	</div>
</div>

<style>
	section {
		scroll-behavior: smooth;
	}
	/* Hide scrollbar cross-browser */
	.no-scrollbar::-webkit-scrollbar { display: none; }
	.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
