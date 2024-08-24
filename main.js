console.log("main.js");

$(document).ready(function () {
  const $spans = $("p span");
  const $player = $("#midi-player");

  let index = 0;
  let isHighlighting = false;
  let timeoutId;

  $player.on("click", function () {
    if (isHighlighting) {
      clearTimeout(timeoutId);
      isHighlighting = false;
      return;
    }

    isHighlighting = true;

    function highlightSpan() {
      if (index < $spans.length) {
        $spans.eq(index).css("color", "red");
        index++;
        timeoutId = setTimeout(highlightSpan, 1000);
      } else {
        isHighlighting = false;
        index = 0;
      }
    }

    highlightSpan();
  });
});
