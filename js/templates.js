function cardTemplate(title, url, body, state) {
    return `
        <div class="card">
            <h4 class="title"><a href="${url}">${title}</a></h4>
            <p>${body}</p>
            <p class="state unknown">${state}</p>
        </div>
    `
}