/*
var mergeTwoLists = function (list1, list2) {
  const dummy = new listNode(-Infinity);
  let prev = dummy;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }
  if (!list1) prev.next = list2;
  if (!list2) prev.next = list1;
  return dummy.next;
};
*/
//this Worked✅
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
  if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
};