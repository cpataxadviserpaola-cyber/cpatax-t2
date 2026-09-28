// Resolves a file in public/ ('/team/photo.jpg') against the site's base URL, so the path
// also works when the site is served from a sub-folder (for example on GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
