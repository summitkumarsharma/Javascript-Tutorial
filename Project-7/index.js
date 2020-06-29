console.log("Project on Drag and Drop fearture Implementation ");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event Listener for Draggable element imgBox

imgBox.addEventListener('dragstart', (e) => {
    console.log('Drag Start has been triggerred');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

})


imgBox.addEventListener('dragend', (e) => {
    console.log('Drag End has been triggerred');
    e.target.className = 'imgBox';

})


// Event Listener for Drag Listening Element 

for (const whiteBox of whiteBoxes) {

    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('Drag Over has been triggerred');

    })

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('Drag Enter has been triggerred');
        e.target.className += ' dashed';

    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('Drag Leave has been triggerred');
        e.target.className = 'whiteBox'

    })
    whiteBox.addEventListener('drop', (e) => {

        console.log('Drag Drop has been triggerred');
        e.target.append(imgBox)
    })

}