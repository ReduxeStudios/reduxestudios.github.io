const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'reduxestudios.github.io',
  title: 'RS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Reduxe Studios',
  role: 'Creating Projects',
  social: {
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Ice Fishing',
    description:
      'A remake of the classic Club Penguin game made in Unity, for IOS and Android devices',
    stack: ['C++', 'Javascript'],
    sourceCode: 'https://github.com/ReduxeStudios/icefishing',
  },
  {
    name: 'Techwear Store',
    description:
      'Clothing website made as a part of my learning to code journey',
    stack: ['HTML', 'Javascript', 'PHP'],
    sourceCode: 'https://github.com/ReduxeStudios/Techwear-Store',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bgjaco30@gmail.com',
}

export { header, about, projects, skills, contact }
