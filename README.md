# Layered Testing Workshop

This workshop requires [node.js](https://nodejs.org/en/download/).

Once node is installed you should be able to run 

```npm install --no-optional```

from the layered-testing directory to install required packages for running tests.

You can then run tests using

```npm run test```

You should then see an output telling you the tests have passed:

```
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
