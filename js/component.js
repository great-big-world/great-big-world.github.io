document.querySelectorAll("[data-component]").forEach(async (element) => {
    const component = element.dataset.component;

    const response = await fetch(`components/${component}.html`);
    element.innerHTML = await response.text();
});