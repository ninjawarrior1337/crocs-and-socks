export default async function getAnime(msg) {
    const animeRegex = new RegExp("{(?<show>.+?)}", "gm");

    console.log(msg.content.match(animeRegex));
}
