//Eg:
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
//  --> "found the needle at position 5"

const findNeedle = (hay) => {
  hay.filter((e, ind, arr) => {//! put it our of filter and check again
    if (e === 'needle') {
      console.log(`found the needle at position ${ind}`);
    }
    else {
      let test = false;
      for (let i = 0; i < hay.length; i++) {
        if (hay[i] === 'needle') test = true;
      }
      if (!test) console.log("Your function didn't return anything")
    }
  }
  )
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))