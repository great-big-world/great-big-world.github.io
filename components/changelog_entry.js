class ChangelogEntry extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="../style.css">
            <link rel="stylesheet" href="../changelog/style.css">
            <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
            
            <div class="item-container">
                <div class="version">
                    <a class="version-title">
                        <p class="great-big-world-title-2">Great Big World</p>
                        <p class="version-name"></p>
                    </a>
                    <p class="version-date"></p>
                </div>
                <div class="change">
                    <div class="version-changelog"></div>
                </div>
            </div>
        `;

        this.versionTitle = shadow.querySelector('.version-title');
        this.versionName = shadow.querySelector('.version-name');
        this.versionDate = shadow.querySelector('.version-date');
        this.versionChangelog = shadow.querySelector('.version-changelog');
    }

    connectedCallback() {
        this.versionTitle.href = 'https://modrinth.com/mod/great-big-world/version/' + this.getAttribute('version-url')
        this.versionName.textContent = this.getAttribute('version-name')

        this.versionDate.textContent = new Date(this.getAttribute('version-date')).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"

        });

        this.versionChangelog.innerHTML = marked.parse(
            this.getAttribute('version-changelog')
        );
    }
}

customElements.define('gbw-changelog-entry', ChangelogEntry);