<script>
	export let data;

	import { onMount } from 'svelte';
	import { globalDataLoadingDuration } from '../../lib/store/store';
	import Loader from '../../lib/components/Loader.svelte';
	import { mounted } from '../../lib/store/store';

	$mounted = false;
	const loadingMessage = 'Experience.';

	onMount(() => {
		const timer = setTimeout(() => {
			$mounted = true;
			console.log($mounted + "in experience")
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});

</script>

<Loader message={loadingMessage}></Loader>
<div class:hide={!$mounted} class="experience-main-container w-full h-full flex flex-col justify-center items-center py-4 px-16">
	<div class="experience-main-desc-div flex flex-col items-start w-full mb-12 laptop:mb-0 tablet:ml-6 pt-24 laptop:h-screen">
		<div class="experience-main-desc w-[400px] text-black text-lg tablet:pb-4 tablet:pl-16 laptop:pl-14 laptop:pb-24">
			<p>With a rich history spanning Apple, Google, SpaceX, and Tencent, I bring a wealth of experience as a developer, analyst, and marketing director. From pioneering tech solutions to crafting strategic marketing campaigns, my journey reflects a commitment to innovation, collaboration, and driving measurable impact in dynamic, global environments.</p>
		</div>
		<h1 class="experience-title text-white text-6xl tablet:scale-[1.8] tablet:translate-x-24 laptop:scale-[2.8] laptop:translate-x-80 laptop:pr-0 opacity-70 pt-2 mt-8">MY EXPERIENCE</h1>
		<div class="w-full hidden laptop:flex flex-row justify-center items-center text-white text-2xl animate-bounce opacity-50 laptop:pt-36"><i class="fa-solid fa-chevron-down"></i></div>
	</div>

	{#if data.experiencesData && data.experiencesData.length > 0}
		<div class="experience-flex-container flex flex-col justify-center items-center tablet:grid tablet:grid-cols-2 gap-16 pt-12 pb-24">
			{#each data.experiencesData as singleExperience}
				<div class="rounded-3xl flex flex-col justify-start items-start w-full h-full">
					<div
						class="bg-gray-300 rounded-3xl w-full h-96 tablet:w-full tablet:h-full flex flex-col justify-center items-center"
					>
						<img
							class="company-img w-auto h-96 tablet:w-96 tablet:h-full opacity-50"
							src={singleExperience.img}
							alt={singleExperience.slug}
						/>
					</div>
					<div
						class="flex flex-col justify-start items-start pl-2 pr-14 pd-5 text-slate-300 gap-4 font-serif text-xl"
					>
						<p class="pt-2 text-sm">Tenure: {singleExperience.tenure} Years</p>
						<div class="experience-button-div p-2 pl-0">
							<button class="hover:translate-x-10 hover:text-stone-600"
								><a class="w-full h-full text-center" href="/experiences/{singleExperience.slug}"
									>{singleExperience.title} &#8594</a
								></button
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.hide {
		display: none;
	}
	.experience-title {
		font-family: DMSans, Arial, Helvetica, sans-serif;
		transition-property: margin, transform, padding;
		transition-duration: 1000ms;
	}

	.company-img:hover {
		animation: image-effect 1s forwards linear;
	}
	.experience-flex-container {
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}
	.experience-button-div button {
		transition-property: margin, transform, padding;
		transition-duration: 800ms;
	}
	.experience-main-desc {
		font-family: DMSans, Arial, Helvetica, sans-serif;
		transition-property: margin, transform, padding;
		transition-duration: 800ms;
	}

	.experience-main-desc-div {
		transition-property: margin, transform, padding;
		transition-duration: 800ms;
	}

	.experience-main-container {
		animation: page-effect 1000ms forwards linear;
	}
</style>
