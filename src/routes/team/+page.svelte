<script>
	import TeamMember from './TeamMember.svelte';

	const members = [{
		name: "Qu
	}]
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="h1 mb-4">Notre equipe</h1>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		<TeamMember
			name={'Quentin Jungo'}
			picture={'todo'}
			role={'vice-president'}
			linkedin_link={'https://www.linkedin.com/in/quentin-jungo-389b65227/'}
			description={'John is a great guy, passionate about his work.'}
		/>
		<TeamMember
			name={'Lowell Zima'}
			picture={'todo'}
			linkedin_link={'https://www.linkedin.com/in/lowell-zima/'}
			description={'John is a great guy, passionate about his work.'}
		/>
		<TeamMember
			name={'Jérémy Olivier'}
			picture={'todo'}
			role={'treasurer'}
			linkedin_link={'https://www.linkedin.com/in/jol/'}
			description={'John is a great guy, passionate about his work.'}
		/>
		<TeamMember
			name={'Joshua Morcom-Harneis'}
			picture={'todo'}
			role={'president'}
			linkedin_link={'https://www.linkedin.com/in/joshua-morcom-harneis-1907921bb/'}
			description={'John is a great guy, passionate about his work.'}
		/>
		<TeamMember
			name={'Jacek Wikeria'}
			picture={'todo'}
			linkedin_link={'https://www.linkedin.com/in/jacek-f-wikiera-809983246/'}
			description={'John is a great guy, passionate about his work.'}
		/>
		<TeamMember
			name={'Jonathan terrettaz'}
			picture={'todo'}
			linkedin_link={'https://www.linkedin.com/in/jonathan-terrettaz-44256976/'}
			description={'John is a great guy, passionate about his work.'}
		/>
		<TeamMember
			name={'Alexis Gonnel'}
			picture={'todo'}
			linkedin_link={'https://www.linkedin.com/in/alexis-gonelle-a22aa2260/'}
			description={'John is a great guy, passionate about his work.'}
		/>
		<TeamMember
			name={'Max Stock'}
			picture={'todo'}
			linkedin_link={'https://www.linkedin.com/in/maximestocklin/'}
			description={'John is a great guy, passionate about his work.'}
		/>
	</div>
</div>
