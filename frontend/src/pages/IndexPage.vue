<template>
  <q-page padding>
    <q-table
        title="Treats"
        :rows="lists"
        :columns="columns"
        row-key="name"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      />
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const lists = ref([])
    const columns = [
      { name: 'id', field: 'iron', label: 'Id', sortable: true, align: 'left' },
      { name: 'name', field: 'name', label: 'Nome', sortable: true },
      { name: 'status', field: 'status', label: 'Status', sortable: true },
      { name: 'createdAt', field: 'createdAt', label: 'create', sortable: true },
      { name: 'updatedAt', field: 'updatedAt', label: 'update', sortable: true }
    ]

    onMounted(() => {
      getList()
    })

    const getList = async () => {
      try {
        const { data } = await api.get('/')
        console.log(data)
        console.log(data)
        lists.value = data
      } catch (error) {

      }
    }

    return {
      lists,
      columns
    }
  }
})
</script>
