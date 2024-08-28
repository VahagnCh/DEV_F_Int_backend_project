// #1 Import Express
const express = require('express')

// Import routes
const userRoutes = require('./routes/userRoutes');

// #2 Crear una instancia de Express
const app = express()

// #3 Configurar Express para que entienda JSON y datos de formularios
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// #4 Define your routes here
app.use('/api/v1', userRoutes);

// #5 Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🖥️`)
})
