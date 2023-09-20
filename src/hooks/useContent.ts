export default function useContent() {
  const downloadDocument = ({ text, name = 'file' }: { text: string; name?: string }) => {
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = window.document.createElement('a')
    link.download = `${name}.txt`
    link.href = url
    link.click()
  }

  return { downloadDocument }
}
