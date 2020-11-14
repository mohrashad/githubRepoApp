import elements from './base.js';
export const renderRepo = (repo, userName) => {
    const html = `
        <div class="repo-box">
                <div class="container">
                    <div>${repo.name}</div>
                    <div>
                        <a href="https://github.com/${userName}/${repo.name}" target="_blank">Visit</a>
                        <span>Stars ${repo.stargazers_count}</span>
                    </div>
                </div>
        </div>
    `
    elements.reposData.insertAdjacentHTML('beforeend', html);
}