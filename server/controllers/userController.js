import mongoose from 'mongoose';
import User from '../models/user';
import PriceTracker from '../helpers/PriceTracker'

export const getUsers = (req,res) => {
  console.log(PriceTracker.monero)
  User.find().exec((err,users) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Users fetched successfully',users});
  });
}

export const addUser = (req,res) => {
  const newUser = new User(req.body);
  newUser.save((err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todo added successfully',user});
  })
}

export const updateUser = (req,res) => {
  const id = req.body.id
  const coinName = req.body.coinName
  const amount = req.body.amount


  User.findById(id, function (err, user) {
    if (err) return handleError(err);
      user[coinName] = parseInt(amount)
      /// if user USD balance > amount * price of coinName
      /// Price class would be exchange that keeps
      user.save(function (err, updatedUser) {
        if (err) return handleError(err);
      res.send(updatedUser);
    });
  });


}


export const deleteUser = (req,res) => {
  User.findByIdAndRemove(req.params.id, (err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':  user.first_name + 'deleted successfully'});
  })
}
