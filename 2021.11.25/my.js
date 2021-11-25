const _reduce = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc[cur] === undefined) acc[cur] = 1;
    else acc[cur]++;

    return acc;
  }, {});
};

function solution(participant, completion) {
  const participant_state = _reduce(participant);

  const completion_state = _reduce(completion);

  let result = '';
  for (const [name, number] of Object.entries(participant_state)) {
    if (completion_state[name] === undefined) {
      result = name;
      break;
    }
    if (completion_state[name] !== number) {
      result = name;
      break;
    }
  }

  return result;
}
