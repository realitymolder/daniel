<script>
	import ProjectItem from '../../components/projects/ProjectItem.svelte';
	import Container from '../../components/shared/atoms/Container.svelte';

	export let betBar = {
		name: 'BetBar',
		description: 'wow',
		shortDescription: 'yes yes',
		imgSrc: "%sveltekit.assets%/favicon.ico"
		// imgSrc: '%sveltekit.assets%/img/bet-bar.png'
	};
	export let extrabe = {
		name: 'ExtraBe',
		description: 'wow',
		shortDescription: 'yes yes',
		imgSrc: '%sveltekit.assets%/img/bet-bar.png'
	};
</script>

<Container>
	<div class="flex space-x-5">
		<ProjectItem project={betBar} />
		<ProjectItem project={extrabe} />
		<ProjectItem project={betBar} />
	</div>
</Container>
