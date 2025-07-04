document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const btn = document.getElementById("hamburgerBtn");
  const nav = document.getElementById("mainNav");
  btn?.addEventListener("click", () => {
    nav.classList.toggle("show");
    btn.classList.toggle("active");
  });

  // Image swapper
  function updateThemeImages() {
    const isDark = document.body.classList.contains("dark-theme");
    document.querySelectorAll(".theme-img").forEach((img) => {
      const newSrc = isDark
        ? img.getAttribute("data-img-dark")
        : img.getAttribute("data-img-light");
      if (newSrc) img.setAttribute("src", newSrc);
    });
  }

  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
  updateThemeImages();

  themeToggle?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeImages();
  });

  // AOS Init
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // Overlay functionality for Menu Items
  const overlay = document.getElementById("menuOverlay");
  const overlayTitle = document.getElementById("overlay-title");
  const overlayImg = document.getElementById("overlay-img");
  const overlayList = document.getElementById("overlay-list");
  const closeBtn = document.getElementById("closeOverlay");

  const buttons = document.querySelectorAll(".menu-view-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Animate the button click
      button.classList.add("clicked");
      setTimeout(() => button.classList.remove("clicked"), 400);
      const title = button.dataset.title;
      const imgSrc = button.dataset.img;
      const items = JSON.parse(button.dataset.items);

      overlayTitle.textContent = title;
      overlayImg.src = imgSrc;
      overlayList.innerHTML = "";

      items.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${item.title}</strong><p>${item.desc}</p>`;
        overlayList.appendChild(li);
      });

      overlay.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.remove("active");
    }
  });

  // Smooth Scrolling and Active Link Highlighting
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");
  let isScrolling = false;

  function clearActive() {
    navLinks.forEach((link) => link.classList.remove("active"));
  }

  function activateLinkById(id) {
    clearActive();
    const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (activeLink) activeLink.classList.add("active");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        isScrolling = true;
        activateLinkById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    });
  });

  window.addEventListener("scroll", () => {
    if (isScrolling) return;

    const scrollY = window.scrollY;
    let currentId = "";

    sections.forEach((section) => {
      const offsetTop = section.offsetTop - 150;
      const offsetBottom = offsetTop + section.offsetHeight;

      if (scrollY >= offsetTop && scrollY < offsetBottom) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) activateLinkById(currentId);
  });

  const firstId = sections[0]?.getAttribute("id");
  if (firstId) activateLinkById(firstId);

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // ✅ Testimonial Carousel with Reverse Scroll
  // Ping-pong auto-scroll
  const track = document.querySelector(".testimonial-track");
  const container = document.querySelector(".testimonial-carousel");

  const scrollAmount = window.innerWidth <= 480 ? 2 : 1;
  const scrollDelay = 20;
  let direction = 1; // 1 = forward, -1 = backward

  function startAutoScroll() {
    return setInterval(() => {
      container.scrollLeft += scrollAmount * direction;

      const buffer = 5; //
      const atEnd =
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - buffer;

      const atStart = container.scrollLeft <= 0;

      if (atEnd) direction = -1;
      if (atStart) direction = 1;
    }, scrollDelay);
  }

  let autoScroll = startAutoScroll();

  // Pause on image hover
  const images = document.querySelectorAll(".testimonial-track img");

  images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      clearInterval(autoScroll);
      const scaleSize = window.innerWidth <= 768 ? 1.9 : 1.1;
      img.style.transform = `scale(${scaleSize})`;
      img.style.zIndex = "10";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "";
      img.style.zIndex = "";
      autoScroll = startAutoScroll();
    });
  });
  document.querySelector(".zoom-backdrop").addEventListener("click", () => {
    document
      .querySelectorAll(".zoomed")
      .forEach((img) => img.classList.remove("zoomed"));
    document.body.classList.remove("zooming");
  });
});
