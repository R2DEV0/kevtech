import Landing from '../views/landing';
import About from '../views/about';
import Profile from '../views/profile';
import Resume from '../views/resume';
import Projects from '../views/projects';
import Contact from '../views/contact';
import Resources from '../views/resources';
import { FC } from 'react';
import { ViewProps } from '../types/types';

export const views: { [key: number]: FC<ViewProps> } = {
  0: Landing,
  1: About,
  2: Profile,
  3: Resume,
  4: Projects,
  5: Contact,
  6: Resources,
};

