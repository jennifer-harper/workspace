//
$(document).ready(function () {
  // Function to toggle display property
  $('#start').click(function () {
    $('#getstarted').addClass('active')
    $('#hero').removeClass('active')
    $('#hero').addClass('active2')
  })

  $('#sometimesBtn').click(function () {
    $('#space').addClass('active')
    $('#getstarted').removeClass('active')
    $('#getstarted').addClass('active2')
  })
  $('#team1, #team2, #team3').click(function () {
    $('#team').addClass('active')
    $('#space').removeClass('active')
    $('#space').addClass('active2')
  })

  $('#thing').click(function () {
    $('#results').addClass('active')
    $('#team').removeClass('active')
    $('#team').addClass('active2')
  })
})

function refreshHeight() {
  $('.centered-hero').css('height', '100vh')
}

function updateOffsetAndRefresh() {
  setTimeout(refreshHeight, 300) // Wait 300 milliseconds after orientation change
}

// Initial call to set layout based on window size
refreshHeight()

// Update layout on window resize or orientation change
$(window).on('resize orientationchange', updateOffsetAndRefresh)

// Recalculate navHeight after orientation change with a slight delay
window.addEventListener('orientationchange', function () {
  setTimeout(refreshHeight, 500) // Wait 500 milliseconds after orientation change
})
