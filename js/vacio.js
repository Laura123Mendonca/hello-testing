$(document).ready(function()
{
    Insertar_registro();

}
)
function Insertar_registro(){
    $(document).on('click','#btn_register', function()
    {
        var User = $('#UserName').val();
        var Email= $('#UserEmail').val();
    })
}
