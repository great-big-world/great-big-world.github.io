import { getModData } from '../js/mod_data.js';

class ModPage extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="../../style.css">
            
            <div>
                <nav class="mod-group-navbar">
                    <ul class="mod-groups">
                    </ul>
                </nav>
            </div>
            
            <div class="feature-carousel-wrapper">
                <div class="mod-feature-carousel"></div>
            </div>
        `;

        this.modGroups = shadow.querySelector('.mod-groups');
        this.modFeatureCarousel = shadow.querySelector('.mod-feature-carousel');

        getModData(
            this.getAttribute("mod-id"),
            this.modGroups,
            this.modFeatureCarousel
        );
    }
}

customElements.define('gbw-mod-page', ModPage);