import React, { FC, useState } from 'react';
import { ViewProps } from '../types/types';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage, faFile, faFolder } from '@fortawesome/free-solid-svg-icons';

const Landing: FC<ViewProps> = ({ view, setView }) => {

  const [section, setSection] = useState(0);
  const TriggerNextSection = () => {
    setSection(section + 1);
  };

  return(
      <div className='my-8'>
        <div className='w-full flex flex-wrap justify-start items-center lg:flex-nowrap lg:space-x-6'>
          <div className='flex flex-col justify-center items-center w-1/2 lg:w-auto lg:flex-row lg:space-x-6'>
            <div className="flex justify-center items-center flex-col file-group mb-5 lg:mb-0 clickable" onClick={() => setView(1)}>
              <FontAwesomeIcon size="3x" icon={faFolder}/>
              <p>About</p>
            </div>
            <div className="flex justify-center items-center flex-col file-group mb-5 lg:mb-0 clickable" onClick={() => setView(4)}>
              <FontAwesomeIcon size="3x" icon={faFolder} />
              <p>Projects</p>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-1/2 lg:w-auto lg:flex-row lg:space-x-6'>
            <div className="flex justify-center items-center flex-col file-group mb-5 lg:mb-0 clickable" onClick={() => setView(5)}>
              <FontAwesomeIcon size="3x" icon={faFile} />
              <p>Contact</p>
            </div>
            <div className="flex justify-center items-center flex-col file-group mb-5 lg:mb-0 clickable"  onClick={() => setView(3)}>
              <FontAwesomeIcon size="3x" icon={faFile} />
              <p>Resume</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Landing;