const imagePickerElement = document.querySelector("#image-upload-control input")
const imagePreviewElement  = document.querySelector("#image-upload-control img")

function updateImagePreview() {
const files = imagePickerElement.files

if (!files || files.legnth === 0) {
    imagePreviewElement.style.display = 'none'
    return
}

const picketFile = files[0]

imagePreviewElement.src = URL.createObjectURL(picketFile)
imagePreviewElement.style.display = "inline"
}

imagePickerElement.addEventListener("change", updateImagePreview)