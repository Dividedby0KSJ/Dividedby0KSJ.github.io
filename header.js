document.addEventListener("DOMContentLoaded", function() {
    // Define the Header HTML and CSS
    const headerHtml = `
    <style>
        /* Global Header Styles */
        .site-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(22, 33, 62, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 15px 30px;
            z-index: 9999;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            box-sizing: border-box;
        }

        .site-header-logo {
            color: #fff;
            font-weight: bold;
            font-size: 1.2rem;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
            white-space: nowrap;
        }

        .site-header-nav {
            display: flex;
            gap: 20px;
        }

        .site-header-nav a {
            color: #ccc;
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.3s ease;
            font-family: 'Segoe UI', sans-serif;
        }

        .site-header-nav a:hover {
            color: #0066ff;
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: #fff;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 10px 15px;
            margin-left: 0;
            width: auto;
            line-height: 1;
        }

        .header-spacer {
            display: none;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
            .site-header {
                padding: 10px 20px;
            }

            .header-spacer {
                display: block;
                flex-grow: 1
            }

            .mobile-menu-btn {
                display: block;
            }

            .site-header-nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: rgba(22, 33, 62, 0.98);
                flex-direction: column;
                padding: 20px 0;
                text-align: center;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .site-header-nav.active {
                display: flex;
            }

            .site-header-nav a {
                font-size: 1.2rem;
                padding: 15px 0;
                display: block;
                width: 100%;
            }
        }

        /* Push content down so it's not hidden behind the fixed header */
        body {
            padding-top: 80px !important;
        }
    </style>

    <header class="site-header">
        <a href="/" class="site-header-logo">Kieren St James</a>
        <div class="header-spacer"></div>
        <button class="mobile-menu-btn" aria-label="Toggle navigation">☰</button>
        <nav class="site-header-nav">
            <a href="/">Home</a>
            <a href="/ITSuport">IT Support</a>
            <a href="/Resume">Resume</a>
            <a href="/VA">Voice Acting</a>
            <a href="/Art">Art Portfolio</a>
            <a href="/About">About Me</a>
        </nav>
    </header>
    `;

    // Inject the header at the very start of the body
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // Mobile Menu Logic
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.site-header-nav');
    
    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('active');
            btn.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });
    }
});