const YOUTUBE_API_KEY = "AIzaSyA2no9IeAsUKB81iGYBEELvfn7qQpx3qaY"

 export const YOUTUBE_VIDEO_API =
   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US%2CIN&key=" +
   YOUTUBE_API_KEY;