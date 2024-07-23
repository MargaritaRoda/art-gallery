import React, { forwardRef, memo, useEffect, useRef } from 'react';
import './About.scss';
import { Container } from '../Container/Container';
import { aboutId } from '../../services/config/routs';

interface AboutProps {
  ref?: React.MutableRefObject<HTMLElement>;
}

export const About = forwardRef<HTMLElement, AboutProps>((_, ref) => {
  return (
    <Container className="about-wrapper">
      <section id={aboutId} className="about-section" ref={ref}>
        <h2 className="about-title">
          Valentin is the master who follows the traditions of painting when
          creating works of fine art
        </h2>
        <p className="about-article">
          Винсент ван Гог – нидерландский художник-постимпрессионист, чье
          творчество, практически неоцененное при жизни, стало достоянием
          человечества, феноменом, значительно опередившим свое время. Творец,
          для которого не существовало канонов и ограничений, художник, не
          понятый и не признанный современниками, человек, чья полна безумия и
          одиночества жизнь оборвалась трагически – все это о нем, о художнике,
          который в большей степени принадлежал своим работам, чем себе самому.
          Всего за десяток лет ван Гог создал примерно 860 картин маслом и более
          2100 работ в разных жанрах и техниках. Его работоспособность удивляла,
          а умение видеть не форму, а суть, поражало.
        </p>
      </section>
    </Container>
  );
});
