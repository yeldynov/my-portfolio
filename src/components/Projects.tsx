import React from 'react';
import ProjectItem from './ProjectItem';
import project1 from '../assets/react1.png';
import project2 from '../assets/react2.png';
import project3 from '../assets/react3.png';
import project4 from '../assets/react4.png';
import project5 from '../assets/react5.png';
import project6 from '../assets/react6.png';

type Props = {};

export default function Projects({}: Props) {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
      <h1 className='text-4xl font-bold text-center text-[#001b5c]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        laborum eos provident modi, culpa in! Blanditiis sapiente quae inventore
        deleniti dolor aperiam eum placeat, doloremque voluptatum cupiditate,
        reiciendis eveniet quaerat.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={project1} title='Photostudio portal' />
        <ProjectItem img={project2} title='Tea Shop site' />
        <ProjectItem img={project3} title='Youtube Clone' />
        <ProjectItem img={project4} title='Carpenko Store' />
        <ProjectItem img={project5} title='Nefrolog Portfolio' />
        <ProjectItem img={project6} title="Lory's Backery" />
      </div>
    </div>
  );
}
