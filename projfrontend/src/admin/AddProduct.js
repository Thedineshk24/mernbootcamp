import React, {useState, useEffect, Suspense} from 'react'
import Base from '../core/Base';
import { Link, Redirect } from 'react-router-dom';
import {getCategories, createaProduct} from "./helper/adminapicall"
import { isAutheticated } from '../auth/helper';

const AddProduct = () => {
    const {user,token} = isAutheticated();
    const [values , setValues] = useState({
        name : "",
        description : "",
        price : "",
        stock : "",
        photo : "",
        categories : [],
        category : "",
        loading : false,
        error : "",
        createdProduct : "",
        getRedirect : false,
        formData : ""
    }); 

    const {name,description,price,stock,photo,categories,category,loading,error,createdProduct,getRedirect,formData} = values;

    
    const preload = () => {
        getCategories().then(data => {
            if(data.error){
                setValues({...values, error:data.error})
            }else{
                setValues({...values,categories:data,formData: new FormData()})
                console.log("CATE:",categories);
            }
        })
    }

    useEffect(() => {
      preload();
    }, [])


    const handleChange = name => event => {
      const value = name === "photo" ? event.target.files[0] : event.target.value
      formData.set(name,value);
      setValues({...values, [name] :value})
    }

    const onSubmit = (event)=> {
      event.preventDefault();
      setValues({...values, error: "", loading : true})
      createaProduct(user._id, token , formData).then(data => {
        if(data.error){
          setValues({...values, error: data.error})
        }else{
          setValues({
            ...values, 
            name: "",
            description : "",
            price : "",
            photo: "",
            stock : "",
            loading: false,
            createdProduct: data.name
          })
        }
      })
    }


    const successMsg = () => (
      <div className="alert alert-success mt-3" style={{display : createdProduct ? "" : "none"}}>
        <h4>{createdProduct} created successfully</h4>
      </div>
    )

    const errorMsg = () => (
      <div className="alert alert-warning mt-3" style={{display : !createdProduct  ? "" : "none"}}>
        <h4>{createdProduct} Failed! </h4>
      </div>
      
    ) 

    // const loadingMsg = () => {
    //   if(successMsg() == true){
    //   setValues({...values,loading:true,Redirect:true})
    //       setTimeout(()=>{
            
    //           <Redirect to="/admin/dashboard" />
            
    //       },2000)
    //   }
    // }

  //  setTimeout(() =>{
  //     if(successMsg){
  //       setValues({...values, loading: true, Redirect: true})
  //       return(
  //         <Suspense fallback={<Redirect />} />
  //       )
  //     }
  //  },2000 )
    const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              {
                categories 
                && 
                categories.map((cate,index) => {
                  return (
                    <option key={index} value={cate._id}>{cate.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success mb-3">
            Create Product
          </button>
        </form>
      );


    return (
        <Base 
            title="Add a product here!"
            description="Welcome to product creation section"
            className="container bg-info p-4"
        >   
            
            <Link className="btn btn-md btn-dark mb-3" to="/admin/dashboard">Admin Home</Link>

            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMsg()}
                    {errorMsg()}
                    {createProductForm()}
                </div>
            </div>
        </Base>
    )
}

export default AddProduct;
