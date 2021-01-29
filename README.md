# Calculate Brasilian CDB post fixed Yield

This application calculate Brasilian CDB post fixed Tax

It was made using Node.JS for BACKEND and React.JS for [FRONTEND](https://github.com/thiagosrib/calculateCDIPercentageWEB)

**Note: This project using:**
- Node v15.4.0
- npm v7.0.15
- yarn v1.22.10
## To reproduce the application
1. After clone repo:

2.1. Install the dependencies running

```sh
  yarn
```

2.2. After install finished run the application running

```sh
  yarn start
```

## To get datas
Run `POST` request to `http://localhost:3333/calculate`

## The inputs are
- Initial date for the CDB application (investmentDate)
- End date for the CDB application (currentDate)
- CDB base tax (cdbRate)

Eg.
"investmentDate": "2016-11-14",
"cdbRate": 103.5,
"currentDate": "2016-12-26"

## The outputs are
- Working days from Initial date to End date minus 1 day
- Yield over R$ 1000.00

## Application ScreenShot
![ScreenShot](https://drive.google.com/file/d/1ZyDmF6M471ITRX9f5j3Ge8sSJXmmEKfp/view)
