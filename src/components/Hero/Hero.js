import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hello there
      </SectionTitle>
      <SectionText>
        I'm Oladeji Tosin, a backend developer. I like to craft scalable products and write high quality code.{' '}
      </SectionText>
      <Button onClick={() => (window.location = 'mailto:oladejit3@gmail.com')}>Hire me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
