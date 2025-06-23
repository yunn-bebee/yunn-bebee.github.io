    
           // Skill category filtering
        const categoryTabs = document.querySelectorAll('.category-tab');
        const skillItems = document.querySelectorAll('.skill-item');
        
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const category = tab.getAttribute('data-category');
                
                // Filter skills
                skillItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
        
        // Animate skills on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-progress-bar');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.progress-bar').forEach(bar => {
            observer.observe(bar);
        });
          // Project data
        const projects = {
            1: {
                title: "Moonvale University Magazine",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Dynamic frontend for article management built with React, TypeScript and Tailwind CSS. This platform allows students and faculty to publish articles, manage content, and engage with the university community.",
                tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express'],
                details: [
                    "Role: Frontend Developer",
                    "Duration: 3 months",
                    "Team: 4 developers, 2 designers",
                    "Status: Live and actively maintained"
                ],
                challenges: "Implementing real-time updates and user permissions was challenging. We solved this by creating a custom WebSocket integration and a role-based access system.",
                liveLink: "#",
                sourceLink: "#"
            },
            2: {
                title: "Bezie OS (Kids' Learning App)",
                image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80",
                description: "Full-stack educational app with retro Windows 98 UI using HTML, CSS, JS, Tailwind and PHP. Designed for children aged 5-10 to learn math, science, and language arts in a fun, nostalgic environment.",
                tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Tailwind CSS'],
                details: [
                    "Role: Full-stack Developer",
                    "Duration: 4 months",
                    "Team: 3 developers, 1 designer",
                    "Users: 5,000+ active monthly users"
                ],
                challenges: "Recreating the Windows 98 UI with modern web technologies required careful attention to detail. We implemented a custom CSS framework to achieve the authentic look and feel.",
                liveLink: "#",
                sourceLink: "#"
            },
            3: {
                title: "Retail Camping Co.",
                image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Responsive e-commerce layout focused on camping gear with Vanilla HTML/CSS. Features intuitive navigation, product filtering, and a seamless checkout process optimized for outdoor enthusiasts.",
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
                details: [
                    "Role: Frontend Developer",
                    "Duration: 2 months",
                    "Team: Solo project",
                    "Performance: 98% Lighthouse score"
                ],
                challenges: "Creating a responsive design that works on all devices was complex. I used mobile-first design principles and extensive testing to ensure perfect display on all screen sizes.",
                liveLink: "#",
                sourceLink: "#"
            }
        };
        
        // DOM elements
        const modal = document.getElementById('project-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalImage = document.getElementById('modal-image');
        const modalDescription = document.getElementById('modal-description');
        const modalTech = document.getElementById('modal-tech');
        const modalDetails = document.getElementById('modal-details');
        const challengesText = document.getElementById('challenges-text');
        const liveLink = document.getElementById('live-link');
        const sourceLink = document.getElementById('source-link');
        
        // Function to open modal
        function openModal(projectId) {
            const project = projects[projectId];
            
            // Update modal content
            modalTitle.textContent = project.title;
            modalImage.src = project.image;
            modalImage.alt = project.title;
            modalDescription.textContent = project.description;
            challengesText.textContent = project.challenges;
            liveLink.href = project.liveLink;
            sourceLink.href = project.sourceLink;
            
            // Update technologies
            modalTech.innerHTML = '';
            project.tech.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm';
                tag.textContent = tech;
                modalTech.appendChild(tag);
            });
            
            // Update details
            modalDetails.innerHTML = '';
            project.details.forEach(detail => {
                const li = document.createElement('li');
                li.className = 'flex items-start';
                li.innerHTML = `
                    <span class="text-purple-500 mr-2">•</span>
                    <span>${detail}</span>
                `;
                modalDetails.appendChild(li);
            });
            
            // Set header background based on project
            const header = document.getElementById('modal-header');
            if (projectId == 1) {
                header.className = 'h-64 md:h-80 relative overflow-hidden bg-gradient-to-r from-purple-400 to-pink-400';
            } else if (projectId == 2) {
                header.className = 'h-64 md:h-80 relative overflow-hidden bg-gradient-to-r from-blue-400 to-teal-400';
            } else {
                header.className = 'h-64 md:h-80 relative overflow-hidden bg-gradient-to-r from-pink-400 to-purple-600';
            }
            
            // Show modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        
        // Function to close modal
        function closeModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
        
        // Close modal with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu');
        const mobileMenu = document.getElementById('mobile-nav');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('#mobile-nav a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Create particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 10 + 5;
                const posX = Math.random() * 100;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}vw`;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Initialize particles
        createParticles();
    