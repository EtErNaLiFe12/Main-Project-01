const flipEl = document.querySelectorAll('.card')

let clicked = false;

for( i = 0; i < flipEl.length; i++ ) {
   flipEl[i].addEventListener ('click', function () {
        this.classList.toggle('clicked')
    })
}
