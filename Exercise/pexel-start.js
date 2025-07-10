const apiLink = `https://api.pexels.com/v1/search?query=hamsters`

const getPicture = function () {
  fetch(apiLink, {
    headers: {
      Authorization: `nwywgKyXbmELfyhuRqPVXyeIbmokqQsa29KiypHCV9UB1ftlb7ITKNPV`,
      // Authorization: `l4Rf3ZW27ACB7DOlwbOWnK3xNBVFRAD60hiVtMSdFEkxp1hCd9yH1tRg`,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`Error-: ${response.statusText}`)
      }
    })
    .then(function (arrayOfInfo) {
      const oldImg = document.querySelectorAll(`.card-img-top`)
      const newImg = arrayOfInfo.photos

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
