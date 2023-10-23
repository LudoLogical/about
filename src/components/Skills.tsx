import React from 'react';

const descriptors = [
  'Basic',
  'Proficient',
  'Intermediate',
  'Advanced',
  'Fluent'
];

const webSkills = [
  ['React', 4],
  ['Next.js', 3],
  ['TypeScript', 4],
  ['JavaScript (ES6+)', 4],
  ['HTML/CSS', 4],
  ['jQuery', 2]
];

const languageSkills = [
  ['Java', 4],
  ['Kotlin', 2],
  ['Node.js', 3],
  ['Python 3', 3],
  ['C/C++', 2],
  ['SQL', 3],
  ['Terminal/Bash', 2],
  ['Spanish', 3]
];

const editorSkills = [
  ['IntelliJ IDEA', 4],
  ['WebStorm', 4],
  ['PyCharm', 4],
  ['CLion', 2],
  ['DataGrip', 2],
  ['VS Code', 4],
  ['Eclipse', 2]
];

const toolSkills = [
  ['Postman', 2],
  ['Insomnia', 2],
  ['PostgreSQL', 3],
  ['Vim', 1],
  ['NPM/PNPM/Yarn', 3],
  ['Git', 4],
  ['GitHub', 4],
  ['Jira', 2],
  ['AWS (Certification Pending)', 2]
];

const collaborationSkills = [
  ['Figma', 2],
  ['Notion', 4],
  ['Confluence', 3],
  ['Slack', 4],
  ['Discord', 5],
  ['Microsoft 365', 3],
  ['Google Workspace', 3]
];

const wideLayout = [
  [
    ['Web Languages', webSkills],
    ['Other Languages', languageSkills],
    ['Code Editors', editorSkills]
  ],
  [
    ['Engineering', toolSkills],
    ['Collaboration', collaborationSkills]
  ]
];

const tallLayout = [
  ['Web Languages', webSkills],
  ['Other Languages', languageSkills],
  ['Code Editors', editorSkills],
  ['Engineering', toolSkills],
  ['Collaboration', collaborationSkills]
];

const renderSkillsList = (skill: (string | number)[]) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-y-2"
      key={skill[0]}
    >
      <p className="place-self-start">{skill[0]}</p>
      <progress
        className="progress progress-primary w-48 xxs:w-72"
        value={skill[1]}
        max="5"
      />
      <p className="place-self-end">{descriptors[(skill[1] as number) - 1]}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="mx-4 flex w-full max-w-2xl flex-col items-center justify-center py-20"
    >
      <h2 className="divider mb-6 text-3xl font-bold">Skills</h2>
      <div className="hidden flex-row items-start justify-center gap-x-16 md:flex">
        {[0, 1].map((index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-y-8"
            >
              {wideLayout[index]?.map((category) => {
                return (
                  <div
                    key={category[0] as string}
                    className="flex flex-col items-center justify-center gap-y-2"
                  >
                    <h3 className="mb-2 text-2xl">{category[0]}</h3>
                    {(category[1] as (string | number)[][]).map(
                      renderSkillsList
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center md:hidden">
        {tallLayout &&
          tallLayout.map((category) => {
            return (
              <div
                key={category[0] as string}
                className="collapse-arrow collapse"
              >
                <input type="checkbox" />
                <h3 className="collapse-title mb-2 text-2xl">{category[0]}</h3>
                <div className="collapse-content !transition-none">
                  {(category[1] as (string | number)[][]).map(renderSkillsList)}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
