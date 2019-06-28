import fetchSubreddit from 'fetch-subreddit'

export default async function getRandomPost(subreddit)
{
    let results = await fetchSubreddit.fetchSubreddit(subreddit)
    var randomInt = Math.trunc(Math.random() * results[0].urls.length)
    return results[0].urls[randomInt]
}