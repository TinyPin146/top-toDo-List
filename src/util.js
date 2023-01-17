export function toggleHide(el) {
    el.classList.toggle('hidden');
}

export function toggleHideOnPopup(e) {
    if (this !== e.target) return;
    e.target.classList.toggle('hidden')
}

export function attachEventListener(elem, event, cbFunc) {
    elem.addEventListener(event, cbFunc);

    document.querySelector('header').addEventListener
}

export function removeEventListener(elem, event, cbFunc) {
    
}