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
import { defineComponent, ref } from 'vue'
import activityService from 'src/services/activities'
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'CreateActivity',
  setup () {
    const { post } = activityService()
    const $q = useQuasar()
    const router = useRouter()
    const route = useRoute()
    const form = ref({
      name: '',
      status: ''
    })
    onMounted(async () => {
      if (route.params.id) {
        getList(route.params.id)
      }
    })

    const getList = async (id) => {
      try {
        const response = await getById(id)
        form.value = response
      } catch (error) {

      }
    }
    const onSubmit = async () => {
      try {
        if (form.value.id) {
          console.log('opa')
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
