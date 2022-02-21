module.exports = function check(str, brackets) {
  let arr = []
  for (let i of str) {
    if (i !== new Map(brackets).get(arr[arr.length - 1])) arr.push(i)
    else arr.pop(i)
  }
  return !arr.length
}
