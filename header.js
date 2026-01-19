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

        /* Push content down so it's not hidden behind the fixed header */
        body {
            padding-top: 80px !important;
        }
    </style>

    <header class="site-header">
        <a href="/" class="site-header-logo">Kieren St James</a>
        <nav class="site-header-nav">
            <a href="/">Home</a>
            <a href="/ITSuport">IT Support</a>
        </nav>
    </header>
    `;

    // Inject the header at the very start of the body
    document.body.insertAdjacentHTML('afterbegin', headerHtml);
});