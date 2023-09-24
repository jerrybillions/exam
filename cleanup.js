const openbtn=document.querySelector('.js-open');
    const modalbg=document.getElementById('modal-background')
    const modalbox=document.getElementById('modal-box')
    openbtn.addEventListener('click', function(event){
        event.preventDefault()
        
        //console.log('hey abby')

        modalbg.classList.add('active')
    modalbox.classList.add('active')
    })
   

 const closeBtns=document.querySelectorAll(".js-close")
 closeBtns.forEach(node =>{
    console.log('node is',node)

    node.addEventListener('click', function(event){
        event.preventDefault()
        modalbg.classList.remove('active')
    modalbox.classList.remove('active')
    })
 })
   

  