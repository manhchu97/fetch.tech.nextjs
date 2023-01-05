import React from 'react'

// import RequirementList from './RequirementList'
import dynamic from 'next/dynamic'

import clsx from 'clsx'

import Autocomplete from '@/components/autocomplete'
import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'

import styles from './Requirement.module.scss'

const RequirementList = dynamic(() => import('./RequirementList'), {
  ssr: false,
})

const RequirementStep = (): React.ReactElement => {
  const { handleNextStep } = useFormStepContext()

  const listRequirementOptions = [
    'Solid knowledge of modern web development technologies & frameworks based on JavaScript, HTML, CSS.',
    'Experience of building systems with high data protection requirements, anonymous data and data encryption. ',
    'Experience in design and implement REST, GraphQL APIs.',
    'Willing to learn new technology, product mind-set.',
    'HTML, CSS',
    'Interested in Cryptocurrency and Blockchain.',
    'Strong background in Linux / Unix, preferably with experience in NixOS.',
    '1',
    'Experience with SQL and NoSQL database. ',
    'Participate in software architecture design and data structure.',
    'Understanding of CI/CD and experience with one of the major cloud providers (preferably AWS), as well as orchestration and cluster management experience; Infrastructure-as-Code mentality.',
    'Build & maintain successfully CI/CD in our software environment.',
    'Define and monitor system metrics to ensure predefined SLA, SLO. ',
    'Expert in Node.js, preferably experience in TypeScript extensions.',
    '4+ years experience in DevOps engineering environment.',
    'Write code features according to operational needs, docker, message queue, database (MySQL, Mongo ...), API, CI/CD …',
    'Design and deploy cloud platform capabilities - full stack network, load balancing, caching, DNS, security, databases, etc.',
    'Collaborate with software engineers to understand the software architecture, main components, current obstacles and provide solutions.',
    'More than 4 years of working experience with Express, Angular/ReactJS, Node technology stack.',
    'Perform advanced technical troubleshooting for public, private and hybrid cloud environments.',
    'The title will be adjusted accordingly based on assessment during the interview process.',
    'Optimize the system to process large data.',
    'Write clean, clear, easy-to-maintain code',
    'Experience building / consuming OpenAPI and GraphQL specifications.',
    'Good working knowledge on design patterns and hands on experience with REST APIs or GraphQL.',
    'Research and apply techniques that ensure user requirements.',
    'Have experienced with GCP, AWS or Hetzner.',
    'Deploy code on server test and production.',
    'Fully familiar with Software development lifecycle.',
    'Experience working on AWS or other cloud stacks and Docker.',
    'React, Redux',
    'On time, hard working',
    'Strong grasp of Docker and Kubernetes fundamentals.',
    'Building management backend (server-side) for systems operating: monitoring system, reporting system, data integration …',
    'Support development team to setup and configure the development environment.',
    'Must have good unit testing experience.',
    'Experience in backend development, including experience as a Node.JS Developer.',
    'Javascript',
    'Must be familiar with NoSQL databases such as MongoDB or CouchDB, Web services, SOA patterns.',
    'Experience of building microservices systems and testing them.',
    'Develop automation tools, including shell scripts to automate necessary tasks.',
    'Strong problem solving and time management skills.',
  ].map((item, index) => ({
    value: index,
    label: item,
  }))

  const listOptionDisabled = [
    {
      value: 1,
      label:
        'Strong programming skills in at least one common language such as Java or Javascript.',
    },
  ]

  // const onDragEnd = (result: { destination: unknown }) => {
  //   console.log(result)
  //   if (!result.destination) return

  //   // const newListCerti = [...listRequirementOptions]

  //   // const [moveItem] = newListCerti.splice(result.source.index, 1)

  //   // newListCerti.splice(result.destination.index, 0, moveItem)

  //   // setValue(FORM_FIELDS.CERTIFICATE, newListCerti)
  // }

  return (
    <div
      className={clsx('ft-full-screen', styles['requirement-step-container'])}
    >
      <div className='requirement-container-title h5'>
        What are your requirements for candidates?
      </div>

      <Autocomplete
        options={listRequirementOptions}
        listOptionDisabled={listOptionDisabled}
      />

      <section className='requirement-edit-section'>
        <div className='requirement-edit-title h5'>Requirements</div>

        <RequirementList />
      </section>

      <form onSubmit={handleNextStep} className='requirement-form-container'>
        <ClientAction />
      </form>
    </div>
  )
}

export default RequirementStep
