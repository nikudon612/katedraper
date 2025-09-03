<script lang="ts">
  function onSubmit(e: Event) {
    e.preventDefault();
  }
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Contact form and studio contact details." />
</svelte:head>

<!-- Full viewport height; scrollable on small screens, centered on md+ -->
<section class="h-screen md:h-[100dvh] overflow-y-auto md:overflow-hidden flex md:items-center md:justify-center">
  <div class="mx-auto max-w-3xl w-full px-6 md:px-8 py-10 md:py-0">
    <form
      on:submit|preventDefault={onSubmit}
      class="space-y-8 text-center"
    >
      <!-- Name -->
      <div class="space-y-2 text-left">
        <label for="name" class="block italic text-[1rem] text-neutral-800">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your Name..."
          class="w-full rounded-md border border-neutral-300 bg-white text-[1.125rem] leading-7 text-neutral-900 placeholder:italic placeholder-neutral-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#972c28]/30 focus:border-[#972c28] transition"
        />
      </div>

      <!-- Email -->
      <div class="space-y-2 text-left">
        <label for="email" class="block italic text-[1rem] text-neutral-800">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Your Email Address..."
          class="w-full rounded-md border border-neutral-300 bg-white text-[1.125rem] leading-7 text-neutral-900 placeholder:italic placeholder-neutral-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#972c28]/30 focus:border-[#972c28] transition"
        />
      </div>

      <!-- Message -->
      <div class="space-y-2 text-left">
        <label for="message" class="block italic text-[1rem] text-neutral-800">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          placeholder="Your Message..."
          class="w-full rounded-md border border-neutral-300 bg-white text-[1.125rem] leading-7 text-neutral-900 placeholder:italic placeholder-neutral-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#972c28]/30 focus:border-[#972c28] transition resize-none"
        />
      </div>

      <!-- Submit button -->
      <div class="pt-4">
        <button
          type="submit"
          class="mx-auto block rounded-xl border border-[#972c28] px-6 py-3 text-[1.125rem] font-serif text-[#7e3a34] hover:bg-[#972c28]/5 active:bg-[#972c28]/10 transition"
        >
          Submit
        </button>
      </div>
    </form>

    <!-- Contact Info -->
    <div class="mt-12 text-center space-y-2">
      <h2 class="font-serif uppercase tracking-wide text-[#972c28] text-[1.25rem]">CONTACT</h2>

      <p class="text-[1.125rem] leading-relaxed text-neutral-900">
        201 West 85th Street
      </p>
      <p class="text-[1.125rem] leading-relaxed text-neutral-900">
        New York, NY 10024
      </p>
      <p class="text-[1.125rem] leading-relaxed text-neutral-900">
        tel: 212.787.8982
      </p>
      <p class="text-[1.125rem] leading-relaxed text-neutral-900">
        fax: 212.787.5711
      </p>

      <p class="pt-4 text-[1.125rem] leading-relaxed text-neutral-900">
        email: <a href="mailto:info@katedraperdesign.com" class="underline underline-offset-2 hover:opacity-80">info@katedraperdesign.com</a>
      </p>
    </div>
  </div>
</section>
