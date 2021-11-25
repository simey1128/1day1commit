function solution(participant, completion) {
  // completion에 대한 Object 생성
  const c_state = completion.reduce((acc, cur) => {
    if (acc[cur] === undefined) acc[cur] = 1;
    else acc[cur]++;

    return acc;
  }, {});

  // Array.find()는 조건을 만족하는 첫번째 element의 value를 반환!
  return participant.find((p) => {
    if (c_state[p]) c_state[p]--;
    else return true; // c_state가 undefined이거나, c_state가 0이면(완료 못한 동명이인을 의미함!)
  });
}
