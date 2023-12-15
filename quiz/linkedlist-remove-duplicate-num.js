/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]

ref: https://www.youtube.com/watch?v=gfgJjrkR-W4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */

{
  function deleteDuplicates(head) {
    // start looking for duplicates from the first element provided
    let current = head;
    // if we have a comparison element the current element's next, see if its val is equal to the current val
    while (current !== null && current.next !== null) {
      // if the values are equal, set the next of the current element to be the next of the comparison element
      if (current.val == current.next.val) {
        current.next = current.next.next;
      }
      // if values are not equal, set the current element to be its bext element
      else {
        current = current.next;
      }
    }

    // return the head provided
    return head;
  }
}
