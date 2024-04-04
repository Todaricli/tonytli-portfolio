<script>
	export let data;
	import SingleExperience from '$lib/components/SingleExperience.svelte';
	import { isExperienceMounted } from '../../../lib/store/store';
	import { onMount } from 'svelte';

	console.log($isExperienceMounted + 'ins husjs');

</script>

<div class:experience-effect={$isExperienceMounted} class:hide={!$isExperienceMounted}>
	<SingleExperience singleExperience={data.singleExperience}></SingleExperience>
</div>

<style>
	.experience-effect {
		animation: experience-effect 2s forwards linear;
	}
	.hide {
		visibility: hidden;
	}
</style>
