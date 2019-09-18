// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.body.addEventListener("click", function(e) {
  if (e.target.classList.contains("like-glyph")) {
    handleLike(e.target);
  };
});

function handleLike(clickedLike) {
  if (clickedLike.innerText === EMPTY_HEART) {
    mimicServerCall()
      .then(function() {
        clickedLike.innerText = FULL_HEART;
        clickedLike.className = "like-glyph activated-heart";
      })
      .catch(function(error) {
        let errorModal = document.querySelector("#modal");
        errorModal.removeAttribute("class");
        errorModal.innerText = error.message;
        setTimeout(() => {errorModal.className = "hidden"}, 5000)
      });
  } else {
    clickedLike.innerText = EMPTY_HEART;
    clickedLike.className = "like-glyph";
  };
};


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
