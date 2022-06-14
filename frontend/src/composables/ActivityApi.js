import { api } from 'boot/axios'

export default function useApi (url) {
  const activityList = async (idList) => {
    try {
      const { data } = await api.get(`${url}/${idList}/activity`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const getById = async (idList, id) => {
    try {
      const { data } = await api.get(`${url}/${idList}/activity/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const post = async (form, idList) => {
    try {
      const { data } = await api.post(`${url}/${idList}/activity`, form)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const update = async (form) => {
    try {
      const { data } = await api.put(`${url}/${form.list_id}/activity/${form.id}`, form)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const remove = async (idList, id) => {
    try {
      const { data } = await api.delete(`${url}/${idList}/activity/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    activityList,
    post,
    update,
    remove,
    getById
  }
}
