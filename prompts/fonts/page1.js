var typeText = document.querySelector(".typeText")
var textToBeTyped = "Take Count of the offenses you've committed to yourself "
var index = 0, isAdding = true

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTyped.length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, 720)
}
// start animation
playAnim()
