
import { NavBar }  from "@/components"
import { MoreRentHero, MoreRentMyRole, MoreRentTechStack, MoreRentDescription, MoreRentProblemStatement } from "@/components/casestudies"


export default function Home() {
	return (
		<main>
			<NavBar />
			<MoreRentHero />
			<MoreRentMyRole />
			<MoreRentTechStack />
			<MoreRentDescription />
			<MoreRentProblemStatement />
		</main>
	)
}
