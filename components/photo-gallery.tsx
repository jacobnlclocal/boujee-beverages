"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

type GalleryImage = {
  id: number
  src: string
  alt: string
  category: string
  description: string
}

interface PhotoGalleryProps {
  images: GalleryImage[]
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal()
    } else if (e.key === "ArrowRight" && selectedImage) {
      const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
      const nextIndex = (currentIndex + 1) % images.length
      setSelectedImage(images[nextIndex])
    } else if (e.key === "ArrowLeft" && selectedImage) {
      const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
      const prevIndex = (currentIndex - 1 + images.length) % images.length
      setSelectedImage(images[prevIndex])
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg"
            onClick={() => openModal(image)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(image)
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${image.alt}`}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={`${image.src}?v=2`}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 4} // Preload first 4 images for better performance
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-medium text-sm">{image.description}</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full capitalize">
              {image.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="relative h-[70vh]">
              <Image
                src={`${selectedImage.src}?v=3`}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="p-4 bg-white">
              <div className="inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded-full capitalize mb-2">
                {selectedImage.category}
              </div>
              <p className="text-lg font-medium">{selectedImage.description}</p>
            </div>

            {/* Navigation buttons */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 text-white hover:bg-black/70 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
                  const prevIndex = (currentIndex - 1 + images.length) % images.length
                  setSelectedImage(images[prevIndex])
                }}
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 text-white hover:bg-black/70 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
                  const nextIndex = (currentIndex + 1) % images.length
                  setSelectedImage(images[nextIndex])
                }}
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
