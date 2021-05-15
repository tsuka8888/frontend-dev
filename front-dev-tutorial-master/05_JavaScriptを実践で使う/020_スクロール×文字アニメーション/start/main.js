document.addEventListener('DOMContentLoaded', function () {
    
});

const els = document.querySelectorAll('.animate-title');
const cb = (entries, observer)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting){
            const ta = new TextAnimation(entry.target);
            ta.animate();
            observer.unobserve(entry.target);
        }else{

        }
    });
}

const io = new IntersectionObserver(cb);
els.forEach(el => {
    io.observe(el);
})