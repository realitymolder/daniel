<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<a href={'/'}>
	<div>
		<h3
			class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-mono text-2xl font-bold text-transparent"
		>
			{title}
		</h3>
		<h4 class="font-mono text-secondary text-white">{subtitle}</h4>
	</div>
</a>
