export default function Home() {
	return (
		<div
			className="flex max-h-svh w-full flex-col items-start justify-between bg-cover bg-center bg-no-repeat lg:bg-size-[90%] lg:bg-[100%_24%] xl:bg-[100%_22%]  lg:flex-row p-8 lg:py-[14%] lg:px-[8%] xl:px-[10%]"
			style={{ backgroundImage: "url('/elastic-I-flat.webp')" }}
		>
			<div className="text-left">
				<p className="font-jost lg:text-xs xl:text-lg uppercase tracking-[0.17em] text-gray-300">
					<span className="text-slate-500">PIECEOFSHOW</span>ISCOMING
				</p>
			</div>
			<div className="md:text-right pr-4 md:pr-0">
				<p className="font-jost lg:text-xs xl:xl:text-lg uppercase tracking-[0.17em] text-gray-300">
					FORNOW
					<a
						href="https://www.twine.net/AndrewZbihlyj"
						target="_blank"
						rel="noopener noreferrer"
						className="text-slate-500 glitch-container"
						data-text="LOOKHERE"
					>
						LOOKHERE
					</a>
					OR
					<a
						href="https://pieceofshow.bigcartel.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-slate-500 glitch-container"
						data-text="SHOPHERE"
					>
						SHOPHERE
					</a>
					OR
					<a
						href="mailto:andrew@pieceofshow.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-slate-500 glitch-container"
						data-text="SAYHELLO"
					>
						SAYHELLO
					</a>
				</p>
			</div>
		</div>
	);
}
