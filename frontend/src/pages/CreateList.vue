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
    <div class="col-12 q-gutter-sm">
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
      :to="{ name: 'list' }"
      />
    </div>
    </q-form>
</q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import listService from 'src/services/lists'
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'CreateList',
  setup () {
    const { post, getById, update } = listService()
    const $q = useQuasar()
    const router = useRouter()
    const route = useRoute()
    const form = ref({
      name: ''
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
          await update(form.value)
        } else {
          await post(form.value)
        }
        $q.notify({ message: 'Lista criada com sucesso', icon: 'check', color: 'positive' })
        router.push({ name: 'list' })
      } catch (error) {
        $q.notify({ message: 'Erro ao criar lista', icon: 'times', color: 'negative' })
      }
    }

    return {
      form,
      onSubmit
    }
  }
})
</script>
