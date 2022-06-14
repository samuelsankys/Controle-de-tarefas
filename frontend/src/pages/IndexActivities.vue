<template>
  <q-page padding>
    <q-table
        title="Treats"
        :rows="activities"
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
            <q-btn icon="delete" color="negative" dense size="sm" @click="removeActivity(props.row.id)"/>
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
    const activities = ref([])
    const { activityList, remove } = activityService()
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
      getList(route.params.id)
    })

    const getList = async (id) => {
      try {
        const data = await activityList(id)
        activities.value = data
      } catch (error) {
        $q.notify({ message: 'Erro ao carregar as atividades', icon: 'times', color: 'negative' })
      }
    }

    const removeActivity = async (id) => {
      const idList = route.params.id
      try {
        $q.dialog({
          title: 'Deletar',
          message: 'Deseja realmente deletar essa lista?'
        }).onOk(async () => {
          await remove(idList, id)
          $q.notify({ message: 'Apagado com sucesso', icon: 'check', color: 'positive' })
          await getList(idList)
        })
      } catch (error) {
        $q.notify({ message: 'Erro ao apagar lista', icon: 'times', color: 'negative' })
      }
    }

    const editActivity = async (id) => {
      const idList = route.params.id
      router.push({ name: 'formActivities', params: { id: idList, activityId: id } })
    }

    return {
      activities,
      activityList,
      columns,
      removeActivity,
      editActivity
    }
  }
})
</script>
