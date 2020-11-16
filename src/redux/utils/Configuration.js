export const tokenConfig = async () => {
  const userToken = null;
  if (userToken) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${JSON.parse(userToken)}`
    }
    return headers;
  } else {
    const headers = {
      'Content-Type': 'application/json',
    }
    return headers;
  }

}
































// export const tokenConfig = async (getState) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     },
//   };


//   // SecureStore.getItemAsync('STORAGE_TOKEN').then(value => {
//   //   if (value !== null) {
//   //     axios.interceptors.request.use(function (config) {
//   //       config.headers.Authorization = `Token ${value}`;

//   //     });
//   //   }
//   // });

//   return config;
// }






// Setup config with token - helper function





