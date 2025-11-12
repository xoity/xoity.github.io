'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


/*-----------------------------------*\
  #PROJECT MODAL
\*-----------------------------------*/

// Project data with detailed information
const projectsData = {
  'infraninja': {
    title: 'InfraNinja ⭐',
    category: 'Security',
    icon: 'cloud-outline',
    description: 'InfraNinja is a powerful Python-based infrastructure automation toolkit built on PyInfra that simplifies deployment and security hardening across Linux distributions. It helps DevSecOps teams automate secure infrastructure setup with pre-configured modules for common services, enabling rapid deployment while maintaining security best practices.',
    technologies: ['Python', 'PyInfra', 'Jinja2', 'Linux', 'Docker', 'NGINX', 'Bash'],
    features: [
      'Automated deployment of security-focused infrastructure services',
      'SSH hardening and firewall configuration automation',
      'Netdata monitoring integration for real-time system insights',
      'Docker container security automation and best practices',
      'NGINX secure configuration templates with SSL/TLS',
      'Support for multiple Linux distributions (Ubuntu, Debian, CentOS)',
      'Idempotent operations for safe re-runs and updates',
      'Modular architecture for easy customization and extension'
    ]
  },

  'hmvuln': {
    title: 'HMvuln',
    category: 'Security',
    icon: 'bug-outline',
    description: 'HMvuln is a comprehensive vulnerability scanner and security assessment tool designed for penetration testing and security audits. It automates the discovery and analysis of security vulnerabilities in web applications and network infrastructure, providing detailed reports and remediation recommendations.',
    technologies: ['Python', 'Nmap', 'SQLMap', 'BeautifulSoup', 'Requests', 'Scapy'],
    features: [
      'Automated vulnerability scanning for web applications',
      'Network port scanning and service enumeration',
      'SQL injection and XSS vulnerability detection',
      'SSL/TLS configuration analysis and weak cipher detection',
      'Subdomain enumeration and DNS reconnaissance',
      'Detailed vulnerability reports with CVSS scoring',
      'Integration with popular security tools and frameworks',
      'Custom vulnerability checks and plugin support'
    ]
  },

    'auditagent': {
    title: 'AuditAgent ⭐',
    category: 'Security',
    icon: 'shield-checkmark-outline',
    description: 'AuditAgent is an intelligent security auditing assistant that leverages AI to analyze system logs, security configurations, and compliance requirements. It provides automated security assessments, identifies misconfigurations, and generates comprehensive audit reports for compliance frameworks like PCI-DSS, HIPAA, and ISO 27001.',
    technologies: ['Python', 'Machine Learning', 'OpenAI API', 'Elasticsearch', 'Flask', 'Redis'],
    features: [
      'AI-powered log analysis and anomaly detection',
      'Automated compliance checking for industry standards',
      'Real-time security configuration assessment',
      'Security policy violation detection and alerting',
      'Interactive audit report generation with remediation steps',
      'Integration with SIEM platforms for centralized monitoring',
      'Customizable audit rules and compliance templates',
      'Historical trend analysis and security posture tracking'
    ]
  },

  'filesorter': {
    title: 'File Sorter',
    category: 'Tools',
    icon: 'folder-open-outline',
    description: 'File Sorter is an intelligent file organization utility that automatically categorizes and organizes files based on type, date, size, and custom rules. It helps maintain clean directory structures and improves file management efficiency through automated sorting and intelligent naming conventions.',
    technologies: ['Python', 'Watchdog', 'SQLite', 'Tkinter', 'Pathlib'],
    features: [
      'Automatic file categorization by type and extension',
      'Date-based organization with customizable formats',
      'Duplicate file detection and removal',
      'Real-time directory monitoring and auto-sorting',
      'Custom sorting rules and folder structure templates',
      'Bulk file renaming with pattern matching',
      'Safe mode with undo functionality',
      'Cross-platform support (Windows, Linux, macOS)'
    ]
  },
  'windowsprivacy': {
    title: 'Windows Privacy',
    category: 'Tools',
    icon: 'eye-off-outline',
    description: 'Windows Privacy is a comprehensive privacy enhancement tool for Windows operating systems. It helps users disable telemetry, remove bloatware, and configure privacy settings to minimize data collection. The tool provides an easy-to-use interface for hardening Windows security and protecting user privacy.',
    technologies: ['PowerShell', 'Batch', 'Windows Registry', 'Group Policy', 'WMI'],
    features: [
      'One-click telemetry and data collection disabling',
      'Bloatware and unwanted app removal',
      'Privacy-focused Windows settings optimization',
      'Tracking service and scheduled task management',
      'Firewall rule configuration for privacy protection',
      'Hosts file management for blocking tracking domains',
      'Registry backup and restore functionality',
      'Detailed logs of all system modifications'
    ]
  },
  'schedulefinder': {
    title: 'Schedule Finder',
    category: 'Applications',
    icon: 'calendar-outline',
    description: 'Schedule Finder is an intelligent scheduling application that helps users find optimal meeting times across multiple calendars and time zones. It analyzes availability patterns, suggests best meeting times, and automates the scheduling process while respecting everyone\'s preferences and constraints.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Celery', 'React', 'REST API'],
    features: [
      'Multi-calendar integration (Google, Outlook, iCal)',
      'Smart availability analysis and conflict detection',
      'Time zone-aware scheduling with automatic conversion',
      'Group scheduling with preference voting',
      'Recurring meeting pattern optimization',
      'Email notifications and calendar invites',
      'Buffer time configuration between meetings',
      'Meeting analytics and scheduling insights'
    ]
  },
  'medicinedb': {
    title: 'Medicine DB',
    category: 'Applications',
    icon: 'medkit-outline',
    description: 'Medicine DB is a comprehensive medical database application for managing medication information, prescriptions, and drug interactions. It provides healthcare professionals and patients with detailed drug information, dosage guidelines, and interaction warnings to ensure safe medication management.',
    technologies: ['Python', 'MySQL', 'Flask', 'SQLAlchemy', 'Bootstrap', 'Chart.js'],
    features: [
      'Extensive medication database with detailed information',
      'Drug interaction checker and warning system',
      'Prescription management and tracking',
      'Dosage calculator with patient-specific parameters',
      'Medication schedule and reminder system',
      'Allergy and contraindication tracking',
      'Search by generic name, brand name, or condition',
      'Export medication reports for healthcare providers'
    ]
  },
  'ftprebuilt': {
    title: 'FTP Rebuilt',
    category: 'Applications',
    icon: 'server-outline',
    description: 'FTP Rebuilt is a modern, secure file transfer protocol server with enhanced security features and performance optimizations. It provides a reliable solution for file transfers with support for encryption, authentication, and comprehensive logging while maintaining compatibility with standard FTP clients.',
    technologies: ['Python', 'pyftpdlib', 'OpenSSL', 'SQLite', 'Docker', 'Systemd'],
    features: [
      'Secure FTP with TLS/SSL encryption (FTPS)',
      'User authentication with database backend',
      'Granular permission and quota management',
      'Bandwidth throttling and connection limits',
      'Comprehensive logging and activity monitoring',
      'Virtual filesystem with chroot support',
      'Anonymous FTP with configurable restrictions',
      'Web-based administration interface'
    ]
  },
  'pocketpy': {
    title: 'Pocket Py',
    category: 'Applications',
    icon: 'logo-python',
    description: 'Pocket Py is a lightweight Python code executor and learning platform designed for mobile and resource-constrained environments. It provides an interactive Python environment with a clean interface, making it perfect for learning Python, testing code snippets, and running scripts on the go.',
    technologies: ['Python', 'Kivy', 'Android SDK', 'SQLite', 'Git', 'REST API'],
    features: [
      'Interactive Python REPL with syntax highlighting',
      'Code snippet library with categorized examples',
      'Offline documentation for Python standard library',
      'Package management for popular Python libraries',
      'Code sharing and collaboration features',
      'Syntax error detection and helpful error messages',
      'Execution history and workspace management',
      'Educational tutorials and coding challenges'
    ]
  }
};

// Modal functionality
const modalContainer = document.querySelector('[data-modal-container]');
const modalOverlay = document.querySelector('[data-modal-overlay]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const projectLinks = document.querySelectorAll('.project-link');

// Function to open modal
function openModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  // Update modal content
  document.querySelector('[data-modal-title]').textContent = project.title;
  document.querySelector('[data-modal-category]').textContent = project.category;
  document.querySelector('[data-modal-description]').textContent = project.description;
  document.querySelector('[data-modal-icon] ion-icon').setAttribute('name', project.icon);
  
  // Update technologies list
  const techList = document.querySelector('[data-modal-tech]');
  techList.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
  
  // Update features list
  const featuresList = document.querySelector('[data-modal-features]');
  featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
  
  // Update GitHub link
  const githubLink = document.querySelector('[data-github-link]');
  const projectLink = document.querySelector(`[data-project-id="${projectId}"]`);
  if (projectLink) {
    githubLink.href = projectLink.dataset.githubUrl;
  }
  
  // Show modal
  modalContainer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
  modalContainer.classList.remove('active');
  document.body.style.overflow = '';
}

// Add click event to all project links
projectLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const projectId = this.dataset.projectId;
    openModal(projectId);
  });
});

// Close modal events
modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
    closeModal();
  }
});


/*-----------------------------------*\
  #SERVICE MODAL
\*-----------------------------------*/

// Service data with detailed proficiency explanations
const servicesData = {
  'pentesting': {
    title: 'Penetration Testing',
    icon: 'shield-checkmark-outline',
    why: 'Through extensive hands-on experience at Kalvad DMCC, Tunisia Level UP, and MMB IT, I\'ve conducted hundreds of penetration tests across web applications, mobile apps, networks, and cloud infrastructure. I understand not just how to find vulnerabilities, but how to effectively communicate risks to stakeholders.',
    experience: [
      'Conducted 100+ penetration tests across web, mobile, and network infrastructure',
      'Performed security assessments for financial, healthcare, and government sectors',
      'Specialized in OWASP Top 10 vulnerabilities and advanced exploitation techniques',
      'Experience with both black-box and white-box testing methodologies',
      'Developed custom exploits and proof-of-concepts for critical vulnerabilities',
      'Created comprehensive penetration testing reports with remediation priorities'
    ],
    tools: ['Burp Suite Pro', 'Metasploit', 'Nmap', 'Wireshark', 'Sqlmap', 'OWASP ZAP', 'Kali Linux', 'BloodHound'],
    competencies: [
      'Web application penetration testing (OWASP Top 10)',
      'Network infrastructure security assessment',
      'Mobile application security testing (Android/iOS)',
      'API security testing and authentication bypass',
      'Social engineering and phishing campaigns',
      'Wireless network security assessment',
      'Active Directory and privilege escalation',
      'Security report writing and risk assessment'
    ]
  },
  'vulnassessment': {
    title: 'Vulnerability Assessment',
    icon: 'bug-outline',
    why: 'Working with industry-leading tools like Nessus, Qualys, and custom scanning solutions, I\'ve developed expertise in identifying and prioritizing security weaknesses across complex IT environments. My approach goes beyond automated scanning—I understand business context, correlate findings across systems, and provide actionable remediation guidance.',
    experience: [
      'Managed vulnerability assessment programs for enterprise environments with 500+ assets',
      'Performed regular vulnerability scans and coordinated remediation efforts',
      'Analyzed and triaged thousands of vulnerabilities based on risk and business impact',
      'Developed vulnerability management workflows and SLA tracking systems',
      'Created executive-level vulnerability reports and security dashboards',
      'Conducted patch management assessment and compliance verification'
    ],
    tools: ['Nessus Professional', 'Qualys', 'OpenVAS', 'Rapid7 Nexpose', 'Splunk', 'ELK Stack', 'Nmap NSE', 'Shodan'],
    competencies: [
      'Automated vulnerability scanning and management',
      'Risk assessment and CVSS scoring',
      'False positive analysis and validation',
      'Vulnerability correlation and pattern recognition',
      'Compliance scanning (PCI-DSS, HIPAA, ISO 27001)',
      'Patch management prioritization',
      'Trend analysis and security metrics',
      'Remediation tracking and verification'
    ]
  },
  'securedev': {
    title: 'Secure Development',
    icon: 'code-slash-outline',
    why: 'As Co-Founder and CTO of LunaStudy, I led secure application development from the ground up, implementing security controls at every stage of the SDLC. My experience spans Python, Java, and JavaScript, always with a security-first mindset. I believe security must be baked into architecture and design, not added as an afterthought.',
    experience: [
      'Led secure development initiatives as CTO for a startup company',
      'Implemented secure coding practices across Python, Java, and JavaScript projects',
      'Designed and built security-focused applications and automation tools',
      'Conducted secure code reviews and implemented SAST/DAST in CI/CD pipelines',
      'Developed security libraries and frameworks for common vulnerabilities',
      'Mentored development teams on secure coding best practices'
    ],
    tools: ['Python', 'Java', 'Node.js', 'Django', 'Spring Boot', 'Docker', 'Git', 'SonarQube'],
    competencies: [
      'Secure Software Development Lifecycle (SSDLC)',
      'Input validation and output encoding',
      'Authentication and authorization implementation',
      'Cryptography and key management',
      'API security design and implementation',
      'Container security and Docker best practices',
      'Database security and SQL injection prevention',
      'Security testing integration (SAST/DAST)'
    ]
  },
  'securityauto': {
    title: 'Security Automation',
    icon: 'terminal-outline',
    why: 'Through building tools like InfraNinja, HMvuln, and AuditAgent, I\'ve automated everything from infrastructure deployment to vulnerability scanning to compliance auditing. My Python skills combined with security knowledge enable me to create solutions that save time, reduce human error, and provide consistent results across DevSecOps environments.',
    experience: [
      'Developed multiple open-source security automation tools (InfraNinja, HMvuln, AuditAgent)',
      'Automated security testing in CI/CD pipelines using Jenkins and GitLab CI',
      'Created custom scripts for log analysis, threat hunting, and incident response',
      'Built automated security monitoring and alerting systems',
      'Implemented Infrastructure as Code with security hardening',
      'Developed security orchestration workflows for SOC operations'
    ],
    tools: ['Python', 'Bash', 'PowerShell', 'Ansible', 'Terraform', 'Jenkins', 'GitHub Actions', 'AWS Lambda'],
    competencies: [
      'Security tool development and scripting',
      'CI/CD security integration',
      'Infrastructure as Code (IaC) security',
      'Log analysis and SIEM automation',
      'API integration and security orchestration',
      'Automated vulnerability scanning and reporting',
      'Incident response automation',
      'Cloud security automation (AWS, Azure, GCP)'
    ]
  }
};

// Service modal functionality
const serviceModalContainer = document.querySelector('[data-service-modal-container]');
const serviceModalOverlay = document.querySelector('[data-service-modal-overlay]');
const serviceModalCloseBtn = document.querySelector('[data-service-modal-close-btn]');
const serviceLearnMoreBtns = document.querySelectorAll('.service-learn-more');

// Function to open service modal
function openServiceModal(serviceId) {
  const service = servicesData[serviceId];
  if (!service) {
    console.error('Service not found:', serviceId);
    return;
  }

  // Update modal content
  document.querySelector('[data-service-modal-title]').textContent = service.title;
  document.querySelector('[data-service-modal-icon] ion-icon').setAttribute('name', service.icon);
  document.querySelector('[data-service-modal-why]').textContent = service.why;
  
  // Update experience list
  const experienceList = document.querySelector('[data-service-modal-experience]');
  experienceList.innerHTML = service.experience.map(exp => `<li>${exp}</li>`).join('');
  
  // Update tools list
  const toolsList = document.querySelector('[data-service-modal-tools]');
  toolsList.innerHTML = service.tools.map(tool => `<li>${tool}</li>`).join('');
  
  // Update competencies list
  const competenciesList = document.querySelector('[data-service-modal-competencies]');
  competenciesList.innerHTML = service.competencies.map(comp => `<li>${comp}</li>`).join('');
  
  // Show modal
  serviceModalContainer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Function to close service modal
function closeServiceModal() {
  serviceModalContainer.classList.remove('active');
  document.body.style.overflow = '';
}

// Add click event to all service learn more buttons
serviceLearnMoreBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const serviceId = this.dataset.serviceId;
    openServiceModal(serviceId);
  });
});

// Close service modal events
serviceModalCloseBtn.addEventListener('click', closeServiceModal);
serviceModalOverlay.addEventListener('click', closeServiceModal);

// Close service modal on ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && serviceModalContainer.classList.contains('active')) {
    closeServiceModal();
  }
});

