export const API_kEY = "AIzaSyCjPebYO_rDOK6Q2MUl7d2O9Bbxy9_ZAUw";
export const YOUTUBE_POPULAR_VIDEOS_API= ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_kEY}`;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=";
