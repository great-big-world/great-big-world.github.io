class SubmodCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="../style.css">
            
            <style>
                .card-content {
                    font-size: 200%;
                }
                
                @media screen and (max-width: 1080px) {
                    .card-content {
                        font-size: 120%;
                    }
                }
                
                @media screen and (max-width: 412px) {
                    .card-content {
                        font-size: 80%;
                    }
                }
            </style>
            
            <a class="card">
                <img src="" alt="">
                <div class="card-content">
                    <p class="card-description"></p>
                    <p class="card-title"></p>                
                </div>
            </a>
        `;

        this.img = shadow.querySelector('img');
        this.cardTitle = shadow.querySelector('.card-title');
        this.cardDescription = shadow.querySelector('.card-description');
        this.link = shadow.querySelector('a');
    }

    connectedCallback() {
        this.img.src = this.getAttribute('img-src');
        this.img.alt = this.getAttribute('name') || '';

        this.cardTitle.textContent = this.getAttribute('name');
        this.cardDescription.textContent = this.getAttribute('description') || 'example description';

        this.link.href = this.getAttribute('page');
    }
}

customElements.define('gbw-submod-card', SubmodCard);