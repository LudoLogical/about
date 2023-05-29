import Link from 'next/link';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const tableRows = [
  [
    'Current',
    'Project Owl',
    '',
    'Next.js \u00B7 React \u00B7 TypeScript',
    'https://project-owl.fly.dev/',
    'https://github.com/LudoLogical/project-owl'
  ],
  [
    '2023',
    'Personal Website v3',
    '',
    'Next.js \u00B7 React \u00B7 TypeScript',
    '',
    'https://github.com/LudoLogical/personal-website-v3'
  ],
  [
    '2023',
    'Nebula Platform Front End',
    'Nebula Labs',
    'Next.js \u00B7 React \u00B7 TypeScript',
    '',
    'https://github.com/UTDNebula/platform'
  ],
  [
    '2023',
    'Personal Website v2',
    '',
    'Next.js \u00B7 React \u00B7 TypeScript',
    '',
    'https://github.com/LudoLogical/personal-website-v2'
  ],
  [
    '2022',
    'Features for Decision Tree',
    'Cvent',
    'Java \u00B7 React \u00B7 TypeScript',
    '',
    ''
  ],
  [
    '2021',
    'Package Tracking Page',
    'Onfleet',
    'React \u00B7 JavaScript',
    '',
    ''
  ],
  [
    '2021',
    'Novis A Cappella Website',
    'Novis A Cappella',
    'HTML \u00B7 CSS \u00B7 JavaScript',
    'https://novisutd.org/',
    'https://github.com/NovisACappella/novisacappella.github.io'
  ],
  [
    '2020',
    'Personal Website v1',
    '',
    'HTML \u00B7 CSS \u00B7 JavaScript',
    '',
    'https://github.com/LudoLogical/personal-website-v1'
  ],
  [
    '2020',
    'University Student Network Study',
    'UT Dallas',
    'Python \u00B7 Pandas \u00B7 UNIX',
    'https://arxiv.org/abs/2104.01261',
    ''
  ],
  [
    '2020',
    'Phage Game',
    'CodeDay',
    'Python \u00B7 PyGame \u00B7 PyInstaller',
    '',
    'https://github.com/LudoLogical/phage-game'
  ],
  [
    '2019',
    'Huevo Juego',
    'CodeDay',
    'Java \u00B7 Processing 3',
    '',
    'https://github.com/LudoLogical/huevo-juego'
  ],
  [
    '2018',
    'Pinball Game',
    'CodeDay',
    'Python \u00B7 PyGame \u00B7 PyInstaller',
    '',
    'https://github.com/LudoLogical/pinball-game'
  ],
  [
    '2018',
    'Chef Spud',
    'CodeDay',
    'Python \u00B7 PyGame \u00B7 PyInstaller',
    '',
    'https://github.com/LudoLogical/roguelike-game'
  ],
  [
    '2018',
    'In Construction',
    'CodeDay',
    'Python \u00B7 PyGame \u00B7 PyInstaller',
    '',
    'https://github.com/LudoLogical/in-construction'
  ],
  [
    '2017',
    'Quotemaker',
    'CodeDay',
    'HTML \u00B7 CSS \u00B7 JavaScript',
    'https://jcwang111.github.io/quotemaker',
    'https://github.com/jcwang111/quotemaker'
  ],
  [
    '2017',
    'Super Hyper Buff',
    'CodeDay',
    'HTML \u00B7 CSS \u00B7 JavaScript',
    '',
    'https://github.com/LudoLogical/superhyperbuff'
  ],
  [
    '2016',
    'With These Eyes',
    'CodeDay',
    'HTML \u00B7 CSS \u00B7 JavaScript',
    '',
    'https://github.com/LudoLogical/with-these-eyes'
  ],
  [
    '2015',
    'You Sea, You Eat',
    'CodeDay',
    'HTML \u00B7 CSS \u00B7 JavaScript',
    '',
    'https://github.com/LudoLogical/you-sea-you-eat'
  ]
];

const renderTableRow = (data: string[]) => {
  return (
    <tr key={data[1] as string} className="hover:bg-base-300">
      <td className="rounded-l-lg">{data[0]}</td>
      <td>{data[1]}</td>
      <td className="hidden md:table-cell">
        {(data[2] as string).length > 0 ? data[2] : '\u2014'}
      </td>
      <td className="hidden md:table-cell">{data[3]}</td>
      <td className="rounded-r-lg">
        <div className="flex flex-row gap-x-2">
          <Link
            href={data[4] as string}
            className={(data[4] as string).length > 0 ? '' : 'hidden'}
          >
            <FiExternalLink />
          </Link>
          <Link
            href={data[5] as string}
            className={(data[5] as string).length > 0 ? '' : 'hidden'}
          >
            <FiGithub />
          </Link>
          <span
            className={
              (data[4] as string).length > 0 || (data[5] as string).length > 0
                ? 'hidden'
                : ''
            }
          >
            &mdash;
          </span>
        </div>
      </td>
    </tr>
  );
};

const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="mx-4 flex w-full max-w-4xl flex-col items-center justify-center py-20"
    >
      <h2 className="divider mb-6 text-3xl font-bold">Work</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left [&>*>*>*]:p-4">
          {/* head */}
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
              <th className="hidden md:table-cell">Sponsor</th>
              <th className="hidden md:table-cell">Major Technologies</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>{tableRows.map(renderTableRow)}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Work;
