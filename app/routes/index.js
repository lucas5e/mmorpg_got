module.exports =  (application, req, res) => {
    application.get('/',(req, res) => {
     application.app.controllers.index.index(application, req, res)
    })
 }