
import { NavBar }  from "@/components"
import { MoreRentHero, MoreRentMyRole, MoreRentTechStack, MoreRentDescription, MoreRentProblemStatement, MoreRentFigmaDesign, MoreRentWIW } from "@/components/casestudies"


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
		</main>
	)
}
