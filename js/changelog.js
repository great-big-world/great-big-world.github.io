const changelogList = document.getElementById('changelog-list');

async function getVersions() {
    const response = await fetch(
        "https://api.modrinth.com/v2/project/great-big-world/version?limit=20"
    );

    const versions = await response.json();

    versions.forEach(version => {
        const card = document.createElement('gbw-changelog-entry');

        card.setAttribute("version-name", version.version_number);
        card.setAttribute("version-date", version.date_published);
        card.setAttribute("version-changelog", version.changelog);
        card.setAttribute("version-url", version.id);

        changelogList.appendChild(card);
    });
}

getVersions();