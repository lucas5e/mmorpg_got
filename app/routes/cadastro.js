module.exports =  (application, req, res) => {
    application.get('/cadastro',(req, res) => {
     application.app.controllers.cadastro.cadastro(application, req, res)
    })
 }