import {useState} from "react";
import "./databinding.css";
 export function DataBinding(){
    const [categories] =useState([
        "All",
        "Electronics",
        "Fashion",
        "FootWear"
    ]);
    return(
        <div>
            <ol>


                {categories.map((item,index)=>(<li key={index}>{item}</li>))}
            </ol>
      <select>
        {categories.map((item,index)=>(<option key={index}>{item}</option>))}
      </select>
     <table border="1">
        <thead>
            <tr>Categories</tr>
        </thead>
  <tbody>
    {categories.map((item)=>(
        <tr key={item}>
            <td>{item}</td>
        </tr>
    )
    )}
  </tbody>



     </table>
        
        </div>
    );
    
 }