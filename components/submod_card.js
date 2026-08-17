class SubmodCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="../style.css">
            
            <style>
                .card-content {
                    font-size: var(--card-font-size, 100%);
                }
            </style>
            
            <a class="card">
                <img src="" alt="">
                <div class="card-content">
                    <h3></h3>
                </div>
            </a>
        `;

        this.img = shadow.querySelector('img');
        this.cardContent = shadow.querySelector('.card-content');
        this.link = shadow.querySelector('a');
    }

    connectedCallback() {
        this.img.src = this.getAttribute('img-src');
        this.img.alt = this.getAttribute('name') || '';

        this.cardContent.textContent = this.getAttribute('name');

        this.link.href = this.getAttribute('page');
    }
}

customElements.define('gbw-submod-card', SubmodCard);