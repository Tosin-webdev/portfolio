import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
// import { ExternalLinks } from '../Projects/ProjectsStyles';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, ExternalLinks } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          {/* Icon */}
          <DiCssdeck size="3rem" /> <Span>Oladeji Tosin</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
      <li>
        <ExternalLinks
          href="https://medium.com/@oladejit3/introduction-to-callback-functions-2f67fc1af483"
          target="blank"
        >
          <NavLink>Blogs</NavLink>
        </ExternalLinks>
      </li>
      <li>
        <ExternalLinks
          href="https://drive.google.com/file/d/1chn6-nquu1fXCEoSna1rJ5spc6rp_wzE/view?usp=sharing"
          target="blank"
        >
          <NavLink>Resume</NavLink>
        </ExternalLinks>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/tosin-webdev" target="blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tosin-oladeji-4395551ab/" target="blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
