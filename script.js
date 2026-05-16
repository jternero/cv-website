const translations = {
    en: {
        name: "JAIMGREG TERNERO",
        role: "Backend & Cloud Software Developer",
        location: "Málaga, Spain",

        languages_title: "LANGUAGES",
        lang_es: "Spanish: Native",
        lang_en: "English: B2 (IELTS)",
        lang_it: "Italian: B2 (Fluent)",
        lang_other: "Catalan / French: Comprehension",

        skills_title: "TECH STACK",

        profile_title: "PROFESSIONAL PROFILE",
        profile_desc: "Software developer focused on backend systems, REST API design, and cloud infrastructure. Self-taught builder with production experience designing and building distributed services from FastAPI backends to iOS clients.",
        profile_desc2: "Focused on eliminating operational bottlenecks by building reliable data pipelines. Comfortable working with both software and infrastructure, with practical knowledge of HTTP, DNS, TCP/IP, reverse proxies, and cloud networking fundamentals.",

        projects_title: "PROJECTS",
        proj_bopity_1: "Autonomous trading system built with Domain-Driven Design. Uses a network of specialized agents acting as independent departments for technical analysis, market sentiment, risk, and timing.",
        proj_bopity_2: "Agents send analysis to a central DeepSeek LLM via API. The LLM acts as the decision engine, evaluating all department inputs to issue orders only when trades are viable.",
        proj_bopity_3: "Distributed indicators including VWAP, MACD, Ichimoku, Fibonacci, and RSI. Scans EUR/USD, GBP/USD, XAU/USD, and BTC/USD every 30 minutes without human intervention.",
        proj_bopity_4: "Automatic order execution via MetaTrader 5 Python API. Handles lot sizing, stop-loss, and position management. Logs reasoning traces and confidence scores in real time.",
        proj_laboriq_1: "Full-stack iOS application live on the App Store, using a custom Python and FastAPI backend on Render.",
        proj_laboriq_2: "Built a cloud backup system with REST endpoints, SHA-256 deduplication, JWT-authenticated access, and an SQLite index.",
        proj_laboriq_3: "Implemented the full authentication flow, including JWT token lifecycles, secure storage on the iOS client, and automated re-auth before API calls.",
        proj_capitalcore_1: "Local-first financial management system with a private cloud backup API. Designed the backend architecture from scratch.",
        proj_capitalcore_2: "REST API with modular routers for auth, backups, transactions, clients, capital groups, and an analytics dashboard.",
        proj_capitalcore_3: "API key and JWT security layer with SHA-256 hash-based deduplication and SQLite persistent store using SQLAlchemy.",
        proj_ener_1: "Built Python processing pipelines to replace repetitive administrative tasks, reducing manual processing time by about 80% across targeted departments.",
        proj_ener_2: "Developed internal APIs for data integration and built SQL-backed Power BI dashboards for operational monitoring.",

        exp_title: "EXPERIENCE",
        job_ener_title: "Backend & Automation Developer",
        job_ener_date: "2023 – Present",
        job_ener_1: "Built a semi-automated electronic invoicing system. The custom data pipeline ingests invoice data, tracks document states, and handles bulk group submissions to reduce a multi-hour manual process to minutes.",
        job_ener_2: "Led the integration with FACe (Spain's national e-invoicing platform). Responsible for the formal adhesion process, XML document generation, state management, and production deployment.",
        job_ener_3: "Built Python data pipelines to replace repetitive administrative workflows and developed internal APIs for cross-system data integration.",
        job_ener_4: "Sole technical owner across the full stack, handling requirements, architecture, implementation, testing, and maintenance independently.",

        job_link_title: "Backend Integration & Operations",
        job_link_date: "2022 – 2023",
        job_link_1: "Used Python to integrate databases and improve information flows across operational systems.",
        job_link_2: "Managed international customer operations and financial workflows.",

        job_bounty_title: "E-commerce & Logistics Manager",
        job_bounty_date: "2019 – 2022",
        job_bounty_1: "Managed logistics coordination between warehouse and points of sale, including stock systems and data accuracy.",

        job_prev_title: "Earlier Experience",
        job_prev_date: "2011 – 2019",
        job_prev_note: "Roles in logistics, guest experience, and retail. Developed strong communication and problem-solving skills.",

        edu_title: "EDUCATION & CERTIFICATIONS",
        edu_42_sub: "Software Development: Peer-to-peer methodology",
        edu_42_date: "2022 – Present",
        edu_42_1: "Project-based curriculum covering C programming, algorithms, data structures, Unix/Linux systems, and network fundamentals.",
        edu_42_2: "Intensive collaborative environment modeled on real development team dynamics.",
        edu_cyber_title: "Cybersecurity Bootcamp",
        edu_cyber_date: "2023",
        edu_cyber_1: "Hands-on training in network security, penetration testing fundamentals, and secure system design.",
        edu_certs_title: "Additional Certifications",
        edu_certs_note: "Certifications in cloud and software development are listed on my LinkedIn profile.",
    },
    es: {
        name: "JAIMGREG TERNERO",
        role: "Desarrollador de Software, Backend & Cloud",
        location: "Málaga, España",

        languages_title: "IDIOMAS",
        lang_es: "Español: Nativo",
        lang_en: "Inglés: B2 (IELTS)",
        lang_it: "Italiano: B2 (Fluido)",
        lang_other: "Catalán / Francés: Comprensión",

        skills_title: "STACK TECNOLÓGICO",

        profile_title: "PERFIL PROFESIONAL",
        profile_desc: "Desarrollador de software centrado en sistemas backend, diseño de APIs REST e infraestructura cloud. Constructor autodidacta con experiencia en producción: diseño y despliego servicios distribuidos robustos desde backends FastAPI hasta clientes iOS.",
        profile_desc2: "Capacidad probada para eliminar cuellos de botella operativos mediante la ingeniería de pipelines de datos. Cómodo trabajando en la intersección entre software e infraestructura, poseyendo conocimientos prácticos de HTTP, DNS, TCP/IP, reverse proxies y fundamentos de redes cloud para permitir a los equipos operar a gran escala.",

        projects_title: "PROYECTOS",
        proj_bopity_1: "Sistema de trading autónomo multi-agente con arquitectura Domain-Driven Design: una red de agentes especializados, cada uno actuando como un \"departamento\" independiente (análisis técnico, sentimiento de mercado, riesgo, timing) que recogen y procesan datos de mercado de forma continua.",
        proj_bopity_2: "Cada agente alimenta con su análisis estructurado a un LLM central (DeepSeek vía API), que actúa como motor de decisión único: razona sobre los inputs de todos los departamentos y emite BUY/SELL/HOLD solo cuando la operación es viable.",
        proj_bopity_3: "Indicadores distribuidos entre agentes: VWAP, MACD, Ichimoku, Fibonacci, RSI. Escanea EUR/USD, GBP/USD, XAU/USD, BTC/USD cada 30 minutos sin intervención humana.",
        proj_bopity_4: "Ejecución automática de órdenes vía MetaTrader 5 Python API con cálculo de lotes, stop-loss y gestión de posiciones de extremo a extremo. Traza de razonamiento completa y score de confianza logueado en tiempo real.",
        proj_laboriq_1: "Aplicación iOS en el App Store con backend propio en Python/FastAPI desplegado en Render.",
        proj_laboriq_2: "Sistema de backup cloud diseñado e implementado: endpoints REST, deduplicación SHA-256, acceso autenticado por JWT e índice SQLite.",
        proj_laboriq_3: "Flujo de autenticación completo: ciclo de vida de tokens JWT, almacenamiento seguro en cliente iOS, re-autenticación automática antes de cada llamada a la API.",
        proj_capitalcore_1: "Sistema de gestión financiera local-first con API privada de backup en cloud. Arquitectura backend diseñada desde cero.",
        proj_capitalcore_2: "API REST con routers modulares: autenticación, backups, transacciones, clientes, grupos de capital y dashboard de analítica.",
        proj_capitalcore_3: "Capa de seguridad API key + JWT; deduplicación por hash SHA-256; almacenamiento persistente SQLite con ORM SQLAlchemy.",
        proj_ener_1: "Diseño y programación de pipelines de procesamiento en Python para eliminar tareas administrativas repetitivas, reduciendo el tiempo de procesamiento manual en un ~80% en los departamentos objetivo.",
        proj_ener_2: "Desarrollo de APIs internas para integración de datos entre sistemas; dashboards Power BI respaldados por SQL para monitorización operacional.",

        exp_title: "EXPERIENCIA",
        job_ener_title: "Desarrollador Backend & Automatización",
        job_ener_date: "2023 – Actualidad",
        job_ener_1: "Diseño y construcción de un sistema de facturación electrónica semi-automático: pipeline de datos propio que ingiere facturas, gestiona el estado de cada documento a lo largo de su ciclo de vida y automatiza la remisión en grupo, reduciendo un proceso manual de horas a minutos.",
        job_ener_2: "Integración completa con FACe (plataforma de facturación electrónica del Estado español). Único desarrollador responsable del proceso de adhesión formal, generación de XML (formato Facturae), gestión de estados y despliegue en producción.",
        job_ener_3: "Ingeniería de pipelines de datos en Python para reemplazar flujos administrativos manuales; desarrollo de APIs internas para integración de datos; dashboards Power BI con SQL para monitorización.",
        job_ener_4: "Responsable técnico único en todo el stack: toma de requisitos, arquitectura, implementación, testing y mantenimiento, todo entregado de forma autónoma.",

        job_link_title: "Integración Backend & Operaciones",
        job_link_date: "2022 – 2023",
        job_link_1: "Uso de Python para integrar bases de datos y mejorar flujos de información entre sistemas operacionales.",
        job_link_2: "Gestión de operaciones internacionales y flujos financieros, requiriendo precisión y fiabilidad a escala.",

        job_bounty_title: "Responsable E-commerce & Logística",
        job_bounty_date: "2019 – 2022",
        job_bounty_1: "Coordinación logística integral entre almacén y puntos de venta; responsable de sistemas de stock y precisión de datos.",

        job_prev_title: "Experiencia Anterior",
        job_prev_date: "2011 – 2019",
        job_prev_note: "Roles en logística (Mango), experiencia de cliente (Walt Disney World) y retail. Desarrollo de habilidades de comunicación, resolución de problemas y operaciones de alto volumen.",

        edu_title: "FORMACIÓN & CERTIFICACIONES",
        edu_42_sub: "Ingeniería de Software: Metodología peer-to-peer",
        edu_42_date: "2022 – Actualidad",
        edu_42_1: "Currículum basado en proyectos: programación en C, algoritmos, estructuras de datos, sistemas Unix/Linux y fundamentos de redes.",
        edu_42_2: "Entorno colaborativo intensivo modelado sobre dinámicas reales de equipos de ingeniería.",
        edu_cyber_title: "Bootcamp de Ciberseguridad",
        edu_cyber_date: "2023",
        edu_cyber_1: "Formación práctica en seguridad de redes, fundamentos de pentesting y diseño de sistemas seguros.",
        edu_certs_title: "Certificaciones Adicionales",
        edu_certs_note: "Certificaciones adicionales en cloud, desarrollo y automatización disponibles en el perfil de LinkedIn.",
    }
};

// ── Theme ──────────────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// ── Language ───────────────────────────────────────────────────────
const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key] !== undefined) {
            el.innerText = translations[currentLang][key];
        }
    });
    document.documentElement.lang = currentLang;
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    langToggle.textContent = currentLang === 'en' ? 'ES' : 'EN';
    updateLanguage();
});

// ── Tooltip ────────────────────────────────────────────────────────
window.addEventListener('load', () => {
    const tooltip = document.getElementById('tooltip');
    setTimeout(() => tooltip.classList.add('visible'), 1200);
    setTimeout(() => tooltip.classList.remove('visible'), 6000);
});

// ── Skill tag hover glow ───────────────────────────────────────────
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => tag.classList.add('active'));
    tag.addEventListener('mouseleave', () => tag.classList.remove('active'));
});
