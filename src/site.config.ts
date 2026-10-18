// Site-wide information shown in the header, footer, homepage and metadata.
export const SITE = {
  name: 'Elisheva Shiri Decktor',
  role: 'Engineer & interaction designer · Human–machine interaction · Body-centred robotics, haptics & XR',
  description:
    'Portfolio of Elisheva Shiri Decktor: robotics, haptics and human–robot interaction, built around the human body.',
  // The paragraph under the headline on the homepage.
  intro:
    'The human body is my development platform. Muscle signals, skin, heart rhythm, gesture and voice become inputs; skin stretch, robot motion, sound, light and virtual reality answer back. I engineer the mechanism and the experience as one system.',
  // The first project among all those that are not main projects: at the top of the
  // archive, and right after the main projects on the homepage.
  leadProject: 'industrial-robot',
  // The "Email me" button. The address is kept in two parts and only joined when
  // someone clicks, so it is never written in the page for spam robots to collect.
  email: { name: 'laal.esd', domain: 'gmail.com' },
  links: [
    { label: 'GitHub', href: 'https://github.com/Elisheva-Shiri' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/elisheva-shiri/' },
  ] as { label: string; href: string }[],
  // Shown in the About & contact section of the homepage. Leave empty to hide it.
  about: {
    heading: 'Hi, I’m Elisheva Shiri.',
    text: [
      'I’m a creative technologist working across electrical engineering, biomedical engineering and industrial design. I build human-centred technologies for an interconnected future, and I’m curious about the role interfaces play in shaping how people communicate — with each other and with machines.',
      'The human body is my natural interface, and one question runs through my work: how can human senses be expanded? I answer it with circuits, mechanisms, code and virtual environments, and often with one specific person — a one-handed guitarist, children who communicate without words. My M.Sc. research at Ben-Gurion University looks at cognition and behaviour in virtual environments, haptics and human–robot interaction.',
    ],
  },
};

// "What I bring" on the homepage: three columns of skills.
export const BRING = [
  {
    kind: 'mech',
    label: '◆ MECHANICS',
    title: 'Wearable & kinetic mechanisms',
    items: [
      'Cable-driven transmission: actuators off the finger, motion through Bowden cables',
      'A 3D-printed three-leg parallel mechanism: a five-gram fingertip module',
      'Collaborative arm and gripper: Universal Robots, OnRobot, URSim',
      'Servo, stepper and DC motors, planetary gear trains, kinetic builds',
      'CAD and fabrication: SolidWorks, 3D printing, laser cutting',
    ],
  },
  {
    kind: 'human',
    label: '● HUMAN',
    title: 'Human & embodiment',
    items: [
      'Haptics: multidirectional skin stretch, pseudo-haptic cues',
      'Intent from the body: EMG patterns mapped to robot movements',
      'User study: stiffness perception with 43 participants',
      'Design research on how technology reshapes the hand',
      'Co-design with one specific user: a one-handed guitarist, children with cerebral palsy',
    ],
  },
  {
    kind: 'mind',
    label: '▲ INTELLIGENCE',
    title: 'Sense & intelligence',
    items: [
      'Gesture recognition: MediaPipe tracking and an LSTM network I trained',
      'Sound separation with a convolutional network (B.Sc. final project)',
      'Biosignals: skin conductance (GSR), heart rhythm (PPG), EMG',
      'Control in MATLAB: PID, differential drive, multi-robot rendezvous',
      'Embedded: Arduino, ESP32, Raspberry Pi · VR in Unity',
    ],
  },
] as const;

// The human–robot loop under "What I bring". Each step lights up in turn.
export const LOOP = [
  { kind: 'human', label: '01 SENSE THE HUMAN', text: 'Muscle, skin, heart, gesture, voice' },
  { kind: 'mech', label: '02 INFER INTENT', text: 'What the person wants and feels' },
  { kind: 'mech', label: '03 ACT', text: 'Robot arms, servos, light and sound' },
  { kind: 'human', label: '04 THE HUMAN FEELS IT', text: 'Skin stretch, sight, sound — loop again' },
] as const;

// Archive chapters, in order. A project picks one with `chapter: <id>`.
export const CHAPTERS = [
  { id: 'motion', title: 'Robots, motion & mechanisms', color: 'var(--cyan)', blurb: 'Control, actuation and kinetic builds — from PID simulations to servo-driven theatres.' },
  { id: 'touch', title: 'Touch, hand & gesture', color: 'var(--pink)', blurb: 'The hand as both sensor and interface: reshaping it, tracking it, reading it.' },
  { id: 'signals', title: 'Body signals & health sensing', color: 'var(--cyan)', blurb: 'Listening to the body: sound, pulse, biomarkers and motion as data.' },
  { id: 'immersive', title: 'Immersive & spatial experience', color: 'var(--violet)', blurb: 'Spaces people step into: light, sound and scale shaping how a body feels.' },
  { id: 'assistive', title: 'Assistive tech & co-design', color: 'var(--pink)', blurb: 'Built with and for one specific person — controllers, mobility and care.' },
  { id: 'play', title: 'Interaction, play & connection', color: 'var(--cyan)', blurb: 'Apps, games and devices about how people connect — with each other and with machines.' },
  { id: 'research', title: 'Design research & ventures', color: 'var(--violet)', blurb: 'Fieldwork, speculation and entrepreneurship — asking the right question first.' },
  { id: 'art', title: 'Art & image', color: 'var(--foreground)', blurb: 'Murals and painting — the observation of bodies and places underneath the engineering.' },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]['id'];

// Points on the body figure ("Where it meets the body"), in the figure's 240 × 440 space.
export const BODY_POINTS = {
  // On the body
  hair: [120, 27],
  brain: [133, 36],
  eyes: [116, 50],
  ear: [92, 63],
  mouth: [122, 72],
  chest: [106, 134],
  heart: [134, 132],
  belly: [120, 192],
  seat: [120, 232],
  forearm: [184, 188],
  wrist: [190, 228],
  lhand: [46, 256],
  rhand: [194, 250],
  tip: [202, 272],
  legs: [95, 330],
  feet: [147, 414],
  // The whole body: drawn as a ring around the figure, with its number here
  whole: [36, 92],
  // Outside the body: drawn off the figure, with a dotted line to where it relates
  front: [262, 190], // something in front of the person, within reach
  beside: [-22, 190], // other people, or something next to the person
  above: [120, -8], // overhead: a lamp, a roof, the sky
  ground: [214, 440], // the ground under the feet
  away: [266, 44], // someone or something far away
} as const;

// Where the dotted line of an outside point lands on the figure.
export const BODY_ANCHORS: Partial<Record<keyof typeof BODY_POINTS, readonly [number, number]>> = {
  front: [198, 222],
  beside: [50, 222],
  above: [120, 26],
  ground: [150, 424],
  away: [146, 46],
};

export type BodyPoint = keyof typeof BODY_POINTS;

// The Resume page. Projects are left out on purpose: they live on the homepage and archive.
export const RESUME = {
  education: [
    {
      when: 'Aug 2026',
      title: 'Practicum in Embodied Brain Technology',
      where: 'Brown University · Summer school',
      text: 'Hands-on neuroscience out of the lab and into working products.',
      focus: [],
    },
    { when: '2023 – 2026', title: 'M.Sc. Biomedical Engineering', where: 'Ben-Gurion University of the Negev', focus: ['Haptic device development', 'Human–robot interaction'] },
    { when: '2023 – 2025', title: 'M.Des. Industrial Design', where: 'Bezalel Academy of Arts and Design', focus: ['Innovation technology', 'Metaverse research'] },
    { when: '2019 – 2023', title: 'B.Sc. Electrical Engineering', where: 'Shenkar — Engineering. Design. Art.', focus: ['Signal & image processing', 'Human–computer interaction'] },
    { when: '2015 – 2017', title: 'Theoretical Mathematics', where: 'The Hebrew University of Jerusalem · six of eight semesters', focus: ['Algebraic structures', 'Economics & psychology'] },
  ],
  experience: [
    { when: '2024 –', org: 'Ben-Gurion University', place: 'Biomedical Engineering department, Be’er Sheva', roles: ['Lab instructor: medical equipment & electronics', 'Robotics lab: technical support for adaptive manufacturing, soldering stations and motor systems'] },
    { when: '2022 – 2023', org: 'Intel', place: 'Ignite department, global', roles: ['Technology analysis: building blocks of new technologies', 'Market analysis: ecosystem needs and competitors'] },
    { when: '2022', org: 'General Motors', place: 'Research department, Herzliya', roles: ['Simulation engineer: Python-based environment development', 'Research assistant: autonomous vehicle control'] },
    { when: '2021 – 2022', org: 'Tikkun Olam Makers', place: 'Universities department, Tel Aviv', roles: ['Project manager: product development teams of up to 15 members', 'Developing and running collaborations'] },
    { when: '2019 – 2021', org: 'Shenkar', place: 'Advancement department, Ramat Gan', roles: ['Advancement centre: calculus, algebra, statistics and discrete mathematics', 'Academic mentoring: task management, methods and study'] },
    { when: '2018 – 2019', org: 'Sabai Garden', place: 'Pai, Thailand', roles: ['Project manager: social innovation & qualitative research', 'Developing a hydroelectric system build'] },
  ],
  skills: [
    { group: 'Python', items: 'NumPy, PyTorch, TensorFlow, OpenCV, Pandas, SQL, Matplotlib, MNE, Librosa, Scrapy, Robotics, ROS, Gym' },
    { group: 'C++ & embedded', items: 'Arduino, ESP32, MQTT, Wi-Fi, MIDI' },
    { group: 'Other languages', items: 'MATLAB, R, JavaScript, HTML, Flutter' },
    { group: 'XR & design', items: 'Unity, Figma, Canva' },
    { group: 'CAD & fabrication', items: 'SolidWorks, AutoCAD, Blender, 3D printing' },
    { group: 'Electronics', items: 'HDL, OrCAD, LTspice, Multisim, soldering' },
    { group: 'Lighting & optics', items: 'AGi32, DIALux, Xlight' },
  ],
  certificates: [
    { when: '2023', what: 'Startup Associate', where: 'HUN University, Germany' },
    { when: '2021 – 2022', what: 'Board Design', where: 'Impact Labs, Israel' },
    { when: '2020 – 2021', what: 'Entrepreneurship & Management', where: 'Tel Aviv University' },
    { when: '2020', what: 'Investment Analyst', where: 'Fresh.Fund, Israel' },
  ],
  volunteering: [
    { when: '2020 – 2023', what: 'Student mentor', where: 'Shenkar', text: 'Accompanying students as they enter the education system' },
    { when: '2016 – 2017', what: 'Head of the mathematics student union', where: 'The Hebrew University of Jerusalem', text: 'Elected to mediate between students, professors and administration' },
    { when: '2013 – 2014', what: 'National service, two years', where: 'ALUT', text: 'Association for autistic people and their families' },
  ],
  languages: [
    { name: 'Hebrew', level: 'Native' },
    { name: 'English', level: 'Full professional' },
  ],
  interests: ['Brain–computer interfaces', 'VR, AR & MR', 'DIY making', 'Asian culture'],
};
