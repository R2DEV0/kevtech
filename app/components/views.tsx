import Landing from '../views/landing';
import Profile from '../views/profile';
import Resume from '../views/resume';
import Projects from '../views/projects';
import Contact from '../views/contact';
import Resources from '../views/resources';
import { FC } from 'react';
import { ViewProps } from '../types/types';

export const views: { [key: number]: FC<ViewProps> } = {
  0: Landing,
  1: Profile,
  2: Resume,
  3: Projects,
  4: Contact,
  5: Resources,
};

