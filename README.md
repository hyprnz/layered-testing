# Layered Testing Workshop

This workshop requires [node.js](https://nodejs.org/en/download/). You should have at least version 10.14.2. Later versions are fine, too.

To confirm that you have the correct minimum versions installed, use these commands in a terminal, e.g. PowerShell or Bash:

```node -v```

This prints the version. This should be at least 10.14.2. Next confirm the version of npm that you have installed. `npm` is the node
package manager and is included in `node.js`. Execute the following command:

```npm -v```

This prints the version. This should be at least 6.9.0. Later versions are fine, too.

Once you have `node.js` installed and confirmed that you have the minimum requirements, clone this repository. Then
open a terminal window in the local clone, i.e. in the directory `layered-testing`. In the terminal, you should be
able to execute

```npm ci```

to install required packages for running tests. This may take some time depending on the speed of your internet connection.

Once the command completes you can execute the tests using

```npm run test```

You should then see an output similar to the following confirming the tests have passed:

```bash
> layered-testing@1.0.0 test C:\projects\hypr\workshops\layered-testing
> npm run clean && npm run compile && npm run retest


> layered-testing@1.0.0 clean C:\projects\hypr\workshops\layered-testing
> rimraf dist/**


> layered-testing@1.0.0 compile C:\projects\hypr\workshops\layered-testing
> tsc -p .


> layered-testing@1.0.0 retest C:\projects\hypr\workshops\layered-testing
> npm run retest:micro && npm run retest:integration


> layered-testing@1.0.0 retest:micro C:\projects\hypr\workshops\layered-testing
> mocha --exit "./dist/src/**/*.micro.js"



  LegacyCalculator
    calculate
      √ empty
      √ with one date
      √ with many dates

  LegacyCalculator
    calculate
      √ empty
      √ with one date
      √ with many dates

  DateTime
    oneWeek
      √ one week later
    withinOneWeekFromStart
      √ no dates
      √ same date
      √ just after now
      √ exactly one week later
      √ more than one week later
      √ with many dates

  LegacyCalculator mock example
    calculate
      √ make

  LegacyCalculator fake example (to be completed)
    calculate
      √ make

  PlannedStartMaker
    make
      √ empty
      √ with one valid date in second week
    count
      √ empty
      √ with one valid date in second week
      √ with one valid date in first and second week


  20 passing (60ms)


> layered-testing@1.0.0 retest:integration C:\projects\hypr\workshops\layered-testing
> mocha --exit "./dist/src/**/*.integration.js"



  LegacyCalculator integration
    calculate
      √ empty
      √ with one date
      √ with many dates


  3 passing (11ms)
```
