import { Container } from "../ui/Container";
import { ImageActivitySection } from "./ImageActivitySection";
import { StatsMichelin } from "./StatsMichelin";


export function BrandProofSection() {
  return (
    <section className="bg-green-100 py-16 text-brand-ink">
     <Container >
            <ImageActivitySection />   
            <StatsMichelin />
       
     </Container>
    </section>
  )
}