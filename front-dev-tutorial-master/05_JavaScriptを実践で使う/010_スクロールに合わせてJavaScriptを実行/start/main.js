const child = document.querySelector('.child');
const cb = (entries, observer)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log('inview');
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        }else{
            console.log('out view');
        }
    });
    // alert('inter')
}

const options = {
    root: null,
    
}
const io = new IntersectionObserver(cb);
io.observe(child);