// using regExp is awesome here!
function domainName(url){
  let result = url.match(/(https?:)?(\/\/)?(www.)?(\w*)?(.)?(\w*)?/)
  return url.match(^/[(^0-9.|https?)]/)
  //! needs a lot of fixes
}
console.log(domainName("http://google.com"))// "google"
console.log(domainName("http://google.co.jp"))// "google"
console.log(domainName("www.xakep.ru"))// "xakep"
console.log(domainName("https://youtube.com"))// "youtube"
