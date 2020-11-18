import axios from "axios";

export const ALL_PERSON = "ALL_PERSON";
//export const CHANGE_BOOT = "CHANGE_BOOT"; 
 


export function allPerson () { 
 
    return function(dispatch) {     
    return axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(result => result.data)
        .then(data => {
          dispatch({
            type: ALL_PERSON,
            payload: data
          })
          console.log("El Actions ",data)
        })
    };
     
  }

  // export function changeBoot (boot) { 

  //     return function(dispatch) {  
          
  //       return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${boot.nameBoot ? boot.nameBoot : 'curiosity'}/photos?earth_date=${boot.dateHeart ? boot.dateHeart : '2015-6-3'}&api_key=AKZr6tq7XfsgsYetGMTjWtZTXZCDrDPbScUMtGVh `)
  //         .then(result => result.data)
  //         .then(data => {
  //           dispatch({
  //             type: CHANGE_BOOT,
  //             payload: data.photos
  //           })
  //           console.log("Y responde ", data)
  //         })
  //     };
       
  //   }


 