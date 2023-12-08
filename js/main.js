document.addEventListener('DOMContentLoaded', function () {
    const photoGallery = document.getElementById('photoGallery');
    const videoContainer = document.querySelector('.video-container');

    // Add images to the photo gallery
    const imageFiles = ['baby1.jpg', 'baby2.png', 'baby3.png', 'baby4.png', 'baby5.jpg', 'baby6.png', 'baby7.jpg', 'baby8.png', 'baby9.jpg', 'baby10.png', 'baby11.png','image5.jpeg','image6.png']; // Add your image filenames
    imageFiles.forEach((fileName) => {
        const img = document.createElement('img');
        img.src = `images/${fileName}`;
        img.alt = 'Baby Photo';
        img.addEventListener('click', () => openLightbox(`images/${fileName}`));
        photoGallery.appendChild(img);
    });

    // Add videos to the video container
    const videoFiles = ['baby_video1.mp4', 'baby_video2.mp4']; // Add your video filenames
    videoFiles.forEach((fileName) => {
        const video = document.createElement('video');
        video.src = `videos/${fileName}`;
        video.type = 'video/mp4';
        video.controls = true;
        videoContainer.appendChild(video);
    });

    // Lightbox functionality
    function openLightbox(imageSrc) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `<img src="${imageSrc}" alt="Baby Photo">`;

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });

        document.body.appendChild(lightbox);
    }


});
