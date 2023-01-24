var addTwoNumbers = function(l1, l2) {
  let carry = 0;//for the rest as 7+5 = 12, to append 2 into the second index
  let previousNode = new ListNode();
  const headNode = previousNode;
  while (l1 || l2 || carry) {// arguments as conditions as this means if ! null
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    const sum = val1 + val2 + carry;
    // carry = sum > 9 ? 1 : 0;//the impaction or this🔽
    carry = Math.floor(sum / 10);
    const digit = sum % 10;
    const currentNode = new ListNode(digit);
    previousNode.next = currentNode;
    previousNode = currentNode;
  }
  return headNode.next;
};