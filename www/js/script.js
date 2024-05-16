let side = document.getElementById('side-menu');
let quit = document.getElementById('quit');
let bar = document.getElementById('bar-button');
bar.addEventListener('click', () => {
    side.style.display = `block`
    side.style.visibility = `visible`
})
quit.addEventListener('click', () => {
    side.style.display = `none`
    side.style.visibility = `hidden`
})

let ab = document.getElementById('ab')
let ex = document.getElementById('ex')
let pr = document.getElementById('pr')

ab.addEventListener('click', () => {
    side.style.display = `none`
    side.style.visibility = `hidden`
})
ex.addEventListener('click', () => {
    side.style.display = `none`
    side.style.visibility = `hidden`
})
pr.addEventListener('click', () => {
    side.style.display = `none`
    side.style.visibility = `hidden`
})