-- # write your SQL statement here: you are given a table 'quarterof' with column 'month', return a table with column 'month' and your result in a column named 'res'.

-- been solved in js as:

```js
const quarterOf = (month) => Math.ceil(month / 3)
```

-- thought this is the solution, putting ceil() on behalf of Math.ceil, but it wasn't
-- SELECT month, CAST(CEIL(month / 3) AS INT) AS res
-- FROM quarterof;

SELECT month,
       CASE
           WHEN month % 3 = 0 THEN month / 3
           ELSE (month / 3) + 1
       END AS res
FROM quarterof;


```
In this code, the `CASE` statement is used to determine the quarter based on the given month.
If the month is divisible by 3 (e.g., 3, 6, 9, 12), the quarter is calculated as `month / 3`. Otherwise,
for all other months, the quarter is calculated as `(month / 3) + 1`.
For example, with the month value of 8, the code will correctly return 3 as the quarter,
and with the month value of 11, it will return 4 as the quarter.
```
