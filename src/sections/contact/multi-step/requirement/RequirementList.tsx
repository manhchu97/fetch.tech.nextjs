import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const RequirementList = () => {
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

  const onDragEnd = (result: { destination: unknown }) => {
    console.log(result)
    if (!result.destination) return

    // const newListCerti = [...listRequirementOptions]

    // const [moveItem] = newListCerti.splice(result.source.index, 1)

    // newListCerti.splice(result.destination.index, 0, moveItem)

    // setValue(FORM_FIELDS.CERTIFICATE, newListCerti)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='requirement-list'
          >
            {listRequirementOptions.map((item, index) => (
              <div key={item.value}>
                <Draggable draggableId={item.value.toString()} index={index}>
                  {(provided) => (
                    <div
                      className='requirement-item'
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div className='requirement-item-content'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='1em'
                          height='1em'
                          preserveAspectRatio='xMidYMid meet'
                          viewBox='0 0 16 16'
                        >
                          <path
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='1.5'
                            d='M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5'
                          />
                        </svg>
                        <p className='requirement-item-label'>{item.label}</p>
                      </div>

                      <div className='requirement-item-action'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13'
                            stroke='#0A66C2'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M16.04 3.01928L8.16 10.8993C7.86 11.1993 7.56 11.7893 7.5 12.2193L7.07 15.2293C6.91 16.3193 7.68 17.0793 8.77 16.9293L11.78 16.4993C12.2 16.4393 12.79 16.1393 13.1 15.8393L20.98 7.95928C22.34 6.59928 22.98 5.01928 20.98 3.01928C18.98 1.01928 17.4 1.65928 16.04 3.01928V3.01928Z'
                            stroke='#0A66C2'
                            strokeWidth='1.5'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M14.91 4.15039C15.2416 5.32786 15.8699 6.40046 16.7349 7.26544C17.5999 8.13042 18.6725 8.7588 19.85 9.09039'
                            stroke='#0A66C2'
                            strokeWidth='1.5'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>

                        <svg
                          width='20'
                          height='22'
                          viewBox='0 0 20 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19 4.98C15.67 4.65 12.32 4.48 8.98 4.48C7 4.48 5.02 4.58 3.04 4.78L1 4.98M6.5 3.97L6.72 2.66C6.88 1.71 7 1 8.69 1H11.31C13 1 13.13 1.75 13.28 2.67L13.5 3.97M16.85 8.14L16.2 18.21C16.09 19.78 16 21 13.21 21H6.79C4 21 3.91 19.78 3.8 18.21L3.15 8.14M8.33 15.5H11.66M7.5 11.5H12.5'
                            stroke='#FF0000'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </Draggable>
              </div>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default RequirementList
