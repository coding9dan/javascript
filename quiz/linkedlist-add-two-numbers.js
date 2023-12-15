/*
Write a function that takes in two linked lists representinh numbers. Add the two numbers and return the sum in the form of a linked list

Input = l1 = [2, 4, 3], l2 = [5, 6, 4]
Output = [7, 0, 8]

Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

@param {ListNode} l1
@param {ListNode} l2
@return {ListNode}

ref: 
1. https://www.youtube.com/watch?v=3cTFm2uWrps
2. https://www.youtube.com/watch?v=MzwBD-GVUyY
*/

{
  function addTwonumbers(l1, l2) {
    let head = new ListNode(0);
    let node = head;
    let carry = 0;

    while (l1 || l2) {
      let sum = carry;

      if (l1) {
        sum += l1.val;
        l1 = l1.next;
      }

      if (l2) {
        sum += l2.val;
        l2 = l2.next;
      }

      let newValue = sum;
      if (sum > 9) {
        newValue = sum % 10;
        carry = 1;
      } else {
        carry = 0;
      }

      node.next = new ListNode(newValue);
      node = node.next;
    }

    if (carry) {
      node.next = new ListNode(carry);
    }

    return head.next;
  }
}
