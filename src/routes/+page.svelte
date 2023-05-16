<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="flex flex-col items-center pt-32">
	<h1 class="h1">
		<span class="gradient-heading text-6xl"> (Slogan) </span>
	</h1>
	<h1 class="h1">
		<span class="gradient-heading text-9xl"> JE 42 Lausanne </span>
	</h1>
</div>

<div class="flex flex-col items-center px-96 pt-32">
	<div class="flex flex-row gap-16">
		<div class="card card-hover items-center p-6 align-middle">
			<h3 class="h3 pb-2">What is a Junior Enterprise?</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt, placeat neque
				libero qui praesentium, cupiditate earum debitis corrupti cumque recusandae veritatis modi
				quos totam consectetur. Nulla alias aut dolorum.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus culpa fugiat inventore?
				Perferendis omnis praesentium possimus aliquam similique, rem quod, magnam ex at, quia fuga
				veritatis tenetur tempore beatae quas.
			</p>
		</div>
		<div class="card card-hover items-center p-8 align-middle">
			<h3 class="h3 pb-2">What is a Junior Enterprise?</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt, placeat neque
				libero qui praesentium, cupiditate earum debitis corrupti cumque recusandae veritatis modi
				quos totam consectetur. Nulla alias aut dolorum.
			</p>
		</div>
	</div>
	<div class="mt-32 px-32">
		<Accordion autocollapse>
			<AccordionItem open>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<svelte:fragment slot="summary">(summary)</svelte:fragment>
				<svelte:fragment slot="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus aperiam fugiat
					officiis dolorum a in similique, perspiciatis provident vitae enim necessitatibus voluptas
					blanditiis, quasi excepturi repellendus ea nihil? Vel. Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Rem, hic dicta reprehenderit mollitia veritatis at
					perspiciatis culpa, nostrum illum, magnam aperiam quae doloremque a optio expedita
					aspernatur! Reprehenderit, molestiae ut.
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<svelte:fragment slot="summary">(summary)</svelte:fragment>
				<svelte:fragment slot="content"
					>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis minima exercitationem
					iusto porro illum quis nostrum harum distinctio dolor quasi! Hic praesentium repudiandae,
					explicabo ipsam eum in dignissimos nobis doloribus. Lorem ipsum dolor, sit amet
					consectetur adipisicing elit. Quibusdam magnam molestias eveniet dolore natus sapiente?
					Commodi est necessitatibus dolorum, impedit obcaecati libero placeat rerum, id tempore
					voluptas repellendus et earum?</svelte:fragment
				>
			</AccordionItem>
		</Accordion>
	</div>
	<div class="flex flex-row gap-12">
		<a href="/team" class="btn variant-filled">Nous rejoindre</a>
		<a href="/contact" class="btn variant-filled">Nous Contacter</a>
	</div>
</div>

<style lang="postcss">
	p {
		@apply pb-4 text-justify;
	}
</style>
