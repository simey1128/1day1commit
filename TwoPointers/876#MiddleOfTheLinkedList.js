/*
singly-linked list의 경우, 
pointer를 이용해야한다!

pointer의 속도가 다른 것이 포인트!
*/
let middleNode = function (head) {
  //중간을 찾으려면, 두 포인터가 한개씩 차이나면 된다.
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
