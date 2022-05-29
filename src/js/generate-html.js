// create manager card
const generateManager = manager => {
    return `
        <div id="team-member" class="uk-card uk-card-default uk-card-hover uk-card-body uk-card-small uk-animation-toggle" tabindex="0">
            <div id="member-header" class="uk-card-header uk-background-primary uk-animation-slide-top-small">
                <h2>${manager.managerName}</h2>
                <h3><i class="fa-solid fa-mug-hot"></i> Manager</h3>
            </div>
            <div class="uk-card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office number: ${manager.officeNum}</p>
            </div>
        </div>
        `;
};

generateEngineers = engineersArr => {
        if (!engineersArr) {
            return ``;
        } else {
            return `
        <div id="team-member" class="uk-card uk-card-default uk-card-hover uk-card-body uk-card-small uk-animation-toggle" tabindex="0">
            ${engineersArr 
                .map(({engName, engId, engEmail, github}) => {
                return ` 
            <div id = "member-header" class = "uk-card-header uk-background-primary uk-animation-slide-top-small">
                <h2>${engName}</h2>  
                <h3><i class = "fa-solid fa-glasses"></i> Engineer</h3>
            </div>  
            <div class = "uk-card-body">
                <p>ID: ${engId}</p>  
                <p>Email: <a href = "mailto:${engEmail}"> ${engEmail}</a></p>
                <p>GitHub: <a href = "https://github.com/${github}" target = "_blank">${github}</a></p>
            </div>`;
            })
                .join('')
            }
        </div>`;
    };
}

module.exports = templateData => {
    // destructure team members from templateData based on their property key names
    const {
        engineers,
        interns,
        ...manager
    } = templateData;

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/css/uikit.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
        integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5" crossorigin="anonymous" />
    <title>My Team</title>
</head>

<body>
    <nav class="uk-flex uk-navbar uk-width-1-1">
        <div class="uk-navbar-center">
            <h1 class="uk-text-bold">My Team</h1>
        </div>
    </nav>

    <section id="team" class="uk-flex uk-flex-center uk-flex-row uk-flex-wrap uk-flex-wrap-around">
        ${generateManager(manager)}
        ${generateEngineers(engineers)}
        <div id="team-member"
            class="uk-card uk-card-default uk-card-hover uk-card-body uk-card-small uk-animation-toggle" tabindex="0">
            <div id="member-header" class="uk-card-header uk-background-primary uk-animation-slide-top-small">
                <h2>John</h2>
                <h3><i class="fa-solid fa-user-graduate"></i> Intern</h3>
            </div>
            <div class="uk-card-body">
                <p>ID: 2</p>
                <p>Email: <a href="mailto:romo_hector@icloud.com">romo_hector@icloud.com</a></p>
                <p>School: Sacramento State University</a></p>
            </div>
    </section>
</body>

</html> 
    `;
};