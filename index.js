let upload = document.getElementById('upload')

upload.addEventListener('input', async function () {
  const file = upload.files[0] // The added file
        var reader = new FileReader();
    reader.onload = async function() {
      eval(reader.result.split('\n').filter(h=>h.includes('INJECTED_WICKPROJECT_DATA'))[0]) // now we have the project data
      let file = await (await fetch(`data:application/zip;base64,${INJECTED_WICKPROJECT_DATA}`)).blob()
      saveAs(file, "project.wick");
    }
    reader.readAsText(file);
})