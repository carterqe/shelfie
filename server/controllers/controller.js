

module.exports = {

getInventory: (req, res) => {
  const db = req.app.get('db')
  db.read_inventory()
    .then(result => {
    res.status(200).send(result)
    })
    .catch(err => {
      console.log(err)
    })
},
addInventory: (req, res) => {
  const db = req.app.get('db')
  const {image_url, product_name, price} = req.body
  db.create_inventory({
    image_url: image_url,
    product_name: product_name,
    price: price
  })
  .then(result => {
    res.status(200).send(result)
  }).catch(err => {
    console.log(err)
  })  
},
updateInventory: (req, res) => {
  const db = req.app.get('db')
  db.update_inventory([req.body.image_url, req.body.product_name, req.body.price, req.params.id])
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      console.log(err)
    })  },
deleteInventory: (req, res) => {
  const db = req.app.get('db')
  db.delete_inventory(req.params.id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch (err => {
      console.log(err)
    })  
  },
}