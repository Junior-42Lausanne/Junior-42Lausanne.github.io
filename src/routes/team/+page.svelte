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
			picture: 'profile-pictures/quentin-jungo.png',
			role: 'vice-president',
			linkedin_link: 'https://www.linkedin.com/in/quentin-jungo-389b65227/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Lowell Zima',
			picture: 'profile-pictures/quentin-jungo.png',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/lowell-zima/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Jérémy Olivier',
			picture: 'profile-pictures/quentin-jungo.png',
			role: 'treasurer',
			linkedin_link: 'https://www.linkedin.com/in/jol/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			picture: 'profile-pictures/quentin-jungo.png',
			name: 'Joshua Morcom-Harneis',
			role: 'president',
			linkedin_link: 'https://www.linkedin.com/in/joshua-morcom-harneis-1907921bb/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Jacek Wikeria',
			picture: 'profile-pictures/quentin-jungo.png',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/jacek-f-wikiera-809983246/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Jonathan terrettaz',
			picture: 'profile-pictures/quentin-jungo.png',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/jonathan-terrettaz-44256976/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Alexis Gonnel',
			picture: 'profile-pictures/quentin-jungo.png',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/alexis-gonelle-a22aa2260/',
			description: 'John is a great guy, passionate about his work.'
		},
		{
			name: 'Max Stock',
			picture: 'profile-pictures/quentin-jungo.png',
			role: null,
			linkedin_link: 'https://www.linkedin.com/in/maximestocklin/',
			description: 'John is a great guy, passionate about his work.'
		}
	];
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="gradient-heading h1 p-16 text-5xl sm:text-7xl md:text-8xl">Notre equipe</h1>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each members as member}
			<TeamMember {...member} />
		{/each}
	</div>
</div>
