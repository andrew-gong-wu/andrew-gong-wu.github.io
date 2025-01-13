
document.querySelectorAll('.dropdown-btn').forEach(button => { // goes through document and finds elements with class .dropdown-btn
    button.addEventListener('click',function() { // listens for 'click' events on the button
        this.parentElement.classList.toggle('open'); // toggles open class on parent element of button (the dropdown)
    })
    
    document.addEventListener('click', function (e) { // listens for any click on the document. if so, it runs function(e). e is the event object (contains info about click)
        if (!button.contains(e.target) && !button.parentElement.contains(e.target)) { // if the button does not contain where was clicked and the parent element of the button does not contain where e is clicked
            button.parentElement.classList.remove('open'); // then close the dropdown
        }
    });
})