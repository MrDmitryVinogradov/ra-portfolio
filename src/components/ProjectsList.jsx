import React from 'react';

export default function ProjectsList(props) {
  const { projects } = props;
  return (
    <div className='projects-list'>
      {projects.map((el, i) => <img className='project' src={el.img} key={i} alt={el} />)}
    </div>
  )
}