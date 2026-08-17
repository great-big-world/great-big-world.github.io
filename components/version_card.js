class VersionCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="../style.css">
            
            <div class="version-entry">
                <h1 class="great-big-world-title">Great Big World</h1>
                <h1 class="version-number"></h1>
                <gbw-version-type-label class="version-type"></gbw-version-type-label>
                <a class="version-url">
                    <img src="../assets/icons/download.png" class="download-icon" alt="Download">
                    <h1 class="version-download-count"></h1>
                </a>
            </div>
        `;

        this.versionNumber = shadow.querySelector('.version-number');
        this.versionType = shadow.querySelector('.version-type');
        this.versionDownloadCount = shadow.querySelector('.version-download-count');
        this.versionUrl = shadow.querySelector('.version-url');
    }

    connectedCallback() {
        this.versionNumber.textContent = this.getAttribute('version-number')
        this.versionType.textContent = this.getAttribute('version-type')
        this.versionType.setAttribute('version-type', this.getAttribute('version-type'))
        this.versionDownloadCount.textContent = this.getAttribute('version-downloads')
        this.versionUrl.href = 'https://modrinth.com/mod/great-big-world/version/' + this.getAttribute('version-url')
    }
}

customElements.define('gbw-version-card', VersionCard);