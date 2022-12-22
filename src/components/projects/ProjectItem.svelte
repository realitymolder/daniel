<script lang="ts">
	import type { Project } from 'src/types/Project';

	export let project: Project;
</script>

<div class="hidden flex-col items-center space-y-6 rounded-lg bg-slate-400 p-6 md:flex md:w-1/3">
	<img src={project.imgSrc} class="-mt-14 w-16" alt="Bet Bar Logo" />
	<h5 class="text-lg font-bold text-black">{project.name}</h5>
	<p class="text-sm text-black">{project.shortDescription}</p>
</div>
