document.addEventListener("DOMContentLoaded", () => {
    'use strict'
 
let imageReplace = document.querySelector('.ed-block-six.custom .big-banner__img'),
    this_place_up = document.querySelector('#this_place_up'),
    this_mob_img = document.querySelector('#this_mob_img');
    
    // content_2 = document.querySelector('.content_2'),
    // replacedBlock = document.querySelector('.replacedBlock');

// let div2 = block_otherinfo__votes.cloneNode(true);

if (window.matchMedia("(max-width: 991.98px)").matches) {
    // imageReplace.after(this_place_up);
    this_place_up.after(imageReplace);
} 
window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 991.98px)").matches) {
        this_place_up.after(imageReplace);
    } 
   
}, false);
if (window.matchMedia("(min-width: 992px)").matches) {
    this_mob_img.append(imageReplace);
};
window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        this_mob_img.append(imageReplace);
    } 
   
}, false);
});