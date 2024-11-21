// Language translations
const translations = {
    en: {
        welcome: {
            title: "Welcome to my Portfolio",
            subtitle: "Feel free to explore my journey in technology"
        },
        intro: {
            title: "Junior IT Professional.<br>Eager to learn and grow.",
            text: "I'm a motivated junior IT professional with a strong foundation in software development and technology. Actively seeking opportunities to apply and expand my skills in a dynamic IT environment."
        },
        experience: {
            title: "Experience",
            role: "Junior IT Professional",
            date: "2019 - Present",
            company: "Personal Projects & Learning",
            achievements: [
                "Developed web applications using HTML, CSS, and JavaScript",
                "Created responsive and user-friendly interfaces",
                "Implemented modern web development practices",
                "Collaborated on open-source projects",
                "Self-taught various programming languages and frameworks"
            ]
        },
        projects: {
            title: "Projects",
            splitwise: {
                title: "Expense Sharing App",
                description: "A web application for tracking and splitting expenses among friends and groups."
            }
        },
        skills: {
            title: "Skills",
            technical: "Technical Skills",
            tools: "Development Tools",
            soft: "Soft Skills"
        }
    },
    pt: {
        welcome: {
            title: "Bem-vindo ao meu Portfólio",
            subtitle: "Sinta-se à vontade para explorar minha jornada na tecnologia"
        },
        intro: {
            title: "Profissional de TI Júnior.<br>Ansioso para aprender e crescer.",
            text: "Sou um profissional de TI júnior motivado com uma base sólida em desenvolvimento de software e tecnologia. Buscando ativamente oportunidades para aplicar e expandir minhas habilidades em um ambiente de TI dinâmico."
        },
        experience: {
            title: "Experiência",
            role: "Profissional de TI Júnior",
            date: "2019 - Presente",
            company: "Projetos Pessoais & Aprendizado",
            achievements: [
                "Desenvolvi aplicações web usando HTML, CSS e JavaScript",
                "Criei interfaces responsivas e amigáveis",
                "Implementei práticas modernas de desenvolvimento web",
                "Colaborei em projetos de código aberto",
                "Auto-didatado várias linguagens de programação e frameworks"
            ]
        },
        projects: {
            title: "Projetos",
            splitwise: {
                title: "App de Divisão de Despesas",
                description: "Uma aplicação web para rastrear e dividir despesas entre amigos e grupos."
            }
        },
        skills: {
            title: "Habilidades",
            technical: "Habilidades Técnicas",
            tools: "Ferramentas de Desenvolvimento",
            soft: "Habilidades Interpessoais"
        }
    }
};

// Language switching functionality
function setLanguage(lang) {
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const content = translations[lang];

    // Update welcome section
    const welcomeTitle = document.querySelector('.welcome-title');
    const welcomeSubtitle = document.querySelector('.welcome-subtitle');
    if (welcomeTitle && welcomeSubtitle) {
        welcomeTitle.textContent = content.welcome.title;
        welcomeSubtitle.textContent = content.welcome.subtitle;
    }

    // Update intro section
    const introTitle = document.querySelector('.intro h1');
    const introText = document.querySelector('.intro-text');
    if (introTitle && introText) {
        introTitle.innerHTML = content.intro.title;
        introText.textContent = content.intro.text;
    }

    // Update experience section
    const experienceTitle = document.querySelector('.experience h2');
    if (experienceTitle) {
        experienceTitle.innerHTML = `<span class="section-number">01.</span>${content.experience.title}`;
    }

    // Update experience details
    const experienceRole = document.querySelector('.experience-item h3');
    const experienceDate = document.querySelector('.experience-item .date');
    const experienceCompany = document.querySelector('.experience-item .company');
    const experienceAchievements = document.querySelectorAll('.experience-item .achievements li');
    if (experienceRole) {
        experienceRole.textContent = content.experience.role;
    }
    if (experienceDate) {
        experienceDate.textContent = content.experience.date;
    }
    if (experienceCompany) {
        experienceCompany.textContent = content.experience.company;
    }
    if (experienceAchievements.length) {
        content.experience.achievements.forEach((achievement, index) => {
            if (experienceAchievements[index]) {
                experienceAchievements[index].textContent = achievement;
            }
        });
    }

    // Update projects section
    const projectsTitle = document.querySelector('.projects h2');
    if (projectsTitle) {
        projectsTitle.innerHTML = `<span class="section-number">02.</span>${content.projects.title}`;
    }

    // Update project details
    const projectHeader = document.querySelector('.project-header h3');
    const projectDescription = document.querySelector('.project-description');
    if (projectHeader && projectDescription) {
        projectHeader.textContent = content.projects.splitwise.title;
        projectDescription.textContent = content.projects.splitwise.description;
    }

    // Update skills section
    const skillsTitle = document.querySelector('.skills h2');
    if (skillsTitle) {
        skillsTitle.innerHTML = `<span class="section-number">03.</span>${content.skills.title}`;
    }

    // Update skills categories
    const skillCategories = document.querySelectorAll('.skill-category h3');
    if (skillCategories.length) {
        skillCategories.forEach((category, index) => {
            if (index === 0) category.textContent = content.skills.technical;
            if (index === 1) category.textContent = content.skills.tools;
            if (index === 2) category.textContent = content.skills.soft;
        });
    }

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language from localStorage or default to 'en'
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);
});

// Add event listeners for language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.dataset.lang;
        setLanguage(lang);
    });
});

// Add click-to-copy functionality for contact information
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // Don't copy for social media links
        if (this.href.includes('linkedin') || this.href.includes('github')) {
            return;
        }
        
        e.preventDefault();
        const text = this.querySelector('span').textContent;
        navigator.clipboard.writeText(text).then(() => {
            // Create and show tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Copied!';
            tooltip.style.cssText = `
                position: fixed;
                background: #007bff;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 14px;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            // Position tooltip near the clicked element
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.right + 10 + 'px';
            tooltip.style.top = rect.top + 'px';
            
            document.body.appendChild(tooltip);
            
            // Show and hide tooltip
            requestAnimationFrame(() => {
                tooltip.style.opacity = '1';
                setTimeout(() => {
                    tooltip.style.opacity = '0';
                    setTimeout(() => tooltip.remove(), 300);
                }, 1000);
            });
        });
    });
});

// Add smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Welcome header scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const welcomeHeader = document.querySelector('.welcome-header');
    if (welcomeHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                welcomeHeader.classList.add('header-hidden');
            } else {
                welcomeHeader.classList.remove('header-hidden');
            }
        });
    }
});

// Matrix Rain Effect
const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth - 300; // Subtract sidebar width
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Characters to use (mix of letters, numbers, and symbols)
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const charArray = chars.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
}

// Draw the matrix rain
function draw() {
    // Semi-transparent black to create fade effect
    ctx.fillStyle = 'rgba(10, 31, 28, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text color to match our theme
    ctx.fillStyle = '#10b981';
    ctx.font = fontSize + 'px monospace';

    // Draw characters
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Randomly make some characters brighter for effect
        if (Math.random() > 0.98) {
            ctx.fillStyle = '#34d399';
        } else if (Math.random() > 0.95) {
            ctx.fillStyle = '#10b981';
        } else {
            ctx.fillStyle = '#059669';
        }
        
        // Draw the character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop when it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
    }
}

// Animate
setInterval(draw, 35);

// Clock functionality
function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    const dateDisplay = document.getElementById('date');
    
    // Update time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Update date
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString(undefined, options);
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call
