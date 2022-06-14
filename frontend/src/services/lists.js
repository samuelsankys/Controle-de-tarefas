import useApi from 'src/composables/UseApi'

export default function listService () {
  const { list, post, update, remove, getById } = useApi('')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
