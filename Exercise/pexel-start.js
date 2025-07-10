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
        throw new Error(`Error`)
      }
    })
    .then(function (arrayOfInfo) {
      const newImg = document.querySelectorAll(`.card-img-top`)
      // newImg.forEach(arrayOfInfo.photos[i].src.original)
      console.log(arrayOfInfo.photos[0].src.original)
      const changeImgBtn = document.querySelector(`.btn .btn-primary`)
    })
    .catch(function (err) {
      console.log(`Error`, err)
    })
}
