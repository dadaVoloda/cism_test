import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Document } from '@/types'
import documentService from '@/services/documents'

export const useDocumentsStore = defineStore('documents', () => {
  const documents = ref<Document[]>([])
  const document = ref<Document | null>(null)
  const isLoadingDocs = ref(false)
  const isLoadingDoc = ref(false)

  const getDocuments = async () => {
    try {
      isLoadingDocs.value = true
      const data = await documentService.getAll()
      documents.value = data
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        console.error(error)
      }
    } finally {
      isLoadingDocs.value = false
    }
  }

  const getDocument = async (id: number) => {
    try {
      isLoadingDoc.value = true
      const data = await documentService.getOneById(id)
      document.value = data[0]
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        console.error(error)
      }
    } finally {
      isLoadingDoc.value = false
    }
  }

  const removeDocument = (id: number) => {
    documents.value = documents.value.filter((doc) => doc.id !== id)
    document.value = null
  }

  return {
    documents,
    getDocuments,
    isLoadingDocs,
    getDocument,
    isLoadingDoc,
    document,
    removeDocument
  }
})
