<script lang="ts">
	import TeamMember from './TeamMember.svelte';

	const members: {
		name: string;
		picture: string;
		role: string | null;
		linkedin_link: string;
		description: string;
	}[] = [
		{
			name: 'Quentin Jungo',
			picture: 'todo',
			role: 'vice-president',
			linkedin_link: 'https://www.linkedin.com/in/quentin-jungo-389b65227/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Lowell Zima',
			picture: 'todo',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/lowell-zima/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Jérémy Olivier',
			picture: 'todo',
			role: 'treasurer',
			linkedin_link: 'https://www.linkedin.com/in/jol/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Joshua Morcom-Harneis',
			picture: 'todo',
			role: 'president',
			linkedin_link: 'https://www.linkedin.com/in/joshua-morcom-harneis-1907921bb/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Jacek Wikeria',
			picture: 'todo',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/jacek-f-wikiera-809983246/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Jonathan terrettaz',
			picture: 'todo',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/jonathan-terrettaz-44256976/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Alexis Gonnel',
			picture: 'todo',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/alexis-gonelle-a22aa2260/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Max Stock',
			picture: 'todo',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/maximestocklin/',
			description: 'John is a great guy, passionate about his work.'
		}
	];
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="gradient-heading h1 p-16 text-8xl">Notre equipe</h1>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each members as member}
			<TeamMember {...member} />
		{/each}
	</div>
</div>