
// import Head from 'next/head';
// import { Card } from '@/components/Card';
// import { SimpleLayout } from '@/components/SimpleLayout';

// const experienceData = [
//   {
//     company: 'CyberHawkz Intelligence Services',
//     role: 'Backend Developer Intern',
//     description: '',
//     href: ''
//   },
//   {
//     company: 'Pravaah Consulting',
//     role: 'Full Stack Developer Intern',
//     description: '',
//     href: ''
//   }
// ];

// function LinkIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//       {/* SVG Path */}
//     </svg>
//   );
// }

// export default function Experience() {
//   return (
//     <>
//       <Head>
//         <title>Work Experience - Varun Pandey</title> {/* Update Title */}
//         <meta name="description" content="Work Experience of Varun Pandey" />
//       </Head>
//       <SimpleLayout
//         title="Work Experience"
//         intro="The experience I have gained through my internships"
//       >
//         <ul
//           role="list"
//           className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {experienceData.map((experience) => {
//             return (
//               <Card as="li" key={experience.role}>
//                 <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
//                   <Card.Link href={experience.href}>{experience.company}</Card.Link>
//                 </h2>
//                 <Card.Description>{experience.description}</Card.Description>
//                 <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-green-500 dark:text-zinc-200">
//                   <LinkIcon className="flex-none w-6 h-6" />
//                   <span className="ml-2">{experience.role}</span> {/* Update to display company */}
//                 </p>
//               </Card>
//             );
//           })}
//         </ul>
//       </SimpleLayout>
//     </>
//   );
// }


import Head from 'next/head';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

const experienceData = [
  {
    company: 'CyberHawkz Intelligence Services',
    role: 'Backend Developer Intern',
    description: `Implemented robust backend solutions using Python, Go, Django, and Django Rest framework.
      Contributed to database design and management with Postgres and SQLite.
      Developed robust endpoints and mechanisms for reporting malicious activity, as an extension of the existing mobile app.
      Conducted IP geolocation using MaxMind.
      Engineered a sophisticated URL intelligence system, employing scheduled tasks with Celery and Redis to analyze uptime, downtime, and latency.
      Spearheaded the development of a scraping-crawling URL intelligence system, utilizing a Go microservice .`,
    href: ''
  },
  {
    company: 'Pravaah Consulting',
    role: 'Full Stack Developer Apprenticeship',
    description: `Engaged in an apprenticeship as a Full Stack Developer intern, slated for involvement in a phone book web app project before receiving an alternative offer.`,
    href: ''
  }
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {/* SVG Path */}
    </svg>
  );
}

export default function Experience() {
  return (
    <>
      <Head>
        <title>Work Experience - Varun Pandey</title> {/* Update Title */}
        <meta name="description" content="Work Experience of Varun Pandey" />
      </Head>
      <SimpleLayout
        title="Work Experience"
        intro="The experience I have gained through my internships"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experienceData.map((experience, index) => (
            <Card as="li" key={index}>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={experience.href}>{experience.company}</Card.Link>
              </h2>
              <Card.Description>
                <ul className="list-disc pl-6">
                  {experience.description.split('\n').map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-green-500 dark:text-zinc-200">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{experience.role}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
