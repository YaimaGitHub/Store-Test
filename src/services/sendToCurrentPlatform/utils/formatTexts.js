const formatTexts = (text) => {
  let textToFormat = text

  textToFormat = textToFormat.toLowerCase().trim()
  const arr = textToFormat.split(' ')

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  return arr.join(' ')
}

module.exports = formatTexts
