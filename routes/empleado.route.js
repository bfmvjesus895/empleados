const express = require("express")
const empleadoRuta = express.Router()

//Declaramos un objeto de nuestro modelo//
let Empleado = require('../models/Empleado')

//Agregar un nuevo empleado//
empleadoRuta.route('/create').post((req,res)=>{
    Empleado.create(req.body)
    .then((data)=>{
        console.log('se inserto un registro')
        res.send(data)
    })
    .catch((err)=>{
        console.error.apply(err)
    })
})

//Obtenemos todos los empleados//
empleadoRuta.route('/empleados').get((req,res)=>{
    Empleado.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Obtenemos un solo empleado por su id//
empleadoRuta.route('/empleado/:id').get((req,res)=>{
    Empleado.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Actualizar un empleado//
empleadoRuta.route('/update/:id').put((req,res)=>{
    Empleado.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Metodo para eliminar empleado//
empleadoRuta.route('/delete/:id').delete((req,res)=>{
    Empleado.findByIdAndRemove(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

module.exports = empleadoRuta;
