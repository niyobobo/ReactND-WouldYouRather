/**
 * @description Categorize titles to be used on TabNavigation based on
 *              questions groups (keys of data object)
 *
 * @param { Object } data all questions
 * @returns { Array } set of titles and number of questions in each category
 */
export const headerTitles = (data) => {
  return Object.keys(data).map(element => {
    return {
      tab: element,
      value: data[element].length
    }
  })
}

/**
 *@description Check if user has voted either option of a question
 * @param { Object } question data of a question
 * @param { String } id user to verify
 * @returns { Boolean } 
 */
export const checkId = (question, id) => {
  const { optionOne, optionTwo } = question;
  return optionOne.votes.concat(optionTwo.votes).includes(id)
};