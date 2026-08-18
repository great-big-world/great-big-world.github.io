export async function getModData(modId, modGroups, modFeatureCarousel) {
    const response = await fetch(
        `https://raw.githubusercontent.com/great-big-world/assets/refs/heads/main/data/submods/${modId}.json`
    );

    const data = await response.json();

    data.groups.forEach(group => {
        const groupElement = document.createElement("li");
        groupElement.className = 'mod-group'
        groupElement.textContent = group.name

        groupElement.addEventListener('click', () => {
            modGroups.querySelectorAll('.mod-group').forEach(element => {
                element.classList.remove('selected');
            });

            groupElement.classList.add('selected');
            displayFeatures(group.features, modFeatureCarousel);
        });

        modGroups.appendChild(groupElement);
    });
}

function displayFeatures(features, modFeatureCarousel) {
    modFeatureCarousel.innerHTML = '';

    features.forEach(feature => {
        const featureElement = document.createElement("div");
        featureElement.className = 'feature-carousel-card'
        featureElement.style.backgroundImage = `url("${feature.banner}")` || '';

        const featureTitle = document.createElement("div");
        featureTitle.className = 'feature-carousel-card-title'
        featureTitle.textContent = feature.name

        featureElement.appendChild(featureTitle);
        modFeatureCarousel.appendChild(featureElement);
    })
}
