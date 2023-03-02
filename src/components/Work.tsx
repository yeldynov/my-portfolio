import React from 'react';
import WorkItem from './WorkItem';
import { WorkPeace } from '../types';

const data: WorkPeace[] = [
  {
    year: 2020,
    title: 'Content Creator',
    duration: '3 years',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptates dolore temporibus labore. Commodi sequi, libero temporibus quo aspernatur est!',
  },
  {
    year: 2020,
    title: 'Content Creator',
    duration: '3 years',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptates dolore temporibus labore. Commodi sequi, libero temporibus quo aspernatur est!',
  },
  {
    year: 2020,
    title: 'Content Creator',
    duration: '3 years',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptates dolore temporibus labore. Commodi sequi, libero temporibus quo aspernatur est!',
  },
  {
    year: 2020,
    title: 'Content Creator',
    duration: '3 years',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptates dolore temporibus labore. Commodi sequi, libero temporibus quo aspernatur est!',
  },
];

type Props = {};

export default function Work({}: Props) {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((el, idx) => (
        <WorkItem
          key={idx}
          year={el.year}
          title={el.title}
          duration={el.duration}
          details={el.details}
        />
      ))}
    </div>
  );
}
