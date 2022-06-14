import useApi from 'src/composables/ActivityApi'

export default function activityService () {
  const { activityList, post, update, remove, getById } = useApi('')

  return {
    activityList,
    post,
    update,
    remove,
    getById
  }
}
