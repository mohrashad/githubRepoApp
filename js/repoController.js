export async function getRepos(userName) {
    const res = await fetch(`https://api.github.com/users/${userName}/repo`);
    document.write(res);
    return await res.json();
}
