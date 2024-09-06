<script>
	import { mounted } from '../store/store';
</script>

<div
	id="about"
	class:hide={!$mounted}
	class="flex flex-col items-center gap-4 tablet:grid tablet:grid-cols-6 px-12 tablet:px-16 laptop:px-56 pt-24 laptop:min-h-screen"
>
	<div class="flex flex-col justify-start items-center col-span-2 h-full">
		<div class="bg-gray-100 rounded-3xl tablet:max-h-96 flex flex-col justify-center items-center p-2 overflow-hidden h-full">
			<img class="w-full rounded-3xl tablet:max-h-96" src="/about_icon/tony.jpg" alt="tony li" />
		</div>
		<div
			class="key-info-div text-xl flex flex-col pt-6 pl-6 items-start gap-5 tablet:gap-0 text-gray-200 tablet:text-gray-200 opacity-100 pb-10 tracking-widest"
		>
			<div>
				<h1>TONY TUOCHENG Li</h1>
			</div>
			<div class="tablet:pt-4">
				<div class="flex flex-col tablet:pt-0 justify-center items-start gap-2">
					<h1>Contacts:</h1>
					<span class="text-sm other-contact-link hover:translate-x-4"
						><a href="mailto:leetony347@yahoo.com">leetony347@yahoo.com</a></span
					>
					<span class="text-sm other-contact-link hover:translate-x-4"
						><a href="https://github.com/Todaricli" target="_blank">Github</a></span
					>
					<span class="text-sm other-contact-link hover:translate-x-4"
						><a href="https://www.linkedin.com/in/tuocheng-li-b86b59231/" target="_blank"
							>Linkedin</a
						></span
					>
				</div>
			</div>
		</div>
	</div>
	<div class="text-sm text-white col-span-2 flex flex-col items-start h-full">
		<h1 class="about-desc-title pb-4 text-3xl">Summary</h1>
		<div class="main-text-div text-sm">
			<p>
				My name is Tuocheng Li, also known as Tony, and I am currently pursuing a Master of Information Technology at the University of Auckland. My transition into ICT began during the final year of my Bachelor’s in Finance and Economics, where a demo of Microsoft’s Bing AI analyzing a financial report can be much faster than a experienced analyst sparked my interest in technology.
			</p>
			<br>
			<p>
				I am passionate about software development, drawn to its constant learning and problem-solving opportunities. I have skills in JavaScript, TypeScript, Java, Python, HTML5, CSS, SQL, and frameworks such as React, Node.js, PostgreSQL, and MongoDB. I’m also experienced with Google Cloud Platform, Pub/Sub, and Gmail API.
			</p>
			<br>
			<p>
				A key project I’m working on is the CPNZ Patrol App, where I contribute as a backend developer. I’ve also enhanced platforms like Lecturmo by adding AI-driven features.
			</p>
			<br>
			<p>
				What sets me apart is my ability to bridge technical expertise with strong communication skills, refined through roles in retail, teaching, and finance. In my free time, I enjoy hiking and immersing myself in nature, a peaceful escape from the fast pace of daily life.
			</p>
		</div>
	</div>
</div>

<style>
	.hide {
		display: none;
	}
	.main-text-div {
		margin-bottom: 50px;
	}
	.about-desc-title {
		font-family: teko, Arial, Helvetica, sans-serif;
	}
	.key-info-div h1 {
		font-family: Bebas, Arial, Helvetica, sans-serif;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		display: flex;
		flex-direction: column;
		justify-content: end;
	}
	#about,
	span {
		transition-property: padding, transform;
		transition-duration: 1s;
		animation: page-effect 1000ms forwards linear;
	}
</style>
