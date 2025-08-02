const cateTool = [
  {
    title: "Fun & Interactive Web Experiments / Games",
    tools: [
      { name: "Neal.fun", description: "Fun interactive web experiments (e.g., 'Draw Logos from Memory', 'The Size of Space').", url: "https://neal.fun/" },
      { name: "WindowSwap", description: "View random video windows into people's lives around the world.", url: "https://www.window-swap.com/" },
      { name: "Radio Garden", description: "Spin the globe and listen to live radio stations globally.", url: "http://radio.garden/" },
      { name: "Quick, Draw!", description: "A Google AI game that guesses your doodles.", url: "https://quickdraw.withgoogle.com/" },
      { name: "GeoGuessr", description: "Guess your location based on Street View imagery.", url: "https://www.geoguessr.com/" },
      { name: "The Useless Web", description: "Takes you to a random absurd website.", url: "http://www.theuselessweb.com/" },
      { name: "Zoomquilt", description: "Infinite zooming surreal artwork.", url: "https://zoomquilt.org/" },
      { name: "Find the Invisible Cow", description: "Absurd audio-based hide-and-seek game.", url: "https://findtheinvisiblecow.com/" },
      { name: "Slow Roads", description: "Calming infinite driving simulator with scenic visuals.", url: "https://slowroads.io/" },
      { name: "Puzzle Party (Google)", description: "Real-time multiplayer jigsaw puzzles.", url: "https://puzzle.withgoogle.com/" },
      { name: "Google Games", description: "Interactive games like Pac-Man, Snake, Solitaire by Google.", url: "https://www.google.com/doodles/games" }
    ]
  },
  {
    title: "Online Gaming Platforms",
    tools: [
      { name: "3D Aim Trainer", description: "FPS aim training with personalized analytics.", url: "https://www.3daimtrainer.com/" },
      { name: "Miniplay", description: "Lightweight platform for thousands of bite-sized web games.", url: "https://www.miniplay.com/" },
      { name: "GeoFS", description: "Free online flight simulator with global terrain.", url: "https://www.geo-fs.com/" },
      { name: "Poki", description: "Thousands of online games across genres.", url: "https://poki.com/" },
      { name: "CrazyGames", description: "Instant-play browser games (no download needed).", url: "https://www.crazygames.com/" },
      { name: "Y8 Games", description: "Massive catalog of online games, including classics.", url: "https://y8.com/" },
      { name: "Yandex Games", description: "Russian platform offering tons of browser-based games.", url: "https://yandex.ru/games/" }
    ]
  },
  {
    title: "Job Platforms & Career Tools",
    tools: [
      { name: "LinkedIn", description: "Professional networking, job search, and resume showcase.", url: "https://www.linkedin.com/" },
      { name: "Indeed", description: "Global job board with filters by salary, role, and location.", url: "https://www.indeed.com/" },
      { name: "Glassdoor", description: "Job listings + company reviews, salaries, and interview tips.", url: "https://www.glassdoor.com/" },
      { name: "Monster", description: "Traditional job board with resume tools and alerts.", url: "https://www.monster.com/" },
      { name: "Naukri (India)", description: "One of India’s largest job search engines.", url: "https://www.naukri.com/" },
      { name: "AngelList Talent", description: "Find startup jobs and remote tech roles.", url: "https://angel.co/talent" },
      { name: "Wellfound", description: "Remote-first tech job board (formerly AngelList Talent).", url: "https://wellfound.com/" },
      { name: "Himalayas", description: "Remote job board with modern UX and company transparency.", url: "https://himalayas.app/" },
      { name: "We Work Remotely", description: "Jobs exclusively for remote roles.", url: "https://weworkremotely.com/" },
      { name: "Remote OK", description: "Curated list of tech-based remote jobs.", url: "https://remoteok.com/" },
      { name: "Dice", description: "Job listings for tech professionals.", url: "https://www.dice.com/" },
      { name: "Turing", description: "Remote developer jobs matched by skill + AI vetting.", url: "https://www.turing.com/" },
      { name: "Jobspresso", description: "Remote work marketplace in tech, marketing, and support.", url: "https://jobspresso.co/" }
    ]
  },
  {
    title: "Learning & Coding Platforms (Gamified / Interactive)",
    tools: [
      { name: "Codedex", description: "Gamified RPG-style code learning platform.", url: "https://codedex.io/" },
      { name: "Sololearn", description: "Interactive, mobile-first programming lessons.", url: "https://www.sololearn.com/" },
      { name: "Mimo", description: "Code on the go with real-world mini-projects.", url: "https://mimo.org/" },
      { name: "FreeCodeCamp", description: "100% free coding curriculum with certification.", url: "https://www.freecodecamp.org/" },
      { name: "Codewars", description: "Solve code challenges ('katas') to level up.", url: "https://www.codewars.com/" },
      { name: "Exercism", description: "Real-world code problems with mentorship.", url: "https://exercism.org/" },
      { name: "CodeCombat", description: "Learn Python and JavaScript through a game world.", url: "https://codecombat.com/" },
      { name: "The Odin Project", description: "Full web dev curriculum from scratch.", url: "https://www.theodinproject.com/" }
    ]
  },
  {
    title: "Science & Exploration",
    tools: [
      { name: "Innerbody", description: "Interactive 3D Human Anatomy Explorer.", url: "https://www.innerbody.com/" },
      { name: "Solar System Scope", description: "Accurate, real-time 3D model of the solar system.", url: "https://www.solarsystemscope.com/" },
      { name: "Scale of the Universe 2", description: "Zoom from quantum foam to the observable universe.", url: "https://htwins.net/scale2/" },
      { name: "Earth View by Google", description: "Stunning satellite images from Google Earth.", url: "https://earth.google.com/web/data=CgAuGwAVQ2hVdVJvYWcyaFVoQzZqNThkY0l2Rmc" }
    ]
  },
  {
    title: "Web Dev & Creative Tools",
    tools: [
      { name: "Anime.js", description: "Lightweight JS animation library.", url: "https://animejs.com/" },
      { name: "Three.js", description: "JavaScript 3D library for web experiences.", url: "https://threejs.org/" },
      { name: "Figma", description: "Cloud-based design + prototyping platform.", url: "https://www.figma.com/" },
      { name: "CodePen", description: "Live HTML/CSS/JS playground.", url: "https://codepen.io/" },
      { name: "Glitch", description: "Collaborative code editor for live web projects.", url: "https://glitch.com/" },
      { name: "Angular", description: "TypeScript-based framework for web apps.", url: "https://angular.io/" },
      { name: "React.dev", description: "Official docs + learning for React.", url: "https://react.dev/" },
      { name: "Canva", description: "Drag-and-drop graphic design tool for everyone.", url: "https://www.canva.com/" }
    ]
  }
];