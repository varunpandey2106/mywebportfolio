import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'



const projectsData = [
  {
    title: 'BaazaarAPI',
    description: `Baazaar API is an online retail backend project.It supports User Management&Authentication,
    Product Management,
    Shopping Cart Management,
    Notifications,
    Payment Integration,
    Third party Integrations. Built using Django,
    Django REST framework,
    Celery,
    PostgreSQL,
    AWS RDS,
    OAuth2,
    Stripe API,
    Twillio API,
    Gmail API,
    Postman,
    Swagger and
    Docker
    `,
    href: 'https://github.com/varunpandey2106/BaazaarAPI',
  },
  {
    title: 'DreactDashboard',
    description: `DReact Dashboard is a dashboard web application that visualizes and analyzes data.It utilizes ReactJS
    D3js,
    Python,
    Django,
    Django Rest Framework,
    Postman,
    Swagger,
    PostgreSQL,
    Railway,
    nginx,
    gunicorn,
    Docker
    
    

    `,
    href: 'https://github.com/varunpandey2106/DReactDashboard',
  },
  {
    title: 'SocialOverFlowwAPI',
    description: `SocialOverfloww is a blog/thought-post oriented Social Media API that is built using Django and Django Rest Framework

    It supports
    User Management and Authentication, Social Login
    Post/Artcile Management,
    Feed,
    Notifications,
    Discussions,
    Messaging,
    Third party Integrations. Was built using Django,
    Django REST framework
    Celery,
    PostgreSQL,
    DrawSQL,
    OAuth2,
    Twillio API,
    Gmail API,
    Postman,
    Docker`,
    href: 'https://github.com/varunpandey2106/SocialOverflowwAPI',
  },
  {
    title: 'Omnichat',
    description: `This is a chat application that utilizes the OpenAI API to provide intelligent and relevant responses to user queries. The application is built using the Python-Django framework for the backend, while the frontend is developed using HTML, CSS, and JavaScript. It also employs fetchAPI and AJAX to handle asynchronous requests and update the chatting interface in real-time.

    `,
    href: 'https://github.com/varunpandey2106/OmniChat',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - {}</title>
        <meta name="description" content="Personal projects by Varun Pandey" />
      </Head>
      <SimpleLayout
        title="Featured Projects"
        intro="These are some of the projects that I'm most proud of."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => {
            console.log(project)
            return (
              <Card as="li" key={project.title}>
                
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.href}>{project.title}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-green-500 dark:text-zinc-200">
                  <LinkIcon className="flex-none w-6 h-6" />
                  <span className="ml-2">{project.title}</span>
                </p>
              </Card>
            )
          })}
        </ul>
      </SimpleLayout>
    </>
  )
}


