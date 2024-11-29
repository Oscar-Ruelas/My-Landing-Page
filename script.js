document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Fetch JSON data
    const response = await fetch('data.json');
    const data = await response.json();

    // Dynamically populate the links section
    const myLinks = document.getElementById('myLinks');
    const linksFragment = document.createDocumentFragment();

    data.myLinks.forEach(({ url, name, icon }) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${url}" class="link" target="_blank">
          <img src="${icon}" alt="${name} Icon">
          <span>${name}</span>
        </a>
      `;
      linksFragment.appendChild(li);
    });
    myLinks.appendChild(linksFragment);

    // Dynamically populate the social icons in the footer
    const socialIconsContainer = document.querySelector('.social-icons');
    const socialIconsFragment = document.createDocumentFragment();

    data.socialIcons.forEach(({ url, icon, alt }) => {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.innerHTML = `<img src="${icon}" alt="${alt}">`;
      socialIconsFragment.appendChild(a);
    });

    socialIconsContainer.appendChild(socialIconsFragment);
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
});
