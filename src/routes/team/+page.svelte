<script>
	import TeamMember from '$lib/components/TeamMember.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="h1">L'equipe</h1>
	<p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		<TeamMember
			name={'John Doe'}
			picture={'todo'}
			linkedin_link={'todo'}
			description={'John is a great guy, passionate about his work.'}
		/>
		<TeamMember
			name={'John Doe'}
			picture={'todo'}
			linkedin_link={'todo'}
			description={'John is a great guy, passionate about his work.'}
		/><TeamMember
			name={'John Doe'}
			picture={'todo'}
			linkedin_link={'todo'}
			description={'John is a great guy, passionate about his work.'}
		/><TeamMember
			name={'John Doe'}
			picture={'todo'}
			linkedin_link={'todo'}
			description={'John is a great guy, passionate about his work.'}
		/>
	</div>
</div>
