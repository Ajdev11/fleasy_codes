//for hamburger-menu button
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});


//for formpage submit
const form = document.querySelector('#myform')
const emailInput = document.querySelector('.email-pass')
const passwordInput = document.querySelector('.email-pass')
  form.addEventListener('submit', onsubmit)
  function onsubmit(e){
      e.preventDefault() 
    if(emailInput.value == '' && passwordInput.value == ''){
        alert('please enter all required field')
    }else if (emailInput.value == ''||passwordInput.value == ''){
        alert('Enter all correct details')
    } else{
        alert('Success')
    }
  }

