<script>
	export let singleExperience;
</script>

<div class="text-white bg-slate-500">
    <div class="bg-slate-100 w-24">
		<img class="w-20" src={singleExperience.image} alt={singleExperience.job_title} />
	</div>
	<p>{singleExperience.job_title}</p>
	<p>{singleExperience.tenure}</p>
	<p>{@html singleExperience.desc}</p>
	<p>{singleExperience.company}</p>
	<p>{singleExperience.address}</p>
</div>
