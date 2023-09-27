import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Document } from '@/types'
import documentService from '@/services/documents'

export const useDocumentStore = defineStore('document', () => {
  const document = ref<Document | null>(null)
  const isLoading = ref(false)
  const selected = ref(false)

  const getDocument = async (id: string) => {
    try {
      selected.value = false
      isLoading.value = true
      const data = await documentService.getOneById(id)
      if (!data.length) {
        document.value = null
        throw new Error('Нет документов по такому ID')
      }
      document.value = data[0]
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        console.error(error)
      }
    } finally {
      isLoading.value = false
    }
  }

  const changeSelected = (val: boolean) => {
    selected.value = val
  }

  return { document, getDocument, isLoading, selected, changeSelected }
})
