const fetchSubreddit = require("fetch-subreddit")

const getRandomPost = async (subreddit) =>
{
    urls = await fetchSubreddit.fetchSubreddit(subreddit)
    var randomInt = Math.trunc(Math.random() * urls[0].urls.length)
    return urls[0].urls[randomInt]
}

module.exports = getRandomPost