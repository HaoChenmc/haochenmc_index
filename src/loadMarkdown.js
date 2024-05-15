function loadMarkdown(filename) {
    fetch(filename)
        .then(response => response.text())
        .then(text => {
            const markdownContent = document.getElementById('markdown-content');
            markdownContent.innerHTML = marked.parse(text);
        })
        .catch(error => console.error('Error loading markdown file:', error));
}
