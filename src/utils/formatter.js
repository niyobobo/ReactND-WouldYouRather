export const headerTitles = (data) => {
  return Object.keys(data).map(element => {
    return {
      tab: element,
      value: data[element].length
    }
  })
}

export const checkId = (question, id) => {
  const { optionOne, optionTwo } = question;
  return optionOne.votes.concat(optionTwo.votes).includes(id)
};