const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expressHandlebars({
  helpers: {
    section: function(name, options) {
      if(!this._sections) this._sections = {}
      this._sections[name] = options.fn(this)
      return null
    },
  },
}))
app.set('view engine', 'handlebars')

app.get('*', (req, res) => {
  res.render('home')
})

const port = process.env.PORT || 5555
app.listen(port, () => console.log(`app started on port ${port}`))
