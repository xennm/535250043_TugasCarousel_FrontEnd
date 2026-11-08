
"use client"

import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            imageUrl: "/images/banner_01.jpg",
        },
        {
            imageUrl: "/images/banner_02.jpg",
        },
        {
            imageUrl: "/images/banner_03.jpg",
        }
    ]

    return (
        <Carousel fade interval={4000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div
                        style={{
                            backgroundImage: `url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "60vh",
                        }}>
                    </div>

                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default HeroSection;
