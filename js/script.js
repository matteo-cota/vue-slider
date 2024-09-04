new Vue({
    el: '#carousel-container',
    data: {
        images: [
            {
                src: 'img/01.webp',
                title: "Marvel's Spiderman Miles Morales",
                description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
            },
            {
                src: 'img/02.webp',
                title: "Ratchet & Clank: Rift Apart",
                description: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
            },
            {
                src: 'img/03.webp',
                title: "Fortnite",
                description: "Battle to be the last one standing in Fortnite, the free 100-player Battle Royale."
            },
            {
                src: 'img/04.webp',
                title: "Stray",
                description: "A lost cat must untangle an ancient mystery to escape a long-forgotten city."
            },
            {
                src: 'img/05.webp',
                title: "Marvel's Avengers",
                description: "Embrace your powers as Earth's Mightiest Heroes in the reassemble."
            }
        ],
        currentIndex: 0,
        autoplayInterval: null
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        }
    },
    methods: {
        prevImage() {
            this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
        },
        selectImage(index) {
            this.currentIndex = index;
        },
        startAutoplay() {
            this.autoplayInterval = setInterval(this.nextImage, 3000);
        },
        stopAutoplay() {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    },
    mounted() {
        this.startAutoplay();
    }
});