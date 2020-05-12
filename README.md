## How to run?

This is a console application written in `Node.js`. This can be run in two modes:

1. **Interactive Mode**: An interactive terminal based shell where commands can be typed in to perform different actions.

2. **File Mode**: It accepts a filename as a parameter at the terminal and read the commands from that file.

#### For Interactive Mode

Open terminal and navigate (`cd`) to this folder and type the following commands:

```bash
1. npm install
2. npm start
```

#### For File Mode

Open terminal and type `node src/index.js data/input.txt`.

```terminal
node src/index.js <path_to_file.txt>
```

**Note**: You can find a few sample input files inside `data/` folder.

#### Explained

**STEP 1**: `npm install` or `npm i` will download all the dependencies defined in `package.json` file and generate a `node_modules/` folder with the installed modules. Learn more [here](https://docs.npmjs.com/cli/install).

**STEP 2**: `npm start` or `npm run start` will start the application. It is equivalent to `node src/index.js`

## List of User Commands

Users can interact with the Parking Lot system via a following simple set of commands which produce a specific output:

- **create_parking_lot**: `create_parking_lot 6` will create a parking lot with 6 slots.

- **park < REGISTRATION NUMBER > < TYPE >**: `park KA-01-HH-1234 Car` will allocate the nearest slot from entry gate.

- **leave**: `leave 4` will make slot number 4 free.

- **status**: `status` will display vehicles and their slot details

```bash
Slot No.  Registration No Type
1         KA-01-HH-1234  Car
2         KA-01-HH-9999  Bus
3         KA-01-BB-0001  Car
5         KA-01-HH-2701  Bike
6         KA-01-HH-3141  Bike
```

- **registration_numbers_for_vehicles_with_type < TYPE >**: `registration_numbers_for_vehicles_with_type Car` will display the registration number of the vehicles of car type e.g. `KA-01-HH-1234, KA-01-BB-0001`

- **slot_numbers_for_vehicles_with_type < TYPE >**: `slot_numbers_for_vehicles_with_type Car` will display slot numbers of the vehicles of car type e.g. `1, 3`

- **slot_number_for_registration_number < REGISTRATION NUMBER >**: `slot_number_for_registration_number MH-04-AY-1111` will display the slot number for the vehicle with registration number MH-04-AY-1111.

- **leave_vehicle_by_registration_number**: `leave_vehicle_by_registration_number JH-01-LT-0008` will free the slot occupied by vehicle with registration number JH-01-LT-0008.

- **available_slot_numbers**: `available_slot_numbers` will display available slot numbers e.g. 2, 6, 8.

- **allocated_slot_numbers**: `allocated_slot_numbers` will display occupied slot numbers e.g. 1, 3, 4, 5, 7.

- **exit**: `exit` will quit the application and return to the console.

> **NOTE: Any commands which are not mentioned above will throw an error: `<INPUT> is an invalid command`**

**To view all the commands in terminal, please run `npm run help`**

## Test Scripts

Tests are written using [Mocha](https://mochajs.org/) and can be run using `npm test`

- `npm run test-unit` : Run unit tests only (Tests for functions in Parking Class)
- `npm run test-system` : Run repository tests only (See [this](#system-tests) section)
- `npm run test-lint` : Run lint tests using ESLint
- `npm run test` : Run all tests (lint tests + unit tests + system tests)

#### Unit tests

Unit tests are written for the methods of `ParkingLot` class.

#### System tests

System tests mainly include repository structure tests. It tests for the following:

Repository must contain:

- `package.json`
- `README.md`
- `.gitignore`
- `.eslintrc`
- `npm/` folder
- `src/` folder
- `tests/` folder

`package.json`

- must have valid name, author and license
- must have proper keywords
- must have valid version string
- must have scripts definitions
- must point to precise version for dependencies
- should not overlap dependencies
- must have devDependencies

`.gitignore` must contain `build/`, `dist/`, `out/`, `node_modules/` folders.

#### Lint tests

`npm run test-lint` is used to run JavaScript lint tests. It detects the coding style issues. ESLint rules are defined in `.eslintrc.js` file.

`node_modules/eslint/bin/eslint.js --fix src/` can be run to fix lint errors.

#### Code Coverage

To see code coverage report, run `npm run test`.

The current code coverage for the tests are following:

--------------------------|----------|----------|----------|----------|-------------------|
File                      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------|----------|----------|----------|----------|-------------------|
All files                 |    76.06 |     45.7 |    85.54 |    76.24 |                   |
 ParkingLot               |      100 |      100 |      100 |      100 |                   |
  .eslintrc.js            |      100 |      100 |      100 |      100 |                   |
 ParkingLot/scripts       |    85.59 |       60 |    89.13 |    85.59 |                   |
  test-lint.js            |      100 |      100 |      100 |      100 |                   |
  test-system.js          |    87.34 |       25 |    86.11 |    87.34 |... 09,111,112,115 |
  test.js                 |       72 |       50 |      100 |       72 |... 26,27,36,37,44 |
 ParkingLot/scripts/utils |      100 |      100 |      100 |      100 |                   |
  data.js                 |      100 |      100 |      100 |      100 |                   |
  infra.js                |      100 |      100 |      100 |      100 |                   |
 ParkingLot/src/modules   |    56.89 |    42.68 |    61.11 |    55.84 |                   |
  bike.js                 |       75 |        0 |       50 |       75 |                19 |
  bus.js                  |       25 |        0 |        0 |       25 |            8,9,19 |
  car.js                  |       75 |        0 |       50 |       75 |                19 |
  parkingLot.js           |    56.77 |    44.37 |       75 |    55.63 |... 97,298,301,304 |
 ParkingLot/tests         |    98.65 |       50 |      100 |    98.65 |                   |
  specs.js                |    98.65 |       50 |      100 |    98.65 |                14 |
--------------------------|----------|----------|----------|----------|-------------------|

You can see the code-coverage report in terminal as well as detailed HTML report inside `coverage/` folder.
Go to `coverage/` folder and open `index.html`.

## Build Script

`npm run build` will build the executable(console application) inside `bin/` folder which can be opened by double clicking on it.
Make sure you've already done with `npm install`, if not, please install dependencies first. Please refer [this](#explained) section for the same.

## Screenshots

Please go to `screenshots/` folder to find screenshots of running **Parking Lot** console application. 

## TL; DR

Here's the **cheat sheet** for you!

Open terminal and type the following:

1. `cd parking_lot` : Navigates to the `parking_lot` root folder.

2. `npm install` : Installs all the dependencies.

3. `npm run start` : Starts the console application in interactive mode.

5. `npm run test-unit` : Runs all the unit tests. If find any error then run `npm install -g mocha`

7. `npm run test-lint` : Runs lint test.

8. `npm run help` : Displays all supported user commands.

9. `node src/index.js data/input.txt` : Runs the application in file mode.
