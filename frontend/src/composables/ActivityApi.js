import { api } from 'boot/axios'

export default function useApi (url) {
  const list = async () => {
    try {
      const { data } = await api.get(url)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const getById = async (id, idList) => {
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
      const { data } = await api.put(`${url}/${form.id}`, form)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const remove = async (id) => {
    try {
      const { data } = await api.delete(`${url}/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
