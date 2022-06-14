<template>
  <q-page padding>
    <q-table
        title="Treats"
        :rows="activity"
        :columns="columns"
        row-key="name"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      >
        <template v-slot:top>
          <span class="text-h5">Atividades</span>
          <q-space />
          <q-btn color="primary" label="Nova Atividade" :to="{ name: 'formActivities' }" />
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-sm">
            <q-btn icon="edit" color="info" dense size="sm" @click="editActivity(props.row.id)"/>
            <q-btn icon="delete" color="negative" dense size="sm" @click="removeList(props.row.id)"/>
          </q-td>
        </template>
      </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import activityService from 'src/services/activities'
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'IndexActivities',
  setup () {
    const activity = ref([])
    const { getById, remove } = activityService()
    const columns = [
      { name: 'id', field: 'id', label: 'Id', sortable: true },
      { name: 'name', field: 'name', label: 'Nome', sortable: true },
      { name: 'status', field: 'status', label: 'Status', sortable: true },
      { name: 'actions', field: 'actions', label: 'Ações', align: 'right' }
    ]

    const $q = useQuasar()
    const router = useRouter()
    const route = useRoute()

    onMounted(() => {
      getList()
    })

    const getList = async () => {
      try {
        const data = await getById(`${route.params.id}/activity`)
        activity.value = data
      } catch (error) {

      }
    }

    const removeList = async (id) => {
      try {
        $q.dialog({
          title: 'Deletar',
          message: 'Deseja realmente deletar essa lista?'
        }).onOk(async () => {
          await remove(id)
          $q.notify({ message: 'Apagado com sucesso', icon: 'check', color: 'positive' })
          await getList()
        })
      } catch (error) {
        $q.notify({ message: 'Erro ao apagar lista', icon: 'times', color: 'negative' })
      }
    }

    const editActivity = async (id) => {
      const idActivity = `${route.params.id}/activity/${id}`
      router.push({ name: 'formActivities', params: { idActivity } })
    }

    return {
      activity,
      columns,
      removeList,
      editActivity
    }
  }
})
</script>
