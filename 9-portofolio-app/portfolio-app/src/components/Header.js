import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const navigation = [
  {
    id: 'projects',
    href: '#projects',
    title: 'Projects',
  },
  {
    id: 'contactme',
    href: '#contact',
    title: 'Contact Me',
  },
];

const handleClick = (anchor) => () => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Socials = ({ socials }) =>
  socials.map(({ icon, url }) => (
    <a key={url} href={url} icon={icon} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon key={url} icon={icon} size="2x" />
    </a>
  ));

const Menu = ({ navigation }) =>
  navigation.map(({ id, href, title }) => (
    <a key={id} href={href} onClick={handleClick(id)}>
      {title}
    </a>
  ));

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;
      if (!currHeaderElement) return;
      if (prevScrollPos > currScrollPos)
        currHeaderElement.style.transform = 'translateY(0)';
      else currHeaderElement.style.transform = 'translateY(-200px)';
      prevScrollPos = currScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={100}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="900px" minWidth="600px" margin="0 auto">
        <HStack px={8} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={10}>
              <Socials socials={socials} />
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Menu navigation={navigation} />
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
