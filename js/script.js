// Function to toggle active dropdown
$(document).ready(function () {
  let navLinks = document.querySelector('.nav-links-wrapper')
  let menuOpenBtn = document.querySelector('.navbar .bx-menu')
  var navHeight = $('nav').innerHeight()

  ///////// FOR HAMBUGER-NAV ON MOBILE
  // Function to get nav height
  function setNavLinksHeight() {
    var navHeight = $('nav').innerHeight()
    $('.nav-links-wrapper').css('height', 'calc(100vh - ' + navHeight + 'px)')
  }

  $(window).on('load resize', function () {
    setNavLinksHeight()
  })

  function toggleMenu() {
    if (navLinks.style.top === `${navHeight}px`) {
      navLinks.style.top = '-100vh' // Close the menu
      $('.navbar .bx-menu').removeClass('rotate-icon')
    } else {
      navLinks.style.top = `${navHeight}px` // Open the menu
      $('.navbar .bx-menu').addClass('rotate-icon')
    }
  }
  // Use menuOpenBtn to toggle the menu state
  menuOpenBtn.onclick = toggleMenu

  //////FOR DROPDOWNS/SUBMENUS ON MOBILE
  // Function to toggle active class on link click
  $('.link').click(function (e) {
    e.preventDefault() // Prevent default link behavior

    // Check if the clicked link already has the active class
    if ($(this).hasClass('active')) {
      // If yes, remove the active class
      $(this).removeClass('active')
    } else {
      // If not, remove active class from all links and add it to the clicked link
      $('.link').removeClass('active')
      $(this).addClass('active')
    }
  })

  // Function to remove active class on Escape key press
  $(document).keydown(function (event) {
    if (event.key === 'Escape') {
      $('.link.active').removeClass('active')
    }
  })

  // Function to remove active class when hamburger icon is clicked
  $('.navbar .bx-menu').click(function () {
    $('.link').removeClass('active')
  })
})
