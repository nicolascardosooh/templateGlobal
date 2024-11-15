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
        preTitle="Services"
        title="What we offer"
      >
        Field to highlight services offered by the company.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <div id="about"></div>
      <SectionTitle
        preTitle="Watch our video"
        title="know how to we can assist in your project"
      >
        This section highlights a promotional video or demonstration of our services. Analyzing the market, we know that a landing page with video has a 3% higher conversion rate. So, don't forget to watch!
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="testimonials"
        title="What our customers say"
      >
        Testimonials are a great way to build trust and brand awareness. Use this section to highlight testimonials from our satisfied customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers' potential questions here, this will increase the conversion rate as well as reduce support or chat requests.
      </SectionTitle>

      <Faq />

    </Container>
  );
}
