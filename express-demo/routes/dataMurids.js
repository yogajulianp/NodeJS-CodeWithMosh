const express = require('express');
const router = express.Router()

const dataMurids = [
    {id: 1, name: 'murid1'},
    {id: 2, name: 'murid2'},
    {id: 3, name: 'murid3'}
];

router.get('/',(req,res) => {
    res.send(dataMurids);
});

router.post('/', (req,res)=> {
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };

    // const result = Joi.validate(req.body, schema)
    // if (result.error) {
    //     // 400 Bad Request
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }
    const { error } = validateDataSiswa(req.body); //result.error
    if (error) return res.status(400).send(error.details[0].message);
        // 400 Bad Request
       
    // console.log("")
    // console.log(result)

    // if (!req.body.name || req.body.name.length < 3) {
    //     // 400 Bad Request
    //     res.status(400).send('Nama dibutuhkan dan harus minimal 3 karakter');
    //     return;
    // }
    const dataSiswa = {
        id: dataMurids.length + 1,
        name: req.body.name
    };
    dataMurids.push(dataSiswa);
    res.send(dataSiswa);
});

router.put('/:id', (req, res) =>{
    // look up the dataMurids
    // if not exiting, return 404
    const dataSiswa = dataMurids.find(c => c.id === parseInt(req.params.id)); 
    if (!dataSiswa) return res.status(404).send('The dataSiswa with the given ID was not found');

    // validate
    // if invalid, return 400 - Bad request
    // const result = validateDataSiswa(req.body);
    const { error } = validateDataSiswa(req.body); //result.error
    if (error) return res.status(400).send(error.details[0].message);
        // 400 Bad Request
        
    // if good respon, update dataMurid
    // Return the update data murid
    dataSiswa.name = req.body.name;
    res.send(dataSiswa);
});

router.delete('/:id', (req, res) => {
    //look up the students
    //if not exting, return 404
    const dataSiswa = dataMurids.find(c => c.id === parseInt(req.params.id)); 
    if (!dataSiswa) return res.status(404).send('The dataSiswa with the given ID was not found');

    // Delete
    const index = dataMurids.indexOf(dataSiswa);
    dataMurids.splice(index, 1);

    // Return the same dataSiswa
    res.send(dataSiswa);
})

router.get('/:id', (req, res)=> {
    const dataSiswa = dataMurids.find(c => c.id === parseInt(req.params.id)); 
    if (!dataSiswa) return res.status(404).send('The dataSiswa with the given ID was not found');
    res.send(dataSiswa);
 });

function validateDataSiswa(dataSiswa) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(dataSiswa, schema)
}

module.exports=router;