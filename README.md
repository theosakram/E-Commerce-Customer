# E-Commerce CMS

## URL

[Cyanide With Rice](https://e-cms-f14a6.web.app/)

## Route-Flows

### User

- **Login** <br />

  - **URL** : `/login`
  - **Method**: `POST`
  - **Success Response (at server)** : <br />

    - **Code** : `200`

    - **Content** :

      ```javascript
      {
        "id": 1,
        "msg": "User logged in successfully",
        "access_token": some random hashed string,
        "name": "Admin"
      }
      ```

  - **Error Response (at server)** : <br />

    - **Code** : `400`

    - **Content** :

      ```javascript
      { "msg": "User not found" }

        OR

      {"msg": "Wrong email/ password"}
      ```

      `OR`

    - **Code** : `500`

    - **Content** :

      ```javascript
      { "msg": "Internal server error" },
      ```

- **Register** <br />

  - **URL** : `/register`
  - **Method**: `POST`
  - **Success Response (at server)** : <br />

    - **Code** : `200`

    - **Content** :

      ```javascript
      {
        "msg": "User registered successfully",
        "id": 2,
        "name": "test",
        "email": "test@gmail.com",
        "role": "user"
      }
      ```

  - **Error Response (at server)** : <br />

    - **Code** : `400`

    - **Content** :

      ```javascript
      { "msg": "Name cannot be empty" }

        OR

      { "msg": "Email cannot be empty" }

        OR

      { "msg": "Wrong email format" }

        OR

      { "msg": "Email has already been registered" }

        OR

      { "msg": "Password cannot be empty" }
      ```

      `OR`

    - **Code** : `500`

    - **Content** :

      ```javascript
      { "msg": "Internal server error" },
      ```

### Cart

- **Add / Create**<br />

  - URL : `/cart/:user_id`
  - Method : `POST`

  - **Params Requirement**:

    - id: `integer`

  - **Headers Requirement**:

    - access_token: `string`

  - **Success Response (at server)** : <br />

        - **Code** : `201`
        - **Content** :

          ```javascript
            {
              "id": 32,
              "user_id": 1,
              "product_id": 7,
              "quantity": 1,
              "status": false,
            }
          ```

  - **Error Response (at server)** : <br />

    - **Code** : `401`

    - **Content** :

      ```javascript
      { "msg": "Invalid Token" }
      ```

      OR

    - **Code** : `500`

    - **Content** :

      ```javascript
      { "msg": "Internal server error" },
      ```

- **Get Cart** </br>

  - URL : `/cart/:user_id`

    - Method : `GET`

    - **Headers Requirement**:

    - access_token: `string`

    - **Success Response (at server)** : <br />

      - **Code** : `200`
      - **Content** :

        ```javascript
        {
          "id": 12,
          "user_id": 1,
          "product_id": 23,
          "quantity": 1,
          "status": false,
          "Product": {
            "id": 23,
            "name": "Nero Claudius",
            "series": "Fate/EXTELLA",
            "image_url": "https://images.goodsmile.info/cgm/images/product/20170929/6757/47856/large/2e1e0749a6b05b27959be2dbd087c603.jpg",
            "price": 1000000,
            "stock": 7,
            "sub_desc": "Listen in ecstasy. Then trust, and rekindle your love once more!",
            "desc": "From the popular game 'Fate/EXTELLA' comes a figma of the Saber servant, Nero Claudius !",
            "category_id": 1,
          }
        },
        ```

- **Get Transaction History** </br>

  - URL : `/cart/transaction/history`

    - Method : `GET`

    - **Headers Requirement**:

    - access_token: `string`

    - **Success Response (at server)** : <br />

      - **Code** : `200`
      - **Content** :

          ```javascript
          {
            "id": 12,
            "user_id": 1,
            "product_id": 23,
            "quantity": 1,
            "status": false,
            "Product": {
              "id": 23,
              "name": "Nero Claudius",
              "series": "Fate/EXTELLA",
              "image_url": "https://images.goodsmile.info/cgm/images/product/20170929/6757/47856/large/2e1e0749a6b05b27959be2dbd087c603.jpg",
              "price": 1000000,
              "stock": 7,
              "sub_desc": "Listen in ecstasy. Then trust, and rekindle your love once more!",
              "desc": "From the popular game 'Fate/EXTELLA' comes a figma of the Saber servant, Nero Claudius !",
              "category_id": 1,
              }
          },
          ```

    - **Error Response (at server)** : <br />

    - **Code** : `401`

      - **Content** :

        ```javascript
        { "msg": "Invalid Token" },
        ```

        OR

      - **Code** : `500`

      - **Content** :

        ```javascript
        { "msg": "Internal server error" },
        ```

- **Edit** </br>

  -**Checkout**

  - URL : `/cart/checkout`

    - Method : `PUT`

    - **Headers Requirement**:

    - access_token: `string`

    - **Success Response (at server)** : <br />

      - **Code** : `200`
      - **Content** :

      ```javascript
        {
          "msg" : "Item(s) bought successfully"
         }
      ```

    - **Error Response (at server)** : <br />

      - **Code** : `401`

      - **Content** :

        ```javascript
        { "msg": "Invalid Token" }
        ```

        `OR`

      - **Code** : `500`

      - **Content** :

        ```javascript
        { "msg": "Internal server error" },
        ```

  -**Add or Remove Item in Cart**

  - URL : `/cart/edit/:cart_id`

    - Method : `PUT`

    - **Params Requirement**

      - cart_id: `integer`

    - **Headers Requirement**:

    - access_token: `string`

    - **Success Response (at server)** : <br />

      - **Code** : `200`
      - **Content** :

      ```javascript
        {
          "msg" : "Item(s) edited successfully"
         }
      ```

    - **Error Response (at server)** : <br />

      - **Code** : `401`

      - **Content** :

        ```javascript
        { "msg": "Invalid Token" }
        ```

        `OR`

      - **Code** : `500`

      - **Content** :

        ```javascript
        { "msg": "Internal server error" },
        ```

- **Delete** </br>

  - URL : `/cart/:id`

    - Method : `DELETE`

    - **Success Response (at server)** : <br />

      - **Code** : `200`
      - **Content** :

      ```javascript
        { "msg": "Cart deleted successfully" }
      ```

    - **Error Response (at server)** : <br />


      - **Code** : `403`

      - **Content** :

        ```javascript
        { "msg": "Unauthorized" }
        ```
        OR

      - **Code** : `400`

      - **Content** :

        ```javascript
        { "msg": "Cart not found" }
        ```
        OR

      - **Code** : `500`

      - **Content** :

        ```javascript
        { "msg": "Internal server error" },
        ```

### Products

- **Get product Data** </br>

  - URL : `/product`

    - Method : `GET`

    - **Success Response (at server)** : <br />

      - **Code** : `200`
      - **Content** :

        ```javascript
            {
              "name": "Gray Fullbuster",
              "series": "Fairy Tail",
              "image_url": "https://images.goodsmile.info/cgm/images/product/20200603/9606/70422/large/044dd745dbb76f49222f254b0803d342.jpg",
              "price": 400000,
              "stock": 16,
              "sub_desc": "I'll show you what real ice magic is...",
              "desc": "POP UP PARADE is a new series of figures that are easy to collect with affordable prices and releases planned just four months after preorders begin! Each figure stands around 17-18cm in height and the series features a vast selection of characters from popular anime and game series, with many more to be added soon!. The next figure to join the POP UP PARADE series is the Ice-Make Mage Gray Fullbuster! He's been recreated in a powerful pose putting his hands together. Be sure to display him with POP UP PARADE Natsu Dragneel (sold separately)!",
              "category_id": 3
              "createdAt": "2020-07-22T12:55:41.398Z",
              "updatedAt": "2020-07-22T12:55:41.398Z"
            }
        ```

    - **Error Response (at server)** : <br />

      - **Code** : `500`

      - **Content** :

        ```javascript
        { "msg": "Internal server error" },
        ```
