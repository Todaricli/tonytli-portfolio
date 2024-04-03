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
			console.log($mounted + "in contact")
		}, $globalDataLoadingDuration);
		return () => clearTimeout(timer);
	});
</script>

<Loader message={loadingMessage}></Loader>

<div
	class=" flex flex-col tablet:grid tablet:grid-cols-4 justify-between items-center tablet:items-start pt-8 pb-52 text-white"
	class:hide={!$mounted}
>
	<div class="flex flex-col col-span-3 text-2xl">
		<form action="https://getform.io/f/pagxpqeb" method="POST">
			<div class="flex flex-col gap-8 items-center justify-center">
				<div class="flex flex-col form-col gap-4">
					<label for="name">Name:</label>
					<input required class="bg-transparent" type="text" name="name" placeholder="John Smith" />
				</div>
				<div class="flex flex-col form-col gap-4">
					<label for="email">Email:</label>
					<input required type="email" name="email" placeholder="john@Smith.com" />
				</div>
				<div class="flex flex-col form-col gap-4 items-start">
					<label for="message">Message:</label>
					<textarea class="h-32" type="text" name="message" placeholder="Hello john, I would like..."></textarea>
				</div>
				<!-- add hidden Honeypot input to prevent spams -->
				<input type="hidden" name="_gotcha" style="display:none !important" />

				<button class="bg-gray-600 font-mono p-2 rounded-lg text-lg" type="submit">Lets chat!</button>
			</div>
		</form>
	</div>
		<div class="flex flex-col pt-14 tablet:pt-0 justify-center items-start gap-2">
            <h1 class="w-56 pb-2">Other Contacts:</h1>
            <span class="hover:animate-bounce"><a class="p-2 m-1" href="mailto:leetony347@yahoo.com">leetony347@yahoo.com</a></span>
			<span class="hover:animate-bounce"><a class="p-2 m-1" href="https://github.com/Todaricli">Github</a></span>
			<span class="hover:animate-bounce"><a class="p-2 m-1" href="https://www.linkedin.com/in/tuocheng-li-b86b59231/">Linkedin</a></span>
		</div>
</div>

<style>
	.hide {
		display: none;
	}

	input, textarea {
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

    h1 {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

	.form-col input,
	textarea {
		background: transparent !important;
	}
	textarea:focus,
	input:focus {
		outline: none;
	}

	button:hover {
		animation: button-effect 0.5s forwards linear;
        transform: translateX(20px)
	}

    button {
        transition: transform 2s;
    }

	::placeholder {
		opacity: 0.25;
	}

    @keyframes button-effect {
        0% {

        }
        50% {
            border-radius: 35%;
            padding: 6px;
            background-color: aliceblue;
            color: gray;
        }
        100% {
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
            padding: 12px;
            background-color: whitesmoke;
            color: black;
        }
    }
</style>
