export async function getRepos(userName) {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);
    return await res.json();
}
