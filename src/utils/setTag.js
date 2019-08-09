export const setTag = (tagIds, id) => {
  let newTagIds = tagIds.slice();
  const index = tagIds.indexOf(id);
  if (index >= 0) {
    if (newTagIds.length === 1) {
      return newTagIds;
    }
    newTagIds.splice(index, 1);
  } else {
    newTagIds.splice(tagIds.length, 0, id);
  }
  return newTagIds;
};
