const req = require('express/lib/request');
const res = require('express/lib/response');
const uuid = require('uuid/v4');

module.exports = app => {
   const customerWalletsData = app.data.customerWallets;
   const controller = {};
   const {
      customerWallets : customerWalletsMock,
   } = customerWalletsData;
   
   // GET
   controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsData);

   // INSERT
   controller.saveCustomerWallets = (req, res) => {
      customerWalletsMock.data.push({
         id: uuid(),
         parentId: uuid(),
         name: req.body.name,
         birthDate: req.body.birthDate,
         cellphone: req.body.cellphone,
         phone: req.body.phone,
         email: req.body.email,
         occupation: req.body.occupation,
         state: req.body.state,
      });
      res.status(201).json(customerWalletsMock);
   }

   // DELETE
   controller.removeCustomerWallets = (req, res) =>{
      const {
         customerId,
      } = req.params;

      const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id === customerId);

      if(foundCustomerIndex === -1){
         res.status(404).json({
            message: "Client not found",
            success: false,
            customerWallets: customerWalletsMock,
         });
      } else {
         customerWalletsMock.data.splice(foundCustomerIndex, 1);
         res.status(200).json({
            message: "Client found and deleted",
            success: true,
            customerWallets: customerWalletsMock,
         });
      };
   }

   // PUT 
   controller.updateCustomerWallets = (req, res) => {
      const {
         customerId,
      } = req.params;
      const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id === customerId);
      if(foundCustomerIndex === -1){
         res.status(404).json({
            message: "Client not found",
            success: false,
            customerWallets: customerWalletsMock,
         });
      } else {
         const newCustomer = {
            id: customerId,
            parentId: req.body.parentId,
            name: req.body.name,
            birthDate: req.body.birthDate,
            cellphone: req.body.cellphone,
            phone: req.body.phone,
            email: req.body.email,
            occupation: req.body.occupation,
            state: req.body.state,
            createAt: new Date()
         }      
   
         customerWalletsMock.data.splice(foundCustomerIndex, 1, newCustomer);
         res.status(200).json({
            message: "Client found and updated",
            success: true,
            customerWallets: customerWalletsMock,
         });
      };   
   }
   return controller;
};