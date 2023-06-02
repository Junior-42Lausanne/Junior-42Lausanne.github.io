<script lang="ts">
	import Header from '$lib/components/Header.svelte';
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
			picture: 'profile-pictures/lowell-zima.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/lowell-zima/',
			mail: ''
		},
		{
			name: 'Jérémy Olivier',
			picture: 'profile-pictures/jeremy-olivier.png',
			role: 'treasurer',
			linkedin_link: 'https://www.linkedin.com/in/jol/',
			mail: ''
		},
		{
			name: 'Joshua Morcom-Harneis',
			picture: 'profile-pictures/joshua-morcom-harneis.png',
			role: 'president',
			linkedin_link: 'https://www.linkedin.com/in/joshua-morcom-harneis-1907921bb/',
			mail: ''
		},
		{
			name: 'Jacek Wikiera',
			picture: 'profile-pictures/jacek-wikeria.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/jacek-f-wikiera-809983246/',
			mail: ''
		},
		{
			name: 'Jonathan terrettaz',
			picture: 'profile-pictures/jonathan-terrettaz.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/jonathan-terrettaz-44256976/',
			mail: ''
		},
		{
			name: 'Alexis Gonnel',
			picture: 'profile-pictures/alexis-gonnel.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/alexis-gonelle-a22aa2260/',
			mail: ''
		},
		{
			name: 'Max Stock',
			picture: 'profile-pictures/max-stock.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/maximestocklin/',
			mail: ''
		},
		{
			name: 'Isabelle Tovar',
			picture: 'profile-pictures/isabelle-tovar.png',
			role: 'tbd',
			linkedin_link: 'https://www.linkedin.com/in/isabel-tovar-nuez-566a6017/',
			mail: ''
		}
	]
		.sort(() => 0.5 - Math.random())
		.sort(() => 0.5 - Math.random());
	// TODO better shuffle
</script>

<Header name={'Notre équipe'} description={'Découvrez les membres de notre équipe'} />

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
	{#each members as member}
		<TeamMember {...member} />
	{/each}
</div>
