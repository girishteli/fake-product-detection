import React from "react";
import { Link } from "react-router-dom";

const Apply =() =>{
  return(<div style={{}}>
        <Link 
            to="https://docs.google.com/forms/d/e/1FAIpQLSee5kfA_xDV59gGf0OyfnvcKOYtCkKFUiFhMMhyiInLnYDpNA/viewform?usp=sf_link" target="_blank"
            style = {{height:40, width:100, backgroundColor:"#4338CA", padding:10, borderRadius:10, color:"white", marginLeft:10}}
            // class="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                                
        >
            Contact Us
        </Link>
        {/* <button
                                    type="submit"
                                    class="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                                >
                                    Contact Us
                                </button> */}
      </div> );
};
export default Apply;