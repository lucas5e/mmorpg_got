module.exports =  (application, req, res) => {
    application.get('/jogo',(req, res) => {
     application.app.controllers.jogo.jogo(application, req, res)
    })
 }