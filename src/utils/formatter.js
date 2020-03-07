export const headerTitles = (data) => {
  return Object.keys(data).map(element => {
    return {
      tabKey: element,
      title: element.replace(/([a-z])([A-Z])/g, '$1 $2'),
      value: data[element].length
    }
  })
}

export const checkId = (question, id) => {
  const { optionOne, optionTwo } = question;
  return optionOne.votes.concat(optionTwo.votes).includes(id)
};