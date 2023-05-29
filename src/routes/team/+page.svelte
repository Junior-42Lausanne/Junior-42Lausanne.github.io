<script lang="ts">
	import TeamMember from './TeamMember.svelte';
	type Member = {
		name: string;
		picture: string;
		role: string;
		linkedin_link: string;
		mail: string;
	};

	const members: Member[] = [
		{
			name: 'Quentin Jungo',
			picture: 'profile-pictures/quentin-jungo.png',
			role: 'vice-president',
			linkedin_link: 'https://www.linkedin.com/in/quentin-jungo-389b65227/',
			mail: 'quentin.jungo@gmail.com'
		},
		{
			name: 'Lowell Zima',
			picture: 'profile-pictures/quentin-jungo.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/lowell-zima/',
			mail: ''
		},
		{
			name: 'Jérémy Olivier',
			picture: 'profile-pictures/quentin-jungo.png',
			role: 'treasurer',
			linkedin_link: 'https://www.linkedin.com/in/jol/',
			mail: ''
		},
		{
			picture: 'profile-pictures/quentin-jungo.png',
			name: 'Joshua Morcom-Harneis',
			role: 'president',
			linkedin_link: 'https://www.linkedin.com/in/joshua-morcom-harneis-1907921bb/',
			mail: ''
		},
		{
			name: 'Jacek Wikeria',
			picture: 'profile-pictures/quentin-jungo.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/jacek-f-wikiera-809983246/',
			mail: ''
		},
		{
			name: 'Jonathan terrettaz',
			picture: 'profile-pictures/quentin-jungo.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/jonathan-terrettaz-44256976/',
			mail: ''
		},
		{
			name: 'Alexis Gonnel',
			picture: 'profile-pictures/quentin-jungo.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/alexis-gonelle-a22aa2260/',
			mail: ''
		},
		{
			name: 'Max Stock',
			picture: 'profile-pictures/quentin-jungo.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/maximestocklin/',
			mail: ''
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
