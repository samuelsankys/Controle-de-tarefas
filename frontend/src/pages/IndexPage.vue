<template>
  <q-page padding>
    <q-table
        title="Treats"
        :rows="lists"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:top>
          <span class="text-h5">Lista de Atividades</span>
          <q-space />
          <q-btn color="primary" label="Nova Lista" :to="{ name: 'formList' }" />
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-sm">
            <q-btn icon="visibility" color="warning" dense size="sm" @click="viewActivitiesList(props.row.id)"/>
            <q-btn icon="edit" color="info" dense size="sm" @click="editList(props.row.id)"/>
            <q-btn icon="delete" color="negative" dense size="sm" @click="removeList(props.row.id)"/>
          </q-td>
        </template>
      </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import listService from 'src/services/lists'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const lists = ref([])
    const { list, remove } = listService()
    const columns = [
      { name: 'id', field: 'id', label: 'Id', sortable: true },
      { name: 'name', field: 'name', label: 'Nome', sortable: true },
      { name: 'status', field: 'status', label: 'Status', sortable: true },
      { name: 'actions', field: 'actions', label: 'Ações', align: 'right' }
    ]

    const $q = useQuasar()
    const router = useRouter()

    onMounted(() => {
      getList()
    })

    const getList = async () => {
      try {
        const data = await list()
        lists.value = data
      } catch (error) {
        $q.notify({ message: 'Erro ao carregar as listas', icon: 'times', color: 'negative' })
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

    const editList = async (id) => {
      router.push({ name: 'formList', params: { id } })
    }

    const viewActivitiesList = async (id) => {
      router.push({ name: 'activities', params: { id } })
    }

    return {
      lists,
      columns,
      removeList,
      editList,
      viewActivitiesList
    }
  }
})
</script>
