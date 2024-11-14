import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="external-platform-id"
export default class extends Controller {
  static targets = ["idField"]
  static values = {
    platform: String,
  }

  connect() {
    console.log(this.element)
  }

  disconnect() {
    console.log("disconnected")
  }

  extractYoutubeId(e) {
    const { value } = e.target

    if (this.platformValue === "youtube") {
      // https://youtu.be/aQuu_-R2Pwg
      // https://www.youtube.com/watch?v=aQuu_-R2Pwg
      // YOUTUBE_ID = aQuu_-R2Pwg
      const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9\-\_]+)/
  
      const match = value.match(youtubeRegex)
      if (match && this.hasIdFieldTarget) {
        this.idFieldTarget.value = match[1]
      }
    }
  }
}
