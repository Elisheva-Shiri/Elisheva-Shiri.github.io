// Site-wide information shown in the header, footer, homepage and metadata.
export const SITE = {
  name: 'Elisheva Shiri Decktor',
  role: 'Electrical Engineer & Interaction Designer',
  description: 'Portfolio of Elisheva Shiri Decktor, electrical engineer and interaction designer.',
  // The line under the name on the homepage.
  intro: 'The power of imagination at your fingertips.',
  links: [
    { label: 'GitHub', href: 'https://github.com/Elisheva-Shiri' },
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/…' },
    // { label: 'Email', href: 'mailto:you@example.com' },
  ] as { label: string; href: string }[],
  // Shown in the About section of the homepage. Leave empty to hide it.
  about: {
    text: [
      'I work between electrical engineering and interaction design: circuits, code and the people who touch them. Many of my projects are built with and for a specific person, such as a one-handed guitarist, toddlers who need a wheelchair, or children who communicate without words.',
    ],
    education: [
      { year: '2019 –', what: 'B.Sc. Electrical Engineering & Design', where: 'Shenkar' },
      { year: '2021', what: 'Entrepreneurship & Management', where: 'Tel Aviv University' },
      { year: '2015', what: 'Theoretical Mathematics', where: 'The Hebrew University of Jerusalem' },
    ],
  },
};
