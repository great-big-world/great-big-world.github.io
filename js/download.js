const versionsList = document.getElementById('versions-list');

async function getVersions() {
    const response = await fetch(
        "https://api.modrinth.com/v2/project/great-big-world/version?include_changelog=false"
    );

    const versions = await response.json();

    versions.forEach(version => {
        const card = document.createElement('gbw-version-card');

        card.setAttribute("version-number", version.version_number);
        card.setAttribute("version-type", version.version_type);
        card.setAttribute("version-downloads", version.downloads);
        card.setAttribute("version-url", version.id);

        versionsList.appendChild(card);
    });
}

getVersions();