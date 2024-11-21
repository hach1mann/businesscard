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
            decathlon: {
                role: "Cycling Department Specialist & IT Support",
                company: "Decathlon",
                achievements: [
                    "Manage inventory and stock levels for the cycling department",
                    "Sales specialist for bicycles and cycling equipment",
                    "Provide technical support and maintenance for store IT systems",
                    "Handle customer inquiries and provide expert advice on cycling products",
                    "Assist in optimizing store operations through IT solutions"
                ]
            },
            role: "Junior Developer",
            company: "Tech Company",
            achievements: [
                "Developed and maintained web applications using modern frameworks",
                "Collaborated with senior developers on various projects",
                "Implemented responsive designs and user-friendly interfaces",
                "Participated in code reviews and team meetings"
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
            decathlon: {
                role: "Especialista em Ciclismo & Suporte TI",
                company: "Decathlon",
                achievements: [
                    "Gerencio inventário e níveis de estoque do departamento de ciclismo",
                    "Especialista em vendas de bicicletas e equipamentos de ciclismo",
                    "Forneço suporte técnico e manutenção para sistemas de TI da loja",
                    "Atendo clientes e forneço consultoria especializada em produtos de ciclismo",
                    "Auxilio na otimização das operações da loja através de soluções de TI"
                ]
            },
            role: "Desenvolvedor Júnior",
            company: "Empresa de Tecnologia",
            achievements: [
                "Desenvolvi e mantive aplicações web usando frameworks modernos",
                "Colaborei com desenvolvedores seniores em vários projetos",
                "Implementei designs responsivos e interfaces amigáveis",
                "Participei de revisões de código e reuniões de equipe"
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

    // Update Decathlon experience
    const decathlonRole = document.querySelector('.experience-item:first-child h3');
    const decathlonAchievements = document.querySelectorAll('.experience-item:first-child .achievements li');
    if (decathlonRole) {
        decathlonRole.textContent = content.experience.decathlon.role;
    }
    if (decathlonAchievements.length) {
        content.experience.decathlon.achievements.forEach((achievement, index) => {
            if (decathlonAchievements[index]) {
                decathlonAchievements[index].textContent = achievement;
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
