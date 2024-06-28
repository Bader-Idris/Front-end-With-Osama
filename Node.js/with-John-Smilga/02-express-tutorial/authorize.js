const authorize = (req, res, next) => {
  const {user} = req.query;
  if (user === 'john') {
    req.user = {name:'john', id:3}
    next();
    // so we type://! http://localhost:5000/?user=john&id=3
    //? to get tended results
  }
  // console.log('authorize')
  // next()//next is always important, or it's garbage
  else {
   res.status(401).send('Unauthorized');
  }
}
module.exports = authorize
// this is a simplified approach to foot in authorizing users in applications
// needs much to be as real world, working