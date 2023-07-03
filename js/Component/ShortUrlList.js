const shortUrlList = (url, short_url = "hola") => {
  const $divContainer = document.createElement("div")
  const $divResult = document.createElement("div")
  const $span = document.createElement("span")
  const $divUrlResult = document.createElement("div")
  const $buttonCopy = document.createElement("button")

  const $span2 = document.createElement("span")
  $span2.innerText = url

  $divContainer.classList.add("short--Url--List")
  $divResult.classList.add("short--Url--result")
  $divUrlResult.classList.add("short--Url--copy")
  $buttonCopy.type = "button"
  $buttonCopy.innerText = "Copy"
  $buttonCopy.id = "buttonCopy"

  $divContainer.append($divResult)
  $divResult.append($span2)
  $divResult.append($divUrlResult)
  $span.id = "newUrl"
  $span.innerText = short_url
  $span.nodeValue = "Prueba"
  $divUrlResult.append($span)
  $divUrlResult.append($buttonCopy)

  return $divContainer
}

export default shortUrlList