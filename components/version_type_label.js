class VersionTypeLabel extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="../style.css">
            
            <strong><div class="version-type-label"></div></strong>
        `;

        this.versionTypeLabel = shadow.querySelector('.version-type-label');
    }

    connectedCallback() {
        const type = this.getAttribute('version-type')

        this.versionTypeLabel.textContent = type

        switch (type) {
            case "release": {
                this.versionTypeLabel.style.color = '#416a19';
                this.versionTypeLabel.style.backgroundColor = '#d4edbc';
                break;
            }
            case "beta": {
                this.versionTypeLabel.style.color = '#4a3c17';
                this.versionTypeLabel.style.backgroundColor = '#ffe5a0';
                break;
            }
            case "alpha": {
                this.versionTypeLabel.style.color = '#522822';
                this.versionTypeLabel.style.backgroundColor = '#ffcec7';
                break;;
            }
        }
    }
}

customElements.define('gbw-version-type-label', VersionTypeLabel);