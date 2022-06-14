import useApi from 'src/composables/ActivityApi'

export default function activityService () {
  const { list, post, update, remove, getById } = useApi('')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
