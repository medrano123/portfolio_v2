
import { NavBar, HeroSection, Skills, Education, Projects, Testimonials, Contact, Footer } from "@/components"
import StarsCanvas from "@/components/canvas/Stars"

export default function Home() {
	return (
		<main>
			<NavBar />
			<HeroSection />
			<Skills />
			<Education />
			<Projects />
			<Testimonials />
			<div className='relative z-0 bg-[#151E2C] py-10'>
				<Contact />
				<StarsCanvas />
				<Footer />
			</div>
		</main>
	)
}
