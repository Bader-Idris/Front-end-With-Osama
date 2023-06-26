// using regExp is awesome here!
function domainName(url){
  //? a lady wrote this:
  // url = url.replace('http://', '');
  // url = url.replace('https://', '');
  // url = url.replace('www.', '');
  // return url.split('.')[0];
  //! my new using replace
  return url.replace(/^(https?:\/\/)?(www\.)?/i, '').split('.')[0];
}
const domainName = (url) => url.replace(/^(https?:\/\/)?(www\.)?/i, '').split('.')[0];
console.log(domainName("http://google.com"))// "google"
console.log(domainName("http://google.co.jp"))// "google"
console.log(domainName("www.xakep.ru"))// "xakep"
console.log(domainName("https://youtube.com"))// "youtube"