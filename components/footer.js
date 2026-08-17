class Header extends HTMLElement {
    constructor() {
        super();

        const root = new URL('../', import.meta.url);

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="${new URL('style.css', root)}">
            
            <header class="footer-bar">
                <nav>
                    <ul class="nav-links">

                        <li>
                            <a href="https://www.youtube.com/@_creoii">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/youtube.png', root)}" class="header-icon" alt="YouTube">
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://modrinth.com/organization/great-big-world">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/modrinth.png', root)}" class="header-icon" alt="Modrinth">
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.curseforge.com/minecraft/mc-mods/great-big-world">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/curseforge.png', root)}" class="header-icon" alt="CurseForge">
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/great-big-world">
                                <div class="rounded-rect">
                                    <img src="${new URL('assets/icons/github.png', root)}" class="header-icon" alt="GitHub">
                                </div>
                            </a>
                        </li>

                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('gbw-footer', Header);