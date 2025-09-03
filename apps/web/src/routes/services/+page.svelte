<script lang="ts">
  const designServices: string[] = [
    'Consult with client on design vision & renovation plans and develop a Scope of Work List',
    'Discuss budget & provide project cost estimate',
    "Discuss and develop project's overall styler and color palette",
    'Measure & photograph space for floor plans and elevations',
    'Research and present all furnishings, carpeting, lighting, fabrics, & wall surface',
    'Research & present all decorative hardware, surface materials, bath & kitchen fixtures and kitchen appliances',
    'Provide disbursement requests and follow up on all purchases, deliveries and installations',
    'Solve traffic flow and storage issues & design any needed custom furniture',
    'Make site visits and consult regularly with clients, project architect, contractors, and building management'
  ];

  const additionalServices: string[] = [
    'Consult & build custom Art portfolio',
    'Stage properties for Resale',
    'Provide moving & storage needs',
    'Provide party & holiday décor',
    'Provide specialty cleaning & protective services',
    'Create custom murals (special request)'
  ];
</script>

<svelte:head>
  <title>Services</title>
  <meta name="description" content="Design services, additional services, and fees." />
</svelte:head>

<!-- Use a fixed viewport height so this section becomes the scroll container -->
<section class="h-screen md:h-[100dvh] overflow-y-auto hide-scrollbar overscroll-contain">
  <div class="mx-auto max-w-3xl px-6 md:px-8 pb-16 md:pb-24">

    <!-- DESIGN SERVICES -->
    <h1 class="text-[1.125rem] md:text-[1.5rem] tracking-wide uppercase font-serif text-[#972c28] mb-6">
      DESIGN SERVICES
    </h1>

    <ul class="space-y-3 text-[1rem] leading-relaxed text-neutral-900">
      {#each designServices as item}
        <li class="flex">
          <span class="mr-2">•</span>
          <span>{item}</span>
        </li>
      {/each}
    </ul>

    <div class="h-12 md:h-16"></div>

    <!-- ADDITIONAL SERVICES -->
    <h2 class="text-[1.125rem] md:text-[1.5rem] tracking-wide uppercase font-serif text-[#972c28] mb-6">
      ADDITIONAL SERVICES
    </h2>

    <ul class="space-y-3 text-[1rem] leading-relaxed text-neutral-900">
      {#each additionalServices as item}
        <li class="flex">
          <span class="mr-2">•</span>
          <span>{item}</span>
        </li>
      {/each}
    </ul>

    <div class="h-12 md:h-16"></div>

    <!-- FEES -->
    <h2 class="text-[1.125rem] md:text-[1.5rem] tracking-wide uppercase font-serif text-[#972c28] mb-4">
      FEES
    </h2>

    <p class="text-[1.125rem] leading-relaxed text-neutral-900 max-w-prose">
      KDD charges an hourly rate. All list and net prices are revealed to the client. 
      A reasonable surcharge is placed on the net worth of all goods and labor.
    </p>
  </div>
</section>

<style>
  /* Hide scrollbar for Chrome, Safari, Edge */
  .hide-scrollbar::-webkit-scrollbar { display: none; width: 0; height: 0; }

  /* Hide scrollbar for Firefox/IE */
  .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }

  /* Smooth, native momentum scrolling on iOS */
  .hide-scrollbar { -webkit-overflow-scrolling: touch; }
</style>
