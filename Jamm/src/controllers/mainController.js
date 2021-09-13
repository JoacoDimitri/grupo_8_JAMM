const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const clientsDataBase = require ('../data/clientsDataBase.json');

const controller = {
    index:(req,res) => {
        let gaming = products.filter (i => i.category == "Gaming");
        let accesorios = products.filter (i => i.category == "Accesorios");
        let dispositivos = products.filter (i => i.category == "Dispositivos");
        res.render("index", { productosGaming : gaming , productosAccesorios : accesorios , productosDispositivos : dispositivos});
    },
    login:(req,res) => {
        res.render("users/login")
    },
    register:(req,res) => {
        res.render("users/register")
    },

    search: function (req, res){
        let loQueBuscoElUsuario=req.query.search;
        let users= clientsDataBase
        for (let i=0; i<users.length;i++){
            if(users[i].name.includes(loQueBuscoElUsuario)){
                usersResults.push(users[i]);
            }
            res.render("usersResults", {usersResults:usersResults})
        }
    },
    edit: function (req,res){
        let idUser = req.params.idUser;
        let users = clientsDataBase;
        let userToEdit = users [idUser];
        res.render ('userEdit', {userToEdit:userToEdit});
    }
};

module.exports= controller;