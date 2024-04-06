<script>
    import { mounted } from "../store/store";
</script>

<div id="about" class:hide={!$mounted}
	class="flex flex-col items-center tablet:grid tablet:grid-cols-6 tablet:items-start px-12 tablet:px-16 laptop:px-56 pt-24 laptop:h-screen"
>
	<div class="flex flex-col justify-center items-center col-span-2 mr-6">
		<div class="bg-gray-100 rounded-3xl flex flex-col justify-center items-center p-2">
			<img class="w-full h-full" src="/about_icon/john.png" alt="john smith"/>
		</div>
		<div
			class="key-info-div w-full text-xl flex flex-col pt-6 pl-6 items-start gap-5 tablet:gap-0 text-gray-200 tablet:text-gray-200 opacity-100 pb-10 tracking-widest"
		>
			<div>
				<h1>JOHN SMITH</h1>
			</div>
			<div class="tablet:pt-4">
				<div class="flex flex-col tablet:pt-0 justify-center items-start gap-2">
					<h1>Contacts:</h1>
					<span class="text-sm other-contact-link hover:translate-x-4"
						><a href="mailto:leetony347@yahoo.com">leetony347@yahoo.com</a></span
					>
					<span class="text-sm other-contact-link hover:translate-x-4"
						><a href="https://github.com/Todaricli">Github</a></span
					>
					<span class="text-sm other-contact-link hover:translate-x-4"
						><a href="https://www.linkedin.com/in/tuocheng-li-b86b59231/">Linkedin</a
						></span
					>
				</div>
			</div>
		</div>
	</div>
	<div class="text-sm text-white col-span-3">
		<h1 class="about-desc-title pb-4 text-3xl">ABOUT ME</h1>
		<div class="main-text-div text-sm">
			<p>Allow me to introduce myself: I'm John Smith, a developer with a passion for crafting innovative solutions that make an impact. Over the years, I've had the privilege of working on a multitude of projects for some of the biggest names in the tech industry.

				From my early days diving into coding to my current role as a seasoned developer, I've always been drawn to the challenge of pushing the boundaries of what's possible. <br><br> Each project I've been a part of has been a learning experience, fueling my drive to continually improve and innovate.
				
				My journey has taken me from Silicon Valley giants to dynamic startups, where I've had the opportunity to collaborate with talented teams and contribute to cutting-edge technologies.<br><br> Whether it's developing robust systems, optimizing algorithms, or troubleshooting complex issues, I thrive on the excitement of solving problems and delivering top-notch solutions.
				
				But beyond the code, what truly sets me apart is my ability to connect with others and foster a collaborative environment. I believe that great things happen when diverse minds come together, and I'm committed to building relationships and driving projects forward through open communication and shared goals.
				
				As I look ahead to the future, I'm excited to continue my journey in the ever-evolving world of tech, leveraging my skills and experience to create something incredible, together.</p>
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
	#about, span {
		transition-property: padding, transform;
		transition-duration: 1s;
        animation: page-effect 1000ms forwards linear;
    }

</style>