const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver((entries) =>{

    entries.forEach( (entry) =>{
        if(entry.isIntersecting === true){
            entry.target.classList.add('show')
            // entry.target.classList.remove('hidden')
        } else {
            entry.target.classList.remove('show')
            // entry.target.classList.add('hidden')
        }
    } )
} );

// elements.forEach((element) =>{
//     myObserver.observe(element)
// } );

elements.forEach( (element) => myObserver.observe(element));