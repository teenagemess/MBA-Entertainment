/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    


    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

        // Mendapatkan elemen tombol YouTube

});

const youtubeButton = document.getElementById('youtubeButton');

// Mengarahkan pengguna ke YouTube saat tombol ditekan
youtubeButton.addEventListener('click', function () {
    window.location.href = 'https://www.youtube.com/watch?v=2TjcPpasesA';
});

function showTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format waktu menjadi 2 digit angka
    const formattedTime = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

    // Memperbarui elemen dengan ID "clock" dengan waktu terbaru
    document.getElementById('clock').textContent = formattedTime;
}

// Memanggil fungsi showTime setiap detik
setInterval(showTime, 1000);

    // Ambil elemen header
    const header = document.querySelector('.masthead');

    // Buat elemen video
    const video = document.createElement('video');
    video.classList.add('video-background');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    // Buat sumber video
    const source = document.createElement('source');
    source.src = 'media/amen.mp4'; // Ganti dengan URL video Anda
    source.type = 'video/mp4';

    // Sisipkan sumber video ke dalam elemen video
    video.appendChild(source);

    // Sisipkan elemen video ke dalam header
    header.insertBefore(video, header.firstChild);