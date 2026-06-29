const crypto = require("crypto");
const pendingOrders = {};
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const SHOP = process.env.SHOPIFY_STORE;
const TOKEN = process.env.SHOPIFY_PRIVATE_TOKEN;

app.get("/", (req, res) => {
    res.send("ROYYD Backend Running");
});

app.get("/api/products", async (req, res) => {

    try {

        const query = `
        {
          products(first: 20) {
            edges {
              node {
                id
                title
                handle
                description

                images(first:5){
                  edges{
                    node{
                      url
                    }
                  }
                }

                variants(first:10){
                  edges{
                    node{
                      id
                      title
                      price{
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `;

        const response = await axios.post(

            `https://${SHOP}/api/2025-07/graphql.json`,

            {
                query
            },

            {
                headers: {
                    "Content-Type": "application/json",
                    "Shopify-Storefront-Private-Token": TOKEN
                }
            }

        );

        res.json(response.data);

    } catch (error) {

        console.log(error.response?.data || error.message);

        res.status(500).json({

            success: false,
            error: error.message

        });

    }

});



app.post("/api/save-order-data", async (req, res) => {

    const {

        cartId,
        cart,
        shirtSizes,
        trouserSizes,
        suitSizes,
        address

    } = req.body;

    pendingOrders[cartId] = {

        cart,
        shirtSizes,
        trouserSizes,
        suitSizes,
        address,
        createdAt: Date.now()

    };

    console.log("PENDING ORDER SAVED");

    console.log(pendingOrders);

    res.json({

        success:true

    });

});

app.post("/webhooks/order-paid", async (req, res) => {

    console.log("============= PAYMENT RECEIVED =============");

    console.log(JSON.stringify(req.body, null, 2));

    res.status(200).send("OK");

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});