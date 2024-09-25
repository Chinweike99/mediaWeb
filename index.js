
// SIDEBAR______...______________
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messageNotifications = document.querySelector("#message-notification");
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');



// ****************** SIDEBAR FUNCTIONALITIES ************************
//function to remove active class from all menu items
const removeActiveness = ()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}
menuItems.forEach(item=>{
    item.addEventListener('click', ()=>{
        removeActiveness();
        item.classList.add('active');
        if(item.id != "notifications"){
            document.querySelector('.notification-popup').style.display = "none";
        }else{
            document.querySelector('.notification-popup').style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = 'none';
        }
    })
});

// ************************ MESSAGES ****************************
//Highlight message box when message icon is clicked
messageNotifications.addEventListener('click', ()=>{
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    }, 2000);
    document.querySelector("#message-notification .notification-count").style.display = 'none';
})

// Search for chat

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        // Select the first 'h5' element within 'chat'
        let nameElement = chat.querySelector('h5');  // Use querySelector to get the first match
        if (nameElement) {  // Ensure that the element exists
            let name = nameElement.textContent.toLowerCase();  // Get the textContent of the h5 element
            if (name.indexOf(val) != -1) {
                chat.style.display = 'flex';
            } else {
                chat.style.display = 'none';
            }
        }
    });
}

messageSearch.addEventListener('keyup', searchMessage);



// *********************** THEME CUSTOMIZATION *********************
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customise-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');

const openThemeModel = ()=>{
    themeModel.style.display = 'grid';
}

// close theme
const closetheme = (e)  => {
    if(e.target.classList.contains('customise-theme')){
        themeModel.style.display = "none"
    }
}

themeModel.addEventListener('click', closetheme)
theme.addEventListener('click', openThemeModel)



// Remove active class from spans or fonts size selectors
const removeSize = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}

//************* Theme FONT SIZES */
fontSizes.forEach(size => {
    
    size.addEventListener('click', ()=>{
        removeSize();
        let fontSize;
        size.classList.add('active')

        if(size.classList.contains('font-size-1')){
            fontSize = "10px";
            root.style.setProperty("----sticky-top", '5.4rem')
            root.style.setProperty("----sticky-top-right", '5.4rem')
        }else if(size.classList.contains('font-size-2')){
            fontSize = "13px";
            root.style.setProperty("----sticky-top", '5.4rem')
            root.style.setProperty("----sticky-top-right", '-7rem')
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = "15px";
            root.style.setProperty("----sticky-top", '-2rem')
            root.style.setProperty("----sticky-top-right", '-17rem')
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = "18px";
            root.style.setProperty("----sticky-top", '-5rem')
            root.style.setProperty("----sticky-top-right", '-25rem')
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = "20px";
            root.style.setProperty("----sticky-top", '-10rem')
            root.style.setProperty("----sticky-top-right", '-33rem')
        }
         // Change font theme
        document.querySelector('html').style.fontSize = fontSize;
    })

})


// ***************** Change Primary Color ****************
const colorPallete = document.querySelectorAll('.choose-color span');

// Rmove active class from a color
const changeActive = () =>{
    colorPallete.forEach(color =>{
        color.classList.remove('active');
    })
}


colorPallete.forEach(color => {
    color.addEventListener('click', ()=>{
    changeActive();
    let primary;
    if(color.classList.contains('color-1')){
        primary = 352;
    }else if(color.classList.contains('color-2')){
        primary = 52
    }else if(color.classList.contains('color-3')){
        primary = 252
    }else if(color.classList.contains('color-4')){
        primary = 202
    }else if(color.classList.contains('color-5')){
        primary = 152
    }
    color.classList.add("active")
    root.style.setProperty('--primary-color-hue', primary);
    })
})



//##################### BACKGROUND COLOR ##############
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3')

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//Function to change background
const changeBG =()=>{
    root.style.setProperty('--white-color', whiteColorLightness)
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

bg1.addEventListener('click', () => {
    //Add active class
    bg1.classList.add('active')

    // Remove active from others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
    // changeBG();
})

bg2.addEventListener('click', () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    //Add active class
    bg2.classList.add('active')

    // Remove active from others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    //Add active class
    bg3.classList.add('active')

    // Remove active from others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})