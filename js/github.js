var PullRequestController = function() {

    var query = function(organisation, project) {
        return fetch(`https://api.github.com/repos/${organisation}/${project}/pulls`)
            .then(response => response.json())
            .then(data => {
                let results = document.querySelector('#cards')
                let htmlOut = ""
                        
                data.forEach(pull => {
                    console.log(pull)
                    let markedBody = ""; //marked(pull.body)
                    //htmlOut += `<li class="pull-request"><div class="pull-request-title"><a href="${pull.html_url}">${pull.title}</a></div><div class="pull-request-body">${markedBody}</div></li>`;
                    htmlOut += cardTemplate(pull.title, pull.html_url, markedBody, "Unknown")
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
