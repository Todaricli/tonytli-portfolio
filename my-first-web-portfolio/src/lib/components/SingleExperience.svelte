<script>
	export let singleExperience;
	import { isExperienceMounted } from "../store/store";
	console.log($isExperienceMounted + 'DDDDDD')
</script>


<div
	class="flex flex-col items-center tablet:grid tablet:grid-cols-2 tablet:items-start"
>
	<div class="flex flex-col justify-center items-center col-span-1 mr-6">
		<div class="bg-gray-100 rounded-3xl flex flex-col justify-center items-center p-2">
			<img class="w-full h-full" src={singleExperience.image} alt={singleExperience.job_title} />
		</div>
		<div
			class="key-info-div text-xl flex flex-row tablet:flex-col mt-6 pl-6 tablet:items-start gap-5 tablet:gap-0 laptop:items-center text-gray-200 tablet:text-gray-200 opacity-100 pb-10 tracking-wider"
		>
			<div>
				<p>{singleExperience.job_title}</p>
			</div>
			<div class="tablet:pt-4 laptop:text-center">
				<p>Tenure: {singleExperience.tenure} Years</p>
				<p>From {singleExperience.start} to {singleExperience.end}</p>
			</div>
			<div class="tablet:pt-4">
				<p>{singleExperience.address}</p>
			</div>
		</div>
	</div>
	<div class="text-sm text-white col-span-1">
		<h1 class="role-desc-title pb-4 text-3xl">ABOUT THIS ROLE</h1>
		<div class="main-text-div text-sm">
			{@html singleExperience.desc}
		</div>
	</div>
</div>

<style>
	.main-text-div {
		margin-bottom: 50px;
	}
	.role-desc-title {
		font-family: teko, Arial, Helvetica, sans-serif;
	}
	.key-info-div div {
		font-family: Bebas, Arial, Helvetica, sans-serif;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		display: flex;
		flex-direction: column;
		justify-content: end;
	}

</style>
