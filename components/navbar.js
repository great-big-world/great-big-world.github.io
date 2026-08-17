class NavBar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="../style.css">
            
            <header class="header-bar" style="background-image: url('../assets/backgrounds/polished_oak_planks.png'); background-size: 44px 44px;">
                <nav>
                    <ul class="nav-links">
                        <li class="logo">
                            <a href="../index.html"><img src="../assets/icons/logo.png" alt="Home"></a>
                        </li>
                        <li>
                            <a href="../pages/changelog.html"><div class="rounded-rect">
                                <img src="../assets/icons/changelog.png" class="pixel-art" alt="Changelog" style="width:14px;height:14px;">
                                Changelog
                            </div></a>
                        </li>
                        <li>
                            <a href="../pages/download.html"><div class="rounded-rect">
                                <img src="../assets/icons/download.png" class="pixel-art" alt="Download" style="width:14px;height:14px;">
                                Download
                            </div></a>
                        </li>
                        <li>
                            <a href="#"><div class="rounded-rect">
                                <img src="../assets/icons/roadmap.png" class="pixel-art" alt="Download" style="width:14px;height:14px;">
                                Roadmap
                            </div></a>
                        </li>
                    </ul>
                </nav>
                
                <button class="rounded-rect" id="random-background">
                    <img src="../assets/icons/update.png" class="pixel-art" alt="Refresh Background Color" style="width:14px;height:14px;">
                </button>
            </header>
        `;

        const backgrounds = [
            'polished_oak_planks.png',
            'chiseled_oak_log.png'
        ];

        let currentBackground = -1;

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

customElements.define('gbw-navbar', NavBar);