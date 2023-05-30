<script lang="ts">
	const cards: { title: string; content: string; href: string }[] = [
		{
			title: "Qu'est-ce qu'une Junior Entreprise?",
			href: 'https://junior-enterprises.ch/',

			content:
				"Une Junior Entreprise est une association étudiante à but non lucratif qui met en avant l'engagement, l'excellence et l'innovation. Elle propose des services professionnels dans divers domaines en s'appuyant sur les compétences et la motivation de ses membres, constituant ainsi une véritable plateforme d'échange entre l'éducation et le monde du travail. En collaborant avec une Junior Entreprise, vous bénéficiez de solutions personnalisées, de qualité et d'une expérience pratique enrichissante pour tous les acteurs impliqués."
		},
		{
			title: "Qu'est-ce que 42 ?",
			href: 'https://42lausanne.ch/',
			content:
				"L'école 42 est une école d'informatique révolutionnaire, fondée sur le principe de l'apprentissage par les pairs et axée sur le développement des compétences pratiques. Elle offre un environnement d'apprentissage collaboratif et sans enseignants, où les étudiants sont encouragés à apprendre par l'expérimentation et la résolution de problèmes. La pédagogie de l'école 42 repose sur l'autonomie, l'autodiscipline et la collaboration, permettant ainsi aux étudiants de développer leur créativité, leur esprit d'initiative et leur capacité d'adaptation. L'école 42 est reconnue pour former des développeurs talentueux et hautement recherchés par l'industrie informatique."
		},
		{
			title: 'Qui sommes nous?',
			href: '/team',
			content:
				"La Junior 42 Lausanne est une organisation étudiante à but non lucratif axée sur le développement informatique. En tant que passerelle entre l'univers académique et professionnel, notre Junior Entreprise vise à fournir des services de haute qualité à nos partenaires tout en offrant une expérience pratique et formatrice à nos membres. En tant que Junior Initiative, nous bénéficions du soutien de notre école et du réseau étendu des Juniors Entreprises suisses, ce qui renforce notre capacité à relever des défis ambitieux et à proposer des solutions novatrices."
		}
	];
</script>

<div class="my-20 flex flex-col items-center">
	<h1 class="h1">
		<span class="gradient-heading text-5xl md:text-7xl lg:text-9xl"> JE 42 Lausanne </span>
	</h1>
</div>

<div class="flex flex-col items-center">
	<div class="flex flex-col gap-16">
		{#each cards as { title, content, href }}
			<a target=”_blank” {href} class="card card-hover mx-8 items-center p-6 align-middle">
				<h3 class="h3 pb-2">{title}</h3>
				<p class="pb-4 text-justify">
					{content}
				</p>
			</a>
		{/each}
	</div>
</div>
