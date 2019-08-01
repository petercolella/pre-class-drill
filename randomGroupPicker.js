const teachers = ['Jacob', 'Steffen', 'Peter'];
const groups = ['pink', 'orange', 'red', 'purple', 'blue', 'green'];

function randomGroupPicker(teachArr, groupArr) {
  const tempGroupArr = [...groupArr];
  const newObj = {};
  for (let i = 0; i < groupArr.length; i += teachArr.length) {
    for (let key of teachArr) {
      if (tempGroupArr.length > 0) {
        if (!newObj[key]) {
          newObj[key] = [];
        }
        let index = Math.floor(Math.random() * tempGroupArr.length);
        newObj[key].push(tempGroupArr.splice(index, 1).pop());
      }
    }
  }
  return newObj;
}

console.log(randomGroupPicker(teachers, groups));
