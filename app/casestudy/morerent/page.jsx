
import { NavBar }  from "@/components"
import { MoreRentHero, MoreRentMyRole, MoreRentTechStack, MoreRentDescription, MoreRentProblemStatement, MoreRentFigmaDesign, MoreRentWIW, MoreRentMoreProjects, GetInTouch } from "@/components/casestudies/morerent"
import { Footer } from "@/components"

export default function Home() {
	return (
		<main>
			<NavBar />
			<MoreRentHero />
			<MoreRentMyRole />
			<MoreRentTechStack />
			<MoreRentDescription />
			<MoreRentProblemStatement />
			<MoreRentFigmaDesign />
			<MoreRentWIW />
			<MoreRentMoreProjects />
			<GetInTouch />
			<div className='relative z-0 bg-[#151E2C] pb-8'>
				<Footer />
			</div>
		</main>
	)
}
