UPDATE products
SET image_url = $1,
    product_name = $2,
    price = $3
WHERE id = $4;

SELECT * FROM products
ORDER BY id;
