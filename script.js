//Create function to select elements

function myFunction() {
    document.querySelector('.nav-list').style.display = 'block';
    document.querySelector('.ion-md-menu').style.display = 'none';
    document.querySelector('.ion-md-close').style.display = 'block';
    }
    
function myClose() {
    document.querySelector('.nav-list').style.display = 'none';
    document.querySelector('.ion-md-menu').style.display = 'block';
    document.querySelector('.ion-md-close').style.display = 'none';
    }

//Open and close nav on click