//? after creating a huge file,
//? making 15th lesson prints 1e5 text, so it's 1.8 mb now.
//! to see whole tended code, check 17th file
//? sending 1.8mb over the wire, is extremely expensive
//! that's because of not using stream method, we used readFileSync
// we commented prior code out!
//! pipe method pushes from readStream to writeStream,
//  so it reads && //!writes data in junk
//? file still has same size,
// but the transfer encoding is //!chunked
//? we can find that in Network [click on file] => headers => response headers => transfer-encoding

//! after all these 17 files and 3:40:00 hours, we are understanding fundamentals of node.js

//! it's prefer to check slides when confused or if it gets iffy
// https://www.course-api.com/slides.html

//! in next lessons we'll use express.js framework of node to make our lives easier
