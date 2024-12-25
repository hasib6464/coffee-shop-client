import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee=useLoaderData();
  const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
const handleUpdateCoffee=event=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const quantity=form.quantity.value;
    const supplier=form.supplier.value;
    const taste=form.taste.value;
    const category=form.category.value;
    const details=form.details.value;
    const photo=form.photo.value;
    const updatedCoffee={name,quantity,supplier,taste,category,details,photo}
    console.log(updatedCoffee)

    fetch(`http://localhost:5000/coffee/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updatedCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
          title: 'success!',
          text: 'coffee updated successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
    return (
        <div className="bg-[#F4F3F0] p-24" >
        <h3 className="text-3xl font-bold">Update coffee : {name}</h3>
        <form onSubmit={handleUpdateCoffee}>
          {/* form control name and quantity */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text" name="name"
                  defaultValue={name} 
                  placeholder="coffee name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input type="text" name="quantity"
                defaultValue={quantity} 
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form control supplier and Taste */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text" name="supplier" 
                  defaultValue={supplier} 
                  placeholder="supplier name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input type="text" name="taste"
                 defaultValue={taste}
                  placeholder="taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form control category and details */}
          <div className="md:flex mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text" name="category" 
                  defaultValue={category}
                  placeholder="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input type="text" name="details"
                defaultValue={details}
                  placeholder="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo url */}
          <div className="">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <label className="input-group">
                <input
                  type="text" name="photo" 
                  defaultValue={photo}
                  placeholder="photo url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          
          <input className="btn btn-block mt-4" type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default UpdateCoffee;