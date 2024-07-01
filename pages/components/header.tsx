import React, { FC } from 'react';
import { ViewProps } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileImage } from '@fortawesome/free-solid-svg-icons';

const Header: FC<ViewProps> = ({ view, setView }) => {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className='header-row'>
          <h4 className='w-full lg:w-3/4'>
            Welcome to KevTech Innovations<br />
            {/* Tomorrow's Software, Today's Innovation */}
            Pioneering the Future of Software Today
          </h4>
          <div className='social w-full lg:w-1/4 flex justify-end space-x-3 mt-2'>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
        <p>----------------------------------------</p>
        { view !== 0 &&
          <h3 className='clickable' onClick={() => setView(0)}>{`<<BACK`}</h3>
        }
      </div>
    </header>
  );
};

export default Header;
