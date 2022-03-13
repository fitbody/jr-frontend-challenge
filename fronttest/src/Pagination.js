import { Pagination } from "@mui/material";
import React from "react";



const AppPagination = ({ setPage, pageNumber }) => {

    const handleChange = page => {
        console.log('pagina solicitada es', page)
        setPage(page);
        window.scroll(0, 0);
      };

    return (
     
          <Pagination
            onChange={e => handleChange(e.target.textContent)}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            variant="outlined"
            count={pageNumber}
          />
     
    );
  };


  export default AppPagination;