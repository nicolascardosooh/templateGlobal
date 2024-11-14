import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      
      <SectionTitle
        preTitle="Serviços"
        title="O que oferecemos"
      >
       Campo para destacar serviços oferecidos pela empresa.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Veja nosso vídeo"
        title="Saiba como podemos ajudar seu negócio"
      >
        Esta seção destaca um vídeo promocional ou demonstrativo dos nossos serviços. Analisando o mercado, sabemos que uma landing page com vídeo tem uma taxa de conversão 3% maior. Então, não se esqueça de assistir!
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Depoimentos"
        title="O que nossos clientes dizem"
      >
        Depoimentos são uma ótima maneira de aumentar a confiança e a conscientização da marca. Use esta seção para destacar os depoimentos dos nossos clientes satisfeitos.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Perguntas Frequentes">
        Responda às possíveis perguntas dos seus clientes aqui, isso aumentará a taxa de conversão, bem como reduzirá pedidos de suporte ou chat.
      </SectionTitle>

      <Faq />
      
      <Cta />
    </Container>
  );
}
