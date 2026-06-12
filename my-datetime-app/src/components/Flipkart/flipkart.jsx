import { useState,useEffect } from "react";

export function Flipkart(){
const[mobile,setMobile]=useState({
     rating: {
    rate: 0,
    ratings: 0,
    reviews: 0
  },
   features: []
});

 function LoadMobileDetails(){
    let http=new XMLHttpRequest();
    http.open("GET","product.json",true);
    http.send();
    http.onreadystatechange=function(){
        if(http.readyState===4){
            console.log(http.responseText);
            setMobile(JSON.parse(http.responseText));
        }
    }
 }

useEffect(()=>{
    
    LoadMobileDetails();
},[]);
return (
    <div className="container-fluid">
        <div className="row mt-4">
            <div className="col-2">
               <img width="100%" src={mobile.image}/>
            </div>
            <div className="col-6">
                <div className="fw-bold fs-4">{mobile.title} </div>

                <div className="mt-2">
                    <span className="badge bg-success rounded text-white">{mobile.rating.rate}<span className="bi bi-star-fill"></span>
                    </span>
                    <span className="text-secondary ms-3 fw-bold">{mobile.rating.ratings.toLocaleString('en-in')}ratings &{mobile.rating.reviews.toLocaleString('en-in')}reviews</span>
                </div>
                <ul className="list-unstyled text-secondary">
                    {
                        mobile.features.map(features=><li key={features}className="my-2 bi bi-dot">{features}</li>)
                    }

                </ul>
            </div>
            <div className="col-4">
             <div className="fs-1 fw-bold ">
                {
                    mobile.price?.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0})
                    }
             </div>
             </div>
             </div>
    </div>
)}
            


       






   


    



 


