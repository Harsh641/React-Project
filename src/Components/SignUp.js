import React, { useState } from 'react'

export const SignUp = () => {



    return (
        <div className="container my-3">
            <form>
                <div class="form-group">
                    <label>FirstName</label>
                    <input type="name" class="form-control" id="exampleInputFirstName" placeholder="Enter FirstName" />
                </div>
                <div class="form-group">
                    <label>LastName</label>
                    <input type="name" class="form-control" id="exampleInputLastName" placeholder="Enter LastName" />
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                
                <button type="submit" class="btn btn-primary" onClick="save()">Submit</button>
            </form>
        </div>
    )
}
