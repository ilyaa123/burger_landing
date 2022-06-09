const options = {threshold: [0.2]};
const observer = new IntersectionObserver(onEntry, options)
const elements = document.querySelectorAll('.animate');

elements.forEach((i) => {
    observer.observe(i); 
});

function onEntry (entry){
    entry.forEach(change => {
       if (change.isIntersecting){
           change.target.classList.add('show');
       } 
    });
}

const buttons = document.querySelectorAll('.btn-default');
const mobileBtn = document.querySelector('.mobile-btn');

for (const key in buttons) {
    if (Object.hasOwnProperty.call(buttons, key)) {
        const element = buttons[key];
        element.addEventListener('click', () => {
            showModal()
        });
    }
}

mobileBtn.addEventListener('click', () => {
    const nuv = document.querySelector('.mobile__nav');
    nuv.style.display = 'block';
    closeNuv()
});

const showModal = () => {
    const overlay = document.querySelector('.modal__overlay');
    overlay.style.display = 'block';
    document.body.style.cssText = `
        overflow: hidden;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
    overlay.addEventListener('click', (event) => {
        closeModal(event.target)
    });
}

const closeModal = (elem) => {
    const overlay = document.querySelector('.modal__overlay');
    if (elem == overlay){
        overlay.style.display = 'none';
        document.body.style.cssText = '';
    }
};

const closeNuv = () => {
    const elem = document.querySelectorAll('.mobile__item');
    const mobileClose = document.querySelector('.mobile-close');
    for (const element of elem) {
        element.addEventListener('click', () => {
            const nuv = document.querySelector('.mobile__nav');
            nuv.style.display = 'none';
        });
    }
    mobileClose.addEventListener('click', () => {
        const nuv = document.querySelector('.mobile__nav');
        nuv.style.display = 'none'
    });
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}