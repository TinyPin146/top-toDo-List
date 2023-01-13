export function toggleHide(el) {
    el.classList.toggle('hidden');
}

export function toggleHideOnPopup(e) {
    if (this !== e.target) return;
    e.target.classList.toggle('hidden')
}
