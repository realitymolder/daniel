<script lang="ts">
	import Logo from '../atoms/Logo.svelte';
	import NavigationButtonsRow from '../molecules/NavigationButtonsRow.svelte';
</script>

<div class="bg-opacity-90">
	<nav class="mx-auto flex w-full min-w-[100%] items-center justify-around py-4">
		<Logo title="Daniel Toubul" subtitle="code & music" />
		<NavigationButtonsRow />
	</nav>
</div>
