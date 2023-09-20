
import { NavBar, Footer }  from "@/components"
import { FilmpireHero, FilmpireMyRole, FilmpireDescription, FilmpireMoreProjects, FilmpireProblemStatement, FilmpireTechStack, FilmpireWIW } from "@/components/casestudies/filmpire"
import { GetInTouch } from "@/components/casestudies/morerent"

export default function Home() {
	return (
		<main>
			<NavBar />
            <FilmpireHero />
            <FilmpireMyRole />
            <FilmpireTechStack />
            <FilmpireDescription />
            <FilmpireProblemStatement />
            <FilmpireWIW /> 
			{/* <GetInTouch />
			<div className='relative z-0 bg-[#151E2C] pb-8'>
				<Footer />
			</div> */}
		</main>
	)
}
