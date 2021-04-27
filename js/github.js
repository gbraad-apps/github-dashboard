var PullRequestController = function() {

    var query = function(organisation, project) {
        return fetch(`https://api.github.com/repos/${organisation}/${project}/pulls`)
            .then(response => response.json())
            .then(data => {
                let results = document.querySelector('#cards')
                let htmlOut = ""
                        
                data.forEach(pull => {
                    console.log(pull)
                    var labels = ""
                    pull.labels.forEach(label => {
                        labels += labelTemplate(label.name, label.color);
                    })
                    htmlOut += cardTemplate(pull.title,
                        pull.html_url, labels, "Unknown")
                })

                results.innerHTML = `<ul id="pull-requests">${htmlOut}</ul>`;
            })
            .catch(error => console.log(error))
    }

    // exposed functions
    return {
        Query: query
    };
};
