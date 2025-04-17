<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>All About Manasy Motter</title>
  <style>
    :root {
      --bg: #f2f2f3;
      --text: #333;
      --card: #f9f9f9;
      --link: #4A90E2;
      --nav-bg: #f4f4f4;
    }

    [data-theme="dark"] {
      --bg: #121212;
      --text: #ddd;
      --card: #1e1e1e;
      --link: #81c8ff;
      --nav-bg: #2a2a2a;
    }

    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--text);
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      transition: background 0.3s;
    }

    header {
      background: linear-gradient(to right, #4A90E2, #6EC6FF);
      color: white;
      padding: 1.5rem;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      letter-spacing: 1px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      position: relative;
    }

    #theme-toggle {
      position: absolute;
      right: 20px;
      top: 20px;
      padding: 0.5rem 1rem;
      border: none;
      background: white;
      color: #333;
      border-radius: 20px;
      cursor: pointer;
      font-size: 0.9rem;
    }

    .container {
      display: flex;
      flex: 1;
      max-width: 1200px;
      margin: 2rem auto;
      width: 95%;
      gap: 2rem;
    }

    nav {
      width: 240px;
      background-color: var(--nav-bg);
      border-radius: 16px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      padding: 1.5rem;
    }

    nav h3 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    nav a {
      display: block;
      margin: 0.5rem 0;
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      padding: 0.3rem 0.5rem;
      border-radius: 6px;
      transition: 0.2s;
    }

    nav a:hover {
      background: var(--link);
      color: white;
    }

    #search {
      width: 100%;
      padding: 0.4rem 0.8rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }

    main {
      flex: 1;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        align-items: center;
      }

      nav {
        width: 100%;
      }

      #theme-toggle {
        position: static;
        margin-top: 1rem;
      }
    }
  </style>
</head>
<body>

  <header>
    All About Manasy Motter
    <button id="theme-toggle">🌙 Dark Mode</button>
  </header>

  <div class="container">
    <nav>
      <input type="text" id="search" placeholder="Search..." />
      <h3>Explore</h3>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="#gallery">Gallery</a>
      <a href="#links">More Links</a>
    </nav>

    <main>
      <img id="dynamicImage" src="" alt="" style="width: 100%; max-height: 300px; object-fit: cover; margin-bottom: 1rem; display: none;" />
      <for-fun id="mainContent"></for-fun>
    </main>
  </div>

  <script type="module" src="./for-fun.js"></script>
  <script type="module">
    const mainEl = document.getElementById("mainContent");
    const links = document.querySelectorAll("nav a");
    const themeBtn = document.getElementById("theme-toggle");
    const searchInput = document.getElementById("search");

    const contentMap = {
      about: {
        title: "About Manasy Motter",
        image: "https://private-user-images.githubusercontent.com/206021568/429801453-de0718df-93a1-4e94-b0a7-fa46cbfa7921.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM3MTg5NDgsIm5iZiI6MTc0MzcxODY0OCwicGF0aCI6Ii8yMDYwMjE1NjgvNDI5ODAxNDUzLWRlMDcxOGRmLTkzYTEtNGU5NC1iMGE3LWZhNDZjYmZhNzkyMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwM1QyMjE3MjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYTY3YTc2OGE4YTkyZWFhMjhlNGE3ODU5M2VlNTNlZDEwOTVjYTc5MmQ1MjhjNmVhNDZkMzZhZTQxYTZiZTY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.eMTgNYHRraVQSXeySVf7_0NGk-J-2OETCF3zFKdBt8o",
        content: `
          <p>So I’m sure you’re wondering who Manasy is… well, there’s a lot to cover, so I decided to make this into a little list </p>
          <ul>
            <li><strong>Chef Extraordinaire :</strong> Manasy is a phenomenal chef. Her ability in the kitchen on Sundays is unmatched by girlfriends all over the world.</li>
            <li><strong>World-Renowned Traveler :</strong> She’s had an actual Guinness in Ireland — can you believe that? She’s even scaled the cliffs of Shenandoah National Park!</li>
            <li><strong>Streetwise :</strong> Manasy once had an encounter with a real Peaky Blinder… and lived to tell the tale. Ask her — she’ll be more than happy to share it.</li>
            <li><strong>Heart-Stealer :</strong> Most importantly, she is the greatest thing to ever happen to a poor sap named Noah. Before she came along? A total mess. Now? A very lucky man.</li>
          </ul
          <p>Her true superpower is making others smile and lighting up any room she enters. Her personality is infectious, her brilliance undeniable (though she’d never admit it), and her humility? Off the charts.</p>
          <p>The point is — there aren't many people like Manasy. And when you're lucky enough to date someone like her, what do you do? You make a website.</p>
          <p>...Plus, it helps that her boyfriend (me) is a giant nerd </p>
          <p><em>So Manasy — because let’s be honest, who else is reading this — enjoy the rest of the page.</em></p>
        `
      },

      projects: {
        title: "Manasy’s Project Garden",
        image: "https://hips.hearstapps.com/hmg-prod/images/ver050124garawards-017-new-crop-661d67113e690.jpg?crop=1.00xw:0.751xh;0,0.0240xh&resize=1200:*",
        content: `
          <p>Here are just a few of the projects Manasy has worked on over her short but amazing career:</p>

          <div style="margin-bottom: 1rem;">
            <a href="https://linktr.ee/everylibrarypsu" target="_blank" style="
              display: inline-block;
              background-color: #4A90E2;
              color: white;
              padding: 0.6rem 1.2rem;
              border-radius: 8px;
              text-decoration: none;
              font-weight: bold;
              box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
              🌐 Visit Manasy's Project Links
            </a>
            <br /><br />


            <a href="https://www.guinness.com/en-us" target="_blank" style="
              display: inline-block;
              background-color: #4A90E2;
              color: white;
              padding: 0.6rem 1.2rem;
              border-radius: 8px;
              text-decoration: none;
              font-weight: bold;
              box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
              🌐 She Invented This Shit
             </a>
            <br /><br />


            <a href="https://www.psu.edu/news/global-programs/story/visit-highlights-empathy-education-university-galway-and-cillian-murphy" target="_blank" style="
              display: inline-block;
              background-color: #4A90E2;
              color: white;
              padding: 0.6rem 1.2rem;
              border-radius: 8px;
              text-decoration: none;
              font-weight: bold;
              box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
              🌐 Irland/Peaky Blinders
             </a>
            </div>  

        `
      },

      contact: {
        title: "Contact",
        image: "https://source.unsplash.com/800x300/?email,chat",
        content: `
          <p>You can reach out through:</p>
          <ul>
            <li>Email: <a href="mailto:manasy@example.com">manasy@example.com</a></li>
            <li>Twitter: <a href="https://twitter.com" target="_blank">@manasy</a></li>
            <li>LinkedIn: <a href="https://linkedin.com" target="_blank">LinkedIn Profile</a></li>
          </ul>
        `
      },

      gallery: {
        title: "Gallery",
        image: "https://source.unsplash.com/800x300/?gallery,nature",
        content: `<p>A hand-picked collection of visual inspiration, photography, and moments that spark creativity.</p>`
      },

      links: {
        title: "More Links",
        image: "https://source.unsplash.com/800x300/?internet,web",
        content: `
          <ul>
            <li><a href="https://github.com" target="_blank">GitHub</a></li>
            <li><a href="https://vercel.com" target="_blank">Vercel</a></li>
            <li><a href="https://lit.dev" target="_blank">Lit Documentation</a></li>
            <li><a href="https://css-tricks.com" target="_blank">CSS Tricks</a></li>
          </ul>
        `
      }
    };

    function updateContent(key) {
      const data = contentMap[key];
      if (data) {
        mainEl.title = data.title;
        mainEl.image = data.image;
        mainEl.content = data.content;
      } else {
        mainEl.title = "Welcome";
        mainEl.image = "";
        mainEl.content = "<p>Select a section from the left menu to get started.</p>";
      }
    }

    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const key = link.getAttribute("href").substring(1);
        updateContent(key);
      });
    });

    searchInput.addEventListener("input", e => {
      const query = e.target.value.toLowerCase();
      links.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(query) ? "block" : "none";
      });
    });

    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      themeBtn.textContent = next === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    updateContent("about");
  </script>
</body>
</html>