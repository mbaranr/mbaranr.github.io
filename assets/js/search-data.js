// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "A list of my peer-reviewed publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of personal projects I’ve worked on for both work and fun.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "Welcome to my resume! You can browse it here or download the PDF using the big blue/purple button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-chancellor-39-s-medal",
        
          title: 'Chancellor&#39;s Medal <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I graduated in Computer Science with one of Lancaster University’s highest honors, the Chancellor’s Medal.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/matias-barandiaran_alife2025-activity-7382305907155685377-VxDY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGUewUBtH9c6wYZnkoE54AfWCBHPw8cK28", "_blank");
          
        },
      },{id: "post-alife-2025",
        
          title: 'ALIFE 2025 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I presented at ALIFE 2025 in Kyoto, Japan.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/matias-barandiaran_im-excited-to-share-that-i-was-accepted-activity-7382305907155685377-aRYS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGUewUBtH9c6wYZnkoE54AfWCBHPw8cK28", "_blank");
          
        },
      },{id: "post-easst-award-at-etaps-2025",
        
          title: 'EASST award at ETAPS 2025 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I have been awarded the EASST award at ETAPS 2025 for my paper on verifiable Horn solving!",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/feed/update/urn:li:activity:7358190936280973312/", "_blank");
          
        },
      },{id: "post-neptune-memorial-reef",
        
          title: "Neptune Memorial Reef",
        
        description: "Fishwatching off the coast of Key Biscayne, Florida.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/neptune/";
          
        },
      },{id: "post-lucomp-travels-to-bailrigg",
        
          title: 'LUComp travels to Bailrigg <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Seven members from LUComp traveled to Bailrigg to work on automatic waste sorting.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/luleipzig-computer-science-society_last-week-seven-members-from-lu-leipzig-ugcPost-7249193132456652800-0BvU/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGUewUBtH9c6wYZnkoE54AfWCBHPw8cK28", "_blank");
          
        },
      },{id: "post-compsoc-travels-to-leipzig",
        
          title: 'CompSoc travels to Leipzig <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "CompSoc visited the Leipzig campus to lay the foundation for upcoming collaborative projects.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/feed/update/urn:li:activity:7188847518623916033/", "_blank");
          
        },
      },{id: "post-qiskit-fall-fest-2023",
        
          title: 'Qiskit Fall Fest 2023 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I organized and presented at Qiskit Fall Fest 2023 in LU Leipzig.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/matias-barandiaran_i-am-honored-to-share-that-i-recently-had-activity-7129392395892273152-sqBS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGUewUBtH9c6wYZnkoE54AfWCBHPw8cK28", "_blank");
          
        },
      },{id: "post-recoloring-cifar10",
        
          title: "Recoloring CIFAR10",
        
        description: "Solving the recoloring task of CIFAR10 images using supervised learning.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/cifar10/";
          
        },
      },{id: "books-the-anxious-generation",
          title: 'The Anxious Generation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/anxious_generation/";
            },},{id: "books-la-casa-verde",
          title: 'La Casa Verde',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/casa_verde/";
            },},{id: "books-the-god-delusion",
          title: 'The God Delusion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/god_delusion/";
            },},{id: "books-lifespan-why-we-age-and-why-we-don-39-t-have-to",
          title: 'Lifespan: Why We Age―and Why We Don&amp;#39;t Have To',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lifespan/";
            },},{id: "books-other-minds-the-octopus-the-sea-and-the-deep-origins-of-consciousness",
          title: 'Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/other_minds/";
            },},{id: "books-the-selfish-gene",
          title: 'The Selfish Gene',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/selfish_gene/";
            },},{id: "books-starry-messenger-cosmic-perspectives-on-civilization",
          title: 'Starry Messenger: Cosmic Perspectives on Civilization',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/starry_messenger/";
            },},{id: "projects-reservoir-dgcas",
          title: 'Reservoir DGCAs',
          description: "Developmental Graph Cellular Automata can grow reservoir computers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alife2025/";
            },},{id: "projects-deeprvat-2-0",
          title: 'DeepRVAT 2.0',
          description: "DeepRVAT gene scores can be approximated as a sum of variant level effects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deeprvat2/";
            },},{id: "projects-gladgan",
          title: 'gladGAN',
          description: "Generative Adversarial Networks can be used to detect graph level anomalies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gladgan/";
            },},{id: "projects-mind-weaver",
          title: 'Mind Weaver',
          description: "A puzzle, dungeon-crawling 2D platformer.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mind_weaver/";
            },},{id: "projects-automated-waste-sorting",
          title: 'Automated Waste Sorting',
          description: "Image classification and object detection for automated waste sorting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/waste_sorting/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%62%61%72%61%6E%64%69%61%72%61%6E%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mbaranr", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/matias-barandiaran", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-9781-8795", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=N5nUcTQAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
