import React, { FC } from 'react';
import { ViewProps } from '../types/types';
import { TypeAnimation } from 'react-type-animation';

const Landing: FC<ViewProps> = ({ view, setView }) => {
    return(
      <div>
        <TypeAnimation
          style={{ whiteSpace: 'pre-line', display: 'block' }}
          sequence={[`COMPANY OVERVIEW`]}
          speed={60}
          className='mt-3 text-xl underline'
          cursor={false}
        />
        <TypeAnimation
          style={{ whiteSpace: 'pre-line', display: 'block' }}
          sequence={[`KevTech is a trailblazing entity, renowned for pioneering advancements in immersive entertainment and cutting-edge technology solutions. With a prestigious portfolio that includes ventures like AREA15, Strategy9, and J Taylor Education, we excel in crafting compelling digital experiences and optimizing infrastructure for diverse industries.`]}
          speed={90}
          className='text-lg text-justify'
          cursor={false}
        />
        <TypeAnimation
          style={{ whiteSpace: 'pre-line', display: 'block' }}
          sequence={[`MISSION STATEMENT`]}
          speed={60}
          className='mt-3 text-xl underline'
          cursor={false}
        />
        <TypeAnimation
          style={{ whiteSpace: 'pre-line', display: 'block' }}
          sequence={[`At KevTech, we specialize in harnessing the power of modern web technologies to create innovative solutions that push the boundaries of possibility. From developing interactive games and virtual reality experiences to building robust web applications and optimizing educational platforms, we bring strategic innovation to every project.`]}
          speed={90}
          className='text-lg text-justify'
          cursor={false}
        />
      </div>
    )
}

export default Landing;