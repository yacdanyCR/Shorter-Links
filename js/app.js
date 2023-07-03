import getShortUrl from "../services/getShortUrl.js";
import shortUrlList from "./Component/ShortUrlList.js";

const $shortLinkButton = document.querySelector('#shortLinkButton')
const $inputLink = document.querySelector('#inputLink')
const $short_Url__Section = document.querySelector('.short--Url__Section')

document.addEventListener("DOMContentLoaded", () => {
    $shortLinkButton.addEventListener("click", async () => {
        const data = await getShortUrl("https://peliculaszi.com/ayuda/")
        console.log(data)
        $short_Url__Section.append(shortUrlList($inputLink.value))
        const $copyButton = document.querySelectorAll("#buttonCopy")
        $copyButton.forEach(element => {
            element.addEventListener("click", (e) => {
                navigator.clipboard.writeText(element.parentElement.firstElementChild.innerHTML)
                    .then(() => {
                        element.innerHTML = "Copied.!"
                        console.log(element)
                    })
                    .catch((error) => console.log(error))
            })
        });
    })
})