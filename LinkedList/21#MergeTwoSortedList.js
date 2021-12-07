/**
 * 일단, linked list에서 어떤 list의 조작(삽입, 이어 붙이기 ..)이 발생하면
 * 애초에 pointer로 접근하는걸 버리고
 * 쌩 array로 본 다음에 ListNode형태로 만들어 주는게 나을 수도?
 */

// 그냥 포인터로 접근
function mergeTwoLists(list1, list2) {
  let result = new ListNode();
  let ptr = result;

  let l1 = list1;
  let l2 = list2;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      ptr.next = l1;
      l1 = l1.next;
    } else {
      ptr.next = l2;
      l2 = l2.next;
    }

    ptr = ptr.next;
  }

  ptr.next = l1 || l2;

  return result.next;
}

// 풀어서 array로 접근 후 형태 생성
function traverseList(list, array) {
  let head = list;
  while (head != null) {
    array.push(head.val);
    head = head.next;
  }

  return array;
}

// works backwards last # will be head node
function createList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = { val: array[i], next: list };
  return list;
}

var mergeTwoLists = function (l1, l2) {
  let holder = [];
  traverseList(l1, holder);
  traverseList(l2, holder);
  let sortedHolder = holder.sort(function (a, b) {
    return a - b;
  });

  return createList(sortedHolder);
};
