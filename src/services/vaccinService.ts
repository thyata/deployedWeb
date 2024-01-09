import http from "../http-common";

function getAllVaccine (page: any,size: any,search?:string){
    let url=`/vaccines/?page=${page}&size=${size}`
    if(search)url+=`&search=${search}`
   
    return http.get(url);
  };


  const VaccinService = {
    getAllVaccine,
  };
  export default VaccinService;