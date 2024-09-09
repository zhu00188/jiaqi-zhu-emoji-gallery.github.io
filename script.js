function createElement (type, props, ...children) {
    const $element = document.createElement(type)
  
    for (const prop in props) {
      $element[prop] = props[prop]
    } 

    $element.append(...children)
    return $element
}

document.body.prepend(createElement(
    "header",
    { className: "header" },
    createElement("h1", {className: "title"}, "Jiaqi's Emoji Gallery")
  ))

const $gallery = document.getElementById("gallery")

for (const subEmoji of emoji) {
    const $emojiChar = createElement("div", {className: "emoji-char"}, subEmoji.char)
    const $emojiName = createElement("div", {className: "emoji-name"}, subEmoji.name)
    const $galleryEmoji = createElement("div", {className: "gallery-emoji"}, $emojiChar, $emojiName)  
    $gallery.append($galleryEmoji)
  }

  