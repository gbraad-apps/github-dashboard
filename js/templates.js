function cardTemplate(title, url, body, status) {
    return `
        <div class="card">
            <h4 class="title"><a href="${url}">${title}</a></h4>
            <p>${body}</p>
            ${status}
        </div>
    `
}

function labelTemplate(text, color) {
    return `<span class="badge" style="background-color: #${color}">${text}</span>`;
}

function statusTemplate(pending, success, failure) {
    if (failure > 0)
        return `<p class="state failure">Failure</p>`;
    if (pending > 0)
        return `<p class="state pending">Pending</p>`;
    else
        return `<p class="state success">Success</p>`;
}
