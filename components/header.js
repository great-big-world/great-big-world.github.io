class Header extends HTMLElement {
    constructor() {
        super();

        const root = new URL('../', import.meta.url);

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="${new URL('style.css', root)}">
            
            <style>
                .desktop-only {
                    display: none;
                }
        
                @media screen and (min-width: 624px) {
                    .desktop-only {
                        display: inline-block;
                    }
                }
            </style>

            <header class="header-bar" style="padding-left: -2px; background-image: url('${new URL('assets/backgrounds/polished_oak_planks.png', root)}'); background-size: 44px 44px;">
                <nav>
                    <ul class="nav-links">

                        <li class="logo">
                            <a href="${new URL('index.html', root)}">
                                <img src="${new URL('assets/icons/logo.png', root)}" alt="Home">
                            </a>
                        </li>

                        <li>
                            <a href="${new URL('pages/changelog.html', root)}">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/changelog.png', root)}" class="header-icon" alt="Changelog">
                                    <div class="desktop-only">Changelog</div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="${new URL('pages/download.html', root)}">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/download.png', root)}" class="header-icon" alt="Download">
                                    <div class="desktop-only">Download</div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="${new URL('pages/roadmap.html', root)}">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/roadmap.png', root)}" class="header-icon" alt="Roadmap">
                                    <div class="desktop-only">Roadmap</div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="${new URL('pages/wiki.html', root)}">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/wiki.png', root)}" class="header-icon" alt="Wiki">
                                    <div class="desktop-only">Wiki</div>
                                </div>
                            </a>
                        </li>

                    </ul>
                </nav>

                <button class="rounded-rect" id="random-background">
                    <img src="${new URL('assets/icons/update.png', root)}" class="header-icon" alt="Refresh Background">
                </button>
            </header>
        `;

        const backgrounds = [
            'polished_oak_planks.png',
            'chiseled_oak_log.png'
        ];

        let currentBackground = 0;

        const button = this.shadowRoot.querySelector('#random-background');

        button.addEventListener('click', () => {
            let newBackground;

            do {
                newBackground = Math.floor(Math.random() * backgrounds.length);
            } while (newBackground === currentBackground);

            currentBackground = newBackground;

            document.body.style.backgroundImage = `url('assets/backgrounds/${backgrounds[currentBackground]}')`;
        });
    }
}

customElements.define('gbw-header', Header);