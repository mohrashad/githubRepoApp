// import files
import elements from './base.js';

// ui controller function
async function uiController(repo, userName) {
    const uiController = await import('./uiController.js');
    uiController.clearInput();
    uiController.renderRepo(repo, userName);
}

// repo controller function
async function repoController (userName)  {
    const repoController = await import('./repoController.js');
    const repos = await repoController.getRepos(userName);
    
    // empty the container
    elements.reposData.innerHTML = ``;

    // loop in repositries
    repos.forEach(repo => uiController(repo, userName));
}

// module controller function
const moduleController = (userName) => {
    if (userName == '') { // if value is empty
        elements.reposData.innerHTML = `<span>Please Write Github Username</span>`;  
    }
    else repoController(userName);
}

// hanlding events
elements.getButton.addEventListener('click', () => moduleController(elements.theInput.value));

document.addEventListener('keydown', e => {
    if (e.keyCode == 13) moduleController(elements.theInput.value);
});
