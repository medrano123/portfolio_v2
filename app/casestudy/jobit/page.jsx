
import { NavBar, Footer }  from "@/components"
import { JobItHero, JobItMyRole, JobItTechStack, JobItDescription, JobItProblemStatement, JobItFigmaDesign, JobItWIW, JobItMoreProjects } from "@/components/casestudies/jobit"
import { GetInTouch } from "@/components/casestudies/morerent"

export default function Home() {
	return (
		<main>
			<NavBar />
			<JobItHero />
			<JobItMyRole />
			<JobItTechStack />
			<JobItDescription />
			<JobItProblemStatement />
			<JobItFigmaDesign />
			<JobItWIW />
			<JobItMoreProjects />
			<GetInTouch />
			<div className='relative z-0 bg-[#151E2C] pb-8'>
				<Footer />
			</div> 
		</main>
	)
}
