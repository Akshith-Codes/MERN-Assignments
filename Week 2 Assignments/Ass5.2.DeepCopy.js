

//🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

      //1. Create a deep copy of order
      const copyOrder=structuredClone(order)

      // 2. Modify in copied object:
            //i. customer.address.city
            copyOrder.customer.address.city='Kochi'

            //ii. items[0].price
            copyOrder.items[0].price=100000


            //iii. Verify original object remains unchanged
            console.log(order)
            console.log(copyOrder)