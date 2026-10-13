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
    heading: 'Let’s build machines people want to stand next to.',
    text: [
      'I work between electrical engineering and interaction design: circuits, code and the people who touch them. Many of my projects are built with and for one specific person — a one-handed guitarist, children who communicate without words — and I bring that same closeness to robots, haptics and wearable devices.',
    ],
    education: [
      { year: '2019 –', what: 'B.Sc. Electrical Engineering & Design', where: 'Shenkar' },
      { year: '2021', what: 'Entrepreneurship & Management', where: 'Tel Aviv University' },
      { year: '2015', what: 'Theoretical Mathematics', where: 'The Hebrew University of Jerusalem' },
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
  { id: 'motion', title: 'Robots, motion & mechanisms', color: '#4DF0D8', blurb: 'Control, actuation and kinetic builds — from PID simulations to servo-driven theatres.' },
  { id: 'touch', title: 'Touch, hand & gesture', color: '#FF6FB5', blurb: 'The hand as both sensor and interface: reshaping it, tracking it, reading it.' },
  { id: 'signals', title: 'Body signals & health sensing', color: '#4DF0D8', blurb: 'Listening to the body: sound, pulse, biomarkers and motion as data.' },
  { id: 'immersive', title: 'Immersive & spatial experience', color: '#8F7DF0', blurb: 'Spaces people step into: light, sound and scale shaping how a body feels.' },
  { id: 'assistive', title: 'Assistive tech & co-design', color: '#FF6FB5', blurb: 'Built with and for one specific person — controllers, mobility and care.' },
  { id: 'play', title: 'Interaction, play & connection', color: '#4DF0D8', blurb: 'Apps, games and devices about how people connect — with each other and with machines.' },
  { id: 'research', title: 'Design research & ventures', color: '#8F7DF0', blurb: 'Fieldwork, speculation and entrepreneurship — asking the right question first.' },
  { id: 'art', title: 'Art & image', color: '#F2F1F7', blurb: 'Murals and painting — the observation of bodies and places underneath the engineering.' },
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
