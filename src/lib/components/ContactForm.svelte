<script>
    import { mounted } from "../store/store";
</script>

<div class="contact-main-container flex flex-col justify-center items-center desktop:min-h-fit pb-12" class:hide={!$mounted}>
	<div class="contact-page-title-div px-24 pt-12 tablet:py-16 laptop:py-24">
		<h2 class="contact-page-title text-3xl laptop:text-8xl tablet:text-6xl text-white opacity-75 desktop:text-9xl desktop:px-14">Let's start on something incredible together</h2>
	</div>

	<div
		class=" flex flex-col tablet:grid tablet:grid-cols-4 justify-between items-center tablet:items-start pt-8 pb-12 text-white"
	>
		<div class="flex flex-col col-span-3 text-2xl justify-center items-center">
			<form action="https://getform.io/f/pagxpqeb" method="POST">
				<div class="flex flex-col gap-8 items-center justify-center">
					<div class="flex flex-col form-col gap-4">
						<label for="name">Name:</label>
						<input
							required
							id="name"
							class="bg-transparent"
							type="text"
							name="name"
							placeholder="Tony Li"
							autocomplete="on"
						/>
					</div>
					<div class="flex flex-col form-col gap-4">
						<label for="email">Email:</label>
						<input required id="email" type="email" name="email" placeholder="leetony347@yahoo.com" autocomplete="on" />
					</div>
					<div class="flex flex-col form-col gap-4 items-start w-full">
						<label for="message">Message:</label>
						<textarea
							id="message"
							class="min-h-48"
							type="text"
							name="message"
							placeholder="Hello Tony, I would like..."
						></textarea>
					</div>
					<!-- add hidden Honeypot input to prevent spams -->
					<input type="hidden" name="_gotcha" style="display:none !important" />

					<button class="bg-gray-600 font-mono p-2 rounded-lg text-lg" type="submit"
						>Lets chat!</button
					>
				</div>
			</form>
		</div>
		<div class="flex flex-col pt-16 tablet:pt-2 justify-center items-start gap-2">
			<h1 class="pb-2">Other Contacts:</h1>
			<span class="py-2 other-contact-link hover:animate-bounce hover:"
				><a class="py-2" href="mailto:leetony347@yahoo.com" target="_blank">leetony347@yahoo.com</a></span
			>
			<span class="py-2 other-contact-link hover:animate-bounce"
				><a class="py-2" href="https://github.com/Todaricli" target="_blank">Github</a></span
			>
			<span class="py-2 other-contact-link hover:animate-bounce"
				><a class="py-2" href="https://www.linkedin.com/in/tuocheng-li-b86b59231/" target="_blank">Linkedin</a
				></span
			>
		</div>
	</div>
</div>

<style>
	.hide {
		display: none;
	}

	input,
	textarea {
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
		transform: translateX(20px);
	}

	button {
		transition: transform 2s;
	}

	::placeholder {
		opacity: 0.25;
	}

	.contact-page-title {
		font-family: DMSans, Arial, Helvetica, sans-serif;
		transition-property: font-size, padding, text-wrap;
		transition-duration: 1s;
	}
	.other-contact-link:hover {
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	}
	.contact-page-title-div {
		transition-property: padding, transform;
		transition-duration: 1s;
	}
    .contact-main-container {
        animation: page-effect 1s forwards linear;
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