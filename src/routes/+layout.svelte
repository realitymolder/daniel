<script>
	import Navigation from '../components/shared/organisms/Navigation.svelte';
	import '../app.css';
	import Container from '../components/shared/atoms/Container.svelte';
	import Footer from '../components/shared/organisms/Footer.svelte';
</script>

<div class="text-white">
	<Navigation />

	<Container><slot /></Container>
	<Footer />
</div>
