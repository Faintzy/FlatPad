$(document).ready(() => {

    var url = document.URL;

    $(".text").val("")

    if("data" in localStorage) {
        $(".text").val(localStorage.getItem('data'))
    }
    
    localStorage.removeItem("data")
    
    $(".text").focus()

    const downloadToFile = (content, filename, contentType) => {
        const a = document.createElement('a');
        const file = new Blob([content], {type: contentType});
        
        a.href= URL.createObjectURL(file);
        a.download = filename;
        a.click();
      
          URL.revokeObjectURL(a.href);
    };

    $(document).keydown((e) => {
        
        if((e.key == 's' || e.key == 'S')
            && (e.ctrlKey || e.metaKey)) 
        {
            e.preventDefault()

            $('.ui.basic.modal').modal('show')

            $(".create").click(() => {

                var filename = $(".filename").val().trim()
                var data = $(".text").val()
                document.title = filename + ".txt"

                downloadToFile(data, `${filename}.txt`, "text/plain")

                $('.ui.basic.modal').modal('hide')

            })

            return false
        }

        return true
    })
})