// Your code here
function mapToNegativize(src) {
  let result = []
  for (let i = 0; i < src.length; i++) {
    result.push(-1 * src[i])
  }
  return result
}

function mapToNoChange(src) {
  let result = []
  for (let i = 0; i < src.length; i++) {
    result.push(src[i])
  }
  return result
}

function mapToDouble(src) {
  let result = []
  for (let i = 0; i < src.length; i++) {
    result.push(src[i] * 2)
  }
  return result
}

function reduceToTotal(src, startingPoint=0) {
  let result = startingPoint
  for (let i = 0; i < src.length; i++) {
    result = result + src[i]
  }
  return result
}

function mapToSquare(src) {
  let result = []
  for (let i = 0; i < src.length; i++) {
    result.push(src[i] * src[i])
  }
  return result
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (src[i]) return true
  }
  return false
}