<script>
	export let data;
</script>

<div class="grid grid-cols-4 gap-4">
	<main class="col-span-3">
		<slot />
	</main>
	<aside>
		<h2>Other experiences</h2>
		<ul>
			{#each data.experiencesData as singleExperience}
				<li class="text-white">
					<a href="/experiences/{singleExperience.slug}">{singleExperience.title}</a>
				</li>
			{/each}
		</ul>
	</aside>
</div>
