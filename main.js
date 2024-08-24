console.log("main.js");

$(document).ready(function () {
  // DOM Elements
  const $spans = $("p span");
  const $player = $("#midi-player");

  let index = 0;
  let isHighlighting = false; // Flag to track highlighting state
  let timeoutId; // To store the timeout ID for clearing it

  $player.on("click", function () {
    if (isHighlighting) {
      clearTimeout(timeoutId); // Stop the current highlighting
      isHighlighting = false; // Reset the flag
      return; // Exit the function if already highlighting
    }

    isHighlighting = true;

    function highlightSpan() {
      if (index < $spans.length) {
        $spans.eq(index).css("color", "red"); // Use jQuery to change the color
        index++;
        timeoutId = setTimeout(highlightSpan, 1000); // Store timeout ID to clear if needed
      } else {
        isHighlighting = false; // Reset the flag when done
        index = 0; // Reset index if you want to restart from the beginning next time
      }
    }

    setTimeout(highlightSpan, 1); // Start highlighting after 1 second delay
  });
});
