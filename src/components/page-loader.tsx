/** Full-screen preloader: two rotating squares and the page label. */
export function PageLoader({ message }: { message: string }) {
	return (
		<div
			role="status"
			aria-live="polite"
			className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white dark:bg-black"
		>
			<span className="absolute inline-block size-52 animate-loader border-8 border-neutral-800 dark:border-gray-200">
				<span className="inline-block w-full animate-loader-inner align-top" />
			</span>
			<span className="absolute inline-block size-36 animate-loader border-4 border-neutral-800 dark:border-gray-200">
				<span className="inline-block w-full animate-loader-inner align-top" />
			</span>
			<span className="text-center text-neutral-900 dark:text-white">{message}</span>
		</div>
	);
}
