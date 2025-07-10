// mi creo la costante x il link API

const apiLink = `https://api.pexels.com/v1/search?query=hamsters`

//  in questo caso, dovrmo utilizzare una "autorizazzione" per poter avere il via libera ad accedere all'API link tramite: authorization.

const getPicture = function () {
  fetch(apiLink, {
    headers: {
      Authorization: `nwywgKyXbmELfyhuRqPVXyeIbmokqQsa29KiypHCV9UB1ftlb7ITKNPV`,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`Error-: ${response.statusText}`)
      }
    })
    // richiamo all'array generico dell'API dove sono contenute le immagini che devo caricare ex-nuovo.
    .then(function (arrayOfInfo) {
      // richiamo gli elementi HTML su cui dovrò intervenire.
      const oldImg = document.querySelectorAll(`.card-img-top`)

      // estrapolo dall'API l'array specifico dove sono contenute le info che mi servono
      const newImg = arrayOfInfo.photos
      console.log(arrayOfInfo)

      // ciclo le immagini presenti sull'HTML dando istruzioni su cosa fare e due parametri (img > accedo al sottolivello di arrayOfInfo & i, l'indicizzazione di ciascun elemento), ovvero, cambiarle con quelle nuove (newImg[i].src.original serve x accedere ancora più in profondità e recuperare esattamente quello che mi serve, ovvero una IMG proveniente da API Link in formato/dimensione "originale")
      oldImg.forEach(function (img, i) {
        if (newImg[i]) {
          img.src = newImg[i].src.original
        }
      })
    })
    .catch(function (err) {
      console.log(`Error`, err)
    })
}
