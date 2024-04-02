<script>
	import { onMount } from 'svelte';
	import { globalDataLoadingDuration } from '../../lib/store/store';
	import Loader from '../../lib/components/Loader.svelte';
	import { mounted } from '../../lib/store/store';

	const loadingMessage = 'Contact.';
	$mounted = false;

	onMount(() => {
		const timer = setTimeout(() => {
			$mounted = true;
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<Loader message={loadingMessage}></Loader>

<div class="flex flex-col justify-center items-center text-fuchsia-700 p-48" class:hide={!$mounted}>
	<div class="flex flex-col">
		<form class="flex flex-col gap-6 items-center justify-center" action="https://getform.io/f/pagxpqeb" method="POST">
			<input class="w-1/6" type="text" name="name" />
			<input type="email" name="email" />
			<textarea type="text" name="message"></textarea>
			<!-- add hidden Honeypot input to prevent spams -->
			<input type="hidden" name="_gotcha" style="display:none !important" />

			<select name="work-experience">
				<option value="one-year">0-1 years</option>
				<option value="one-five-years">1-5 years</option>
			</select>
			<button type="submit">Send</button>
		</form>
	</div>
</div>

<style>
	.hide {
		display: none;
	}
</style>
