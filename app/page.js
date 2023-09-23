
import { NavBar, HeroSection, Skills, Education, Projects, HonorableMentions, Testimonials, Contact, Footer } from "@/components"
import StarsCanvas from "@/components/canvas/Stars"

export default function Home() {
	return (
		<main>
			<NavBar />
			<HeroSection />
			<Skills />
			<Education />
			<Projects />
			<HonorableMentions />
			<Testimonials />
			<div className='relative z-0 bg-[#151E2C] pt-10 sm:pb-10 pb-6'>
				<Contact />
				<StarsCanvas />
				<Footer />
			</div>
		</main>
	)
}
