"use client"

import { useEffect } from "react"

export function VideoAutoplayManager() {
  useEffect(() => {
    const videoElements: HTMLVideoElement[] = []
    let retryCount = 0
    const maxRetries = 20

    const collectVideos = () => {
      const videos = document.querySelectorAll("video")
      videoElements.length = 0
      videos.forEach((video) => {
        if (!videoElements.includes(video)) {
          videoElements.push(video)
        }
      })
      console.log("[v0] Collected videos:", videoElements.length)
    }

    const playAllVideos = async () => {
      console.log("[v0] Attempting to play all videos (attempt", retryCount + 1, ")")

      for (const video of videoElements) {
        try {
          video.muted = true
          video.playsInline = true
          video.setAttribute("playsinline", "true")
          video.setAttribute("webkit-playsinline", "true")
          video.autoplay = true

          if (video.readyState < 2) {
            await new Promise((resolve) => {
              video.addEventListener("loadeddata", resolve, { once: true })
              video.load()
            })
          }

          const playPromise = video.play()
          if (playPromise !== undefined) {
            await playPromise
            console.log("[v0] Video playing successfully")
          }
        } catch (error) {
          console.log("[v0] Video play failed:", error)
        }
      }

      retryCount++
    }

    const init = () => {
      collectVideos()
      playAllVideos()
    }

    const timers = [
      setTimeout(init, 0),
      setTimeout(() => {
        collectVideos()
        playAllVideos()
      }, 100),
      setTimeout(() => {
        collectVideos()
        playAllVideos()
      }, 300),
      setTimeout(() => {
        collectVideos()
        playAllVideos()
      }, 500),
      setTimeout(() => {
        collectVideos()
        playAllVideos()
      }, 1000),
      setTimeout(() => {
        collectVideos()
        playAllVideos()
      }, 2000),
    ]

    const rafPlay = () => {
      if (retryCount < maxRetries) {
        requestAnimationFrame(() => {
          collectVideos()
          playAllVideos()
          setTimeout(rafPlay, 500)
        })
      }
    }
    rafPlay()

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log("[v0] Page visible, attempting to play videos...")
        collectVideos()
        playAllVideos()
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    const handleUserInteraction = () => {
      console.log("[v0] User interaction detected, playing videos...")
      collectVideos()
      playAllVideos()
    }

    const events = ["click", "touchstart", "touchend", "scroll", "keydown", "mousemove"]
    events.forEach((event) => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true })
    })

    const interval = setInterval(() => {
      const currentCount = videoElements.length
      collectVideos()
      if (videoElements.length > currentCount || retryCount < maxRetries) {
        playAllVideos()
      }
    }, 1000)

    return () => {
      timers.forEach(clearTimeout)
      clearInterval(interval)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      events.forEach((event) => {
        document.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [])

  return null
}
