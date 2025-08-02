//modify tools here
const categoriesData = [
    {
        title: "🤖 AI TOOLS",
        tools: [
            {
                name: "ChatGPT",
                description: "AI chatbot by OpenAI.",
                url: "https://www.chatgpt.com"
            },
            {
                name: "Gemini",
                description: "AI chatbot by Google.",
                url: "https://gemini.google.com"
            },
            {
                name: "Bing Chat",
                description: "AI chatbot by Microsoft.",
                url: "https://www.bing.com/chat"
            },
            {
                name: "Perplexity",
                description: "AI-powered search engine.",
                url: "https://www.perplexity.ai"
            },
            {
                name: "Deepseek",
                description: "AI chatbot by DeepSeek.",
                url: "https://chat.deepseek.com"
            },
            {
                name: "Claude",
                description: "Conversational AI by Anthropic.",
                url: "https://claude.ai"
            },
            {
                name: "Ollama",
                description: "AI model hosting platform.",
                url: "https://www.ollama.com"
            },
            {
                name: "Meta AI",
                description: "AI assistant by Meta.",
                url: "https://www.meta.ai"
            },
            {
                name: "Copy.ai",
                description: "AI-powered content and copywriting tool.",
                url: "https://www.copy.ai"
            },
            {
                name: "Runway",
                description: "AI video and creative content generation platform.",
                url: "https://runwayml.com"
            },
            {
                name: "Leonardo AI",
                description: "AI image generation platform for creatives.",
                url: "https://leonardo.ai"
            },
            {
                name: "MidJourney",
                description: "AI-powered art and image generation tool.",
                url: "https://www.midjourney.com"
            },
            {
                name: "Rosebud AI",
                description: "AI-generated avatars and virtual models.",
                url: "https://www.rosebud.ai"
            },
            {
                name: "Meshy.ai",
                description: "AI-powered tool for 3D mesh generation and editing.",
                url: "https://meshy.ai"
            },
            {
                name: "ElevenLabs AI",
                description: "AI speech synthesis and voice‑cloning platform.",
                url: "https://elevenlabs.io"
            },
            {
                name: "Hailuo AI",
                description: "AI video creation by MiniMax (text-to-video & image-to-video).",
                url: "https://hailuoai.video"
            },
            {
                name: "Kling AI",
                description: "Text‑to‑video generation platform by Kuaishou.",
                url: "https://app.klingai.com/global"
            },
            {
                name: "ImagineArt",
                description: "All‑in‑one AI art & image generator (text‑to‑image, video, editing, upscaling).",
                url: "https://www.imagine.art"
            },
            {
                name: "InVideo AI",
                description: "AI video editor & generation platform (text‑to‑video, script conversion, template‑based editing).",
                url: "https://invideo.io"
            },
            {
                name: "Adobe Firefly",
                description: "AI image, video, vector & moodboarding platform by Adobe.",
                url: "https://firefly.adobe.com"
            },
            {
                name: "Humanize AI",
                description: "AI text humanizer that transforms AI-generated writing into natural, human‑like content and bypasses detection tools.",
                url: "https://humanizeai.com"
            },
            {
                name: "Grammarly",
                description: "AI‑powered writing assistant for grammar, style, tone, drafts, and AI detection.",
                url: "https://www.grammarly.com"
            },
            {
                name: "Suno AI",
                description: "AI music generator: create full songs (lyrics, vocals, instrumentation) from text prompts.",
                url: "https://suno.com"
            },
            {
                name: "n8n",
                description: "Workflow Automation Tool.",
                url: "https://n8n.io"
            },
            {
                name: "HeyGen",
                description: "AI Video Avatar Generator.",
                url: "https://www.heygen.com"
            },
            {
                name: "Captions AI",
                description: "Smart Video Captions & Edits.",
                url: "https://www.captions.ai"
            }
        ]
    },
    {
        title: "🌐 WEBSITES",
        tools: [
            {
                name: "TopoExport",
                description: "Download 2D maps and 3D terrain/site models (contours, buildings, roads, trees) in formats like DXF, IFC, OBJ, STL, SVG.",
                url: "https://topoexport.com"
            },
            {
                name: "Flaticon",
                description: "Free icons, stickers, and animated graphics.",
                url: "https://www.flaticon.com/"
            },
            {
                name: "Mixkit",
                description: "Stock videos, sound effects, and motion templates.",
                url: "https://mixkit.co/"
            },
            {
                name: "Pexels",
                description: "Free stock photos and videos by creators.",
                url: "https://www.pexels.com/"
            },
            {
                name: "Pinterest",
                description: "Save and explore creative inspiration.",
                url: "https://www.pinterest.com/"
            },
            {
                name: "Pixabay",
                description: "Royalty-free images, videos, and music.",
                url: "https://pixabay.com/"
            },
            {
                name: "Pixelcut",
                description: "AI tools for product photos and mockups.",
                url: "https://www.pixelcut.ai/"
            },
            {
                name: "Photopea",
                description: "Free online Photoshop alternative.",
                url: "https://www.photopea.com/"
            },
            {
                name: "Remove.bg",
                description: "Automatically erase image backgrounds.",
                url: "https://www.remove.bg/"
            },
            {
                name: "GDevelop",
                description: "Make games visually, no coding required.",
                url: "https://gdevelop.io/"
            },
            {
                name: "Icons8",
                description: "Beautiful icons, illustrations, and AI-generated content.",
                url: "https://icons8.com/"
            },
            {
                name: "Canva",
                description: "Graphic design tool with templates and AI features.",
                url: "https://www.canva.com/"
            },
            {
                name: "Sketchfab",
                description: "Explore, share, and download 3D models and assets for design, gaming, VR, and AR.",
                url: "https://sketchfab.com/"
            },
            {
                name: "BuildCores",
                description: "Interactive 3D PC builder and part‑picker providing compatibility checks, benchmarking, and live price comparisons globally.",
                url: "https://buildcores.com"
            }
        ]
    },
    {
        title: "🌐 WEBSITES TO KILL BOREDOM",
        tools: [
            {
                name: "Neal.fun",
                description: "A collection of fun interactive web experiments and games.",
                url: "https://neal.fun"
            },
            {
                name: "WindowSwap",
                description: "View video windows into other people’s lives from around the world.",
                url: "https://www.window-swap.com"
            },
            {
                name: "Radio Garden",
                description: "Listen to live radio stations from anywhere on the globe.",
                url: "https://radio.garden"
            },
            {
                name: "Quick, Draw!",
                description: "A fun AI game that guesses what you’re sketching.",
                url: "https://quickdraw.withgoogle.com"
            },
            {
                name: "GeoGuessr",
                description: "Guess locations based on street view photos.",
                url: "https://geoguessr.com"
            },
            {
                name: "The Useless Web",
                description: "Takes you to a random weird/funny website.",
                url: "https://theuselessweb.com"
            },
            {
                name: "Zoomquilt",
                description: "An infinitely zooming trippy art experience.",
                url: "https://www.zoomquilt.org/"
            },
            {
                name: "Find the Invisible Cow",
                description: "Ridiculous but addictive audio-based game.",
                url: "https://findtheinvisiblecow.com/"
            }
        ]
    },
    {
        title: "🎮 GAMES",
        tools: [
            {
                name: "3D Aim Trainer",
                description: "Browser-based FPS aim trainer offering over 200 drills, game sync (Apex, Valorant, CS2, etc.), personalized analytics, and global leaderboards.",
                url: "https://www.3daimtrainer.com/"
            },
            {
                name: "Miniplay",
                description: "A fast‑loading web-based platform offering thousands of bite‑sized games across genres like arcade, puzzle, sports, and multiplayer.",
                url: "https://www.miniplay.com"
            },
            {
                name: "GeoFS",
                description: "A free online flight simulator. Fly anywhere in the world in a realistic aircraft.",
                url: "https://www.geofs.com/"
            },
            {
                name: "Poki",
                description: "Free online games across action, puzzle, and multiplayer genres.",
                url: "https://poki.com"
            },
            {
                name: "CrazyGames",
                description: "Play thousands of browser games instantly without downloading.",
                url: "https://www.crazygames.com"
            },
            {
                name: "Y8 Games",
                description: "A massive collection of games including 2-player, dress-up, and classic Flash games.",
                url: "https://www.y8.com"
            },
            {
                name: "Slow Roads",
                description: "A calm driving simulator through infinite scenic roads – no goal, just vibes.",
                url: "https://slowroads.io"
            },
            {
                name: "Yandex Games",
                description: "Russian-based platform with tons of web games, all playable instantly.",
                url: "https://yandex.com/games"
            },
            {
                name: "Puzzle Party by Google",
                description: "Solve collaborative jigsaw puzzles with friends in real-time.",
                url: "https://artsandculture.google.com/experiment/puzzle-party/EwGBPZlIzv0KRw?hl="
            },
            {
                name: "Google Games",
                description: "Interactive games by google.",
                url: "https://artsandculture.google.com/play"
            }
        ]
    },
    {
        title: "🏫 EDUCATION",
        tools: [
            {
                name: "NotebookLM",
                description: "Google’s AI notebook powered by Gemini, letting you upload documents and automatically generate summaries, interactive Q&A, study guides, and podcast-style audio overviews.",
                url: "https://notebooklm.google"
            },
            {
                name: "TurboLearn AI",
                description: "AI-powered study assistant that transforms lecture audio, videos, or PDFs into notes, flashcards, quizzes, and chatbot‑style Q&A.",
                url: "https://www.turbolearn.ai/"
            },
            {
                name: "Codedex",
                description: "Gamified coding lessons with RPG-style quests for beginners.",
                url: "https://www.codedex.io/"
            },
            {
                name: "Sololearn",
                description: "Learn programming with bite-sized lessons and interactive code practice.",
                url: "https://www.sololearn.com/"
            },
            {
                name: "Mimo",
                description: "Code on the go with daily exercises and real-world projects.",
                url: "https://mimo.org/"
            },
            {
                name: "Innerbody",
                description: "3D Human Anatomy Explorer",
                url: "https://www.innerbody.com/image/skelfov.html"
            },
            {
                name: "Solar System Scope",
                description: "Immersive, real-time 3D tour of the Solar System and night sky with accurate planetary positions and NASA-based textures.",
                url: "https://www.solarsystemscope.com"
            }
        ]
    },
    {
        title: "💻 CODING & AI WEBSITE BUILDER",
        tools: [
            {
                name: "Anime.js",
                description: "A lightweight JavaScript animation library for smooth, powerful animations on web elements.",
                url: "https://animejs.com/"
            },
            {
                name: "Angular",
                description: "A platform for building mobile and desktop web applications using TypeScript.",
                url: "https://angular.io/"
            },
            {
                name: "Spline AI",
                description: "A powerful 3D design tool that lets you create and animate 3D web experiences right in your browser, enhanced with AI features.",
                url: "https://spline.design"
            },
            {
                name: "Figma",
                description: "A free, collaborative web-based design tool used for UI/UX, prototyping, and wireframing.",
                url: "https://www.figma.com/"
            },
            {
                name: "Lovable",
                description: "An AI-powered website builder that helps you create stunning, personalized sites in minutes without coding.",
                url: "https://www.lovable.so"
            },
            {
                name: "Bolt AI",
                description: "A fast and intuitive AI workspace inside macOS that connects all your tools, apps, and tasks with natural language.",
                url: "https://bolt.new/"
            },
            {
                name: "Wix",
                description: "A popular website builder that offers drag-and-drop design, AI tools, templates, and hosting for users of all skill levels.",
                url: "https://www.wix.com"
            }
        ]
    },
];