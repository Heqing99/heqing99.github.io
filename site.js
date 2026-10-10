(() => {
      "use strict";
      const panelOrder = ["home", "experience", "news"];
      const panels = new Map(panelOrder.map(id => [id, document.getElementById(id)]));
      const navButtons = Array.from(document.querySelectorAll(".nav-button"));

      function showPanel(id, updateHash = true) {
        if (!panels.has(id)) id = "home";
        for (const [panelId, panel] of panels) {
          panel.classList.toggle("is-active", panelId === id);
        }
        for (const button of navButtons) {
          const active = button.dataset.target === id;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-current", active ? "page" : "false");
        }
        if (updateHash) history.replaceState(null, "", `#${id}`);
        window.scrollTo({ top: 0, behavior: "instant" });
      }

      document.addEventListener("click", event => {
        const targetButton = event.target.closest("[data-target]");
        const goButton = event.target.closest("[data-go]");
        if (targetButton) showPanel(targetButton.dataset.target);
        else if (goButton) showPanel(goButton.dataset.go);
      });

      window.addEventListener("hashchange", () => {
        showPanel(location.hash.replace("#", "") || "home", false);
      });

      const news = [
        {
          id: "news-202603-team",
          date: "March 2026",
          title: "Current Team Photo",
          summary: "A group photo with my current research team, marking this stage of our work together and the collaborations we are building.",
          image: "images/news-202603-current-team.png"
        },
        {
          id: "news-202506-graduation",
          date: "June 2025",
          title: "Master’s Graduation Photo",
          summary: "A graduation moment from the completion of my master’s studies, shared with mentors and classmates.",
          image: "images/news-202506-masters-graduation.png"
        },
        {
          id: "news-202406-joint-training",
          date: "June 2024",
          title: "Joint Training Group Photo",
          summary: "A memorable group photo from the joint training period, recording an important stage of study, growth, and collaboration.",
          image: "images/news-202406-joint-training.png"
        },
        {
          id: "news-202309-first-joined",
          date: "September 2023",
          title: "Joining the Joint Training Team",
          summary: "One of the first group photos after joining the joint training team — a warm beginning to a valuable research journey.",
          image: "images/news-202309-joining-team.png"
        },
        {
          id: "news-202309-cake",
          date: "September 2023",
          title: "A Sweet Celebration for Future Papers",
          summary: "We shared a lovely cake and celebrated with the hope of making further progress in research and publishing even better papers together.",
          image: "images/news-202309-cake.png"
        }
      ];
      const grid = document.getElementById("newsGrid");

      function renderNews() {
        grid.replaceChildren();
        for (const item of news) {
          const article = document.createElement("article");
          article.className = "news-card";
          const media = document.createElement("div");
          media.className = "news-media";
          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.title;
          img.loading = "lazy";
          img.decoding = "async";
          media.appendChild(img);
          const body = document.createElement("div");
          body.className = "news-body";
          const date = document.createElement("div");
          date.className = "news-date";
          date.textContent = item.date;
          const title = document.createElement("h3");
          title.className = "news-title";
          title.textContent = item.title;
          const summary = document.createElement("p");
          summary.className = "news-summary";
          summary.textContent = item.summary;
          body.append(date, title, summary);
          article.append(media, body);
          grid.appendChild(article);
        }
      }

      // Build the email address at runtime so it stays visible and clickable
      // even on hosts that automatically rewrite email addresses in static HTML.
      document.querySelectorAll("[data-email-link]").forEach(link => {
        const user = link.dataset.emailUser;
        const domain = link.dataset.emailDomain;
        const address = `${user}@${domain}`;
        link.setAttribute("href", `mailto:${address}`);
        link.setAttribute("aria-label", `Email Qing He at ${address}`);
        link.querySelectorAll("[data-email-text]").forEach(el => {
          el.textContent = address;
        });
      });

      document.getElementById("year").textContent = new Date().getFullYear();
      renderNews();
      showPanel(location.hash.replace("#", "") || "home", false);
    })();
