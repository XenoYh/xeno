`use strict`
// onload = () => { yup.js }

 const modal = document.querySelector('.loginmodal');
 const OpenModal = document.querySelectorAll('.login');
 const exitmodal = document.querySelector('.exitmodal');
 

 function openModal(e) {
    // e.preventDefault();
    modal.classList.remove('hidden');
  };
  
 function exittmodal(e) {
    modal.classList.add('hidden');
}

  OpenModal.forEach(btn => btn.addEventListener('click', openModal));

  exitmodal.addEventListener('click', exittmodal);
  

  const exitpopup = document.querySelector('.about')
  const enterwhatpopup = document.querySelector('.what')
  const whatpopup = document.querySelector('.whatpopup')
  const enterresourcepopup = document.querySelector('.resources')
  const resourcespopup = document.querySelector('.rpopup')
  const planpopup = document.querySelector('.planpopup')
  const enterplanpopup = document.querySelector('.plans')


  function enterwhat(params) {
   whatpopup.classList.remove('hidden')
   
  }

  function enterresources(params) {
      resourcespopup.classList.remove('hidden')
   
  }

  function enterplan(params) {
      planpopup.classList.remove('hidden')
   
  }

  enterplanpopup.addEventListener('click', enterplan)

  enterresourcepopup.addEventListener('click', enterresources)

  enterwhatpopup.addEventListener('click', enterwhat)

  function exitpopups(params) {
      whatpopup.classList.add('hidden')
      resourcespopup.classList.add('hidden')
      planpopup.classList.add('hidden')
  }


  exitpopup.addEventListener('click', exitpopups )

  const menubtn = document.querySelector('.menubtn')
  const menu = document.querySelector('.sidemenu')
  const exitmenu = document.querySelector('.exitmenu')

  function entermenu(params) {
      menu.classList.remove('hidden')
  }

  menubtn.addEventListener('click', entermenu)

  function exitsidemenu(params) {
      menu.classList.add('hidden')
  }

  exitmenu.addEventListener('click', exitsidemenu)


//   const nextFirst = document.querySelector('.firstnx')

//   nextFirst.addEventListener('click', function(e) {
//     e.preventDefault
//     document.querySelector('sliders').style.transform('translate(-100%, 0)')
//     document.querySelector('sliders').style.background-color('blue')

    
//   })




