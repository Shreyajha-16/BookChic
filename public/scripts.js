// script.js

document.addEventListener('DOMContentLoaded', () => {
    const saveAnnotationBtn = document.getElementById('saveAnnotation');
    const annotationInput = document.getElementById('annotationInput');
    const annotationsList = document.getElementById('annotationsList');
    const stickerButtons = document.querySelectorAll('.sticker-options button');
    const uploadImage = document.getElementById('uploadImage');
    const uploadedImages = document.getElementById('uploadedImages');

    let annotations = [];

    stickerButtons.forEach(button => {
        button.addEventListener('click', () => {
            annotationInput.value += ` ${button.dataset.sticker} `;
            annotationInput.focus();
        });
    });

    saveAnnotationBtn.addEventListener('click', () => {
        const annotationText = annotationInput.value.trim();
        if (annotationText) {
            annotations.push(annotationText);
            displayAnnotations();
            annotationInput.value = '';
        }
    });

    function displayAnnotations() {
        annotationsList.innerHTML = '';
        annotations.forEach((annotation, index) => {
            const annotationDiv = document.createElement('div');
            annotationDiv.textContent = annotation;
            annotationDiv.className = 'annotation-item';
            annotationsList.appendChild(annotationDiv);
        });
    }

    uploadImage.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                uploadedImages.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
});
