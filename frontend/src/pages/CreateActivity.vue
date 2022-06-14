<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
      class="row"
    >
      <q-input
        outlined
        v-model="form.name"
        label="Atividade"
        lazy-rules
        class="col-lg-6 col-xs-12"
        :rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
      />
      <q-select
      class="col-lg-6 col-xs-6"
      v-model="form.status" :options="['Finalizado', 'Não finalizado']" label="Status" />
      <div padding class="col-12 q-gutter-sm">
        <q-btn
        label="Salvar"
        color="primary"
        class="float-right"
        icon="save"
        type="submit"
        />
        <q-btn
        label="Cancelar"
        color="white"
        class="float-right"
        text-color="primary"
        :to="{ name: 'activities' }"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import activityService from 'src/services/activities'
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'CreateActivity',
  setup () {
    const { post, getById, update } = activityService()
    const $q = useQuasar()
    const router = useRouter()
    const route = useRoute()
    const form = ref({
      name: '',
      status: ''
    })
    onMounted(async () => {
      console.log(route.params)
      if (route.params.activityId) {
        getList(route.params.id, route.params.activityId)
      }
    })

    const getList = async (id, idList) => {
      try {
        const response = await getById(id, idList)
        form.value = response
      } catch (error) {
        $q.notify({ message: 'Erro ao carregar a atividade', icon: 'times', color: 'negative' })
      }
    }
    const onSubmit = async () => {
      try {
        if (form.value.id) {
          await update(form.value)
        } else {
          await post(form.value, route.params.id)
        }
        $q.notify({ message: 'Atividade criada com sucesso', icon: 'check', color: 'positive' })
        router.push({ name: 'activities' })
      } catch (error) {
        $q.notify({ message: 'Erro ao criar atividade', icon: 'times', color: 'negative' })
      }
    }
    return {
      form,
      onSubmit
    }
  }
})
</script>
