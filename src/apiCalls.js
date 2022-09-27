// export const getOrders = () => {
//   return fetch('http://localhost:3001/api/v1/orders')
//       .then(response => response.json())
// }


export let getOrders = () => {
  return fetch(`http://localhost:3001/api/v1/orders`)
      .then(response => {
          if (!response.ok) {
              throw Error(response.text)
          } else {
              return response.json()
          }
      })
      .catch(error => console.log(error))
}

export let postOrders = (order) => {
  return fetch("http://localhost:3001/api/v1/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  })
    .then((order) => {
      console.log(order)
      if (order.ok) {
        return order.json();
      } else {
        throw Error(order.status.text);
      }
    })
    .catch((error) => console.log(error));
}

export let getData = () => {
  const promise = Promise.all([getOrders()]).then(order => {
      return order
  })
  return promise
}