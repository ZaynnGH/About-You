let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images > *'); // Mengambil semua elemen slide
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Pindah ke slide terakhir
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Pindah ke slide pertama
    }

    const offset = -currentIndex * 100; // Menghitung offset
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Fungsi untuk memutar audio otomatis saat halaman dimuat
window.onload = function() {
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log("Audio tidak bisa diputar otomatis, silakan aktifkan suara browser.");
    });
};
