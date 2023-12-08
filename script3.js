// Time Picker
const timePicker = document.getElementById('time');

timePicker.addEventListener('change', function () {
    console.log('Selected time:', this.value);
});

// Tree Select
const treeSelect = document.getElementById('treeSelect');

treeSelect.addEventListener('change', function () {
    console.log('Selected option:', this.value);
});

// Upload
function handleFileUpload() {
    const fileInput = document.getElementById('file');
    const uploadedFile = fileInput.files[0];

    if (uploadedFile) {
        console.log('File uploaded:', uploadedFile.name);
    } else {
        console.log('No file selected.');
    }
}

// Carousel (You may need a library for more complex carousel functionality)
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

function showNextSlide() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    carouselItems[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 2000); // Change slide every 2 seconds

// Collapse
function toggleCollapse() {
    const collapseContent = document.getElementById('collapseContent');
    collapseContent.style.display = (collapseContent.style.display === 'none') ? 'block' : 'none';
}

// Tabs
function showTabContent(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}