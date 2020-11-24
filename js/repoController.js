export async function getRepos(userName) {
    const res = await fetch(`https://api.github.com/users/${userName}/repo`);
    return await res.json();
}
