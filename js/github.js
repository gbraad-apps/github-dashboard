var PullRequestController = function() {

    var query = async function(organisation, project) {
        const pullsRequest = await fetch(`https://api.github.com/repos/${organisation}/${project}/pulls`)
        const pulls = await pullsRequest.json()
        
        let results = document.querySelector('#cards')
        let htmlOut = ""

        for (let index = 0; index < pulls.length; index++) {
            var pull = pulls[index];

            var labels = ""
            pull.labels.forEach(label => {
                labels += labelTemplate(label.name, label.color);
            })

            // `https://api.github.com/repos/${organisation}/${project}/statuses/${pull.head.sha}`
            const statusesRequest = await fetch(pull.statuses_url)
            const statuses = await statusesRequest.json()
            var pending = 0, success = 0, failure = 0;
            var seen = []

            statuses.forEach(state => {
                if(seen.includes(state.context)) {
                    return; // skip
                }
                if(state.context.includes("centos")) {
                    return; // skip
                }
                if(state.state == "pending") {
                    pending++
                }
                if(state.state == "success") {
                    success++;
                }
                if(state.state == "failure") {
                    console.log(state)
                    failure++
                }
                seen.push(state.context)
            })
            var status = statusTemplate(pending, success, failure)

            htmlOut += cardTemplate(pull.title,
                pull.html_url, labels, status)
        }

        results.innerHTML = `<ul id="pull-requests">${htmlOut}</ul>`;
    }

    // exposed functions
    return {
        Query: query
    };
};
