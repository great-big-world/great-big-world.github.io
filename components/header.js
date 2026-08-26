class Header extends HTMLElement {
    constructor() {
        super();

        const root = new URL('../', import.meta.url);

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="${new URL('style.css', root)}">
            
            <style>
                .header-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 98%;
                
                    position: fixed;
                    top: 0;
                    left: 0;
                
                    image-rendering: pixelated;
                    background-color: #30525c;
                    padding-right: 2%;
                
                    user-select: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                }

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
                            <a href="${root}">
                                <img src="${new URL('assets/icons/logo.png', root)}" alt="Home">
                            </a>
                        </li>

                        <li>
                            <a href="${new URL('changelog/', root)}">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/changelog.png', root)}" class="header-icon" alt="Changelog">
                                    <div class="desktop-only">Changelog</div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="${new URL('download/', root)}">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/download.png', root)}" class="header-icon" alt="Download">
                                    <div class="desktop-only">Download</div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="${new URL('roadmap/', root)}">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/roadmap.png', root)}" class="header-icon" alt="Roadmap">
                                    <div class="desktop-only">Roadmap</div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="${new URL('wiki/', root)}">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/wiki.png', root)}" class="header-icon" alt="Wiki">
                                    <div class="desktop-only">Wiki</div>
                                </div>
                            </a>
                        </li>
                        
                        <li>
                            <a href="${new URL('about/', root)}">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/about.png', root)}" class="header-icon" alt="About">
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

        shadow.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', event => {
                event.preventDefault();
            });
        });

        const backgrounds = [
            'polished_oak_planks.png',
            'chiseled_oak_log.png',
            'chiseled_oak_planks.png',
            'stripped_chiseled_oak_log.png',
            'cobblestone_bricks.png',
            'chiseled_cobblestone_bricks.png',
            'cobblestone_brick_pillar_top.png'
        ];

        let currentBackground = 0;

        const button = this.shadowRoot.querySelector('#random-background');

        if (!this.getAttribute('home')) {
            button.style.display = "none"
        } else {
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
}

customElements.define('gbw-header', Header);