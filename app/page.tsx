"use client"
import React, { useState } from 'react';
import Landing from './views/landing';
import Profile from './views/profile';
import Resume from './views/resume';
import Projects from './views/projects';
import Contact from './views/contact';
import Resources from './views/resources';

export default function Home() {
  
  const [view, setView] = useState({
    landing: true, 
    profile: false,
    resume: false,
    projects: false,
    contact: false,
    resources: false
  });
  console.log("")
  
  return (
    <main className="flex min-h-screen flex-col">
      { 
        view.profile ? <Profile /> :
        view.resume ? <Resume /> :
        view.projects ? <Projects /> :
        view.contact ? <Contact /> :
        view.resources ? <Resources /> : <Landing />
      }
    </main>
  );
}
